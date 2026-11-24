// Fonds de scène de l'épisode 41 (insuffisance rénale chronique). Usage: THEME=brand node scenes_ep41.mjs <outDir>
import { TEAL, RED, GREEN, brand, ico, I, item, hookScene, introScene, outroScene, render } from '../lib.mjs';
const big = (t, c = TEAL) => `<div class="pill" style="font-size:34px;border-color:${c};margin-top:16px">${t}</div>`;
const scenes = {
x01: hookScene(`Pas de douleur,<br>pas de symptôme…`, `Et si vos reins<div style="color:#13A8A8;margin-top:12px">s'abîmaient en silence&nbsp;?</div>`),
x02: introScene(41, `L'<span style="color:${TEAL}">insuffisance rénale chronique</span>`),
x03: `${brand}<div class="card"><span class="chip red">LES CHIFFRES (LANCET 2026)</span><h1>Un enjeu mondial</h1>
  ${item(I.hosp, '≈ 850 millions de personnes', RED)}${item(I.test, '≈ 4 millions en suppléance rénale', TEAL)}${item(I.warn, '5e cause de décès attendue en 2050', RED)}</div>`,
x04: `${brand}<div class="card"><span class="chip">TERRAIN</span><h1>Qui est concerné ?</h1>
  ${big('Diabète', '#0274BB')}${big('Hypertension artérielle', '#0274BB')}${big('Nombreuses autres causes', '#2EAD6B')}</div>`,
x05: `${brand}<div class="card"><span class="chip red">SILENCIEUSE</span><h1>Quand les signes apparaissent</h1>
  ${item(I.pale, 'Fatigue · nausées', TEAL)}${item(I.faint, 'Jambes gonflées · urines modifiées', TEAL)}${item(I.warn, 'Maladie souvent avancée', RED)}</div>`,
x06: `${brand}<div class="card"><span class="chip">DÉPISTAGE</span><h1>Analyses simples</h1>
  ${item(I.syringe, 'Dépister · diagnostiquer · classer en stades', TEAL)}${item(I.test, 'Diabète, hypertension, cœur, antécédents', TEAL)}${item(I.hosp, 'Demandez : mes reins sont-ils vérifiés ?', TEAL)}</div>`,
x07: `${brand}<div class="card" style="background:#FFF3F3"><span class="chip red">RISQUE</span><h1 style="color:#8f1d22">Le cœur d'abord</h1>
  ${item(I.warn, 'Maladie cardiovasculaire fréquente', RED)}${item(I.pale, 'Souvent avant le stade de dialyse', RED)}</div>`,
x08: `${brand}<div class="card"><span class="chip">AGIR</span><h1>Des traitements efficaces</h1>
  ${item(I.flask, 'Essais randomisés depuis 2019', TEAL)}${item(I.scan, 'Ralentissent le déclin rénal', TEAL)}${item(I.hosp, 'Réduisent le risque cardiovasculaire', TEAL)}</div>`,
x09: `${brand}<div class="card"><span class="chip">AU QUOTIDIEN</span><h1>Protéger ses reins</h1>
  ${big('Alimentation végétale, peu de sel', '#2EAD6B')}${big('Tension et glycémie contrôlées', '#0274BB')}${big('Pas d\'AINS répétés sans avis', '#E5484D')}</div>`,
x10: outroScene(`Herrington et al., Lancet 2026 (PMID 41314225)<br>Kalantar-Zadeh et al., Lancet 2021 (PMID 34175022)<br>Vidéos : Pixabay`),
};
await render(process.argv[2], scenes);
