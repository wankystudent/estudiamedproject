#!/usr/bin/env python3
"""Pipeline d'un nouvel épisode après génération ElevenLabs.
Usage: new_ep.py NN '<json: {"urls":[u1,u2,u3],"ph":"s01=x s02=Bienvenue_sur ...","scenes":["s01=x",...]}>' '<spec 3D JSON>'
Étapes : téléchargement MP3 -> el_post -> merge -> DUR/PH dans build_hf_all.sh -> build HyperFrames (cenit) -> 3D."""
import json, os, re, subprocess, sys
nn, cfg, spec3d = sys.argv[1], json.loads(sys.argv[2]), sys.argv[3]
M = os.path.dirname(os.path.abspath(__file__)); ROOT = os.path.dirname(M)
S = '/tmp/claude-0/-home-user-estudiamedproject/16b98a64-396b-5e63-b8b5-fc0723bed50e/scratchpad'
E = f'{ROOT}/episodes/ep{nn}'; os.makedirs(f'{E}/el', exist_ok=True)
for i, u in enumerate(cfg['urls'], 1):
    subprocess.run(['curl', '-sS', '-m', '90', '-o', f'{E}/el/p{i}.mp3', u], check=True)
    subprocess.run(['python3', f'{M}/el_post.py', f'{E}/el/p{i}.mp3', f'{E}/p{i}.txt', f'{E}/el/p{i}'], check=True)
parts = [f'p{i}' for i in range(1, len(cfg['urls']) + 1)]
subprocess.run(['python3', f'{M}/merge_speech.py', f'{E}/el', f'ep{nn}'] + parts, check=True)
for ext in ('wav', 'srt'): subprocess.run(['cp', f'{E}/el/ep{nn}.{ext}', f'{S}/speech/'], check=True)
subprocess.run(['cp', f'{E}/el/ep{nn}_words.json', f'{S}/speech/'], check=True)
dur = subprocess.run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', f'{S}/speech/ep{nn}.wav'], capture_output=True, text=True).stdout.strip()[:6]
p = f'{M}/build_hf_all.sh'; s = open(p).read()
s = re.sub(r' \)\n', f' [{nn}]={dur} )\n', s, count=1) if f'[{nn}]=' not in s else s
ph = "PH[%s]='%s'\n" % (nn, cfg['ph'].replace("'", "'\"'\"'"))
if f'PH[{nn}]=' not in s:
    i = s.index('PH[%d]=' % (int(nn) - 1)); j = s.index('\n', i) + 1; s = s[:j] + ph + s[j:]
open(p, 'w').write(s)
env = dict(os.environ, BUILDER='hf_build_light.mjs', PROJ='hyperframes_cenit')
subprocess.run([f'{M}/build_hf_all.sh', S, nn], check=True, env=env)
subprocess.run(['node', f'{M}/three3d.mjs', f'{ROOT}/hyperframes_cenit/ep{nn}', spec3d], check=True)
print('OK ep', nn, 'durée', dur)
