// Fonds de scène de l'épisode 27 (paludisme). Usage: THEME=brand node scenes_ep27.mjs <outDir>
import { TEAL, RED, GREEN, brand, ico, I, item, hookScene, introScene, outroScene, render } from '../lib.mjs';
const big = (t, c = TEAL) => `<div class="pill" style="font-size:34px;border-color:${c};margin-top:16px">${t}</div>`;
const row = (a, b, c = TEAL) => `<div class="pill" style="display:flex;justify-content:space-between;align-items:center;border-color:${c};margin-top:12px;font-size:32px;font-weight:800"><span>${a}</span><span style="color:${c}">${b}</span></div>`;
const scenes = {
m01: hookScene(`Fièvre, frissons,<br>maux de tête…<br>au retour d'une zone à risque`, `Et si c'était<div style="color:#13A8A8;margin-top:12px">un paludisme&nbsp;?</div>`),
m02: introScene(27, `Le <span style="color:${TEAL}">paludisme</span> : reconnaître et agir`),
m03: `${brand}<div class="card"><span class="chip">LA MALADIE</span><h1>Parasite + moustique</h1>
  ${item(I.flask, 'Anophèle femelle · piqûres du crépuscule et de la nuit', TEAL)}${row('Cas estimés (2019)', '≈ 232 millions', '#E5484D')}${row('Dans la région Afrique', '94 %', '#E5484D')}${item(I.warn, 'Enfants < 5 ans : risque de décès sans traitement rapide', RED)}</div>`,
m04: `${brand}<div class="card"><span class="chip">LES SIGNES</span><h1>Fièvre = suspect</h1>
  ${item(I.pale, 'Fièvre · frissons · sueurs', TEAL)}${item(I.dizzy, 'Maux de tête · douleurs musculaires', TEAL)}${item(I.faint, 'Nausées · vomissements', TEAL)}${item(I.warn, 'Après un séjour en zone d\'endémie', RED)}</div>`,
m05: `${brand}<div class="card" style="background:#FFF3F3"><span class="chip red">FORMES GRAVES</span><h1 style="color:#8f1d22">Urgence</h1>
  ${item(I.dizzy, 'Confusion · convulsions', RED)}${item(I.scan, 'Difficulté à respirer', RED)}${item(I.pale, 'Jaunisse · urines foncées · anémie sévère', RED)}${item(I.faint, 'Enfants < 5 ans · femmes enceintes', RED)}</div>`,
m06: `${brand}<div class="card"><span class="chip">DIAGNOSTIC</span><h1>Chercher le parasite</h1>
  ${item(I.test, 'Test de diagnostic rapide', TEAL)}${item(I.flask, 'Frottis et goutte épaisse', TEAL)}${item(I.clock, 'Sans attendre devant toute fièvre suspecte', RED)}</div>`,
m07: `${brand}<div class="card"><span class="chip">TRAITEMENT</span><h1>Selon l'espèce et la gravité</h1>
  ${item(I.syringe, 'Forme simple à P. falciparum : association à base d\'artémisinine', TEAL)}${item(I.hosp, 'Forme grave : artésunate intraveineux', RED)}${item(I.warn, 'Protocoles nationaux · pas d\'automédication', RED)}</div>`,
m08: `${brand}<div class="card"><span class="chip">PRÉVENIR</span><h1>Se protéger</h1>
  ${big('Moustiquaire imprégnée')}${big('Répulsifs · vêtements couvrants', '#0274BB')}${big('Éliminer les eaux stagnantes', '#2EAD6B')}
  <p class="sub" style="font-size:24px;margin-top:8px">Voyageurs : prévention adaptée avant le départ. Vaccins OMS pour les enfants en zone d'endémie.</p></div>`,
m09: `${brand}<div class="card"><span class="chip">À RETENIR</span><h1>Fièvre = tester</h1>
  ${big('Test sanguin sans attendre')}${big('Signes graves : urgence', '#E5484D')}${big('Se protéger des moustiques', '#2EAD6B')}</div>`,
m10: outroScene(`OMS — Rapport mondial sur le paludisme (via Danis, Med Trop Santé Int 2023, PMID 37525676)<br>Artésunate IV — Hess et al., Ann Pharmacother 2010 (PMID 20551300)`),
};
await render(process.argv[2], scenes);
