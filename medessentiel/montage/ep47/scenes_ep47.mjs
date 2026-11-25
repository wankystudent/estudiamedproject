// Fonds de scène de l'épisode 47 (antidotes à connaître). Contenu original. Usage: THEME=brand node scenes_ep47.mjs <outDir>
import { TEAL, RED, GREEN, brand, ico, I, item, hookScene, introScene, outroScene, render } from '../lib.mjs';
const OR = '#E8912D';
const pair = (a, b, c = TEAL) => `<div class="pill" style="border-color:${c};margin-top:16px;font-size:30px;font-weight:800;line-height:1.25"><div style="color:#06295c">${a}</div><div style="color:${c};margin-top:4px">→ ${b}</div></div>`;
const card = (chip, h, body, red = false) => `${brand}<div class="card"${red ? ' style="background:#FFF3F3"' : ''}><span class="chip${red ? ' red' : ''}">${chip}</span><h1${red ? ' style="color:#8f1d22"' : ''}>${h}</h1>${body}</div>`;
const scenes = {
x01: hookScene(`Il saigne sous anticoagulant,<br>l'autre a avalé un pesticide,<br>un autre trop de paracétamol…`, `Quel antidote<div style="color:#13A8A8;margin-top:12px">pour chacun&nbsp;?</div>`),
x02: introScene(47, `Les <span style="color:${TEAL}">antidotes</span> à connaître`),
x03: card('PRINCIPE', 'Soutenir d\'abord', pair('Respiration · circulation · oxygénation', 'priorité absolue', RED) + pair('Puis l\'antidote adapté', 'avis du centre antipoison', TEAL)),
x04: card('1 · PESTICIDES ORGANOPHOSPHORÉS', 'Réanimation d\'abord', pair('≈ 200 000 décès/an (auto-intoxication)', 'atropine · O₂ · ventilation · liquides', RED) + pair('Pralidoxime (oxime)', 'rôle non complètement clair', OR)),
x05: card('2 · DABIGATRAN · 3 · HÉPARINE', 'Anticoagulants', pair('Dabigatran : idarucizumab', 'effet inversé (médiane 100 %), saignement ≈ 2,5 h', TEAL) + pair('Héparine', 'protamine (antidote classique)', TEAL)),
x06: card('4 · ANESTHÉSIQUES LOCAUX', 'LAST : rare, grave', pair('Soins de support', 'émulsion lipidique 20 % IV', TEAL) + pair('Prévention', 'écho · aspirer · dose minimale', OR)),
x07: card('5 · PARACÉTAMOL', 'Foie : atteinte retardée', pair('Paracétamol', 'N-acétylcystéine, efficace si précoce', TEAL)),
x08: card('6 · OPIOÏDES', 'Dépression respiratoire', pair('Somnolence → coma', 'naloxone', RED)),
x09: card('7 · MONOXYDE DE CARBONE', 'Gaz invisible', pair('CO', 'oxygène · hyperbare discuté', TEAL)),
x10: outroScene(`Eddleston, Lancet 2008 (PMID 17706760) · Pollack, NEJM 2017 (PMID 28693366)<br>Long, Am J Emerg Med 2022 (PMID 35777259) · Prescott 2024 (PMID 37683599)<br>Harris, JAMA 2026 (PMID 41671014) · Vidéos : Pixabay`),
};
await render(process.argv[2], scenes);
