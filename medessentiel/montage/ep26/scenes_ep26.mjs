// Fonds de scène de l'épisode 26 (anémie). Usage: THEME=brand node scenes_ep26.mjs <outDir>
import { TEAL, RED, GREEN, brand, ico, I, item, hookScene, introScene, outroScene, render } from '../lib.mjs';
const big = (t, c = TEAL) => `<div class="pill" style="font-size:34px;border-color:${c};margin-top:16px">${t}</div>`;
const row = (a, b, c = TEAL) => `<div class="pill" style="display:flex;justify-content:space-between;align-items:center;border-color:${c};margin-top:12px;font-size:32px;font-weight:800"><span>${a}</span><span style="color:${c}">${b}</span></div>`;
const scenes = {
n01: hookScene(`Toujours fatigué,<br>essoufflé,<br>le teint pâle…`, `Et si c'était<div style="color:#13A8A8;margin-top:12px">une anémie&nbsp;?</div>`),
n02: introScene(26, `L'<span style="color:${TEAL}">anémie</span> : comprendre et agir`),
n03: `${brand}<div class="card"><span class="chip">DÉFINITION</span><h1>Baisse de l'hémoglobine</h1>
  ${item(I.flask, 'Seuil selon l\'âge, le sexe, la grossesse', TEAL)}${row('Dans le monde', '≈ 1 personne sur 4', '#E5484D')}${item(I.faint, 'Enfants < 5 ans · femmes · Afrique subsaharienne, Asie du Sud', TEAL)}</div>`,
n04: `${brand}<div class="card"><span class="chip">LES SIGNES</span><h1>Que ressent-on ?</h1>
  ${item(I.faint, 'Fatigue · pâleur · froid', TEAL)}${item(I.scan, 'Essoufflement à l\'effort · palpitations', TEAL)}${item(I.dizzy, 'Vertiges · maux de tête', TEAL)}${item(I.warn, 'Malaise · douleur thoracique : urgence', RED)}</div>`,
n05: `${brand}<div class="card"><span class="chip">CAUSES</span><h1>Pourquoi ?</h1>
  ${item(I.flask, 'Carence en fer : la plus fréquente', TEAL)}${item(I.warn, 'Saignements : règles abondantes, digestif', RED)}${item(I.test, 'Carences B12 · folates · maladies chroniques', TEAL)}${item(I.rep, 'Drépanocytose · thalassémie · paludisme · parasites', TEAL)}</div>`,
n06: `${brand}<div class="card"><span class="chip">DIAGNOSTIC</span><h1>Une prise de sang</h1>
  ${item(I.test, 'NFS : hémoglobine, globules rouges', TEAL)}${item(I.flask, 'Ferritine · réticulocytes · B12 · folates', TEAL)}${item(I.warn, 'Toujours chercher la cause', RED)}${item(I.hosp, 'Homme, femme ménopausée : chercher un saignement digestif', RED)}</div>`,
n07: `${brand}<div class="card"><span class="chip">TRAITEMENT</span><h1>Selon la cause</h1>
  ${item(I.flask, 'Carence en fer : fer par voie orale en 1re intention', TEAL)}${item(I.syringe, 'Fer intraveineux : certaines situations', TEAL)}${item(I.hosp, 'Transfusion : formes sévères', TEAL)}${item(I.warn, 'Pas de fer sans avis médical', RED)}</div>`,
n08: `${brand}<div class="card"><span class="chip">ABSORBER LE FER</span><h1>Dans l'assiette</h1>
  ${big('Viande · poisson · légumineuses · légumes verts')}${big('Avec de la vitamine C', '#2EAD6B')}${big('Pas de thé ni de café pendant les repas', '#E5484D')}</div>`,
n09: `${brand}<div class="card"><span class="chip">À RETENIR</span><h1>Repérer · Dépister · Traiter</h1>
  ${big('Fatigue, pâleur, essoufflement')}${big('Prise de sang', '#0274BB')}${big('Chercher la cause', '#E5484D')}</div>`,
n10: outroScene(`GBD 2021 — Lancet Haematol 2023 (PMID 37536353)<br>Pasricha et al., Lancet 2021 (PMID 33285139)<br>OMS — seuils d'hémoglobine (2024)`),
};
await render(process.argv[2], scenes);
