// Fonds de scène de l'épisode 22 (épilepsie). Usage: THEME=brand node scenes_ep22.mjs <outDir>
import { TEAL, RED, GREEN, brand, ico, I, item, hookScene, introScene, outroScene, render } from '../lib.mjs';
const big = (t, c = TEAL) => `<div class="pill" style="font-size:34px;border-color:${c};margin-top:16px">${t}</div>`;
const scenes = {
p01: hookScene(`Quelqu'un tombe<br>et convulse…`, `Que faire<div style="color:#13A8A8;margin-top:12px">et ne pas faire&nbsp;?</div>`),
p02: introScene(22, `L'<span style="color:${TEAL}">épilepsie</span> : la crise`),
p03: `${brand}<div class="card"><span class="chip">DÉFINITION (ILAE)</span><h1>Au moins l'un de ces cas</h1>
  ${item(I.clock, '2 crises non provoquées, à plus de 24 h d\'écart', TEAL)}${item(I.warn, '1 crise + risque élevé de récidive', TEAL)}${item(I.test, 'Un syndrome épileptique identifié', TEAL)}</div>`,
p04: `${brand}<div class="card"><span class="chip">LES CRISES</span><h1>Pas seulement des convulsions</h1>
  ${item(I.faint, 'Rupture de contact, regard fixe', TEAL)}${item(I.dizzy, 'Gestes automatiques, sensations inhabituelles', TEAL)}</div>`,
p05: `${brand}<div class="card"><span class="chip">PENDANT</span><h1>Les bons gestes</h1>
  ${big('Rester calme · noter l\'heure')}${big('Écarter les dangers · coussin sous la tête', '#0274BB')}${big('Ne pas retenir la personne', '#2EAD6B')}</div>`,
p06: `${brand}<div class="card" style="background:#FFF3F3"><span class="chip red">JAMAIS</span><h1 style="color:#8f1d22">À ne pas faire</h1>
  ${item(I.warn, 'Rien dans la bouche', RED)}${item(I.warn, 'Ni boisson, ni aliment, ni médicament', RED)}${item(I.warn, 'Ne pas la maintenir de force', RED)}</div>`,
p07: `${brand}<div class="card"><span class="chip">APRÈS</span><h1>Position latérale de sécurité</h1>
  ${item(I.faint, 'Sur le côté, surveiller la respiration', TEAL)}${item(I.clock, 'Confusion et somnolence : normal', TEAL)}${item(I.hosp, 'Rester jusqu\'au retour à la normale', TEAL)}</div>`,
p08: `${brand}<div class="card" style="background:#FFF3F3"><span class="chip red">SECOURS</span><h1 style="color:#8f1d22">Quand appeler ?</h1>
  ${item(I.clock, 'Crise > 5 minutes', RED)}${item(I.warn, 'Crises qui se répètent, sans réveil', RED)}${item(I.phone, 'Première crise · blessure · grossesse · gêne respiratoire', RED)}</div>`,
p09: `${brand}<div class="card"><span class="chip">AU LONG COURS</span><h1>Prévenir les crises</h1>
  ${item(I.flask, 'Antiépileptiques adaptés à chaque patient', TEAL)}${item(I.clock, 'Sommeil suffisant · pas d\'oubli de prise', TEAL)}${item(I.car, 'Conduite : règles selon le pays', TEAL)}</div>`,
p10: outroScene(`ILAE — Fisher et al., Epilepsia 2014 (PMID 24730690)<br>Conduite à tenir : recommandations usuelles de premiers secours`),
};
await render(process.argv[2], scenes);
