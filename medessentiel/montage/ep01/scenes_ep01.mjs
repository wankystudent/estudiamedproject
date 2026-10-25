// Fonds de scène de l'épisode 1. Usage: node scenes.mjs <outDir>
import { TEAL, RED, GREEN, INK, brand, uterus, abdomen, torso, drop, ecg, ico, I, item, css, render } from '../lib.mjs';

const scenes = {
// 1 — Hook (avatar plein cadre au centre, 454 px de chaque côté)
s01: `${brand}
 <div style="position:absolute;left:34px;top:250px;width:400px;font-size:44px;font-weight:800;line-height:1.15">
  <div style="margin-bottom:42px"><span style="color:${TEAL}">●</span> Retard de règles</div>
  <div style="margin-bottom:42px"><span style="color:${TEAL}">●</span> Douleur d'un côté du ventre</div>
  <div><span style="color:${TEAL}">●</span> Petit saignement</div></div>
 <div style="position:absolute;right:34px;top:330px;width:400px;text-align:left">
  <div style="font-size:86px;font-weight:900;line-height:1">Banal&nbsp;?</div>
  <div style="font-size:50px;font-weight:800;color:${RED};margin-top:20px">Pas toujours.</div></div>`,
// 2 — Intro
s02: `${brand}
 <div style="position:absolute;left:34px;top:330px;width:400px">
  <div style="font-size:30px;font-weight:700;color:${TEAL};letter-spacing:2px">SÉRIE 1 · ÉPISODE 1</div>
  <div style="font-size:48px;font-weight:900;line-height:1.1;margin-top:14px">La médecine en 3 minutes</div></div>
 <div style="position:absolute;right:34px;top:300px;width:400px">
  <div style="font-size:54px;font-weight:900;line-height:1.1">Les <span style="color:${TEAL}">5 signes d'alerte</span> de la grossesse extra-utérine</div></div>`,
// 3 — Définition
s03: `${brand}<div class="card"><span class="chip">DÉFINITION</span>
  <h1>Grossesse extra-utérine</h1><p class="sub">Implantation de l'embryon <b>hors de la cavité utérine</b> — le plus souvent dans une <b>trompe</b>.</p>
  <div style="margin:6px 0 0 -4px">${uterus}</div>
  <div class="row" style="gap:40px;margin-top:-6px;font-size:28px;font-weight:700"><span style="color:${GREEN}">● Implantation normale</span><span style="color:${RED}">● Trompe : risque de rupture</span></div></div>`,
// 4 — Signe 1
s04: `${brand}<div class="card"><span class="chip">SIGNE 1 / 5</span>
  <h1>Retard de règles + test positif</h1><p class="sub">Le test ne dit pas <b>où</b> se trouve la grossesse.</p>
  <div style="margin-top:50px">
   ${item(I.test, 'Test de grossesse positif', TEAL)}
   <div style="font-size:50px;margin-left:20px;color:#9fb4cf">↓</div>
   ${item(I.flask, 'Dosage sanguin', TEAL)}
   <div style="font-size:50px;margin-left:20px;color:#9fb4cf">↓</div>
   ${item(I.scan, 'Échographie pelvienne', TEAL)}</div></div>`,
// 5 — Signe 2
s05: `${brand}<div class="card"><span class="chip">SIGNE 2 / 5</span>
  <h1>Douleur du bas-ventre</h1><p class="sub">Souvent d'un seul côté.</p>
  <div class="row" style="justify-content:space-between;margin-top:6px"><div style="margin-left:40px">${abdomen}</div>
  <div style="width:420px;font-size:36px;font-weight:700;line-height:1.3">
   <div class="pill" style="margin-bottom:22px">Permanente</div><div class="pill">ou par crises</div></div></div></div>`,
// 6 — Signe 3
s06: `${brand}<div class="card"><span class="chip">SIGNE 3 / 5</span>
  <h1>Saignements inhabituels</h1><p class="sub">Parfois peu abondants et foncés.</p>
  <div class="row" style="justify-content:space-around;margin-top:70px;align-items:flex-end">
   <div style="text-align:center">${drop('#D62839', 1.5)}<div style="font-size:32px;font-weight:800;margin-top:16px">Règles normales</div></div>
   <div style="font-size:70px;color:#9fb4cf;font-weight:800">≠</div>
   <div style="text-align:center">${drop('#5A1A1F', 1.0)}<div style="font-size:32px;font-weight:800;margin-top:16px;color:${RED}">Saignement<br>inhabituel</div></div></div></div>`,
// 7 — Signe 4
s07: `${brand}<div class="card"><span class="chip">SIGNE 4 / 5</span>
  <h1>Douleur à la pointe de l'épaule</h1>
  <div class="row" style="justify-content:space-between;margin-top:6px"><div style="margin-left:10px">${torso}</div>
  <div style="width:430px;font-size:34px;font-weight:700;line-height:1.3">
   <div class="pill" style="margin-bottom:20px">Sang dans le ventre</div><div style="font-size:44px;color:#9fb4cf;margin:0 0 6px 30px">↓</div>
   <div class="pill" style="margin-bottom:20px">Irritation du diaphragme</div><div style="font-size:44px;color:#9fb4cf;margin:0 0 6px 30px">↓</div>
   <div class="pill" style="border-color:${RED};color:${RED}">Douleur ressentie à l'épaule</div></div></div></div>`,
// 8 — Signe 5
s08: `${brand}<div class="card" style="background:#FFF3F3"><span class="chip red">SIGNE 5 / 5 · URGENCE</span>
  <h1 style="color:#8f1d22">Signes de gravité</h1>
  ${item(I.rep, 'Cœur qui s\'emballe', RED)}${item(I.pale, 'Pâleur', RED)}${item(I.dizzy, 'Malaise, vertiges', RED)}${item(I.faint, 'Évanouissement', RED)}
  <div style="position:absolute;left:48px;bottom:30px">${ecg}</div></div>`,
// 9 — Facteurs de risque
s09: `${brand}<div class="card"><span class="chip">FACTEURS DE RISQUE</span>
  <h1>Ce qui augmente le risque</h1>
  ${item(I.warn, 'Antécédent de grossesse extra-utérine', TEAL)}${item(I.bandage, 'Infection pelvienne passée', TEAL)}${item(I.scalpel, 'Chirurgie des trompes', TEAL)}${item(I.smoke, 'Tabagisme', TEAL)}${item(I.flask, 'Procréation médicalement assistée', TEAL)}
  <p class="sub" style="font-size:27px;margin-top:12px">Liste non exhaustive : beaucoup de femmes concernées n'ont <b>aucun</b> facteur de risque.</p></div>`,
// 10 — Conduite à tenir
s10: `${brand}<div class="card"><span class="chip">QUE FAIRE ?</span>
  <div class="pill" style="margin-top:26px;border-color:${TEAL};padding:26px"><div style="color:${TEAL};font-size:28px;font-weight:800">RETARD DE RÈGLES OU TEST POSITIF + DOULEUR OU SAIGNEMENT</div>
   <div class="row" style="margin-top:14px">${ico(I.hosp, TEAL)}<div style="font-size:42px;font-weight:800">Consulter le jour même</div></div></div>
  <div class="pill" style="margin-top:26px;border-color:${RED};background:#FFF3F3;padding:26px"><div style="color:${RED};font-size:28px;font-weight:800">MALAISE · DOULEUR INTENSE · DOULEUR D'ÉPAULE</div>
   <div class="row" style="margin-top:14px">${ico(I.phone, RED)}<div style="font-size:42px;font-weight:800;color:#8f1d22">Appeler les secours</div></div>
   <div style="font-size:28px;margin-top:12px;font-weight:600;color:#6a2a2e">Numéro d'urgence de votre pays · Ne conduisez pas vous-même</div></div></div>`,
// 11 — Outro
s11: `${brand}
 <div style="position:absolute;left:34px;top:270px;width:400px">
  <div style="font-size:46px;font-weight:900;line-height:1.1">Abonnez-vous</div>
  <div style="font-size:32px;font-weight:600;margin-top:18px;color:#cfe0f3">Quel sujet médical voulez-vous voir expliqué ?<br>Dites-le en commentaire.</div></div>
 <div style="position:absolute;right:34px;top:250px;width:400px">
  <div style="font-size:26px;font-weight:800;color:${TEAL};letter-spacing:1px">SOURCES</div>
  <div style="font-size:27px;font-weight:600;margin-top:10px;line-height:1.35;color:#cfe0f3">CNGOF / SCGP — RPC prise en charge des GEU tubaires<br>ACOG Practice Bulletin n° 193<br>NICE NG126</div>
  <div style="font-size:23px;font-weight:600;margin-top:34px;line-height:1.35;color:#9fb4cf">Information éducative — ne remplace pas une consultation médicale.</div></div>`,
};

await render(process.argv[2], scenes);
