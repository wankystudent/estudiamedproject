// Fonds de scène de l'épisode 12 (accouchement). Usage: THEME=brand node scenes_ep12.mjs <outDir>
import { TEAL, RED, GREEN, brand, ico, I, item, hookScene, introScene, outroScene, render } from '../lib.mjs';
const stage = (n, t, s, c = TEAL) => `<div class="pill" style="display:flex;align-items:center;gap:20px;border-color:${c};margin-top:14px;padding:22px 26px"><span style="width:60px;height:60px;border-radius:50%;background:${c};color:#fff;font-weight:900;font-size:34px;display:grid;place-items:center;flex:none">${n}</span><div><div style="font-size:36px;font-weight:800">${t}</div><div style="font-size:26px;font-weight:600;color:#4a5f7a;margin-top:4px">${s}</div></div></div>`;
const bar = `<div style="display:flex;height:64px;border-radius:16px;overflow:hidden;margin-top:24px;font-weight:800;font-size:26px;color:#fff;text-align:center"><div style="flex:1;background:#0195B1;display:grid;place-items:center">Latence → ~5 cm</div><div style="flex:1;background:#0274BB;display:grid;place-items:center">Active → 10 cm</div></div>`;
const scenes = {
g01: hookScene(`Les contractions<br>arrivent…`, `Que se passe-t-il<div style="color:#13A8A8;margin-top:12px">dans le corps&nbsp;?</div>`),
g02: introScene(12, `Les étapes de l'<span style="color:${TEAL}">accouchement</span>`),
g03: `${brand}<div class="card"><span class="chip">3 ÉTAPES</span><h1>Voie basse</h1>
  ${stage(1, 'Dilatation', 'le col s\'efface puis s\'ouvre')}${stage(2, 'Expulsion', 'dilatation complète → naissance', '#0274BB')}${stage(3, 'Délivrance', 'expulsion du placenta', '#04367B')}</div>`,
g04: `${brand}<div class="card"><span class="chip">ÉTAPE 1</span><h1>Dilatation du col</h1>${bar}
  ${item(I.clock, 'Latence : contractions de plus en plus régulières, souvent longue, à domicile', TEAL)}${item(I.hosp, 'Active : contractions fortes et rapprochées, jusqu\'à 10 cm', TEAL)}
  <p class="sub" style="font-size:24px;margin-top:6px">Les seuils exacts varient selon les références.</p></div>`,
g05: `${brand}<div class="card"><span class="chip">ÉTAPE 2</span><h1>Expulsion</h1>
  ${item(I.warn, 'De la dilatation complète à la naissance', TEAL)}${item(I.rep, 'Envie de pousser, efforts guidés', TEAL)}${item(I.faint, 'Tête, épaules, corps du bébé', TEAL)}${item(I.hosp, 'Peau à peau si l\'état le permet', TEAL)}</div>`,
g06: `${brand}<div class="card"><span class="chip">ÉTAPE 3</span><h1>Délivrance</h1>
  ${item(I.flask, 'Expulsion du placenta et des membranes', TEAL)}${item(I.clock, 'En général quelques minutes (parfois jusqu\'à ~30 min)', TEAL)}${item(I.warn, 'L\'équipe vérifie le placenta et surveille les saignements', TEAL)}</div>`,
g07: `${brand}<div class="card"><span class="chip">DOULEUR</span><h1>Des solutions existent</h1>
  ${item(I.rep, 'Respiration · mobilité', TEAL)}${item(I.hosp, 'Soutien d\'un accompagnant', TEAL)}${item(I.syringe, 'Péridurale, selon les situations et le souhait', TEAL)}</div>`,
g08: `${brand}<div class="card"><span class="chip">QUAND PARTIR ?</span><h1>Contacter la maternité</h1>
  ${item(I.clock, 'Contractions régulières, rapprochées, de plus en plus douloureuses', TEAL)}${item(I.flask, 'Perte de liquide (poche des eaux)', TEAL)}${item(I.warn, 'Bouchon muqueux seul : pas une urgence ; avant le terme ou doute, appelez', TEAL)}
  <p class="sub" style="font-size:26px;margin-top:6px">Suivez les consignes de votre maternité.</p></div>`,
g09: `${brand}<div class="card" style="background:#FFF3F3"><span class="chip red">URGENCES</span><h1 style="color:#8f1d22">Sans attendre</h1>
  ${item(I.warn, 'Saignement vaginal abondant', RED)}${item(I.dizzy, 'Diminution nette des mouvements du bébé', RED)}${item(I.pale, 'Fièvre · liquide verdâtre ou malodorant', RED)}${item(I.faint, 'Douleur très intense et continue · contractions avant le terme', RED)}</div>`,
g10: `${brand}<div class="card"><span class="chip">À RETENIR</span><h1>Dilatation · expulsion · délivrance</h1>
  <div class="pill" style="margin-top:20px;font-size:34px">Chaque accouchement est différent.</div>
  <div class="pill" style="margin-top:16px;font-size:34px;border-color:${TEAL}">Suivi régulier, préparation, projet de naissance discuté avec l'équipe.</div></div>`,
g11: outroScene(`HAS / CNGOF / CNSF — présentation sur le travail<br>Manuel MSD — Le travail`),
};
await render(process.argv[2], scenes);
