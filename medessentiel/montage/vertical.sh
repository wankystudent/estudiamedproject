#!/usr/bin/env bash
# Version verticale 9:16 (1080x1920) pour Facebook Reels / Stories, à partir des fonds de scène 16:9.
# Usage: vertical.sh <scenes_dir> <raw.mp4> <subs.srt> <out.mp4> "<scene:début:fin ...>" "<scènes plein cadre>"
set -euo pipefail
SC=$1; RAW=$2; SRT=$3; OUT=$4; SCENES=$5; FULL=$6
TMP=$(mktemp -d)
inputs=(); fc=""; i=0; concat=""; full_en=""; side_en=""
for sc in $SCENES; do
  IFS=: read n a b <<<"$sc"; d=$(python3 -c "print(round($b-$a,3))")
  if [[ " $FULL " == *" $n "* ]]; then
    # texte des deux colonnes latérales empilé sous l'avatar plein cadre
    ffmpeg -v error -y -i "$SC/$n.png" -filter_complex \
      "color=c=0x0B2545:s=1080x1920[bg];[0:v]split=2[l][r];[l]crop=454:500:0:220[lc];[r]crop=454:500:1466:220[rc];[lc][rc]hstack,scale=1080:-1[txt];[bg][txt]overlay=0:1165" \
      -frames:v 1 "$TMP/$n.png"
    full_en+="${full_en:++}between(t\,$a\,$b)"
  else
    ffmpeg -v error -y -i "$SC/$n.png" -filter_complex \
      "color=c=0x0B2545:s=1080x1920[bg];[0:v]crop=1010:810:870:110,scale=1080:-1[card];[bg][card]overlay=0:862" \
      -frames:v 1 "$TMP/$n.png"
    side_en+="${side_en:++}between(t\,$a\,$b)"
  fi
  inputs+=(-loop 1 -framerate 25 -t "$d" -i "$TMP/$n.png")
  fc+="[$i:v]format=yuv420p,fade=t=in:st=0:d=0.45:color=0x0B2545[v$i];"
  concat+="[v$i]"; i=$((i+1))
done
inputs+=(-i "$RAW")
fc+="${concat}concat=n=$i:v=1:a=0[bg];"
fc+="[$i:v]split=2[a1][a2];"
fc+="[a1]crop=1012:1080:454:0,scale=1080:1152[avf];"
fc+="[a2]crop=1012:800:454:0,scale=1080:854[avs];"
fc+="[bg][avf]overlay=0:0:enable='$full_en'[t1];"
fc+="[t1][avs]overlay=0:0:enable='$side_en'[t2];"
fc+="[t2]drawtext=fontfile=/usr/share/fonts/opentype/inter/Inter-Bold.otf:text='MedEssentiel':fontcolor=white:fontsize=40:box=1:boxcolor=0x0B2545@0.85:boxborderw=14:x=36:y=36[t3];"
fc+="[t3]subtitles=$SRT:original_size=1080x1920:force_style='FontName=Inter,FontSize=7,Bold=1,PrimaryColour=&HFFFFFF&,OutlineColour=&HE0200B0B&,BorderStyle=3,Outline=4,Shadow=0,Alignment=2,MarginL=50,MarginR=50,MarginV=14'[vout]"
ffmpeg -v error -y "${inputs[@]}" -filter_complex "$fc" -map "[vout]" -map "$i:a" -c:v libx264 -preset veryfast -crf 21 -pix_fmt yuv420p -c:a aac -b:a 160k -shortest -movflags +faststart "$OUT"
rm -rf "$TMP"
