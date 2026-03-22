#!/bin/bash
# setup-tailscale-share.sh
# Run this on mini-lares (Mac Mini, macOS) to configure Tailscale Drive sharing
# for the 4TB SanDisk drive.
#
# Usage: sudo bash setup-tailscale-share.sh

set -euo pipefail

SHARE_NAME="lares-work"

# --- Detect the SanDisk 4TB drive ---
echo "==> Detecting SanDisk drive..."

SANDISK_VOL=""
for vol in /Volumes/*; do
    if diskutil info "$vol" 2>/dev/null | grep -qi "sandisk"; then
        size=$(diskutil info "$vol" | grep "Disk Size" | head -1)
        echo "    Found SanDisk volume: $vol ($size)"
        SANDISK_VOL="$vol"
        break
    fi
done

# Fallback: check by size if brand detection fails
if [ -z "$SANDISK_VOL" ]; then
    echo "    Brand match failed, checking by size (>3TB)..."
    for vol in /Volumes/*; do
        size_bytes=$(diskutil info "$vol" 2>/dev/null | grep "Disk Size" | grep -oE '[0-9]+' | head -1)
        if [ -n "$size_bytes" ] && [ "$size_bytes" -gt 3000000000000 ] 2>/dev/null; then
            echo "    Found large volume: $vol"
            SANDISK_VOL="$vol"
            break
        fi
    done
fi

if [ -z "$SANDISK_VOL" ]; then
    echo "ERROR: Could not auto-detect SanDisk 4TB drive."
    echo "Available volumes:"
    ls -1 /Volumes/
    echo ""
    echo "Run manually with:"
    echo "  SANDISK_VOL=/Volumes/YourDriveName bash $0"
    exit 1
fi

echo "==> Using volume: $SANDISK_VOL"

# --- Create directory structure ---
echo "==> Creating shared directory structure..."

SHARE_ROOT="$SANDISK_VOL/lares-share"

mkdir -p "$SHARE_ROOT/reports"
mkdir -p "$SHARE_ROOT/reports/artifacts"
mkdir -p "$SHARE_ROOT/skills/medical"
mkdir -p "$SHARE_ROOT/skills/clinical"
mkdir -p "$SHARE_ROOT/skills/common"
mkdir -p "$SHARE_ROOT/work-product"

# Create default skills.md if it doesn't exist
if [ ! -f "$SHARE_ROOT/skills/skills.md" ]; then
    cat > "$SHARE_ROOT/skills/skills.md" << 'SKILLS_EOF'
# Shared Skills

Common skills and capabilities shared across Lares agents and team members.

## Available Skills

<!-- Add shared skill definitions here -->
SKILLS_EOF
    echo "    Created default skills.md"
fi

# --- Sync OpenClaw Medical Skills ---
echo "==> Syncing OpenClaw Medical Skills..."

OPENCLAW_REPO="https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills.git"
OPENCLAW_CACHE="$SHARE_ROOT/.cache/OpenClaw-Medical-Skills"

mkdir -p "$SHARE_ROOT/.cache"

if [ -d "$OPENCLAW_CACHE/.git" ]; then
    echo "    Updating existing clone..."
    git -C "$OPENCLAW_CACHE" pull --ff-only 2>/dev/null || {
        echo "    Pull failed, re-cloning..."
        rm -rf "$OPENCLAW_CACHE"
        git clone "$OPENCLAW_REPO" "$OPENCLAW_CACHE"
    }
else
    echo "    Cloning OpenClaw Medical Skills..."
    git clone "$OPENCLAW_REPO" "$OPENCLAW_CACHE"
fi

if [ -d "$OPENCLAW_CACHE/skills" ]; then
    cp -r "$OPENCLAW_CACHE/skills/"* "$SHARE_ROOT/skills/medical/" 2>/dev/null || true
    echo "    Medical skills synced to $SHARE_ROOT/skills/medical/"
else
    # Some repos use different structures — copy what's available
    find "$OPENCLAW_CACHE" -name "*.md" -o -name "*.yaml" -o -name "*.json" | while read -r f; do
        cp "$f" "$SHARE_ROOT/skills/medical/" 2>/dev/null || true
    done
    echo "    Copied available skill files to $SHARE_ROOT/skills/medical/"
fi

echo "    To re-sync later, run: bash sync-medical-skills.sh"

# Create a README for the share
cat > "$SHARE_ROOT/README.md" << 'README_EOF'
# Lares Shared Drive

Hosted on mini-lares 4TB SanDisk via Tailscale Drive.

## Structure

```
lares-share/
├── reports/
│   └── artifacts/        # Report artifacts (PDFs, exports, etc.)
├── skills/
│   ├── skills.md         # Skills registry/index
│   ├── medical/          # OpenClaw medical skills (auto-synced)
│   ├── clinical/         # Clinical workflow skills
│   └── common/           # Shared across all agents
└── work-product/         # Shared work output between agents/sessions
```

## Access

Via Tailscale Drive from any device on the tailnet:
- macOS Finder: Go > Connect to Server > `tailfs://mini-lares/lares-work`
- Auto-mount: `/Volumes/Tailscale/mini-lares/lares-work`
- Linux: Available at Tailscale drive mount point
README_EOF

echo "    Directory structure created at $SHARE_ROOT"

# --- Configure Tailscale Drive share ---
echo "==> Checking Tailscale status..."

if ! command -v tailscale &>/dev/null; then
    echo "ERROR: tailscale CLI not found. Install Tailscale first."
    exit 1
fi

TS_STATUS=$(tailscale status --json 2>/dev/null | grep -o '"Online":true' || true)
if [ -z "$TS_STATUS" ]; then
    echo "WARNING: Tailscale may not be connected. Continuing anyway..."
fi

# Remove existing share if present (idempotent)
tailscale drive share remove "$SHARE_NAME" 2>/dev/null || true

# Create the share
echo "==> Creating Tailscale Drive share '$SHARE_NAME' -> $SHARE_ROOT"
tailscale drive share "$SHARE_NAME" "$SHARE_ROOT"

echo "==> Verifying share..."
tailscale drive share list

# --- Set permissions ---
echo "==> Setting filesystem permissions..."
chmod -R 755 "$SHARE_ROOT"

echo ""
echo "============================================"
echo " Tailscale Drive share configured!"
echo "============================================"
echo ""
echo " Share name:  $SHARE_NAME"
echo " Local path:  $SHARE_ROOT"
echo ""
echo " Access from other devices on your tailnet:"
echo "   macOS:  tailfs://mini-lares/$SHARE_NAME"
echo "   Mount:  /Volumes/Tailscale/mini-lares/$SHARE_NAME"
echo ""
echo " Directory structure:"
echo "   $SHARE_ROOT/reports/artifacts/   - report artifacts"
echo "   $SHARE_ROOT/skills/skills.md    - skills registry"
echo "   $SHARE_ROOT/skills/medical/     - OpenClaw medical skills"
echo "   $SHARE_ROOT/skills/clinical/    - clinical workflow skills"
echo "   $SHARE_ROOT/skills/common/      - shared agent skills"
echo "   $SHARE_ROOT/work-product/       - common work output"
echo ""
