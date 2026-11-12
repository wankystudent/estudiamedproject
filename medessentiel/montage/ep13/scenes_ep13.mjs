// Fonds de scène de l'épisode 13 (prééclampsie). Usage: THEME=brand node scenes_ep13.mjs <outDir>
import { TEAL, RED, GREEN, brand, ico, I, item, hookScene, introScene, outroScene, render } from '../lib.mjs';
const big = (t, c = TEAL) => `<div class="pill" style="font-size:34px;border-color:${c};margin-top:16px">${t}</div>`;
const scenes = {
r01: hookScene(`Maux de tête<br>points brillants<br>chevilles gonflées`, `Fatigue de la grossesse<div style="color:#13A8A8;margin-top:12px">ou prééclampsie&nbsp;?</div>`),
r02: introScene(13, `La <span style="color:${TEAL}">prééclampsie</span>`),
r03: `${brand}<div class="card"><span class="chip">DÉFINITION</span><h1>Maladie de la grossesse</h1>
  ${item(I.clock, 'Apparaît après 20 semaines', TEAL)}${item(I.rep, 'Hypertension : ≥ 140/90 mmHg', TEAL)}${item(I.flask, 'Atteinte d\'un organe : protéinurie, foie, reins, cerveau', TEAL)}
  <p class="sub" style="font-size:24px;margin-top:6px">Les critères varient selon les définitions.</p></div>`,
r04: `${brand}<div class="card"><span class="chip red">POURQUOI GRAVE</span><h1>Placenta et vaisseaux</h1>
  ${item(I.warn, 'Retard de croissance du bébé', RED)}${item(I.bandage, 'Décollement du placenta', RED)}${item(I.faint, 'Éclampsie : convulsions', RED)}${item(I.flask, 'HELLP : foie + plaquettes', RED)}</div>`,
r05: `${brand}<div class="card"><span class="chip red">SIGNES D'ALERTE</span><h1>À ne pas ignorer</h1>
  ${item(I.dizzy, 'Maux de tête intenses et persistants', RED)}${item(I.scan, 'Troubles de la vue : points brillants, vision floue', RED)}${item(I.warn, 'Douleur sous les côtes à droite ou au creux de l\'estomac', RED)}${item(I.pale, 'Nausées · gonflement brutal du visage et des mains', RED)}
  <p class="sub" style="font-size:24px;margin-top:6px">Elle peut être silencieuse : tension à chaque consultation.</p></div>`,
r06: `${brand}<div class="card"><span class="chip">FACTEURS DE RISQUE</span><h1>Qui est concerné&nbsp;?</h1>
  ${item(I.rep, 'Première grossesse · antécédent de prééclampsie', TEAL)}${item(I.test, 'Hypertension ou diabète · maladie rénale', TEAL)}${item(I.hosp, 'Jumeaux · obésité · âge maternel élevé', TEAL)}</div>`,
r07: `${brand}<div class="card"><span class="chip">DIAGNOSTIC</span><h1>Comment confirme-t-on&nbsp;?</h1>
  ${item(I.rep, 'Mesure de la tension', TEAL)}${item(I.flask, 'Protéines dans les urines', TEAL)}${item(I.syringe, 'Prise de sang : foie, reins, plaquettes', TEAL)}${item(I.scan, 'Bébé : échographie et monitoring', TEAL)}</div>`,
r08: `${brand}<div class="card"><span class="chip">TRAITEMENT</span><h1>Le seul qui guérit</h1>
  ${big('L\'accouchement, avec le placenta')}${item(I.clock, 'Moment décidé selon gravité et terme', TEAL)}${item(I.syringe, 'Antihypertenseurs compatibles avec la grossesse', TEAL)}${item(I.hosp, 'Forme sévère : sulfate de magnésium', TEAL)}</div>`,
r09: `${brand}<div class="card"><span class="chip">PRÉVENTION</span><h1>Suivi prénatal</h1>
  ${item(I.syringe, 'Haut risque : aspirine faible dose, sur avis médical', TEAL)}${item(I.warn, 'Jamais sans avis médical', RED)}${item(I.hosp, 'Consultations régulières', TEAL)}</div>`,
r10: `${brand}<div class="card" style="background:#FFF3F3"><span class="chip red">URGENCES</span><h1 style="color:#8f1d22">Sans attendre</h1>
  ${item(I.dizzy, 'Maux de tête violents · troubles visuels', RED)}${item(I.warn, 'Douleur au creux de l\'estomac · visage gonflé', RED)}${item(I.faint, 'Convulsions', RED)}${item(I.phone, 'Moins de mouvements du bébé : appelez la maternité', RED)}</div>`,
r11: `${brand}<div class="card"><span class="chip">À RETENIR</span><h1>Tension · tête · vision</h1>
  ${big('Douleur sous les côtes : appelez.')}${big('Le suivi continue après l\'accouchement.', '#0274BB')}</div>`,
r12: outroScene(`Définitions : ACOG, ISSHP, HAS (à vérifier sur les textes intégraux)`),
};
await render(process.argv[2], scenes);
