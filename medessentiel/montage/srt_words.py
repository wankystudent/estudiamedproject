#!/usr/bin/env python3
"""Approxime des minutages mot à mot à partir d'un .srt par phrases (répartition proportionnelle aux lettres).
Usage: srt_words.py <in.srt> <out.json>"""
import json, re, sys
src, out = sys.argv[1:3]
words = []
for b in open(src, encoding='utf-8').read().strip().split('\n\n'):
    l = b.split('\n')
    m = re.match(r'(\d+):(\d+):(\d+),(\d+) --> (\d+):(\d+):(\d+),(\d+)', l[1])
    a = int(m[1])*3600+int(m[2])*60+int(m[3])+int(m[4])/1000
    e = int(m[5])*3600+int(m[6])*60+int(m[7])+int(m[8])/1000
    ws = ' '.join(l[2:]).split()
    tot = sum(len(w)+1 for w in ws)
    t = a
    for w in ws:
        d = (e-a)*(len(w)+1)/tot
        words.append([re.sub(r'^[\.,;:!?«»"]+|[\.,;:!?«»"]+$', '', w) if False else w, round(t, 3), round(t+d*0.92, 3)])
        t += d
json.dump(words, open(out, 'w'), ensure_ascii=False)
print(out, len(words), 'mots')
