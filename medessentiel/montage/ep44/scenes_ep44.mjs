// Fonds de scène de l'épisode 44 (limites du corps humain : vrai / approximatif / non vérifié). Usage: THEME=brand node scenes_ep44.mjs <outDir>
import { TEAL, RED, GREEN, brand, ico, I, item, hookScene, introScene, outroScene, render } from '../lib.mjs';
const OR = '#E8912D';
const tag = (t, c) => `<span style="display:inline-block;padding:6px 20px;border-radius:999px;background:${c};color:#fff;font-weight:900;font-size:28px;letter-spacing:1px">${t}</span>`;
const row = (a, b, c = TEAL) => `<div class="pill" style="display:flex;justify-content:space-between;align-items:center;border-color:${c};margin-top:16px;font-size:32px;font-weight:800"><span>${a}</span><span style="color:${c};text-align:right">${b}</span></div>`;
const scenes = {
x01: hookScene(`Sans eau, sans manger,<br>sans dormir, sans air…`, `Combien de temps<div style="color:#13A8A8;margin-top:12px">on tient&nbsp;?</div>`),
x02: introScene(44, `Les <span style="color:${TEAL}">limites du corps humain</span> : vrai ou faux ?`),
x03: `${brand}<div class="card"><span class="chip">L'ESSENTIEL</span><h1>L'oxygène d'abord</h1>
  ${row('Sans air', 'secondes → minutes', RED)}${row('Sans eau', 'jours', OR)}${row('Sans nourriture', 'semaines', OR)}<div style="margin-top:22px">${tag('RÈGLE DES 3 = REPÈRE', OR)}</div></div>`,
x04: `${brand}<div class="card"><span class="chip">ORDRES DE GRANDEUR</span><h1>La liste virale</h1>
  ${row('Eau : 3 à 5 jours', 'variable', OR)}${row('Nourriture : 40 à 70 jours', 'variable', OR)}<div style="margin-top:22px">${tag('APPROXIMATIF', OR)}</div></div>`,
x05: `${brand}<div class="card"><span class="chip">SOMMEIL</span><h1>11 jours sans dormir</h1>
  ${item(I.dizzy, '1964 : Randy Gardner, 264 heures', TEAL)}${item(I.warn, 'Guinness ne suit plus ce record : danger', RED)}<div style="margin-top:22px">${tag('VRAI MAIS DÉPASSÉ', OR)}</div></div>`,
x06: `${brand}<div class="card"><span class="chip">APNÉE</span><h1>Retenir sa respiration</h1>
  ${row('Record (oxygène pur)', '29 min 03 s', TEAL)}${row('Sans oxygène préalable', '≈ 11 min', TEAL)}${item(I.warn, 'Jamais seul · risque de syncope et de noyade', RED)}</div>`,
x07: `${brand}<div class="card"><span class="chip">CŒUR</span><h1>Fréquence maximale</h1>
  ${row('220 − âge', 'estimation', OR)}${row('208 − 0,7 × âge', 'Tanaka 2001', GREEN)}<div style="margin-top:22px">${tag('220 = PAS UNE LIMITE UNIVERSELLE', OR)}</div></div>`,
x08: `${brand}<div class="card"><span class="chip">LONGÉVITÉ</span><h1>122 ans</h1>
  ${item(I.hosp, 'Jeanne Calment, 1875–1997', TEAL)}${item(I.test, 'Record vérifié (Guinness)', TEAL)}<div style="margin-top:22px">${tag('VRAI', GREEN)}</div></div>`,
x09: `${brand}<div class="card" style="background:#FFF3F3"><span class="chip red">SANS SOURCE FIABLE</span><h1 style="color:#8f1d22">Non vérifié</h1>
  ${item(I.warn, 'Froid extrême : 30 minutes', RED)}${item(I.warn, 'Marche : 30 heures', RED)}${item(I.warn, 'Isolement : 7 jours', RED)}${item(I.warn, 'Plus longue miction', RED)}</div>`,
x10: outroScene(`Tanaka et al., JACC 2001 (PMID 11153730)<br>Records : Guinness World Records<br>Vidéos : Pixabay`),
};
await render(process.argv[2], scenes);
