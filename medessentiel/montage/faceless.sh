#!/usr/bin/env bash
# Vidéo verticale « sans avatar » : images (faceless_frames.mjs) + audio de la narration HeyGen + sous-titres incrustés.
# Usage: faceless.sh <frames_dir> <raw.mp4 (source audio)> <subs.srt> <out.mp4> "<scene:début:fin ...>"
set -euo pipefail
FR=$1; RAW=$2; SRT=$3; OUT=$4; SCENES=$5
inputs=(); fc=""; i=0; concat=""
for sc in $SCENES; do
  IFS=: read n a b <<<"$sc"; d=$(python3 -c "print(round($b-$a,3))")
  inputs+=(-loop 1 -framerate 25 -t "$d" -i "$FR/$n.png")
  fc+="[$i:v]format=yuv420p,fade=t=in:st=0:d=0.35:color=0x031634[v$i];"
  concat+="[v$i]"; i=$((i+1))
done
inputs+=(-i "$RAW")
fc+="${concat}concat=n=$i:v=1:a=0[bg];"
fc+="[bg]subtitles=$SRT:original_size=1080x1920:force_style='FontName=Inter,FontSize=8,Bold=1,PrimaryColour=&HFFFFFF&,OutlineColour=&H00301808&,BorderStyle=1,Outline=5,Shadow=0,Alignment=2,MarginL=70,MarginR=70,MarginV=60'[vout]"
ffmpeg -v error -y "${inputs[@]}" -filter_complex "$fc" -map "[vout]" -map "$i:a" -c:v libx264 -preset veryfast -crf 21 -pix_fmt yuv420p -c:a aac -b:a 160k -shortest -movflags +faststart "$OUT"
