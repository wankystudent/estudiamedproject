// Fonds de scène de l'épisode 20 (lire un ECG). Usage: THEME=brand node scenes_ep20.mjs <outDir>
import { TEAL, RED, GREEN, brand, ico, I, item, hookScene, introScene, outroScene, render, ecg } from '../lib.mjs';
const big = (t, c = TEAL) => `<div class="pill" style="font-size:34px;border-color:${c};margin-top:16px">${t}</div>`;
const row = (a, b, c = TEAL) => `<div class="pill" style="display:flex;justify-content:space-between;align-items:center;border-color:${c};margin-top:12px;font-size:32px;font-weight:800"><span>${a}</span><span style="color:${c}">${b}</span></div>`;
const scenes = {
e01: hookScene(`Un tracé défile<br>à 25 mm/s…`, `Par où<div style="color:#13A8A8;margin-top:12px">commencer&nbsp;?</div>`),
e02: introScene(20, `Lire un <span style="color:${TEAL}">ECG</span>`),
e03: `${brand}<div class="card"><span class="chip">LE PAPIER</span><h1>Repères de lecture</h1>
  ${row('1 petit carré', '0,04 s')}${row('1 grand carré', '0,2 s')}${row('10 mm', '1 mV', '#0274BB')}</div>`,
e04: `${brand}<div class="card"><span class="chip">ÉTAPE 1</span><h1>Le rythme</h1>
  ${item(I.rep, 'Une onde P avant chaque QRS', TEAL)}${item(I.scan, 'Intervalles réguliers : rythme sinusal', TEAL)}${item(I.warn, 'Irrégulier, sans onde P : fibrillation atriale ?', RED)}</div>`,
e05: `${brand}<div class="card"><span class="chip">ÉTAPE 2</span><h1>La fréquence</h1>
  ${big('300 ÷ nombre de grands carrés entre 2 QRS')}${row('Normale', '60–100/min', '#2EAD6B')}</div>`,
e06: `${brand}<div class="card"><span class="chip">ÉTAPES 3 ET 4</span><h1>PR et QRS</h1>
  ${row('Intervalle PR', '3–5 petits carrés')}${row('QRS étroit', '< 3 petits carrés', '#2EAD6B')}${item(I.warn, 'PR long : bloc AV · QRS large : conduction ou origine ventriculaire', RED)}</div>`,
e07: `${brand}<div class="card" style="background:#FFF3F3"><span class="chip red">ÉTAPE 5</span><h1 style="color:#8f1d22">ST et onde T</h1>
  ${item(I.warn, 'Sus-décalage du ST + douleur thoracique = urgence', RED)}${item(I.phone, 'Appeler les secours', RED)}</div>`,
e08: `${brand}<div class="card"><span class="chip">ÉTAPE 6</span><h1>L'intervalle QT</h1>
  ${item(I.warn, 'QT long : risque de troubles du rythme graves', RED)}${item(I.flask, 'Chercher médicaments et troubles ioniques', TEAL)}</div>`,
e09: `${brand}<div class="card"><span class="chip">RÈGLE D'OR</span><h1>Jamais lu seul</h1>
  ${item(I.test, 'Confronter aux symptômes, à l\'examen, aux antécédents', TEAL)}${item(I.hosp, 'Doute : avis médical', TEAL)}</div>`,
e10: `${brand}<div class="card"><span class="chip">À RETENIR</span><h1>Même méthode, même ordre</h1>
  ${big('Rythme · Fréquence · PR')}${big('QRS · ST/T · QT', '#0274BB')}</div>`,
e11: outroScene(`AHA/ACCF/HRS — standardisation de l'ECG, partie VI (J Am Coll Cardiol 2009, PMID 19281933)<br>Repères de lecture : manuels de cardiologie`),
};
await render(process.argv[2], scenes);
