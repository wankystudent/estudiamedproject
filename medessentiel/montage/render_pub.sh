#!/usr/bin/env bash
# Re-rend les vidéos SANS numérotation interne, dans l'ordre de publication, puis applique la vitesse (si besoin) et vérifie la durée.
# Usage: render_pub.sh <scratchpad>  (lit ../publication/videos.json)
set -uo pipefail
S=$1; M=$(cd "$(dirname "$0")" && pwd); ROOT=$(dirname "$M"); mkdir -p $S/pub
python3 - "$ROOT/publication/videos.json" > $S/pub/queue.txt <<'PY'
import json,sys
rows=json.load(open(sys.argv[1],encoding='utf-8'))
for r in sorted([r for r in rows if r.get('date') and r['ep']<=17],key=lambda r:(r['date'],r['heure_AST'])):
    print(r['vid'],f"{r['ep']:02d}",r['vitesse'])
PY
# 1) reconstruire les projets (scènes sans numéro)
for ep in 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16; do $M/build_hf_all.sh $S $ep > $S/pub/build_$ep.log 2>&1; done
BUILDER=hf_build_light.mjs PROJ=hyperframes_cenit $M/build_hf_all.sh $S 17 > $S/pub/build_17.log 2>&1
# 2) rendre
while read vid ep f; do
  out=$S/pub/$vid.mp4; [[ -s $out ]] && continue
  if [[ $ep == 17 ]]; then P=$ROOT/hyperframes_cenit/ep17; else P=$ROOT/hyperframes/ep$ep; fi
  echo "== $vid ep$ep $(date +%H:%M:%S)"
  (cd $P && npx -y hyperframes@0.9.34 render -f 24 --crf 22 -o $S/pub/raw_$ep.mp4 > $S/pub/render_$vid.log 2>&1) || { echo "$vid RENDER FAIL"; continue; }
  if [[ $f == 1.0 ]]; then mv $S/pub/raw_$ep.mp4 $out; else
    ffmpeg -v error -y -i $S/pub/raw_$ep.mp4 -filter_complex "[0:v]setpts=PTS/$f[v];[0:a]atempo=$f[a]" -map "[v]" -map "[a]" -c:v libx264 -crf 20 -preset veryfast -pix_fmt yuv420p -c:a aac -b:a 160k -movflags +faststart $out && rm -f $S/pub/raw_$ep.mp4
  fi
  echo "$vid done $(ffprobe -v error -show_entries format=duration -of csv=p=0 $out)"
done < $S/pub/queue.txt
echo ALLDONE
