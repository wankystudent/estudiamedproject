// Fonds de scène de l'épisode 34 (pneumonie). Usage: THEME=brand node scenes_ep34.mjs <outDir>
import { TEAL, RED, GREEN, brand, ico, I, item, hookScene, introScene, outroScene, render } from '../lib.mjs';
const big = (t, c = TEAL) => `<div class="pill" style="font-size:34px;border-color:${c};margin-top:16px">${t}</div>`;
const row = (a, b, c = TEAL) => `<div class="pill" style="display:flex;justify-content:space-between;align-items:center;border-color:${c};margin-top:12px;font-size:30px;font-weight:800"><span>${a}</span><span style="color:${c};text-align:right">${b}</span></div>`;
const scenes = {
x01: hookScene(`Une toux qui dure,<br>de la fièvre,<br>une respiration rapide…`, `Est-ce<div style="color:#13A8A8;margin-top:12px">une pneumonie&nbsp;?</div>`),
x02: introScene(34, `La <span style="color:${TEAL}">pneumonie</span> : reconnaître et agir`),
x03: `${brand}<div class="card"><span class="chip">LA MALADIE</span><h1>Infection des alvéoles</h1>
  ${item(I.flask, 'Pneumocoque, autres bactéries, virus', TEAL)}${row('Décès par infection respiratoire basse (2021)', '≈ 2,18 millions', '#E5484D')}${row('Enfants < 5 ans', '> 500 000 décès', '#E5484D')}</div>`,
x04: `${brand}<div class="card"><span class="chip">LES SIGNES</span><h1>Que ressent-on ?</h1>
  ${item(I.pale, 'Fièvre · frissons · fatigue', TEAL)}${item(I.scan, 'Toux · crachats · essoufflement', TEAL)}${item(I.warn, 'Douleur thoracique', RED)}</div>`,
x05: `${brand}<div class="card" style="background:#FFF3F3"><span class="chip red">GRAVITÉ</span><h1 style="color:#8f1d22">Urgence</h1>
  ${item(I.scan, 'Respiration très rapide ou difficile', RED)}${item(I.pale, 'Lèvres bleutées', RED)}${item(I.dizzy, 'Confusion · somnolence', RED)}${item(I.phone, 'Secours ou urgences', RED)}</div>`,
x06: `${brand}<div class="card"><span class="chip">ENFANT ET ÂGÉ</span><h1>Signes particuliers</h1>
  ${item(I.faint, 'Enfant : respiration rapide, creusement du thorax', TEAL)}${item(I.warn, 'Refus de boire · somnolence anormale', RED)}${item(I.dizzy, 'Âgé : confusion, parfois sans fièvre', RED)}</div>`,
x07: `${brand}<div class="card"><span class="chip">DIAGNOSTIC</span><h1>Examens</h1>
  ${item(I.test, 'Examen clinique', TEAL)}${item(I.scan, 'Saturation en oxygène', TEAL)}${item(I.hosp, 'Radiographie du thorax · analyses', TEAL)}</div>`,
x08: `${brand}<div class="card"><span class="chip">TRAITEMENT</span><h1>Selon la cause</h1>
  ${item(I.syringe, 'Antibiotiques si bactérie (sur prescription)', TEAL)}${item(I.flask, 'Oxygène · hydratation · repos', TEAL)}${item(I.hosp, 'Forme sévère : hospitalisation', RED)}</div>`,
x09: `${brand}<div class="card"><span class="chip">PRÉVENIR</span><h1>Les bons réflexes</h1>
  ${big('Vaccins : pneumocoque · Hib · grippe')}${big('Allaitement · lavage des mains', '#0274BB')}${big('Arrêt du tabac', '#2EAD6B')}</div>`,
x10: outroScene(`GBD 2021 — Lancet Infect Dis 2024 (PMID 38636536)<br>Vidéos : Pixabay`),
};
await render(process.argv[2], scenes);
