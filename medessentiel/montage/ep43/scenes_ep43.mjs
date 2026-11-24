// Fonds de scène de l'épisode 43 (thrombose veineuse profonde / embolie pulmonaire). Usage: THEME=brand node scenes_ep43.mjs <outDir>
import { TEAL, RED, GREEN, brand, ico, I, item, hookScene, introScene, outroScene, render } from '../lib.mjs';
const big = (t, c = TEAL) => `<div class="pill" style="font-size:34px;border-color:${c};margin-top:16px">${t}</div>`;
const scenes = {
x01: hookScene(`Un mollet gonflé,<br>rouge, douloureux,<br>d'un seul côté…`, `Et si c'était<div style="color:#13A8A8;margin-top:12px">un caillot&nbsp;?</div>`),
x02: introScene(43, `<span style="color:${TEAL}">Thrombose</span> et embolie pulmonaire`),
x03: `${brand}<div class="card"><span class="chip">LA MALADIE</span><h1>Un caillot veineux</h1>
  ${item(I.flask, 'Thrombose veineuse profonde : jambe', TEAL)}${item(I.scan, 'Migration : embolie pulmonaire', RED)}${item(I.hosp, '≈ 10 millions de personnes par an', RED)}</div>`,
x04: `${brand}<div class="card"><span class="chip">DÉCLENCHEURS</span><h1>Facteurs forts</h1>
  ${big('Chirurgie majeure')}${big('Cancer actif', '#0274BB')}${big('Souvent : aucune cause évidente', '#2EAD6B')}</div>`,
x05: `${brand}<div class="card" style="background:#FFF3F3"><span class="chip red">SIGNES</span><h1 style="color:#8f1d22">À reconnaître</h1>
  ${item(I.faint, 'Jambe gonflée · douloureuse · chaude · rouge', RED)}${item(I.scan, 'Essoufflement brutal · douleur thoracique', RED)}${item(I.pale, 'Toux · crachats sanglants · malaise', RED)}${item(I.phone, 'Urgence : appelez les secours', RED)}</div>`,
x06: `${brand}<div class="card"><span class="chip">DIAGNOSTIC</span><h1>Pas à pas</h1>
  ${item(I.test, '1. Score clinique (Wells)', TEAL)}${item(I.syringe, '2. D-dimères', TEAL)}${item(I.scan, '3. Échographie · scanner · scintigraphie', TEAL)}</div>`,
x07: `${brand}<div class="card"><span class="chip">TRAITEMENT</span><h1>Anticoagulants oraux directs</h1>
  ${item(I.syringe, '1re intention pour presque tous', TEAL)}${item(I.test, 'Durée selon la cause', TEAL)}</div>`,
x08: `${brand}<div class="card"><span class="chip">DURÉE</span><h1>Jusqu'à quand ?</h1>
  ${big('Facteur transitoire majeur : arrêt possible', '#2EAD6B')}${big('Cancer actif : sans limite', '#E5484D')}${big('Homme, épisode sans cause : sans limite', '#E5484D')}</div>`,
x09: `${brand}<div class="card"><span class="chip">PRÉVENTION</span><h1>Chirurgie à risque</h1>
  ${item(I.hosp, 'Chirurgie orthopédique majeure', TEAL)}${item(I.syringe, 'Chirurgie du cancer', TEAL)}</div>`,
x10: outroScene(`Khan et al., Lancet 2021 (PMID 33984268)<br>Vidéos : Pixabay`),
};
await render(process.argv[2], scenes);
