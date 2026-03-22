#!/bin/bash
# diagnose-share.sh
# Run on mini-lares to diagnose Tailscale Drive sharing issues.
# Outputs diagnostic info to help debug "slash works sometimes" problems.
#
# Usage: bash diagnose-share.sh

set -uo pipefail

echo "=== System Info ==="
sw_vers 2>/dev/null || uname -a
echo ""

echo "=== Tailscale Status ==="
tailscale status 2>/dev/null || echo "tailscale not found or not running"
echo ""

echo "=== Tailscale Drive Shares ==="
tailscale drive share list 2>/dev/null || echo "No shares configured or tailscale drive not available"
echo ""

echo "=== Mounted Volumes ==="
ls -la /Volumes/
echo ""

echo "=== Disk Info (external/USB) ==="
diskutil list external 2>/dev/null || diskutil list 2>/dev/null | head -40
echo ""

echo "=== SanDisk Detection ==="
for vol in /Volumes/*; do
    info=$(diskutil info "$vol" 2>/dev/null)
    if echo "$info" | grep -qi "sandisk\|san disk"; then
        echo "FOUND SanDisk: $vol"
        echo "$info" | grep -E "Device|Disk Size|Volume Name|File System|Mount Point"
        echo ""
    fi
done

echo "=== Large Volumes (>1TB) ==="
df -h | grep -E "^/dev" | awk '$2 ~ /T/ {print}'
echo ""

echo "=== Tailscale Drive Mount (client side) ==="
ls -la /Volumes/Tailscale/ 2>/dev/null || echo "No Tailscale drive mount found"
echo ""

echo "=== Network Interfaces (Tailscale) ==="
ifconfig 2>/dev/null | grep -A2 "utun" | head -20
echo ""

echo "=== MagicDNS Test ==="
ping -c 1 -W 2 mini-lares 2>/dev/null && echo "MagicDNS: OK" || echo "MagicDNS: FAILED (may need full hostname like mini-lares.tail-xxx.ts.net)"
echo ""

echo "=== Common Slash Issues ==="
echo "The 'slash works sometimes' problem is typically caused by:"
echo "  1. Tailscale Drive not enabled in admin console (admin.tailscale.com > DNS > Tailscale Drive)"
echo "  2. The share path having spaces in the volume name (use quotes or symlink)"
echo "  3. macOS Gatekeeper blocking tailscaled from accessing the external drive"
echo "     Fix: System Settings > Privacy & Security > Full Disk Access > add tailscaled"
echo "  4. The SanDisk drive sleeping/unmounting (Energy Saver settings)"
echo "     Fix: System Settings > Energy Saver > Prevent automatic sleeping when display is off"
echo "  5. tailscaled restarting and losing share config"
echo "     Fix: Ensure share persists with 'tailscale drive share list' after reboot"
echo ""
