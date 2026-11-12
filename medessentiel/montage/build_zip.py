#!/usr/bin/env python3
"""Assemble le ZIP MedEssentiel par catégories.
Usage: build_zip.py <scratchpad> <sortie.zip>
Contenu : vidéos animées verticales (hf_final/epXX.mp4), sous-titres, scripts, textes Facebook, sources, index."""
import os, re, shutil, sys, zipfile
S, OUT = sys.argv[1:3]
ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
CATS = [
 ('1_URGENCES', 'Urgences — signes d\'alerte (tout public et soignants)', [(1, 'Grossesse_extra-uterine_5_signes_d_alerte'), (4, 'AVC_signes_FAST'), (6, 'Appendicite'), (10, 'Embolie_pulmonaire'), (13, 'Preeclampsie'), (15, 'Infarctus_du_myocarde')]),
 ('2_CLINIQUE_etudiants', 'Clinique — étudiants en médecine et soignants', [(3, 'Placenta_accreta'), (5, 'NFS_comprendre_les_resultats'), (9, 'Constantes_vitales_en_stage'), (11, 'Les_12_nerfs_craniens')]),
 ('3_GRAND_PUBLIC', 'Grand public — comprendre son corps', [(2, 'Comment_fonctionne_le_coeur'), (12, 'Etapes_de_l_accouchement')]),
 ('4_PREVENTION', 'Prévention — maladies à connaître', [(7, 'Les_reins'), (8, 'Diabete_pourquoi_la_glycemie_augmente'), (14, 'Hypertension_arterielle'), (16, 'Triglycerides_eleves'), (17, 'Aliments_avant_6_mois')]),
]
def srt(ep):
    p = f'{ROOT}/narration/ep{ep:02d}.srt'
    return p if os.path.exists(p) else f'{S}/dl/ep{ep:02d}.srt'
def script(ep):
    for n in ('EPISODE.md', 'SCRIPT.md', 'DOSSIER.md'):
        p = f'{ROOT}/episodes/ep{ep:02d}/{n}'
        if os.path.exists(p): return p
root = 'MedEssentiel_Saison1'
idx = ['MEDESSENTIEL — SAISON 1 (brouillons)', 'La médecine, clairement expliquée.', '', 'Format : vidéos verticales 9:16 (1080x1920), animées avec HyperFrames, sans avatar, voix HeyGen de l\'auteur.', '',
       'IMPORTANT : brouillons non publiés. À faire avant publication : relecture médicale des scripts, vérification des sources (texte intégral), choix du numéro d\'urgence selon le pays, vérification du nom de marque.', '']
missing = []
with zipfile.ZipFile(OUT, 'w', zipfile.ZIP_STORED) as z:
    for folder, label, eps in CATS:
        idx.append(f'{folder} — {label}')
        for ep, name in eps:
            base = f'{root}/{folder}/{ep:02d}_{name}'
            vid = f'{S}/hf_final/ep{ep:02d}.mp4'
            if os.path.exists(vid): z.write(vid, base + '.mp4'); idx.append(f'  {ep:02d}  {name.replace("_", " ")}  ->  {os.path.basename(base)}.mp4')
            else: missing.append(ep); idx.append(f'  {ep:02d}  {name.replace("_", " ")}  (vidéo animée non disponible)')
            if os.path.exists(srt(ep)): z.write(srt(ep), base + '.srt')
            if script(ep): z.write(script(ep), base + '_script_et_sources.md')
        idx.append('')
    for f, n in ((f'{ROOT}/facebook/POSTS.md', 'Textes_Facebook.md'), (f'{ROOT}/SOURCES.md', 'Sources.md'), (f'{ROOT}/PLAN_EDITORIAL.md', 'Plan_editorial.md')):
        if os.path.exists(f): z.write(f, f'{root}/{n}')
    for f, n in ((f'{ROOT}/brand/logo.jpg', 'Logo_MedEssentiel.jpg'),):
        z.write(f, f'{root}/{n}')
    z.writestr(f'{root}/LISEZ-MOI.txt', '\n'.join(idx) + '\n')
print('ZIP', OUT, round(os.path.getsize(OUT) / 1e6, 1), 'Mo ; vidéos manquantes :', missing)
