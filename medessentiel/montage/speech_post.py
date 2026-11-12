#!/usr/bin/env python3
"""Convertit un résultat create_speech_without_player (fichier JSON) en wav + srt + words.json.
Usage: speech_post.py <result.txt> <outdir> <epNN>"""
import json, re, subprocess, sys
fn, out, ep = sys.argv[1:4]
def ts(t):
    h=int(t//3600);m=int(t%3600//60);s=t%60
    return f'{h:02d}:{m:02d}:{int(s):02d},{int(round((s-int(s))*1000)):03d}'
d=json.load(open(fn,encoding='utf-8'))
subprocess.run(['curl','-sS','-m','120','-o',f'{out}/{ep}.wav',d['audio_url']],check=True)
words=d['original_words']; cues=[]; cur=[]
for i,w in enumerate(words):
    cur.append(w); txt=w['text']
    nxt=words[i+1] if i+1<len(words) else None
    gap=(nxt['start_time']-w['end_time']) if nxt else 9
    if len(cur)>=7 or re.search(r'[\.\?\!:;]$',txt) or gap>0.45 or (len(cur)>=4 and txt.endswith(',')):
        cues.append(cur); cur=[]
if cur: cues.append(cur)
with open(f'{out}/{ep}.srt','w',encoding='utf-8') as f:
    for n,c in enumerate(cues,1):
        f.write(f"{n}\n{ts(c[0]['start_time'])} --> {ts(c[-1]['end_time']+0.05)}\n{' '.join(x['text'] for x in c)}\n\n")
json.dump([(w['text'],w['start_time'],w['end_time']) for w in words],open(f'{out}/{ep}_words.json','w'))
print(ep,'durée',round(d['duration'],2),'mots',len(words),'cues',len(cues))
