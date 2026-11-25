// Fonds de scène de l'épisode 46 (intoxication : premiers gestes). Contenu original. Usage: THEME=brand node scenes_ep46.mjs <outDir>
import { TEAL, RED, GREEN, brand, ico, I, item, hookScene, introScene, outroScene, render } from '../lib.mjs';
const big = (t, c = TEAL) => `<div class="pill" style="font-size:34px;border-color:${c};margin-top:16px">${t}</div>`;
const scenes = {
x01: hookScene(`Votre enfant a avalé<br>un produit ménager<br>ou un médicament…`, `Que faites-vous<div style="color:#13A8A8;margin-top:12px">en premier&nbsp;?</div>`),
x02: introScene(46, `L'<span style="color:${TEAL}">intoxication</span> : les premiers gestes`),
x03: `${brand}<div class="card"><span class="chip red">INTOXICATION</span><h1>Une substance toxique</h1>
  ${item(I.flask, 'Avalée · respirée · peau · yeux', TEAL)}${item(I.syringe, 'Médicaments · produits ménagers · pesticides', TEAL)}${item(I.warn, '≈ 193 000 décès en 2019 (OMS)', RED)}</div>`,
x04: `${brand}<div class="card"><span class="chip">LES GESTES</span><h1>1 · 2 · 3</h1>
  ${item(I.warn, '1. Se protéger · éloigner du danger', TEAL)}${item(I.phone, '2. Appeler secours / centre antipoison', RED)}${item(I.test, '3. Garder l\'emballage', TEAL)}</div>`,
x05: `${brand}<div class="card" style="background:#FFF3F3"><span class="chip red">À NE PAS FAIRE</span><h1 style="color:#8f1d22">4 · Éviter</h1>
  ${item(I.warn, 'Ne pas faire vomir', RED)}${item(I.warn, 'Rien à boire si somnolent', RED)}${item(I.warn, 'Pas de citron ni de vinaigre', RED)}</div>`,
x06: `${brand}<div class="card" style="background:#FFF3F3"><span class="chip red">URGENCE</span><h1 style="color:#8f1d22">5 · Appeler sans attendre</h1>
  ${item(I.dizzy, 'Très somnolent · inconscient', RED)}${item(I.scan, 'Respire mal', RED)}${item(I.faint, 'Convulsions', RED)}</div>`,
x07: `${brand}<div class="card"><span class="chip">MONOXYDE DE CARBONE</span><h1>Gaz invisible</h1>
  ${item(I.warn, 'Sans odeur, sans couleur', RED)}${item(I.dizzy, 'Maux de tête → état critique', RED)}${item(I.scan, 'Traitement : oxygène', TEAL)}</div>`,
x08: `${brand}<div class="card"><span class="chip">PARACÉTAMOL</span><h1>Piège silencieux</h1>
  ${item(I.pale, 'Souvent aucun symptôme au début', TEAL)}${item(I.hosp, 'Foie atteint après plusieurs jours', RED)}${item(I.syringe, 'N-acétylcystéine : efficace si précoce', TEAL)}</div>`,
x09: `${brand}<div class="card"><span class="chip">PRÉVENIR</span><h1>Les bons réflexes</h1>
  ${big('Hors de portée des enfants', '#2EAD6B')}${big('Emballage d\'origine', '#0274BB')}${big('Jamais dans une bouteille d\'eau', '#E5484D')}</div>`,
x10: outroScene(`OMS (données 2019) · MedlinePlus · Chenoweth, Crit Care Clin 2021 (PMID 34053712)<br>Prescott, Br J Clin Pharmacol 2024 (PMID 37683599) · Vidéos : Pixabay`),
};
await render(process.argv[2], scenes);
