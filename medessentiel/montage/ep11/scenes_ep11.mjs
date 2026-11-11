// Fonds de scène de l'épisode 11 (nerfs crâniens). Usage: THEME=brand node scenes_ep11.mjs <outDir>
import { TEAL, RED, GREEN, brand, ico, I, item, hookScene, introScene, outroScene, render } from '../lib.mjs';
const nerfs = ['I Olfactif', 'II Optique', 'III Oculomoteur', 'IV Trochléaire', 'V Trijumeau', 'VI Abducens', 'VII Facial', 'VIII Vestibulo-cochléaire', 'IX Glosso-pharyngien', 'X Vague', 'XI Accessoire', 'XII Hypoglosse'];
const grid = `<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:6px">${nerfs.map(n => { const [r, ...t] = n.split(' '); return `<div class="pill" style="font-size:28px;padding:14px 18px;display:flex;gap:14px"><b style="color:${TEAL};min-width:62px">${r}</b>${t.join(' ')}</div>`; }).join('')}</div>`;
const big = (t, c = TEAL) => `<div class="pill" style="font-size:36px;border-color:${c};margin-top:16px">${t}</div>`;
const scenes = {
m01: hookScene(`12 nerfs crâniens<br>12 noms<br>12 fonctions`, `Une méthode pour les retenir <span style="color:#13A8A8">pour de bon.</span>`),
m02: introScene(11, `Les <span style="color:${TEAL}">12 nerfs crâniens</span>`),
m03: `${brand}<div class="card"><span class="chip">ÉTAPE 1 · L'ORDRE</span><h1>De I à XII</h1>${grid}</div>`,
m04: `${brand}<div class="card"><span class="chip">MNÉMOTECHNIQUE</span><h1>Les initiales</h1>
  ${big('<b style="color:#19D3C5">O</b>h <b style="color:#19D3C5">O</b>h <b style="color:#19D3C5">O</b>h · <b style="color:#19D3C5">T</b>out <b style="color:#19D3C5">T</b>remble · <b style="color:#19D3C5">A</b>lors <b style="color:#19D3C5">F</b>uyons <b style="color:#19D3C5">V</b>ers <b style="color:#19D3C5">G</b>rand-père · <b style="color:#19D3C5">V</b>ite <b style="color:#19D3C5">A</b>u <b style="color:#19D3C5">H</b>angar')}
  <p class="sub" style="font-size:28px;margin-top:20px">Inventez la vôtre : la meilleure est celle qui vous marque.</p></div>`,
m05: `${brand}<div class="card"><span class="chip">ÉTAPE 2 · CLASSIFICATION</span><h1>3 · 5 · 4</h1>
  ${big('3 sensoriels : I · II · VIII', '#2ED3C6')}${big('5 moteurs : III · IV · VI · XI · XII', '#F5B82E')}${big('4 mixtes : V · VII · IX · X', '#E5712F')}</div>`,
m06: `${brand}<div class="card"><span class="chip">ÉTAPE 3 · GROUPE 1</span><h1>Les nerfs des sens</h1>
  ${item(I.flask, 'I · odorat', TEAL)}${item(I.scan, 'II · vision', TEAL)}${item(I.rep, 'VIII · audition et équilibre', TEAL)}</div>`,
m07: `${brand}<div class="card"><span class="chip">GROUPE 2</span><h1>Les nerfs qui bougent les yeux</h1>
  ${item(I.scan, 'III · la plupart des muscles de l\'œil, paupière, pupille', TEAL)}${item(I.scan, 'IV · muscle oblique supérieur', TEAL)}${item(I.scan, 'VI · muscle droit latéral : écarte l\'œil vers l\'extérieur', TEAL)}</div>`,
m08: `${brand}<div class="card"><span class="chip">GROUPE 3</span><h1>La face</h1>
  ${item(I.pale, 'V · sensibilité du visage, muscles de la mastication', TEAL)}${item(I.dizzy, 'VII · muscles de l\'expression, goût des 2/3 antérieurs de la langue', TEAL)}</div>`,
m09: `${brand}<div class="card"><span class="chip">GROUPE 4 + XII</span><h1>Gorge, cou et langue</h1>
  ${item(I.flask, 'IX · sensibilité du pharynx, goût du tiers postérieur', TEAL)}${item(I.rep, 'X · déglutition, voix, cœur, tube digestif', TEAL)}${item(I.faint, 'XI · sterno-cléido-mastoïdien, trapèze', TEAL)}${item(I.warn, 'XII · muscles de la langue', TEAL)}</div>`,
m10: `${brand}<div class="card"><span class="chip">EN CLINIQUE</span><h1>Un signe = un nerf</h1>
  ${big('Œil qui n\'écarte plus vers l\'extérieur → nerf VI')}${big('Langue qui dévie quand on la tire → nerf XII')}
  <p class="sub" style="font-size:28px;margin-top:18px">Paralysie faciale · diplopie · déviation de la langue</p></div>`,
m11: `${brand}<div class="card"><span class="chip">PLAN DE RÉVISION</span><h1>En 3 temps</h1>
  ${item(I.clock, 'Réciter l\'ordre I–XII', TEAL)}${item(I.scan, 'Classer : 3 · 5 · 4', TEAL)}${item(I.hosp, 'Revoir les fonctions par 4 groupes', TEAL)}</div>`,
m12: outroScene(`Kenhub — Les 12 nerfs crâniens<br>Manuel d'anatomie : à consulter`),
};
await render(process.argv[2], scenes);
