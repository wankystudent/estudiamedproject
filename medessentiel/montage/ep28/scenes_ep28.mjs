// Fonds de scène de l'épisode 28 (gastrite, ulcère, H. pylori). Usage: THEME=brand node scenes_ep28.mjs <outDir>
import { TEAL, RED, GREEN, brand, ico, I, item, hookScene, introScene, outroScene, render } from '../lib.mjs';
const big = (t, c = TEAL) => `<div class="pill" style="font-size:34px;border-color:${c};margin-top:16px">${t}</div>`;
const scenes = {
g01: hookScene(`Une brûlure<br>au creux de l'estomac,<br>qui revient…`, `Gastrite<div style="color:#13A8A8;margin-top:12px">ou ulcère&nbsp;?</div>`),
g02: introScene(28, `<span style="color:${TEAL}">Gastrite</span> et ulcère`),
g03: `${brand}<div class="card"><span class="chip">DÉFINITIONS</span><h1>Deux causes dominantes</h1>
  ${item(I.flask, 'Gastrite : inflammation de la muqueuse', TEAL)}${item(I.scan, 'Ulcère : plaie plus profonde (estomac, duodénum)', TEAL)}${item(I.warn, 'Helicobacter pylori', RED)}${item(I.syringe, 'Anti-inflammatoires : ibuprofène, diclofénac, aspirine', RED)}</div>`,
g04: `${brand}<div class="card"><span class="chip">SYMPTÔMES</span><h1>Que ressent-on ?</h1>
  ${item(I.faint, 'Brûlure ou douleur au creux de l\'estomac', TEAL)}${item(I.dizzy, 'Nausées · ballonnements · satiété précoce', TEAL)}${item(I.clock, 'Parfois aucun symptôme', TEAL)}</div>`,
g05: `${brand}<div class="card" style="background:#FFF3F3"><span class="chip red">URGENCE</span><h1 style="color:#8f1d22">Signes de complication</h1>
  ${item(I.warn, 'Vomissements de sang ou « marc de café »', RED)}${item(I.warn, 'Selles noires, collantes', RED)}${item(I.scan, 'Douleur brutale · ventre dur', RED)}${item(I.pale, 'Malaise · pâleur', RED)}</div>`,
g06: `${brand}<div class="card"><span class="chip">À SIGNALER</span><h1>Consulter sans attendre</h1>
  ${item(I.scan, 'Difficulté à avaler', TEAL)}${item(I.test, 'Amaigrissement inexpliqué · anémie', TEAL)}${item(I.faint, 'Vomissements répétés', TEAL)}</div>`,
g07: `${brand}<div class="card"><span class="chip">DIAGNOSTIC</span><h1>Rechercher H. pylori</h1>
  ${item(I.test, 'Test respiratoire à l\'urée', TEAL)}${item(I.flask, 'Antigènes dans les selles', TEAL)}${item(I.scan, 'Endoscopie haute + biopsies', TEAL)}${item(I.warn, 'IPP : peuvent fausser les tests', RED)}</div>`,
g08: `${brand}<div class="card"><span class="chip">TRAITEMENT</span><h1>Cicatriser et éradiquer</h1>
  ${item(I.flask, 'IPP : moins d\'acidité, cicatrisation', TEAL)}${item(I.syringe, 'H. pylori : antibiotiques + IPP, selon résistances', TEAL)}${item(I.warn, 'Éviter les anti-inflammatoires · arrêter le tabac', RED)}</div>`,
g09: `${brand}<div class="card"><span class="chip">À RETENIR</span><h1>Deux causes, un test</h1>
  ${big('H. pylori + anti-inflammatoires')}${big('Sang ou selles noires : urgence', '#E5484D')}${big('Dépister, puis éradiquer', '#2EAD6B')}</div>`,
g10: outroScene(`Maastricht VI/Florence — Malfertheiner et al., Gut 2022 (PMID 35944925)<br>ACG — Chey et al., Am J Gastroenterol 2017 (PMID 28071659)`),
};
await render(process.argv[2], scenes);
