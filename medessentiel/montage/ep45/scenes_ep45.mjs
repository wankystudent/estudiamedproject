// Fonds de scène de l'épisode 45 (anatomie : organes essentiels). Contenu original (infographie tierce non reprise). Usage: THEME=brand node scenes_ep45.mjs <outDir>
import { TEAL, RED, GREEN, brand, ico, I, item, hookScene, introScene, outroScene, render } from '../lib.mjs';
const big = (t, c = TEAL) => `<div class="pill" style="font-size:34px;border-color:${c};margin-top:16px">${t}</div>`;
const row = (a, b, c = TEAL) => `<div class="pill" style="display:flex;justify-content:space-between;align-items:center;border-color:${c};margin-top:16px;font-size:32px;font-weight:800"><span>${a}</span><span style="color:${c};text-align:right">${b}</span></div>`;
const scenes = {
x01: hookScene(`Combien d'os ?<br>Combien pèse<br>votre cœur ?`, `Quel poumon<div style="color:#13A8A8;margin-top:12px">est le plus grand&nbsp;?</div>`),
x02: introScene(45, `L'<span style="color:${TEAL}">anatomie</span> : les organes essentiels`),
x03: `${brand}<div class="card"><span class="chip">ANATOMIE</span><h1>Structure du corps</h1>
  ${item(I.scan, 'Organes · formes · positions · fonctions', TEAL)}${item(I.warn, 'Chiffres = moyennes, variables', RED)}</div>`,
x04: `${brand}<div class="card"><span class="chip">SQUELETTE</span><h1>206 os (adulte)</h1>
  ${item(I.hosp, 'Donne sa forme au corps', TEAL)}${item(I.scan, 'Protège cerveau, cœur, poumons', TEAL)}${item(I.faint, 'Mouvement grâce aux articulations', TEAL)}</div>`,
x05: `${brand}<div class="card"><span class="chip">CERVEAU</span><h1>≈ 1,3 à 1,4 kg</h1>
  ${big('Lobes : frontal · pariétal', '#0274BB')}${big('Temporal · occipital', '#0274BB')}${big('Cervelet : équilibre', '#2EAD6B')}</div>`,
x06: `${brand}<div class="card"><span class="chip red">CŒUR</span><h1>Muscle creux</h1>
  ${row('Poids moyen', '≈ 300 g', RED)}${row('Battements par jour', '≈ 100 000', RED)}${row('Cavités', '2 oreillettes · 2 ventricules', TEAL)}</div>`,
x07: `${brand}<div class="card"><span class="chip">POUMONS</span><h1>Respiration</h1>
  ${item(I.scan, 'Apportent l\'oxygène au sang', TEAL)}${item(I.flask, 'Rejettent le CO₂', TEAL)}${item(I.hosp, 'Poumon droit un peu plus grand', TEAL)}</div>`,
x08: `${brand}<div class="card"><span class="chip">DIGESTION ET SANG</span><h1>Nutriments · transport</h1>
  ${item(I.flask, 'Estomac · foie · pancréas · intestins', TEAL)}${item(I.syringe, 'Sang : rouges · blancs · plaquettes · plasma', RED)}</div>`,
x09: `${brand}<div class="card"><span class="chip">AUTRES ORGANES</span><h1>Essentiels aussi</h1>
  ${big('Reins : filtrent le sang', '#0274BB')}${big('Foie · peau · yeux', '#2EAD6B')}</div>`,
x10: outroScene(`Valeurs moyennes — manuels d'anatomie (Gray's) ; American Heart Association<br>Vidéos : Pixabay`),
};
await render(process.argv[2], scenes);
