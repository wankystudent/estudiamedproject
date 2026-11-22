// Fonds de scène de l'épisode 23 (fièvre de l'enfant). Usage: THEME=brand node scenes_ep23.mjs <outDir>
import { TEAL, RED, GREEN, brand, ico, I, item, hookScene, introScene, outroScene, render } from '../lib.mjs';
const big = (t, c = TEAL) => `<div class="pill" style="font-size:34px;border-color:${c};margin-top:16px">${t}</div>`;
const scenes = {
f01: hookScene(`Votre enfant<br>a 39 de fièvre…`, `La faire baisser<div style="color:#13A8A8;margin-top:12px">à tout prix&nbsp;?</div>`),
f02: introScene(23, `La <span style="color:${TEAL}">fièvre</span> de l'enfant`),
f03: `${brand}<div class="card"><span class="chip">À SAVOIR</span><h1>La fièvre n'est pas la maladie</h1>
  ${item(I.rep, 'Mécanisme de défense contre l\'infection', TEAL)}${item(I.test, 'Pas de preuve qu\'elle aggrave la maladie', TEAL)}${item(I.scan, 'Pas de séquelle neurologique à long terme démontrée', TEAL)}</div>`,
f04: `${brand}<div class="card"><span class="chip">OBJECTIF</span><h1>Le confort, pas le chiffre</h1>
  ${big('Confort de l\'enfant avant tout')}${big('Pas de « température normale » à tout prix', '#0274BB')}</div>`,
f05: `${brand}<div class="card"><span class="chip">À LA MAISON</span><h1>Les bons réflexes</h1>
  ${item(I.faint, 'Observer : joue, réagit, sourit ?', TEAL)}${item(I.flask, 'Proposer à boire régulièrement', TEAL)}${item(I.pale, 'Ne pas trop couvrir', TEAL)}</div>`,
f06: `${brand}<div class="card"><span class="chip">MÉDICAMENTS</span><h1>Si l'enfant est inconfortable</h1>
  ${item(I.syringe, 'Paracétamol ou ibuprofène : efficacité comparable', TEAL)}${item(I.warn, 'Les associer : plus de risque d\'erreur', RED)}${item(I.test, 'Dose selon le poids, avec le dispositif fourni', TEAL)}${item(I.warn, 'Pas d\'aspirine sans avis médical', RED)}</div>`,
f07: `${brand}<div class="card" style="background:#FFF3F3"><span class="chip red">CONSULTER</span><h1 style="color:#8f1d22">Sans attendre</h1>
  ${item(I.hosp, 'Moins de 3 mois : en urgence', RED)}${item(I.scan, 'Gêne respiratoire · nuque raide', RED)}${item(I.pale, 'Somnolence · taches qui ne s\'effacent pas', RED)}${item(I.warn, 'Convulsions · vomissements · refuse de boire', RED)}${item(I.clock, 'Fièvre > 3 jours', RED)}</div>`,
f08: `${brand}<div class="card"><span class="chip">À RETENIR</span><h1>Observer · Hydrater · Consulter</h1>
  ${big('Défense de l\'organisme')}${big('Confort avant le chiffre', '#0274BB')}${big('Signes de gravité : consulter', '#E5484D')}</div>`,
f09: outroScene(`AAP — Sullivan & Farrar, Pediatrics 2011 (PMID 21357332)<br>Signes d'alerte : recommandations pédiatriques usuelles`),
};
await render(process.argv[2], scenes);
