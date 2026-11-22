// Fonds de scène de l'épisode 19 (anaphylaxie). Usage: THEME=brand node scenes_ep19.mjs <outDir>
import { TEAL, RED, GREEN, brand, ico, I, item, hookScene, introScene, outroScene, render } from '../lib.mjs';
const big = (t, c = TEAL) => `<div class="pill" style="font-size:34px;border-color:${c};margin-top:16px">${t}</div>`;
const scenes = {
a01: hookScene(`Quelques bouchées…<br>lèvres gonflées,<br>voix changée`, `Votre<div style="color:#13A8A8;margin-top:12px">premier geste&nbsp;?</div>`),
a02: introScene(19, `<span style="color:${TEAL}">Anaphylaxie</span> : une allergie grave`),
a03: `${brand}<div class="card"><span class="chip red">URGENCE</span><h1>Réaction allergique sévère</h1>
  ${item(I.warn, 'Début brutal, plusieurs organes', RED)}${item(I.flask, 'Aliments · piqûres de guêpe ou d\'abeille · médicaments', TEAL)}</div>`,
a04: `${brand}<div class="card"><span class="chip">LES SIGNES</span><h1>Où regarder ?</h1>
  ${item(I.pale, 'Peau : urticaire, gonflement lèvres/visage (peut manquer)', TEAL)}${item(I.scan, 'Respiration : gêne, sifflements, voix rauque', RED)}${item(I.rep, 'Circulation : malaise, pâleur, tension basse', RED)}${item(I.dizzy, 'Digestif : vomissements, douleurs du ventre', TEAL)}</div>`,
a05: `${brand}<div class="card" style="background:#FFF3F3"><span class="chip red">1ER GESTE</span><h1 style="color:#8f1d22">Adrénaline IM, sans attendre</h1>
  ${item(I.syringe, 'Face externe de la cuisse', RED)}${item(I.clock, 'Plus elle est précoce, mieux c\'est', RED)}${item(I.phone, 'Puis appeler les secours', RED)}</div>`,
a06: `${brand}<div class="card"><span class="chip">POSITION</span><h1>Où placer la personne ?</h1>
  ${big('Allongée, jambes surélevées')}${big('Difficulté à respirer : assise', '#0274BB')}${big('Vomit ou inconsciente : sur le côté', '#F5B82E')}
  <p class="sub" style="font-size:24px;margin-top:10px">Ne pas la relever brusquement.</p></div>`,
a07: `${brand}<div class="card"><span class="chip red">ATTENTION</span><h1>Ne remplacent pas l'adrénaline</h1>
  ${item(I.warn, 'Antihistaminiques : soulagent la peau', RED)}${item(I.warn, 'Corticoïdes : pas de traitement de l\'urgence', RED)}</div>`,
a08: `${brand}<div class="card"><span class="chip">APRÈS</span><h1>Surveillance et suivi</h1>
  ${item(I.hosp, 'Surveillance médicale : une réaction peut revenir', TEAL)}${item(I.test, 'Tryptase dans les heures qui suivent', TEAL)}${item(I.flask, 'Allergologue : cause, prévention, auto-injecteur', TEAL)}</div>`,
a09: `${brand}<div class="card"><span class="chip">À RETENIR</span><h1>Reconnaître · Injecter · Appeler</h1>
  ${big('Adrénaline IM sans attendre', '#E5484D')}${big('Allonger · surveiller', '#0274BB')}${big('Consulter l\'allergologue')}</div>`,
a10: outroScene(`EAACI — Muraro et al., Allergy 2022<br>WAO — Cardona et al., 2020<br>Joint Task Force — Golden et al., 2023`),
};
await render(process.argv[2], scenes);
