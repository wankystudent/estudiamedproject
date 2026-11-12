// Fonds de scène de l'épisode 14 (hypertension artérielle). Usage: THEME=brand node scenes_ep14.mjs <outDir>
import { TEAL, RED, GREEN, brand, ico, I, item, hookScene, introScene, outroScene, render } from '../lib.mjs';
const big = (t, c = TEAL) => `<div class="pill" style="font-size:34px;border-color:${c};margin-top:16px">${t}</div>`;
const scenes = {
h01: hookScene(`Tension élevée<br>mais aucun<br>symptôme`, `Faut-il<div style="color:#13A8A8;margin-top:12px">s'inquiéter&nbsp;?</div>`),
h02: introScene(14, `L'<span style="color:${TEAL}">hypertension</span> artérielle`),
h03: `${brand}<div class="card"><span class="chip">DÉFINITION</span><h1>Les deux chiffres</h1>
  ${item(I.rep, 'Systolique : le cœur se contracte', TEAL)}${item(I.clock, 'Diastolique : le cœur se relâche', TEAL)}${big('Cabinet : ≥ 140/90 mmHg')}${big('Domicile : ≈ 135/85 mmHg', '#0274BB')}
  <p class="sub" style="font-size:24px;margin-top:6px">Seuils HAS ; diagnostic posé par le médecin, confirmé hors cabinet.</p></div>`,
h04: `${brand}<div class="card"><span class="chip red">TUEUR SILENCIEUX</span><h1>Souvent aucun signe</h1>
  ${item(I.faint, 'Accident vasculaire cérébral', RED)}${item(I.rep, 'Infarctus · insuffisance cardiaque', RED)}${item(I.flask, 'Insuffisance rénale', RED)}${item(I.scan, 'Atteinte des yeux', RED)}</div>`,
h05: `${brand}<div class="card"><span class="chip">CAUSES</span><h1>Un faisceau de facteurs</h1>
  ${item(I.clock, 'Âge · hérédité', TEAL)}${item(I.flask, 'Excès de sel · surpoids', TEAL)}${item(I.smoke, 'Alcool · tabac · sédentarité', TEAL)}${item(I.hosp, 'Parfois : maladie des reins ou des surrénales', TEAL)}</div>`,
h06: `${brand}<div class="card"><span class="chip">BIEN MESURER</span><h1>5 minutes au calme</h1>
  ${item(I.clock, 'Assis, dos soutenu, jambes non croisées', TEAL)}${item(I.rep, 'Bras à hauteur du cœur, brassard adapté', TEAL)}${item(I.smoke, 'Ni café ni tabac 30 min avant', TEAL)}${item(I.test, '2 mesures, notez les résultats', TEAL)}</div>`,
h07: `${brand}<div class="card"><span class="chip">AGIR</span><h1>Mode de vie d'abord</h1>
  ${item(I.flask, 'Moins de 5 g de sel par jour (OMS), moins de plats industriels', TEAL)}${item(I.clock, 'Marche rapide la plupart des jours', TEAL)}${item(I.smoke, 'Limiter l\'alcool · arrêter le tabac', TEAL)}${item(I.syringe, 'Traitement si besoin : ne jamais l\'arrêter seul', TEAL)}</div>`,
h08: `${brand}<div class="card" style="background:#FFF3F3"><span class="chip red">URGENCES</span><h1 style="color:#8f1d22">Tension très élevée +</h1>
  ${item(I.warn, 'Douleur dans la poitrine · essoufflement', RED)}${item(I.dizzy, 'Mal de tête brutal', RED)}${item(I.faint, 'Faiblesse d\'un côté · trouble de la parole ou de la vue', RED)}</div>`,
h09: `${brand}<div class="card"><span class="chip">À RETENIR</span><h1>Mesurez · suivez</h1>
  ${big('Ne comptez pas sur les symptômes.')}${big('Une tension élevée se corrige.', '#0274BB')}</div>`,
h10: outroScene(`HAS — HTA de l'adulte · OMS (sel) · ESC<br>(à vérifier sur les textes intégraux)`),
};
await render(process.argv[2], scenes);
