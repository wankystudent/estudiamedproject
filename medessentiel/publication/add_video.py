#!/usr/bin/env python3
"""Ajoute une entrée dans videos.json. Usage: add_video.py '<json>'"""
import json,sys
f='videos.json'; d=json.load(open(f,encoding='utf-8')); n=json.loads(sys.argv[1])
n.setdefault('vitesse',1.0); n.setdefault('plateformes','FB+YT')
for k in ('date','heure_AST','scheduled_at_utc','lien'): n.setdefault(k,'')
n.setdefault('statut_production','Rendu en cours'); n.setdefault('statut_miniature','À créer'); n.setdefault('statut_fb','Non programmée'); n.setdefault('statut_yt','Non programmée')
if not any(r['vid']==n['vid'] for r in d): d.append(n)
json.dump(d,open(f,'w',encoding='utf-8'),ensure_ascii=False,indent=1); print('ok',n['vid'])
