// Fonds de scène de l'épisode 50 (maux de tête : types fréquents et signes d'alarme). Contenu original (visuel tiers non repris). Usage: THEME=brand node scenes_ep50.mjs <outDir>
import { TEAL, RED, GREEN, brand, ico, I, item, hookScene, introScene, outroScene, render } from '../lib.mjs';
const OR = '#E8912D';
const tag = (t, c) => `<span style="display:inline-block;padding:6px 20px;border-radius:999px;background:${c};color:#fff;font-weight:900;font-size:28px;letter-spacing:1px">${t}</span>`;
const scenes = {
x01: hookScene(`Mal de tête…<br>banal<br>ou inquiétant&nbsp;?`, `Comment<div style="color:#13A8A8;margin-top:12px">faire la différence&nbsp;?</div>`),
x02: introScene(50, `Maux de tête : les <span style="color:${TEAL}">signes d'alarme</span>`),
x03: `${brand}<div class="card"><span class="chip">PRIMAIRES</span><h1>Pas d'autre maladie</h1>
  ${item(I.dizzy, 'Céphalée de tension : la plus fréquente', TEAL)}${item(I.test, 'Revue 2021 (Neurologia)', TEAL)}</div>`,
x04: `${brand}<div class="card"><span class="chip">MIGRAINE</span><h1>Crises à plusieurs phases</h1>
  ${item(I.dizzy, 'Douleur de la tête', TEAL)}${item(I.scan, 'Symptômes neurologiques', TEAL)}${item(I.flask, 'Mécanismes mieux compris (Lancet 2018)', GREEN)}</div>`,
x05: `${brand}<div class="card"><span class="chip red">ALGIE VASCULAIRE</span><h1>Rare · très sévère</h1>
  ${item(I.warn, 'Crises répétées, un seul côté', RED)}${item(I.faint, 'Œil qui larme · nez qui coule', TEAL)}${item(I.hosp, 'Nouveaux traitements (Lancet Neurol 2024)', TEAL)}</div>`,
x06: `${brand}<div class="card"><span class="chip">SECONDAIRES</span><h1>Une minorité</h1>
  ${item(I.warn, 'Causées par une autre maladie', RED)}${item(I.test, 'Liste de signaux d\'alarme : SNNOOP10', TEAL)}</div>`,
x07: `${brand}<div class="card" style="background:#FFF3F3"><span class="chip red">SIGNAUX D'ALARME</span><h1 style="color:#8f1d22">À repérer (1/2)</h1>
  ${item(I.pale, 'Fièvre · antécédent de cancer', RED)}${item(I.dizzy, 'Déficit neurologique · baisse de conscience', RED)}${item(I.warn, 'Début brutal · après 65 ans', RED)}${item(I.scan, 'Changement · position · toux/effort', RED)}</div>`,
x08: `${brand}<div class="card" style="background:#FFF3F3"><span class="chip red">SIGNAUX D'ALARME</span><h1 style="color:#8f1d22">À repérer (2/2)</h1>
  ${item(I.faint, 'Grossesse récente · traumatisme', RED)}${item(I.syringe, 'Immunité affaiblie', RED)}${item(I.warn, 'Antalgiques en excès', RED)}</div>`,
x09: `${brand}<div class="card" style="background:#FFF3F3"><span class="chip red">URGENCE</span><h1 style="color:#8f1d22">Coup de tonnerre</h1>
  ${item(I.warn, 'Intensité maximale en quelques instants', RED)}${item(I.dizzy, 'Peut révéler une hémorragie cérébrale', RED)}${item(I.phone, 'Secours · urgences', RED)}<div style="margin-top:22px">${tag('MAL DE TÊTE BANAL : EN PARLER AU MÉDECIN', OR)}</div></div>`,
x10: outroScene(`Cumplido-Trasmonte 2021 (PMID 34537167) · Dodick, Lancet 2018 (PMID 29523342)<br>Petersen, Lancet Neurol 2024 (PMID 38876749) · Do, Neurology 2019 (PMID 30587518)<br>Vidéos : Pixabay`),
};
await render(process.argv[2], scenes);
