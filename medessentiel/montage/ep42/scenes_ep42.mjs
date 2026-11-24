// Fonds de scène de l'épisode 42 (bronchiolite). Usage: THEME=brand node scenes_ep42.mjs <outDir>
import { TEAL, RED, GREEN, brand, ico, I, item, hookScene, introScene, outroScene, render } from '../lib.mjs';
const big = (t, c = TEAL) => `<div class="pill" style="font-size:34px;border-color:${c};margin-top:16px">${t}</div>`;
const scenes = {
x01: hookScene(`Il tousse, siffle,<br>respire vite…<br>et ne boit plus`, `Pensez à<div style="color:#13A8A8;margin-top:12px">la bronchiolite</div>`),
x02: introScene(42, `La <span style="color:${TEAL}">bronchiolite</span> du nourrisson`),
x03: `${brand}<div class="card"><span class="chip">LA MALADIE</span><h1>Infection virale des bronchioles</h1>
  ${item(I.hosp, '1re cause d\'hospitalisation du nourrisson (pays à revenu élevé)', TEAL)}${item(I.flask, 'VRS : 60 à 80 % des cas', RED)}${item(I.scan, 'Rhume, puis toux et respiration rapide', TEAL)}</div>`,
x04: `${brand}<div class="card" style="background:#FFF3F3"><span class="chip red">QUAND S'INQUIÉTER</span><h1 style="color:#8f1d22">Urgence</h1>
  ${item(I.scan, 'Respiration très rapide · thorax creusé', RED)}${item(I.pale, 'Lèvres bleutées · pauses respiratoires', RED)}${item(I.faint, 'Refuse de boire · très somnolent', RED)}${item(I.phone, 'Moins de couches mouillées', RED)}</div>`,
x05: `${brand}<div class="card"><span class="chip">DIAGNOSTIC</span><h1>Un diagnostic clinique</h1>
  ${item(I.test, 'Écoute · observation de la respiration', TEAL)}${item(I.scan, 'Saturation en oxygène', TEAL)}${item(I.flask, 'Pas de test viral nécessaire', TEAL)}</div>`,
x06: `${brand}<div class="card"><span class="chip">RISQUE</span><h1>Formes graves</h1>
  ${item(I.faint, 'Nourrissons les plus jeunes', RED)}${item(I.hosp, 'Maladie du cœur ou des poumons', RED)}</div>`,
x07: `${brand}<div class="card"><span class="chip">TRAITEMENT</span><h1>Soutenir, rien de plus</h1>
  ${item(I.flask, 'Hydratation et oxygénation', TEAL)}${item(I.warn, 'Corticoïdes, bronchodilatateurs : pas de bénéfice', RED)}${item(I.hosp, 'Haut débit : détresse seulement', TEAL)}</div>`,
x08: `${brand}<div class="card"><span class="chip">À LA MAISON</span><h1>Les bons gestes</h1>
  ${big('Nez lavé au sérum physiologique')}${big('Repas fractionnés', '#0274BB')}${big('Surveiller la respiration', '#2EAD6B')}</div>`,
x09: `${brand}<div class="card"><span class="chip">PRÉVENIR</span><h1>Protéger les plus petits</h1>
  ${big('Lavage des mains', '#2EAD6B')}${big('Éviter les personnes enrhumées', '#0274BB')}${big('Environnement sans fumée', '#E5484D')}</div>`,
x10: outroScene(`Dalziel et al., Lancet 2022 (PMID 35785792)<br>Vidéos : Pixabay`),
};
await render(process.argv[2], scenes);
