#!/bin/bash
# sync-medical-skills.sh
# Re-sync OpenClaw Medical Skills from GitHub to the shared drive.
# Run on mini-lares anytime to pull latest skill updates.
#
# Usage: bash sync-medical-skills.sh [SHARE_ROOT]

set -euo pipefail

# Auto-detect share root or use argument
SHARE_ROOT="${1:-}"
if [ -z "$SHARE_ROOT" ]; then
    for vol in /Volumes/*; do
        if [ -d "$vol/lares-share" ]; then
            SHARE_ROOT="$vol/lares-share"
            break
        fi
    done
fi

if [ -z "$SHARE_ROOT" ] || [ ! -d "$SHARE_ROOT" ]; then
    echo "ERROR: Could not find lares-share directory."
    echo "Usage: bash sync-medical-skills.sh /Volumes/YourDrive/lares-share"
    exit 1
fi

echo "==> Share root: $SHARE_ROOT"

OPENCLAW_REPO="https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills.git"
OPENCLAW_CACHE="$SHARE_ROOT/.cache/OpenClaw-Medical-Skills"

mkdir -p "$SHARE_ROOT/.cache"
mkdir -p "$SHARE_ROOT/skills/medical"

if [ -d "$OPENCLAW_CACHE/.git" ]; then
    echo "==> Pulling latest from OpenClaw..."
    git -C "$OPENCLAW_CACHE" pull --ff-only
else
    echo "==> Cloning OpenClaw Medical Skills..."
    git clone "$OPENCLAW_REPO" "$OPENCLAW_CACHE"
fi

# Sync skills
if [ -d "$OPENCLAW_CACHE/skills" ]; then
    cp -r "$OPENCLAW_CACHE/skills/"* "$SHARE_ROOT/skills/medical/" 2>/dev/null || true
else
    find "$OPENCLAW_CACHE" -name "*.md" -o -name "*.yaml" -o -name "*.json" | while read -r f; do
        cp "$f" "$SHARE_ROOT/skills/medical/" 2>/dev/null || true
    done
fi

echo "==> Medical skills synced to $SHARE_ROOT/skills/medical/"
echo "    Files:"
ls -la "$SHARE_ROOT/skills/medical/" | head -20
