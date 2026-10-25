#!/usr/bin/env python3
"""Calcule les minutages de scènes depuis un .srt HeyGen.
Usage: timing.py <srt> <durée_s> nom=phrase [nom=phrase ...]
La 1re scène commence à 0 ; chaque scène suivante commence au début du cue contenant la phrase.
Affiche la chaîne SCENES pour build.sh."""
import re, sys
srt, dur, *pairs = sys.argv[1:]
cues = []
for b in open(srt, encoding='utf-8').read().strip().split('\n\n'):
    l = b.split('\n')
    m = re.match(r'(\d+):(\d+):(\d+),(\d+) --> ', l[1])
    t = int(m[1])*3600 + int(m[2])*60 + int(m[3]) + int(m[4])/1000
    cues.append((t, ' '.join(l[2:])))
starts, pos = [], 0
for p in pairs:
    n, ph = p.split('=', 1)
    if not starts: starts.append((n, 0.0)); continue
    for i in range(pos, len(cues)):
        if ph.lower() in cues[i][1].lower():
            starts.append((n, max(cues[i][0]-0.1, 0))); pos = i; break
    else: sys.exit(f'phrase introuvable: {ph}')
out = []
for i, (n, a) in enumerate(starts):
    b = float(dur) if i == len(starts)-1 else starts[i+1][1]
    out.append(f'{n}:{a:.2f}:{b:.2f}')
print(' '.join(out))
