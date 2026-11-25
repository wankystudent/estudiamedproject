// Fonds de scène de l'épisode 48 (Un peu d'Histoire : Imhotep). Contenu original (visuel tiers non repris). Usage: THEME=brand node scenes_ep48.mjs <outDir>
import { TEAL, RED, GREEN, brand, ico, I, item, hookScene, introScene, outroScene, render } from '../lib.mjs';
const OR = '#E8912D';
const tag = (t, c) => `<span style="display:inline-block;padding:6px 20px;border-radius:999px;background:${c};color:#fff;font-weight:900;font-size:28px;letter-spacing:1px">${t}</span>`;
const row = (a, b, c = TEAL) => `<div class="pill" style="display:flex;justify-content:space-between;align-items:center;border-color:${c};margin-top:16px;font-size:30px;font-weight:800"><span>${a}</span><span style="color:${c};text-align:right">${b}</span></div>`;
const scenes = {
x01: hookScene(`Il y a ≈ 4 700 ans,<br>il aurait bâti<br>la première grande pyramide…`, `Premier médecin<div style="color:#13A8A8;margin-top:12px">de l'histoire&nbsp;?</div>`),
x02: introScene(48, `Un peu d'histoire : <span style="color:${TEAL}">Imhotep</span>`),
x03: `${brand}<div class="card"><span class="chip">QUI ÉTAIT-IL ?</span><h1>IIIe dynastie</h1>
  ${row('Pharaon', 'Djoser (≈ 2650 av. J.-C.)', TEAL)}${row('Vizir', 'principal ministre', TEAL)}${row('Grand prêtre', 'chef des bâtisseurs', TEAL)}</div>`,
x04: `${brand}<div class="card"><span class="chip">ARCHITECTE</span><h1>Pyramide à degrés</h1>
  ${item(I.hosp, 'Saqqarah : conception attribuée à Imhotep', TEAL)}${item(I.scan, '1er architecte connu par son nom', TEAL)}<div style="margin-top:22px">${tag('GÉNÉRALEMENT ADMIS · PAS CERTAIN', OR)}</div></div>`,
x05: `${brand}<div class="card"><span class="chip">TRADITION</span><h1>Médecin ?</h1>
  ${item(I.test, 'Médecin principal, comme grand prêtre (on croit)', TEAL)}${item(I.flask, 'Fondateur de la médecine égyptienne', TEAL)}${item(I.syringe, 'Auteur du papyrus Smith', TEAL)}<div style="margin-top:22px">${tag('ATTRIBUTIONS NON PROUVÉES', OR)}</div></div>`,
x06: `${brand}<div class="card" style="background:#FFF3F3"><span class="chip red">ATTENTION</span><h1 style="color:#8f1d22">Réputation tardive</h1>
  ${item(I.warn, 'Aucun document de son époque : « médecin »', RED)}${item(I.hosp, '≈ 3 000 ans de glorification', RED)}${item(I.dizzy, 'Divinisé', RED)}</div>`,
x07: `${brand}<div class="card"><span class="chip">PAPYRUS</span><h1>Ebers et Smith</h1>
  ${row('Début du Nouvel Empire', '≈ 1 000 ans après', TEAL)}${row('Textes en partie', 'dès l\'Ancien Empire', GREEN)}</div>`,
x08: `${brand}<div class="card"><span class="chip">MÉDECINE ÉGYPTIENNE</span><h1>Observer pour soigner</h1>
  ${item(I.test, 'Antécédents · examen manuel', TEAL)}${item(I.scan, 'Signes cliniques → diagnostic', TEAL)}${item(I.syringe, 'Plaies soignées par étapes · hygiène', TEAL)}</div>`,
x09: `${brand}<div class="card"><span class="chip">THÉORIE DES CANAUX</span><h1>Précurseur des humeurs</h1>
  ${item(I.flask, 'Circulation libre des liquides = santé', TEAL)}${item(I.hosp, 'Vue comme précurseur de la théorie grecque', TEAL)}<div style="margin-top:22px">${tag('IMHOTEP = FIGURE FONDATRICE', GREEN)}</div></div>`,
x10: outroScene(`Mikić, Med Pregl 2008 (PMID 19203075) · Hartmann, J Dtsch Dermatol Ges 2016 (PMID 27027749)<br>Vidéos : Pixabay (illustratif)`),
};
await render(process.argv[2], scenes);
