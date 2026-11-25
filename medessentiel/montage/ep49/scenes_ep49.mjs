// Fonds de scène de l'épisode 49 (Un peu d'Histoire : Hippocrate). Contenu original. Usage: THEME=brand node scenes_ep49.mjs <outDir>
import { TEAL, RED, GREEN, brand, ico, I, item, hookScene, introScene, outroScene, render } from '../lib.mjs';
const OR = '#E8912D';
const tag = (t, c) => `<span style="display:inline-block;padding:6px 20px;border-radius:999px;background:${c};color:#fff;font-weight:900;font-size:28px;letter-spacing:1px">${t}</span>`;
const row = (a, b, c = TEAL) => `<div class="pill" style="display:flex;justify-content:space-between;align-items:center;border-color:${c};margin-top:16px;font-size:30px;font-weight:800"><span>${a}</span><span style="color:${c};text-align:right">${b}</span></div>`;
const scenes = {
x01: hookScene(`Presque tous les médecins<br>connaissent son serment…`, `Mais l'a-t-il<div style="color:#13A8A8;margin-top:12px">vraiment écrit&nbsp;?</div>`),
x02: introScene(49, `Un peu d'histoire : <span style="color:${TEAL}">Hippocrate</span>`),
x03: `${brand}<div class="card"><span class="chip">QUI ÉTAIT-IL ?</span><h1>Père de la médecine</h1>
  ${row('Naissance', '≈ 460 av. J.-C.', TEAL)}${row('Lieu', 'île de Cos (Grèce)', TEAL)}<div style="margin-top:22px">${tag('VIE : EN PARTIE INCERTAINE', OR)}</div></div>`,
x04: `${brand}<div class="card"><span class="chip">LE CORPUS</span><h1>+ de 60 textes</h1>
  ${item(I.test, 'Corpus hippocratique', TEAL)}${item(I.hosp, 'Rassemblé à l\'époque hellénistique', TEAL)}</div>`,
x05: `${brand}<div class="card"><span class="chip">AUTEUR ?</span><h1>Qui a écrit quoi ?</h1>
  ${item(I.scan, 'Certains textes : peut-être Hippocrate', TEAL)}${item(I.warn, 'Lesquels ? Débattu', RED)}<div style="margin-top:22px">${tag('AUTEURS MULTIPLES', OR)}</div></div>`,
x06: `${brand}<div class="card"><span class="chip">SA MÉDECINE</span><h1>Observer le malade</h1>
  ${item(I.test, 'Histoires de cas', TEAL)}${item(I.syringe, 'Suivi des traitements', TEAL)}${item(I.scan, 'Pronostic : évolution probable', TEAL)}</div>`,
x07: `${brand}<div class="card"><span class="chip">EXEMPLE (2024)</span><h1>Orthopédie et traumatologie</h1>
  ${item(I.hosp, 'Réduction des fractures et luxations', TEAL)}${item(I.flask, 'Consolidation osseuse · gangrène', TEAL)}${item(I.faint, 'Infections osseuses · colonne vertébrale', TEAL)}</div>`,
x08: `${brand}<div class="card" style="background:#FFF3F3"><span class="chip red">LE SERMENT</span><h1 style="color:#8f1d22">Pas de lui</h1>
  ${item(I.warn, 'Probablement rédigé après sa mort', RED)}${item(I.hosp, 'Prononcé encore par des étudiants', TEAL)}</div>`,
x09: `${brand}<div class="card"><span class="chip">BILAN</span><h1>Un symbole</h1>
  ${item(I.flask, 'Médecin de Cos, certainement', TEAL)}${item(I.scan, 'Médecine rationnelle : observer, décrire', TEAL)}<div style="margin-top:22px">${tag('FIGURE FONDATRICE', GREEN)}</div></div>`,
x10: outroScene(`Koutserimpas et al., Surg Innov 2024 (PMID 37978930)<br>Encyclopédies (World History, Wikipedia) · Vidéos : Pixabay (illustratif)`),
};
await render(process.argv[2], scenes);
