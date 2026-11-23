// Fonds de scène de l'épisode 32 (vaccins du nouveau-né). Usage: THEME=brand node scenes_ep32.mjs <outDir>
import { TEAL, RED, GREEN, brand, ico, I, item, hookScene, introScene, outroScene, render } from '../lib.mjs';
const big = (t, c = TEAL) => `<div class="pill" style="font-size:34px;border-color:${c};margin-top:16px">${t}</div>`;
const row = (a, b, c = TEAL) => `<div class="pill" style="display:flex;justify-content:space-between;align-items:center;border-color:${c};margin-top:12px;font-size:30px;font-weight:800"><span>${a}</span><span style="color:${c};text-align:right">${b}</span></div>`;
const scenes = {
w01: hookScene(`Votre bébé<br>vient de naître…`, `Quels vaccins<div style="color:#13A8A8;margin-top:12px">dès la naissance&nbsp;?</div>`),
w02: introScene(32, `Les <span style="color:${TEAL}">vaccins du nouveau-né</span>`),
w03: `${brand}<div class="card"><span class="chip">À LA NAISSANCE</span><h1>Trois vaccins possibles</h1>
  ${row('BCG', 'tuberculose', '#E5484D')}${row('Hépatite B', 'dans les 24 h', '#0274BB')}${row('Polio oral', 'selon le pays', TEAL)}
  <p class="sub" style="font-size:24px;margin-top:8px">Recommandations OMS — selon le calendrier national.</p></div>`,
w04: `${brand}<div class="card"><span class="chip">BCG</span><h1>Contre les formes graves</h1>
  ${item(I.scan, 'Protection élevée : tuberculose miliaire et méningée du nourrisson', TEAL)}${item(I.hosp, 'Pays où la tuberculose est fréquente', TEAL)}${item(I.faint, 'Petit nodule puis cicatrice : normal', TEAL)}</div>`,
w05: `${brand}<div class="card"><span class="chip">HÉPATITE B</span><h1>Le plus tôt possible</h1>
  ${item(I.warn, 'Infection avant 1 an : chronique dans ≈ 9 cas sur 10', RED)}${row('Infections périnatales évitées', '≈ 94 %', '#2EAD6B')}${row('Couverture mondiale 2024', '≈ 45 %', '#E5484D')}</div>`,
w06: `${brand}<div class="card"><span class="chip">POLIO ORAL</span><h1>Dose de naissance</h1>
  ${item(I.syringe, 'Pays où la polio est présente ou risque d\'être importée', TEAL)}${item(I.flask, 'Prépare les doses suivantes', TEAL)}</div>`,
w07: `${brand}<div class="card"><span class="chip">ENSUITE</span><h1>Le calendrier continue</h1>
  ${item(I.clock, '≈ 6 semaines : pentavalent · pneumocoque · rotavirus · polio', TEAL)}${item(I.clock, '≈ 9 mois : rougeole', TEAL)}${item(I.test, 'Chaque dose notée dans le carnet', TEAL)}</div>`,
w08: `${brand}<div class="card" style="background:#FFF3F3"><span class="chip red">CONSULTER</span><h1 style="color:#8f1d22">Après une injection</h1>
  ${item(I.warn, 'Fièvre élevée · pleurs inhabituels', RED)}${item(I.faint, 'Somnolence anormale', RED)}${item(I.scan, 'Gonflement important', RED)}</div>`,
w09: `${brand}<div class="card"><span class="chip">À RETENIR</span><h1>Dès la naissance</h1>
  ${big('BCG · hépatite B (24 h) · polio oral')}${big('Puis les autres vaccins vers 6 semaines', '#0274BB')}${big('Carnet de vaccination à jour', '#2EAD6B')}</div>`,
w10: outroScene(`Mangtani et al., Clin Infect Dis 2014 (PMID 24336911)<br>Jeng, Yip & Lok, JAMA 2026 (PMID 42081318)<br>OMS — calendrier de vaccination de routine`),
};
await render(process.argv[2], scenes);
