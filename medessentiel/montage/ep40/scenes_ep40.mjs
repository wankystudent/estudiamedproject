// Fonds de scène de l'épisode 40 (hémorragie du post-partum). Usage: THEME=brand node scenes_ep40.mjs <outDir>
import { TEAL, RED, GREEN, brand, ico, I, item, hookScene, introScene, outroScene, render } from '../lib.mjs';
const big = (t, c = TEAL) => `<div class="pill" style="font-size:34px;border-color:${c};margin-top:16px">${t}</div>`;
const bar = (label, pct, c = TEAL) => `<div style="margin-top:20px"><div style="display:flex;justify-content:space-between;font-size:30px;font-weight:800;color:#06295c"><span>${label}</span><span style="color:${c}">${pct} %</span></div><div style="height:22px;border-radius:11px;background:#E3EEF7;margin-top:8px"><div style="height:22px;border-radius:11px;width:${Math.max(pct,2.5)}%;background:${c}"></div></div></div>`;
const scenes = {
x01: hookScene(`Elle vient d'accoucher<br>et saigne beaucoup…<br>le sang ne s'arrête pas`, `Que se passe-t-il<div style="color:#13A8A8;margin-top:12px">&nbsp;?</div>`),
x02: introScene(40, `L'<span style="color:${TEAL}">hémorragie du post-partum</span>`),
x03: `${brand}<div class="card"><span class="chip">REVUE SYSTÉMATIQUE</span><h1>Ce que montre l'étude</h1>
  ${item(I.test, '327 études', TEAL)}${item(I.hosp, '> 840 millions de femmes', TEAL)}${item(I.warn, 'Atonie utérine : ~7 cas sur 10', RED)}</div>`,
x04: `${brand}<div class="card"><span class="chip red">URGENCE OBSTÉTRICALE</span><h1>Causes (Lancet 2025)</h1>
  ${bar('Atonie utérine', 70.6, RED)}${bar('Lésions génitales', 16.9)}${bar('Rétention placentaire', 16.4)}${bar('Anomalie du placenta', 3.9)}${bar('Coagulopathie', 2.7)}</div>`,
x05: `${brand}<div class="card"><span class="chip">FACTEURS DE RISQUE</span><h1>Fortement associés</h1>
  ${item(I.pale, 'Anémie · hémorragie antérieure', RED)}${item(I.hosp, 'Césarienne · placenta prævia', RED)}${item(I.warn, 'Grossesse multiple · très gros bébé', RED)}${item(I.faint, 'Pas de suivi prénatal · infection', RED)}</div>`,
x06: `${brand}<div class="card"><span class="chip">À SAVOIR</span><h1>Pourquoi les repérer ?</h1>
  ${item(I.scan, 'Prévention et surveillance renforcées', TEAL)}${item(I.warn, 'Mais aussi sans facteur de risque', RED)}</div>`,
x07: `${brand}<div class="card" style="background:#FFF3F3"><span class="chip red">ALERTE</span><h1 style="color:#8f1d22">Signes d'alerte</h1>
  ${item(I.warn, 'Saignement qui ne diminue pas', RED)}${item(I.dizzy, 'Vertiges · faiblesse · malaise', RED)}${item(I.pale, 'Pâleur · cœur qui s\'accélère', RED)}${item(I.phone, 'Appeler les secours', RED)}</div>`,
x08: `${brand}<div class="card"><span class="chip">PRÉVENIR</span><h1>Recommandation OMS</h1>
  ${item(I.syringe, 'Utérotonique pour toutes les femmes', TEAL)}${item(I.hosp, 'Protocoles regroupant plusieurs gestes', TEAL)}</div>`,
x09: `${brand}<div class="card"><span class="chip">GROSSESSE</span><h1>Les bons réflexes</h1>
  ${big('Suivi prénatal régulier')}${big('Traiter l\'anémie', '#0274BB')}${big('Accouchement assisté, structure équipée', '#2EAD6B')}</div>`,
x10: outroScene(`Yunas et al., Lancet 2025 (PMID 40188841)<br>Vidéos : Pixabay`),
};
await render(process.argv[2], scenes);
