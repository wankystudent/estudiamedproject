// Fonds de scène de l'épisode 21 (asthme). Usage: THEME=brand node scenes_ep21.mjs <outDir>
import { TEAL, RED, GREEN, brand, ico, I, item, hookScene, introScene, outroScene, render } from '../lib.mjs';
const big = (t, c = TEAL) => `<div class="pill" style="font-size:34px;border-color:${c};margin-top:16px">${t}</div>`;
const scenes = {
s01: hookScene(`Elle siffle la nuit,<br>tousse à l'effort…`, `Vraiment<div style="color:#13A8A8;margin-top:12px">de l'asthme&nbsp;?</div>`),
s02: introScene(21, `L'<span style="color:${TEAL}">asthme</span> : comprendre et agir`),
s03: `${brand}<div class="card"><span class="chip">LA MALADIE</span><h1>Bronches inflammatoires</h1>
  ${item(I.scan, 'Sifflements · toux · oppression · essoufflement', TEAL)}${item(I.clock, 'Variables : nuit, effort, déclencheurs', TEAL)}${item(I.smoke, 'Allergènes · virus · tabac · air froid', RED)}</div>`,
s04: `${brand}<div class="card"><span class="chip">DIAGNOSTIC</span><h1>Mesurer le souffle</h1>
  ${item(I.test, 'Histoire des symptômes', TEAL)}${item(I.scan, 'Spirométrie ou débit de pointe', TEAL)}${item(I.warn, 'Variabilité de la fonction respiratoire', TEAL)}</div>`,
s05: `${brand}<div class="card"><span class="chip">TRAITEMENT</span><h1>GINA : pas de bronchodilatateur seul</h1>
  ${item(I.flask, 'Corticoïde inhalé : moins de crises sévères', TEAL)}${item(I.syringe, 'Asthme léger : CSI-formotérol à la demande', TEAL)}${item(I.hosp, 'Modéré à sévère : entretien + secours (MART)', TEAL)}</div>`,
s06: `${brand}<div class="card"><span class="chip">CONTRÔLE</span><h1>Trois gestes</h1>
  ${big('Bonne technique d\'inhalation')}${big('Éviter les déclencheurs', '#0274BB')}${big('Plan d\'action écrit', '#2EAD6B')}
  <p class="sub" style="font-size:24px;margin-top:10px">Ne pas arrêter ni modifier son traitement seul.</p></div>`,
s07: `${brand}<div class="card" style="background:#FFF3F3"><span class="chip red">URGENCE</span><h1 style="color:#8f1d22">Crise sévère</h1>
  ${item(I.warn, 'Ne peut plus parler en phrases', RED)}${item(I.pale, 'Lèvres bleutées · respiration très rapide', RED)}${item(I.phone, 'Pas de soulagement : appeler les secours', RED)}</div>`,
s08: `${brand}<div class="card"><span class="chip">À RETENIR</span><h1>Diagnostiquer · Traiter · Anticiper</h1>
  ${big('Spirométrie pour confirmer')}${big('Corticoïde inhalé', '#0274BB')}${big('Plan d\'action écrit', '#2EAD6B')}</div>`,
s09: outroScene(`GINA 2021 — Reddel et al. (PMID 34668278)<br>GINA 2022, soins primaires — Levy et al. (PMID 36754956)`),
};
await render(process.argv[2], scenes);
