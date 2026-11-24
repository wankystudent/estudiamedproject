// Fonds de scène de l'épisode 39 (drépanocytose). Usage: THEME=brand node scenes_ep39.mjs <outDir>
import { TEAL, RED, GREEN, brand, ico, I, item, hookScene, introScene, outroScene, render } from '../lib.mjs';
const big = (t, c = TEAL) => `<div class="pill" style="font-size:34px;border-color:${c};margin-top:16px">${t}</div>`;
const scenes = {
x01: hookScene(`Douleurs dans les os,<br>mains et pieds gonflés,<br>grande pâleur…`, `Pensez à<div style="color:#13A8A8;margin-top:12px">la drépanocytose</div>`),
x02: introScene(39, `La <span style="color:${TEAL}">drépanocytose</span> : prévenir les crises`),
x03: `${brand}<div class="card"><span class="chip">LA MALADIE</span><h1>Globules rouges en faucille</h1>
  ${item(I.flask, 'Maladie génétique de l\'hémoglobine', TEAL)}${item(I.scan, 'Vaso-occlusion · hémolyse', RED)}${item(I.hosp, 'Des millions de personnes dans le monde', TEAL)}</div>`,
x04: `${brand}<div class="card"><span class="chip">GÉNÉTIQUE</span><h1>Transmission</h1>
  ${big('Gène transmis par les deux parents')}${big('Porteur sain ≠ malade', '#2EAD6B')}</div>`,
x05: `${brand}<div class="card"><span class="chip">COMPLICATIONS</span><h1>Formes aiguës</h1>
  ${item(I.warn, 'Crise vaso-occlusive : douleur intense', RED)}${item(I.scan, 'Syndrome thoracique aigu', RED)}${item(I.dizzy, 'AVC · infections graves chez l\'enfant', RED)}</div>`,
x06: `${brand}<div class="card" style="background:#FFF3F3"><span class="chip red">URGENCE</span><h1 style="color:#8f1d22">Consultez vite</h1>
  ${item(I.pale, 'Fièvre · pâleur soudaine · ventre gonflé', RED)}${item(I.scan, 'Douleur thoracique · difficulté à respirer', RED)}${item(I.dizzy, 'Faiblesse d\'un côté · trouble de la parole', RED)}${item(I.phone, 'Mal de tête brutal', RED)}</div>`,
x07: `${brand}<div class="card"><span class="chip">SUIVI</span><h1>Centre spécialisé</h1>
  ${item(I.hosp, 'Atteinte possible de tous les organes', TEAL)}${item(I.test, 'Suivi régulier', TEAL)}</div>`,
x08: `${brand}<div class="card"><span class="chip">TRAITEMENTS</span><h1>Options</h1>
  ${item(I.syringe, 'Hydroxyurée', TEAL)}${item(I.hosp, 'Transfusions · greffe de cellules souches', TEAL)}${item(I.flask, 'Thérapies géniques approuvées', TEAL)}</div>`,
x09: `${brand}<div class="card"><span class="chip">AU QUOTIDIEN</span><h1>Les bons réflexes</h1>
  ${big('Bien s\'hydrater · éviter le froid intense')}${big('Vaccins et traitements préventifs', '#0274BB')}${big('Fièvre : consulter vite', '#E5484D')}</div>`,
x10: outroScene(`Colombatti et al., Lancet 2026 (PMID 41831848)<br>Vidéos : Pixabay`),
};
await render(process.argv[2], scenes);
