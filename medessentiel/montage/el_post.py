#!/usr/bin/env python3
"""MP3 ElevenLabs + texte -> wav + words.json (timings estimés : bornes de phrases calées sur les silences détectés,
mots répartis proportionnellement aux caractères). Usage: el_post.py <in.mp3> <texte.txt> <out_prefix>"""
import json, re, subprocess, sys
mp3, txt, pre = sys.argv[1:4]
subprocess.run(['ffmpeg','-v','error','-y','-i',mp3,'-ar','44100','-ac','1',pre+'.wav'],check=True)
D=float(subprocess.run(['ffprobe','-v','error','-show_entries','format=duration','-of','csv=p=0',pre+'.wav'],capture_output=True,text=True).stdout)
r=subprocess.run(['ffmpeg','-v','info','-i',pre+'.wav','-af','silencedetect=noise=-38dB:d=0.16','-f','null','-'],capture_output=True,text=True).stderr
st=[float(x) for x in re.findall(r'silence_start: ([\d.]+)',r)]; en=[float(x) for x in re.findall(r'silence_end: ([\d.]+)',r)]
sil=[(a,b) for a,b in zip(st,en) if a>0.05 and b<D-0.05]
text=open(txt,encoding='utf-8').read().strip()
sents=[s for s in re.split(r'(?<=[\.\?\!:])\s+',text.replace('\n',' ')) if s]
# début/fin de parole
lead=0.0; tail=D
try:
    if st and st[0]<0.05: lead=en[0]
    if len(st)>len(en): tail=st[-1]
except: pass
tot=sum(len(s) for s in sents)
cum=0; bounds=[]
used=-1
for s in sents[:-1]:
    cum+=len(s); exp=lead+(tail-lead)*cum/tot
    best=None;bd=9e9
    for i,(a,b) in enumerate(sil):
        if i<=used: continue
        d=abs((a+b)/2-exp)
        if d<bd and d<3.0: best=i;bd=d
    if best is None: bounds.append((exp-0.05,exp+0.05))
    else: bounds.append(sil[best]); used=best
words=[]; start=lead
for k,s in enumerate(sents):
    end=bounds[k][0] if k<len(bounds) else tail
    ws=s.split(); L=sum(len(w) for w in ws); t=start
    for w in ws:
        d=(end-start)*len(w)/L; words.append((w,round(t,3),round(t+d*0.95,3))); t+=d
    if k<len(bounds): start=bounds[k][1]
json.dump(words,open(pre+'_words.json','w'),ensure_ascii=False)
print(pre,'durée',round(D,2),'phrases',len(sents),'silences',len(sil),'mots',len(words))
