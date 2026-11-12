// Fonds de scène de l'épisode 17 (aliments complémentaires avant 6 mois). Usage: THEME=brand node scenes_ep17.mjs <outDir>
import { TEAL, RED, GREEN, brand, ico, I, item, hookScene, introScene, outroScene, render } from '../lib.mjs';
const big = (t, c = TEAL) => `<div class="pill" style="font-size:34px;border-color:${c};margin-top:16px">${t}</div>`;
const bar = (a, b, c) => `<div class="pill" style="display:flex;justify-content:space-between;align-items:center;border-color:${c};margin-top:12px;font-size:32px;font-weight:800"><span>${a}</span><span style="color:${c}">${b}</span></div>`;
const scenes = {
v01: hookScene(`Bébé de 3 mois ½<br>pleure après<br>le biberon`, `Une bouillie<div style="color:#13A8A8;margin-top:12px">avant 6 mois&nbsp;?</div>`),
v02: introScene(17, `Aliments <span style="color:${TEAL}">avant 6 mois</span>`),
v03: `${brand}<div class="card"><span class="chip">RECOMMANDATIONS</span><h1>Ce que disent les autorités</h1>
  ${bar('OMS · AAP', '≈ 6 mois', '#0274BB')}${bar('ESPGHAN', '4–6 mois', TEAL)}${bar('France (Anses)', '4–6 mois', TEAL)}
  <p class="sub" style="font-size:26px;margin-top:10px">Consensus : jamais avant 4 mois.</p></div>`,
v04: `${brand}<div class="card"><span class="chip">DIGESTION</span><h1>Un intestin immature</h1>
  ${item(I.scan, 'Il mûrit progressivement', TEAL)}${item(I.flask, 'Lait maternel ou infantile : parfaitement adaptés', TEAL)}${item(I.warn, 'Pas de date exacte : le lait reste l\'aliment principal', TEAL)}</div>`,
v05: `${brand}<div class="card"><span class="chip">REINS</span><h1>Charge en solutés</h1>
  ${item(I.flask, 'Concentration des urines plus limitée', TEAL)}${item(I.test, 'Protéines et sel : plus de solutés à éliminer', TEAL)}${item(I.warn, 'Plausible, non démontré chez le bébé sain', RED)}${item(I.smoke, 'Jamais de sel ajouté', TEAL)}</div>`,
v06: `${brand}<div class="card"><span class="chip">SIGNES DE MATURITÉ</span><h1>Prêt pour la cuillère&nbsp;?</h1>
  ${item(I.rep, 'Tient bien sa tête', TEAL)}${item(I.hosp, 'Assis avec un soutien', TEAL)}${item(I.scan, 'Regarde votre repas, tend la main', TEAL)}${item(I.clock, 'Ouvre la bouche · réflexe de langue estompé', TEAL)}
  <p class="sub" style="font-size:24px;margin-top:6px">L'âge seul ne suffit pas (AAP).</p></div>`,
v07: `${brand}<div class="card"><span class="chip red">SÉCURITÉ</span><h1>Étouffement</h1>
  ${big('35 % : au moins 1 épisode (6–8 mois)', RED)}${item(I.hosp, 'Bébé assis · adulte présent', TEAL)}${item(I.warn, 'Éviter avant 1 an : noix, raisins entiers, pop-corn, morceaux durs', RED)}
  <p class="sub" style="font-size:24px;margin-top:6px">Essai BLISS, nourrissons de 6 mois et plus.</p></div>`,
v08: `${brand}<div class="card"><span class="chip">INFECTIONS</span><h1>Signal ou preuve&nbsp;?</h1>
  ${item(I.syringe, 'Cochrane : moins d\'infections digestives à 6 mois exclusifs', TEAL)}${bar('PROBIT (Biélorussie)', '13,2 % → 9,1 %', TEAL)}${item(I.warn, 'Promotion de l\'allaitement ≠ effet isolé des solides', RED)}${item(I.test, 'Cohorte écossaise : pas de lien avec les gastros', TEAL)}</div>`,
v09: `${brand}<div class="card"><span class="chip">ALLAITEMENT</span><h1>Moins de lait, croissance, fer</h1>
  ${item(I.warn, 'Solides < 4 mois : arrêt plus précoce de l\'allaitement (association)', RED)}${item(I.clock, 'Après 6 mois : le lait seul ne suffit plus (OMS)', TEAL)}${item(I.flask, 'Dès 6 mois : aliments riches en fer', TEAL)}</div>`,
v10: `${brand}<div class="card"><span class="chip">OBÉSITÉ · ALLERGIES</span><h1>Ce qui est démontré</h1>
  ${item(I.warn, 'Obésité : association chez les bébés au biberon (étude de 847 enfants)', RED)}${item(I.test, 'Revue de 24 études : pas d\'association claire', TEAL)}${bar('Allergie arachide (LEAP)', '13,7 % → 1,9 %', TEAL)}${item(I.hosp, 'Retarder les allergènes ne protège pas', TEAL)}</div>`,
v11: `${brand}<div class="card"><span class="chip">COMPARAISON</span><h1>Avant 4 mois ou 4–6 mois&nbsp;?</h1>
  ${bar('< 4 mois', 'aucun bénéfice démontré', RED)}${bar('4–6 mois', 'autorités divergentes', '#F5B82E')}${big('Personne ne recommande avant 4 mois.', '#0274BB')}</div>`,
v12: `${brand}<div class="card"><span class="chip">IDÉES REÇUES</span><h1>Vrai ou faux&nbsp;?</h1>
  ${item(I.dizzy, '« Il pleure : donnons une bouillie » — Les pleurs ont de multiples causes', TEAL)}${item(I.scan, '« Il regarde mon assiette » — Un signe parmi d\'autres', TEAL)}${item(I.warn, '« Bouillie dans le biberon » — Non, sauf avis médical', RED)}${item(I.flask, '« Attendre prévient l\'allergie » — Faux', RED)}</div>`,
v13: `${brand}<div class="card"><span class="chip">CONSEILS</span><h1>Concrètement</h1>
  ${item(I.rep, 'Avant 4 mois : lait seul', TEAL)}${item(I.hosp, '4–6 mois : avis du médecin avant de commencer', TEAL)}${item(I.clock, 'Petites quantités, texture lisse, assis, cuillère', TEAL)}${item(I.flask, 'Fer · ni sel ni sucre · pas de jus avant 1 an', TEAL)}</div>`,
v14: `${brand}<div class="card"><span class="chip">LIMITES</span><h1>Ce que l'on ne sait pas</h1>
  ${item(I.warn, 'Surtout des études observationnelles', RED)}${item(I.test, 'Peu d\'essais randomisés', TEAL)}${item(I.clock, 'Recommandations en évolution (OMS 2023, ESPGHAN 2017)', TEAL)}</div>`,
v15: `${brand}<div class="card"><span class="chip">À RETENIR</span><h1>Fenêtre et prudence</h1>
  ${big('Avant 4 mois : lait seul.')}${big('4–6 mois : selon la maturité et l\'avis médical.', '#0274BB')}${big('Dès 6 mois : aliments + lait.', '#0274BB')}</div>`,
v16: outroScene(`OMS · AAP 2022 · ESPGHAN 2017 · Cochrane · Anses<br>(références complètes en description)`),
};
await render(process.argv[2], scenes);
