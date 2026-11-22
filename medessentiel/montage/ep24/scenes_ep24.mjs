// Fonds de scène de l'épisode 24 (hypoglycémie). Usage: THEME=brand node scenes_ep24.mjs <outDir>
import { TEAL, RED, GREEN, brand, ico, I, item, hookScene, introScene, outroScene, render } from '../lib.mjs';
const big = (t, c = TEAL) => `<div class="pill" style="font-size:34px;border-color:${c};margin-top:16px">${t}</div>`;
const row = (a, b, c = TEAL) => `<div class="pill" style="display:flex;justify-content:space-between;align-items:center;border-color:${c};margin-top:12px;font-size:32px;font-weight:800"><span>${a}</span><span style="color:${c}">${b}</span></div>`;
const scenes = {
h01: hookScene(`Sueurs froides,<br>tremblements,<br>faim soudaine…`, `Et si c'était<div style="color:#13A8A8;margin-top:12px">une hypoglycémie&nbsp;?</div>`),
h02: introScene(24, `L'<span style="color:${TEAL}">hypoglycémie</span> : reconnaître et réagir`),
h03: `${brand}<div class="card"><span class="chip">DÉFINITION</span><h1>Un taux de sucre trop bas</h1>
  ${row('Hypoglycémie', '< 70 mg/dL (3,9 mmol/L)', '#F5B82E')}${row('Significative', '< 54 mg/dL (3,0 mmol/L)', '#E5484D')}${row('Sévère', 'aide d\'un tiers', '#E5484D')}</div>`,
h04: `${brand}<div class="card"><span class="chip">CAUSES</span><h1>Surtout chez le diabétique traité</h1>
  ${item(I.syringe, 'Insuline ou certains comprimés', TEAL)}${item(I.clock, 'Repas sauté · effort inhabituel', TEAL)}${item(I.warn, 'Dose trop forte · alcool', RED)}</div>`,
h05: `${brand}<div class="card"><span class="chip">LES SIGNES</span><h1>Du corps au cerveau</h1>
  ${item(I.pale, 'Tremblements · sueurs · palpitations · faim', TEAL)}${item(I.dizzy, 'Concentration, vision trouble, maux de tête', RED)}${item(I.faint, 'Convulsions · perte de connaissance', RED)}</div>`,
h06: `${brand}<div class="card"><span class="chip">CONSCIENT</span><h1>La règle des 15</h1>
  ${big('15 g de sucre rapide')}${big('3 morceaux de sucre · ½ verre de jus', '#0274BB')}${big('Recontrôler après 15 minutes', '#2EAD6B')}
  <p class="sub" style="font-size:24px;margin-top:10px">Pas de chocolat ni d'aliments gras.</p></div>`,
h07: `${brand}<div class="card" style="background:#FFF3F3"><span class="chip red">INCONSCIENT</span><h1 style="color:#8f1d22">Rien dans la bouche</h1>
  ${item(I.faint, 'Position latérale de sécurité', RED)}${item(I.phone, 'Appeler les secours', RED)}${item(I.syringe, 'Glucagon si prescrit et formé', RED)}</div>`,
h08: `${brand}<div class="card"><span class="chip">APRÈS</span><h1>Prévenir la récidive</h1>
  ${item(I.hosp, 'En parler au médecin, sans arrêter le traitement', TEAL)}${item(I.flask, 'Toujours du sucre sur soi · carte ou bracelet', TEAL)}${item(I.scan, 'Capteur de glucose avec alarmes', TEAL)}</div>`,
h09: `${brand}<div class="card"><span class="chip">À RETENIR</span><h1>Reconnaître · Resucrer · Alerter</h1>
  ${big('15 g de sucre rapide')}${big('Recontrôler à 15 minutes', '#0274BB')}${big('Inconscient : secours', '#E5484D')}</div>`,
h10: outroScene(`ADA/EASD — position statement, Diabetologia 2017 (PMID 27872948)<br>CGM : Wilson et al., Diabetes Ther 2025 (PMID 40238078)<br>Règle des 15 : recommandations usuelles`),
};
await render(process.argv[2], scenes);
