#!/usr/bin/env bash
# Montage ép. 1 : fonds de scène (PNG) + avatar HeyGen brut + sous-titres .srt -> MP4 1080p
# Usage: build.sh <scenes_dir> <raw.mp4> <subs.srt> <out.mp4>
set -euo pipefail
SC=$1; RAW=$2; SRT=$3; OUT=$4
# scène:début:fin (s) — minutages issus du .srt HeyGen
SCENES="s01:0:10.0 s02:10.0:20.2 s03:20.2:39.2 s04:39.2:51.1 s05:51.1:57.8 s06:57.8:66.0 s07:66.0:75.8 s08:75.8:85.5 s09:85.5:101.5 s10:101.5:120.0 s11:120.0:130.64"
FULL="s01 s02 s11"
inputs=(); fc=""; i=0; concat=""
for sc in $SCENES; do
  IFS=: read n a b <<<"$sc"; d=$(python3 -c "print(round($b-$a,3))")
  inputs+=(-loop 1 -framerate 25 -t "$d" -i "$SC/$n.png")
  fc+="[$i:v]format=yuv420p,fade=t=in:st=0:d=0.45:color=0x0B2545[v$i];"
  concat+="[v$i]"; i=$((i+1))
done
inputs+=(-i "$RAW")
fc+="${concat}concat=n=$i:v=1:a=0[bg];"
# enable windows
full_en=""; side_en=""
for sc in $SCENES; do
  IFS=: read n a b <<<"$sc"
  e="between(t\,$a\,$b)"
  if [[ " $FULL " == *" $n "* ]]; then full_en+="${full_en:++}$e"; else side_en+="${side_en:++}$e"; fi
done
fc+="[$i:v]crop=1012:1080:454:0,split=2[c1][c2];"
fc+="[c2]scale=740:790[side];"
fc+="[bg][c1]overlay=454:0:enable='$full_en'[t1];"
fc+="[t1]drawbox=x=64:y=114:w=752:h=802:color=0x13A8A8:t=6:enable='$side_en'[t2];"
fc+="[t2][side]overlay=70:120:enable='$side_en'[t3];"
fc+="[t3]subtitles=$SRT:original_size=1920x1080:force_style='FontName=Inter,FontSize=12,Bold=1,PrimaryColour=&HFFFFFF&,OutlineColour=&HE0200B0B&,BorderStyle=3,Outline=4,Shadow=0,Alignment=2,MarginV=14'[vout]"
ffmpeg -v error -y "${inputs[@]}" -filter_complex "$fc" -map "[vout]" -map "$i:a" -c:v libx264 -preset veryfast -crf 20 -pix_fmt yuv420p -c:a aac -b:a 160k -shortest -movflags +faststart "$OUT"
