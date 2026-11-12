#!/usr/bin/env python3
"""Fusionne des parties de narration (pN.wav + pN_words.json) en ep.wav/_words.json/.srt avec une pause entre parties.
Usage: merge_speech.py <dir> <epNN> p1 p2 p3 ..."""
import json, re, subprocess, sys
d, ep, *parts = sys.argv[1:]
PAUSE = 0.45
off = 0.0; words = []; lst = []
def dur(f): return float(subprocess.run(['ffprobe','-v','error','-show_entries','format=duration','-of','csv=p=0',f],capture_output=True,text=True).stdout)
subprocess.run(['ffmpeg','-v','error','-y','-f','lavfi','-i','anullsrc=r=44100:cl=mono','-t',str(PAUSE),f'{d}/_pause.wav'],check=True)
for k,p in enumerate(parts):
    w = json.load(open(f'{d}/{p}_words.json'))
    D = dur(f'{d}/{p}.wav')
    for t,a,b in w: words.append((t,a+off,b+off))
    lst.append(f"file '{d}/{p}.wav'")
    off += D
    if k < len(parts)-1: lst.append(f"file '{d}/_pause.wav'"); off += PAUSE
open(f'{d}/_list.txt','w').write('\n'.join(lst))
subprocess.run(['ffmpeg','-v','error','-y','-f','concat','-safe','0','-i',f'{d}/_list.txt','-ar','44100','-ac','1',f'{d}/{ep}.wav'],check=True)
json.dump(words,open(f'{d}/{ep}_words.json','w'))
def ts(t):
    h=int(t//3600);m=int(t%3600//60);s=t%60
    return f'{h:02d}:{m:02d}:{int(s):02d},{int(round((s-int(s))*1000)):03d}'
cues=[];cur=[]
for i,(t,a,b) in enumerate(words):
    cur.append((t,a,b))
    gap=(words[i+1][1]-b) if i+1<len(words) else 9
    if len(cur)>=7 or re.search(r'[\.\?\!:;]$',t) or gap>0.45 or (len(cur)>=4 and t.endswith(',')):
        cues.append(cur);cur=[]
if cur: cues.append(cur)
with open(f'{d}/{ep}.srt','w',encoding='utf-8') as f:
    for n,c in enumerate(cues,1):
        f.write(f"{n}\n{ts(c[0][1])} --> {ts(c[-1][2]+0.05)}\n{' '.join(x[0] for x in c)}\n\n")
print(ep,'durée',round(dur(f'{d}/{ep}.wav'),2),'mots',len(words),'cues',len(cues))
