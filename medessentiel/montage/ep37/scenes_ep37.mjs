// Fonds de scène de l'épisode 37 (goutte). Usage: THEME=brand node scenes_ep37.mjs <outDir>
import { TEAL, RED, GREEN, brand, ico, I, item, hookScene, introScene, outroScene, render } from '../lib.mjs';
const big = (t, c = TEAL) => `<div class="pill" style="font-size:34px;border-color:${c};margin-top:16px">${t}</div>`;
const scenes = {
x01: hookScene(`Douleur brutale<br>au gros orteil,<br>en pleine nuit…`, `Est-ce<div style="color:#13A8A8;margin-top:12px">la goutte&nbsp;?</div>`),
x02: introScene(37, `La <span style="color:${TEAL}">goutte</span> : comprendre et traiter`),
x03: `${brand}<div class="card"><span class="chip">LA MALADIE</span><h1>Cristaux d'urate</h1>
  ${item(I.flask, 'Arthrite inflammatoire la plus fréquente', TEAL)}${item(I.scan, 'Hyperuricémie = facteur principal', TEAL)}${item(I.test, 'Prévalence : < 1 % à 6,8 %', TEAL)}</div>`,
x04: `${brand}<div class="card"><span class="chip">FACTEURS</span><h1>Ce qui favorise</h1>
  ${big('Obésité')}${big('Aliments · alcool', '#0274BB')}${big('Hypertension · insuffisance rénale', '#2EAD6B')}</div>`,
x05: `${brand}<div class="card"><span class="chip">LA CRISE</span><h1>Articulation en feu</h1>
  ${item(I.warn, 'Rouge · chaude · gonflée · très douloureuse', RED)}${item(I.faint, 'Gros orteil, cheville, genou, poignet', TEAL)}${item(I.test, 'Crises intermittentes, maladie chronique', TEAL)}</div>`,
x06: `${brand}<div class="card" style="background:#FFF3F3"><span class="chip red">CONSULTER</span><h1 style="color:#8f1d22">Quand ?</h1>
  ${item(I.hosp, 'Dès la première crise', RED)}${item(I.pale, 'Fièvre + articulation très chaude : urgence', RED)}${item(I.phone, 'Une infection peut ressembler à la goutte', RED)}</div>`,
x07: `${brand}<div class="card"><span class="chip">DIAGNOSTIC</span><h1>Examens</h1>
  ${item(I.test, 'Examen clinique', TEAL)}${item(I.syringe, 'Acide urique dans le sang', TEAL)}${item(I.scan, 'Cristaux dans le liquide articulaire', TEAL)}</div>`,
x08: `${brand}<div class="card"><span class="chip">TRAITEMENT</span><h1>Deux volets</h1>
  ${item(I.warn, 'Crise : anti-inflammatoires prescrits', TEAL)}${item(I.syringe, 'Long terme : abaisser l\'acide urique', TEAL)}${item(I.hosp, 'Dissout les cristaux · prévient les tophi', TEAL)}</div>`,
x09: `${brand}<div class="card"><span class="chip">OBSERVANCE</span><h1>Le traitement de fond</h1>
  ${big('1/3 à 1/2 des patients traités')}${big('< 1/2 le suivent', '#E5484D')}${big('Ne pas arrêter sans avis', '#2EAD6B')}</div>`,
x10: outroScene(`Dalbeth et al., Lancet 2021 (PMID 33798500)<br>Dehlin et al., Nat Rev Rheumatol 2020 (PMID 32541923)<br>Vidéos : Pixabay`),
};
await render(process.argv[2], scenes);
