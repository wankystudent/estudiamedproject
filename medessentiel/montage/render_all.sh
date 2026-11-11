#!/usr/bin/env bash
# Rend en série les projets HyperFrames (24 i/s, CRF 22) vers <scratchpad>/hf_final/epXX.mp4.
# Usage: render_all.sh <scratchpad> ép [ép ...]
set -uo pipefail
S=$1; shift
ROOT=$(cd "$(dirname "$0")/.." && pwd)
mkdir -p $S/hf_final
for ep in "$@"; do
  out=$S/hf_final/ep$ep.mp4
  [[ -s $out ]] && { echo "ep$ep déjà rendu"; continue; }
  echo "== ep$ep $(date -u +%H:%M:%S)"
  (cd $ROOT/hyperframes/ep$ep && npx -y hyperframes@0.9.34 render -f 24 --crf 22 -o $out > $S/hf_final/render_ep$ep.log 2>&1)
  echo "ep$ep exit=$? $(ls -la $out 2>/dev/null | awk '{print $5}')"
done
echo ALLDONE
