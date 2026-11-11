// Fonds de scène de l'épisode 10 (embolie pulmonaire). Usage: THEME=brand node scenes_ep10.mjs <outDir>
import { TEAL, RED, GREEN, brand, ico, I, item, hookScene, introScene, outroScene, render } from '../lib.mjs';
const step = (t, c = TEAL) => `<div class="pill" style="font-size:32px;border-color:${c};padding:22px 26px">${t}</div>`;
const arrow = `<div style="font-size:48px;color:#9fb4cf;margin:2px 0 2px 30px">↓</div>`;
const scenes = {
e01: hookScene(`Essoufflement brutal<br>+ douleur thoracique`, `Anxiété&nbsp;?<div style="color:#E5484D;margin-top:12px">Peut-être pas.</div>`),
e02: introScene(10, `Embolie pulmonaire : les <span style="color:${TEAL}">signes d'urgence</span>`),
e03: `${brand}<div class="card"><span class="chip">MÉCANISME</span><h1>Un caillot qui bloque une artère du poumon</h1>
  ${step('Veine profonde de la jambe (phlébite)')}${arrow}${step('Le caillot migre vers le cœur')}${arrow}${step('Il bloque une artère des poumons', RED)}</div>`,
e04: `${brand}<div class="card"><span class="chip red">SIGNES D'ALERTE</span><h1>À reconnaître</h1>
  ${item(I.pale, 'Essoufflement brutal ou inexpliqué', RED)}${item(I.warn, 'Douleur thoracique (↑ à l\'inspiration profonde)', RED)}${item(I.rep, 'Cœur qui s\'emballe', RED)}${item(I.flask, 'Toux, parfois crachats sanglants', RED)}${item(I.faint, 'Malaise, perte de connaissance', RED)}</div>`,
e05: `${brand}<div class="card"><span class="chip">INDICE IMPORTANT</span><h1>Signes de phlébite</h1>
  ${item(I.warn, 'Jambe gonflée, chaude, rouge, douloureuse', TEAL)}${item(I.scan, 'Le plus souvent d\'un seul côté', TEAL)}
  <div class="pill" style="margin-top:14px;font-size:30px;border-color:${RED};color:${RED}">+ essoufflement : la suspicion augmente</div></div>`,
e06: `${brand}<div class="card"><span class="chip">FACTEURS DE RISQUE</span><h1>Ce qui favorise les caillots</h1>
  ${item(I.scalpel, 'Chirurgie récente (orthopédique)', TEAL)}${item(I.clock, 'Immobilisation prolongée', TEAL)}${item(I.warn, 'Cancer · antécédent de thrombose', TEAL)}${item(I.rep, 'Grossesse et post-partum', TEAL)}${item(I.flask, 'Certains traitements hormonaux', TEAL)}
  <p class="sub" style="font-size:26px;margin-top:8px">Parfois, aucune cause évidente.</p></div>`,
e07: `${brand}<div class="card" style="background:#FFF3F3"><span class="chip red">URGENCE</span><h1 style="color:#8f1d22">Appelez les secours</h1>
  ${item(I.phone, 'Essoufflement brutal · douleur thoracique', RED)}${item(I.faint, 'Malaise · perte de connaissance', RED)}
  <div class="pill" style="margin-top:14px;font-size:28px;border-color:${RED}">Ne conduisez pas vous-même · n'attendez pas que cela passe</div></div>`,
e08: `${brand}<div class="card"><span class="chip">DIAGNOSTIC</span><h1>Parcours du médecin</h1>
  ${step('1 · Probabilité clinique (scores de Wells, de Genève)')}${arrow}${step('2 · D-dimères si probabilité faible ou intermédiaire')}${arrow}${step('3 · Angioscanner thoracique si positif ou probabilité forte')}
  <p class="sub" style="font-size:26px;margin-top:8px">L'échographie cardiaque seule ne permet pas d'écarter une embolie.</p></div>`,
e09: `${brand}<div class="card"><span class="chip">TRAITEMENT</span><h1>Anticoagulants</h1>
  ${item(I.syringe, 'Empêchent le caillot de grossir et d\'autres de se former', TEAL)}${item(I.hosp, 'Formes graves : traitements plus lourds, à l\'hôpital', RED)}${item(I.clock, 'Durée selon la cause et le risque de récidive', TEAL)}</div>`,
e10: `${brand}<div class="card"><span class="chip">PRÉVENTION</span><h1>Réduire le risque</h1>
  ${item(I.rep, 'Se mobiliser tôt après une chirurgie, selon les consignes', TEAL)}${item(I.syringe, 'Prévention prescrite pour les patients à risque', TEAL)}${item(I.warn, 'Signes à la jambe : consulter rapidement', RED)}</div>`,
e11: `${brand}<div class="card"><span class="chip red">À RETENIR</span><h1>Urgence médicale</h1>
  <div class="pill" style="margin-top:20px;font-size:36px;border-color:${RED}">Essoufflement brutal · douleur thoracique · jambe gonflée</div>
  <div class="pill" style="margin-top:20px;font-size:34px">Mieux vaut une fausse alerte qu'une embolie non traitée.</div></div>`,
e12: outroScene(`ESC 2019 — Diagnosis and Management of Acute Pulmonary Embolism<br>(via ACC)`),
};
await render(process.argv[2], scenes);
