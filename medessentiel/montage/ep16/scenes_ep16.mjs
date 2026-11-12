// Fonds de scène de l'épisode 16 (triglycérides élevés). Usage: THEME=brand node scenes_ep16.mjs <outDir>
import { TEAL, RED, GREEN, brand, ico, I, item, hookScene, introScene, outroScene, render } from '../lib.mjs';
const big = (t, c = TEAL) => `<div class="pill" style="font-size:34px;border-color:${c};margin-top:16px">${t}</div>`;
const lvl = (a, b, c) => `<div class="pill" style="display:flex;justify-content:space-between;align-items:center;border-color:${c};margin-top:12px;font-size:32px;font-weight:800"><span>${a}</span><span style="color:${c}">${b}</span></div>`;
const scenes = {
y01: hookScene(`Prise de sang<br>un résultat en gras<br>aucun symptôme`, `Triglycérides<div style="color:#13A8A8;margin-top:12px">trop élevés&nbsp;?</div>`),
y02: introScene(16, `Les <span style="color:${TEAL}">triglycérides</span> élevés`),
y03: `${brand}<div class="card"><span class="chip">DÉFINITION</span><h1>Une graisse du sang</h1>
  ${item(I.flask, 'Type de graisse qui circule dans le sang', TEAL)}${item(I.clock, 'Le corps en a besoin pour fabriquer de l\'énergie', TEAL)}${item(I.warn, 'Trop élevés : risque cardiovasculaire et complications', RED)}</div>`,
y04: `${brand}<div class="card"><span class="chip red">SIGNES</span><h1>Le plus souvent : aucun</h1>
  ${item(I.syringe, 'Détectés par une prise de sang', TEAL)}${item(I.warn, 'Taux extrême : douleur du haut du ventre', RED)}${item(I.pale, 'Nausées · vomissements', RED)}${item(I.flask, 'Parfois pancréatite (inflammation du pancréas)', RED)}</div>`,
y05: `${brand}<div class="card"><span class="chip">SIGNES VISIBLES</span><h1>Sur la peau et le foie</h1>
  ${item(I.scan, 'Petites bosses jaunes : fesses, cuisses, coudes, genoux', TEAL)}${item(I.scan, 'Taches jaunes sur les paupières', TEAL)}${item(I.hosp, 'Parfois foie ou rate augmentés de volume', TEAL)}</div>`,
y06: `${brand}<div class="card"><span class="chip">REPÈRES</span><h1>Quel taux&nbsp;?</h1>
  ${lvl('&lt; 150 mg/dL', 'Normal', '#2EAD6B')}${lvl('150–199', 'Limite haute', '#F5B82E')}${lvl('200–499', 'Élevé', '#E8833A')}${lvl('≥ 500', 'Très élevé', '#E5484D')}
  <p class="sub" style="font-size:24px;margin-top:8px">mg/dL ÷ 100 ≈ g/L · seuils variables selon les recommandations.</p></div>`,
y07: `${brand}<div class="card"><span class="chip">CAUSES</span><h1>Pourquoi ça monte</h1>
  ${item(I.flask, 'Sucres et boissons sucrées', TEAL)}${item(I.smoke, 'Alcool · graisses saturées', TEAL)}${item(I.clock, 'Surpoids · manque d\'activité', TEAL)}${item(I.test, 'Diabète · certains médicaments', TEAL)}</div>`,
y08: `${brand}<div class="card"><span class="chip">AGIR</span><h1>Les faire baisser</h1>
  ${item(I.flask, 'Moins de sucre et de boissons sucrées', TEAL)}${item(I.smoke, 'Limiter l\'alcool · arrêter le tabac', TEAL)}${item(I.rep, 'Poisson riche en oméga-3 · poids sain', TEAL)}${item(I.clock, 'Bouger régulièrement', TEAL)}
  <p class="sub" style="font-size:24px;margin-top:6px">Traitement médical si besoin : jamais de votre propre initiative.</p></div>`,
y09: `${brand}<div class="card"><span class="chip red">LE POINT ESSENTIEL</span><h1>N'attendez pas les symptômes</h1>
  ${big('Faites un bilan lipidique.')}${big('≥ 500 mg/dL (5 g/L) : risque de pancréatite', RED)}${big('Surtout au-delà de 1 000 mg/dL (10 g/L)', RED)}</div>`,
y10: `${brand}<div class="card" style="background:#FFF3F3"><span class="chip red">URGENCES</span><h1 style="color:#8f1d22">Sans attendre</h1>
  ${item(I.warn, 'Douleur intense du haut du ventre', RED)}${item(I.pale, 'Avec nausées ou vomissements', RED)}${item(I.hosp, 'Surtout si triglycérides très élevés connus : urgences', RED)}</div>`,
y11: `${brand}<div class="card"><span class="chip">À RETENIR</span><h1>Bilan · sucre · alcool</h1>
  ${big('Bilan lipidique régulier.')}${big('Moins de sucre, moins d\'alcool, plus de mouvement.', '#0274BB')}</div>`,
y12: outroScene(`Seuils usuels (NCEP ATP III / AHA ; sociétés de cardiologie)<br>(à vérifier sur les textes intégraux)`),
};
await render(process.argv[2], scenes);
