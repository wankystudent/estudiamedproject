// Fonds de scène de l'épisode 36 (hypothyroïdie). Usage: THEME=brand node scenes_ep36.mjs <outDir>
import { TEAL, RED, GREEN, brand, ico, I, item, hookScene, introScene, outroScene, render } from '../lib.mjs';
const big = (t, c = TEAL) => `<div class="pill" style="font-size:34px;border-color:${c};margin-top:16px">${t}</div>`;
const scenes = {
x01: hookScene(`Fatigue persistante,<br>peau sèche,<br>prise de poids…`, `Et si c'était<div style="color:#13A8A8;margin-top:12px">la thyroïde&nbsp;?</div>`),
x02: introScene(36, `L'<span style="color:${TEAL}">hypothyroïdie</span>`),
x03: `${brand}<div class="card"><span class="chip">LA THYROÏDE</span><h1>Hormones en manque</h1>
  ${item(I.flask, 'Glande à la base du cou', TEAL)}${item(I.scan, 'Énergie · température · cœur · digestion', TEAL)}${item(I.warn, 'Mortelle si forme sévère non traitée', RED)}</div>`,
x04: `${brand}<div class="card"><span class="chip">CAUSES</span><h1>Causes fréquentes</h1>
  ${big('Thyroïdite auto-immune')}${big('Chirurgie · traitement thyroïdien', '#0274BB')}${big('Médicaments · manque d\'iode', '#2EAD6B')}</div>`,
x05: `${brand}<div class="card"><span class="chip">SYMPTÔMES</span><h1>Chez l'adulte</h1>
  ${item(I.pale, 'Fatigue · lenteur · froid', TEAL)}${item(I.faint, 'Prise de poids · constipation', TEAL)}${item(I.dizzy, 'Voix modifiée · peau sèche', TEAL)}</div>`,
x06: `${brand}<div class="card"><span class="chip">NOUVEAU-NÉ</span><h1>Dépistage à la naissance</h1>
  ${item(I.hosp, 'Non traitée : développement perturbé', RED)}${item(I.test, 'Dépistage organisé dans de nombreux pays', TEAL)}</div>`,
x07: `${brand}<div class="card"><span class="chip">DIAGNOSTIC</span><h1>Prise de sang</h1>
  ${item(I.syringe, 'TSH', TEAL)}${item(I.test, 'Thyroxine libre', TEAL)}${item(I.hosp, 'Recherche de la cause', TEAL)}</div>`,
x08: `${brand}<div class="card"><span class="chip">TRAITEMENT</span><h1>Lévothyroxine</h1>
  ${item(I.syringe, 'Remplacement hormonal', TEAL)}${item(I.test, 'Dose ajustée par contrôles sanguins', TEAL)}${item(I.warn, 'Plaintes persistantes : en parler', RED)}</div>`,
x09: `${brand}<div class="card" style="background:#FFF3F3"><span class="chip red">URGENCE</span><h1 style="color:#8f1d22">Forme très sévère</h1>
  ${item(I.dizzy, 'Confusion · somnolence profonde', RED)}${item(I.pale, 'Température basse', RED)}${item(I.phone, 'Appelez les secours', RED)}</div>`,
x10: outroScene(`Chaker et al., Lancet 2017 (PMID 28336049)<br>Vidéos : Pixabay`),
};
await render(process.argv[2], scenes);
