// Fonds de scène de l'épisode 31 (vaccins et maladies cibles). Usage: THEME=brand node scenes_ep31.mjs <outDir>
import { TEAL, RED, GREEN, brand, ico, I, item, hookScene, introScene, outroScene, render } from '../lib.mjs';
const big = (t, c = TEAL) => `<div class="pill" style="font-size:34px;border-color:${c};margin-top:16px">${t}</div>`;
const row = (a, b, c = TEAL) => `<div class="pill" style="display:flex;justify-content:space-between;align-items:center;border-color:${c};margin-top:12px;font-size:30px;font-weight:800"><span>${a}</span><span style="color:${c};text-align:right">${b}</span></div>`;
const scenes = {
v01: hookScene(`BCG, VPO, DTC,<br>SAT, VAA, VAR…`, `Un sigle,<div style="color:#13A8A8;margin-top:12px">une maladie&nbsp;?</div>`),
v02: introScene(31, `Vaccins et <span style="color:${TEAL}">maladies cibles</span>`),
v03: `${brand}<div class="card"><span class="chip">À LA NAISSANCE</span><h1>BCG · VPO · DTC</h1>
  ${row('BCG', 'tuberculose (formes graves)', '#E5484D')}${row('VPO', 'poliomyélite', '#0274BB')}${row('DTC', 'diphtérie · tétanos · coqueluche', TEAL)}
  <p class="sub" style="font-size:24px;margin-top:8px">Le tétanos fait partie du DTC.</p></div>`,
v04: `${brand}<div class="card"><span class="chip">PENTAVALENT</span><h1>Un vaccin, cinq cibles</h1>
  ${big('DTC + hépatite B + Hib')}${item(I.flask, 'Hépatite B : cirrhose, cancer du foie', TEAL)}${item(I.syringe, 'Dose à la naissance recommandée (OMS)', TEAL)}</div>`,
v05: `${brand}<div class="card" style="background:#FFF3F3"><span class="chip red">À NE PAS CONFONDRE</span><h1 style="color:#8f1d22">SAT ≠ vaccin</h1>
  ${row('SAT', 'sérum : anticorps, protection brève', '#E5484D')}${row('VAT', 'vaccin : protection durable', '#2EAD6B')}${item(I.warn, 'Plaie à risque, non vacciné : SAT + vaccin', RED)}</div>`,
v06: `${brand}<div class="card"><span class="chip">AUTRES VACCINS</span><h1>VAA · VAR</h1>
  ${row('VAA', 'fièvre jaune', '#F5B82E')}${row('VAR', 'rougeole (2 doses)', '#E5484D')}${item(I.scan, 'Souvent associé à la rubéole', TEAL)}</div>`,
v07: `${brand}<div class="card"><span class="chip">NOURRISSON</span><h1>Rotavirus · pneumocoque</h1>
  ${row('Rotavirus', 'gastro-entérites sévères', TEAL)}${row('Pneumocoque', 'pneumonie · méningite · sepsis', '#E5484D')}</div>`,
v08: `${brand}<div class="card"><span class="chip">À RETENIR</span><h1>Un sigle = une maladie</h1>
  ${big('BCG · VPO · DTC · Hép. B')}${big('VAT (vaccin) ≠ SAT (sérum)', '#E5484D')}${big('VAA · VAR · rota · pneumo', '#0274BB')}
  <p class="sub" style="font-size:24px;margin-top:8px">Carnet de vaccination : rattraper les doses manquantes.</p></div>`,
v09: outroScene(`OMS — recommandations pour la vaccination de routine (tableaux de synthèse)<br>Calendriers nationaux : à consulter auprès de votre centre de santé`),
};
await render(process.argv[2], scenes);
