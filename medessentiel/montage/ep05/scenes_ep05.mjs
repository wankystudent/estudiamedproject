// Fonds de scène de l'épisode 5 (NFS). Usage: node scenes_ep05.mjs <outDir>
import { TEAL, RED, GREEN, brand, ico, I, item, hookScene, introScene, outroScene, render } from '../lib.mjs';
const BLUE = '#3B7DDD';

const cell = (c, kind) => `<svg width="120" height="120" viewBox="0 0 120 120">${kind === 'rbc'
  ? `<ellipse cx="60" cy="60" rx="46" ry="46" fill="${c}"/><ellipse cx="60" cy="60" rx="20" ry="20" fill="#fff" opacity=".45"/>`
  : kind === 'wbc'
  ? `<circle cx="60" cy="60" r="44" fill="${c}"/><circle cx="48" cy="52" r="14" fill="#fff" opacity=".5"/><circle cx="72" cy="68" r="12" fill="#fff" opacity=".5"/>`
  : `<g fill="${c}"><circle cx="35" cy="50" r="13"/><circle cx="68" cy="38" r="11"/><circle cx="82" cy="72" r="14"/><circle cx="48" cy="82" r="12"/></g>`}</svg>`;
const col = (kind, c, t, sub) => `<div style="flex:1;background:#fff;border:2px solid #dbe6f0;border-radius:24px;padding:26px 12px;text-align:center">${cell(c, kind)}<div style="font-size:34px;font-weight:900;margin-top:8px">${t}</div><div style="font-size:26px;font-weight:600;color:#4a5f7a;margin-top:6px">${sub}</div></div>`;
const rule = (n, t) => `<div class="row" style="margin:12px 0"><div style="width:56px;height:56px;border-radius:50%;background:${TEAL};color:#fff;font-weight:900;font-size:32px;display:grid;place-items:center;flex:none">${n}</div><div style="font-size:33px;font-weight:700">${t}</div></div>`;
const kv = (a, b, c = TEAL) => `<div class="pill" style="display:flex;justify-content:space-between;gap:20px;border-color:${c};font-size:30px;margin-top:14px"><span>${a}</span><span style="color:${c}">${b}</span></div>`;

const scenes = {
n01: hookScene(`Des lignes en gras<br>Des flèches<br>Des abréviations`, `Lire une NFS,<div style="color:#13A8A8;margin-top:12px">sans la sur-interpréter.</div>`),
n02: introScene(5, `La <span style="color:${TEAL}">NFS</span> : comprendre une prise de sang`),
n03: `${brand}<div class="card"><span class="chip">3 LIGNÉES</span><h1>Hémogramme</h1>
  <div style="display:flex;gap:18px;margin-top:10px">${col('rbc', '#D62839', 'Globules rouges', 'transportent l\'oxygène')}${col('wbc', '#7A5CC9', 'Globules blancs', 'défendent l\'organisme')}${col('plt', '#E8A33D', 'Plaquettes', 'coagulation')}</div></div>`,
n04: `${brand}<div class="card"><span class="chip">GLOBULES ROUGES</span><h1>Hémoglobine et VGM</h1>
  ${kv('Hémoglobine basse', 'Anémie')}<p class="sub" style="font-size:26px;margin-top:6px">Seuil selon l'âge, le sexe, la grossesse.</p>
  ${kv('VGM bas', 'carence en fer…', RED)}${kv('VGM élevé', 'B12 · folates…', RED)}${kv('Réticulocytes', 'la moelle répond-elle ?', BLUE)}</div>`,
n05: `${brand}<div class="card"><span class="chip">GLOBULES BLANCS</span><h1>4 à 10 G/L chez l'adulte</h1>
  <p class="sub" style="font-size:28px">Regarder la formule, en valeurs absolues.</p>
  ${kv('Polynucléaires neutrophiles ↑', 'infection bactérienne', RED)}${kv('Lymphocytes ↑', 'infections virales', BLUE)}${kv('Éosinophiles ↑', 'allergie · parasitoses', '#7A5CC9')}
  <div class="pill" style="margin-top:16px;font-size:26px;border-color:${RED};color:${RED}">Neutropénie profonde : avis médical sans délai</div></div>`,
n06: `${brand}<div class="card"><span class="chip">PLAQUETTES</span><h1>150 à 400 G/L</h1>
  ${kv('Thrombopénie', 'risque de saignement', RED)}${kv('Thrombocytose', 'souvent réactionnelle', BLUE)}
  <div class="pill" style="margin-top:20px;font-size:30px;border-color:#E8A33D">Piège : fausse thrombopénie (agglutination dans le tube) → contrôler</div></div>`,
n07: `${brand}<div class="card"><span class="chip">4 RÈGLES D'OR</span><h1>Lire une NFS</h1>
  ${rule(1, 'Normes selon laboratoire, âge, sexe, contexte')}${rule(2, 'Comparer avec les résultats antérieurs')}${rule(3, 'Hors norme ≠ diagnostic')}${rule(4, 'Interpréter avec la clinique')}</div>`,
n08: `${brand}<div class="card" style="background:#FFF3F3"><span class="chip red">QUAND CONSULTER VITE</span><h1 style="color:#8f1d22">Ne pas attendre</h1>
  ${item(I.warn, 'Chiffres très anormaux', RED)}${item(I.warn, 'Fièvre, saignement', RED)}${item(I.pale, 'Pâleur importante', RED)}${item(I.dizzy, 'Essoufflement', RED)}</div>`,
n09: `${brand}<div class="card"><span class="chip">POUR LES ÉTUDIANTS</span><h1>La démarche</h1>
  ${kv('Anémie', 'VGM → cause')}${kv('Hyperleucocytose', 'formule')}${kv('Thrombopénie', 'éliminer un artefact')}</div>`,
n10: outroScene(`Cours universitaires d'hématologie<br>La Revue du Praticien<br>Valeurs de référence : selon le laboratoire`),
};
await render(process.argv[2], scenes);
