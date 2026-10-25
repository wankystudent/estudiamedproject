// Génère les fonds de scène (PNG 1920x1080) du montage de l'épisode 1.
// Usage: node scenes.mjs <outDir>
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
import fs from 'fs';

const out = process.argv[2];
fs.mkdirSync(out, { recursive: true });

const NAVY = '#0B2545', TEAL = '#13A8A8', RED = '#E5484D', GREEN = '#2EAD6B', INK = '#0B2545';

const css = `
*{box-sizing:border-box;margin:0;padding:0}
body{width:1920px;height:1080px;position:relative;overflow:hidden;font-family:'Inter',sans-serif;color:#fff;
 background:radial-gradient(1200px 800px at 75% 20%,#14396b 0%,${NAVY} 60%,#071a33 100%)}
.brand{position:absolute;left:60px;top:38px;display:flex;align-items:center;gap:14px;font-weight:800;font-size:34px;letter-spacing:.2px}
.brand b{color:${TEAL}}
.logo{width:46px;height:46px;border-radius:12px;background:${TEAL};display:grid;place-items:center}
.card{position:absolute;left:880px;top:120px;width:990px;height:790px;background:#F4F8FB;border-radius:28px;color:${INK};
 box-shadow:0 30px 80px rgba(0,0,0,.45);padding:40px 48px;overflow:hidden}
.chip{display:inline-block;background:${TEAL};color:#fff;font-weight:800;font-size:26px;padding:8px 22px;border-radius:999px;letter-spacing:1px}
.chip.red{background:${RED}}
h1{font-size:50px;line-height:1.1;font-weight:800;margin:18px 0 10px}
h2{font-size:38px;line-height:1.15;font-weight:800}
p,li{font-size:33px;line-height:1.3;font-weight:500}
.sub{color:#4a5f7a}
.frame{position:absolute;border-radius:28px;border:6px solid ${TEAL};box-shadow:0 20px 60px rgba(0,0,0,.5)}
.foot{position:absolute;right:50px;top:50px;font-size:22px;color:#9fb4cf;font-weight:600}
.row{display:flex;align-items:center;gap:22px}
.pill{border-radius:20px;padding:20px 26px;background:#fff;border:2px solid #dbe6f0;font-weight:700;font-size:32px}
`;

const logoSvg = `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>`;
const brand = `<div class="brand"><div class="logo">${logoSvg}</div><span>Med<b>Essentiel</b></span></div>`;

// ---------- Illustrations (SVG originaux) ----------
const uterus = `
<svg viewBox="0 0 900 470" width="900" height="470">
 <!-- trompes -->
 <path d="M330 150 C 230 120, 130 140, 110 230 C 100 280, 150 300, 175 270" fill="none" stroke="#E8A0A8" stroke-width="30" stroke-linecap="round"/>
 <path d="M570 150 C 670 120, 770 140, 790 230 C 800 280, 750 300, 725 270" fill="none" stroke="#E8A0A8" stroke-width="30" stroke-linecap="round"/>
 <!-- ovaires -->
 <ellipse cx="150" cy="330" rx="48" ry="34" fill="#F2C9A0"/><ellipse cx="750" cy="330" rx="48" ry="34" fill="#F2C9A0"/>
 <!-- utérus -->
 <path d="M330 140 Q450 90 570 140 L 560 300 Q 450 450 340 300 Z" fill="#F08FA0"/>
 <path d="M385 165 Q450 135 515 165 L 505 290 Q450 370 395 290 Z" fill="#FBD3DA"/>
 <!-- implantation normale -->
 <circle cx="450" cy="255" r="22" fill="${GREEN}"/><path d="M450 255 m-8 0 l6 7 l12 -14" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
 <!-- ectopique -->
 <circle cx="130" cy="245" r="26" fill="${RED}"/>
 <path d="M130 232 v18 M130 258 v4" stroke="#fff" stroke-width="6" stroke-linecap="round"/>
 <circle cx="130" cy="245" r="44" fill="none" stroke="${RED}" stroke-width="4" stroke-dasharray="8 8"/>
</svg>`;

const abdomen = `
<svg viewBox="0 0 360 520" width="360" height="520">
 <path d="M120 20 Q180 5 240 20 L 262 120 Q 290 220 270 330 Q 260 440 180 500 Q 100 440 90 330 Q 70 220 98 120 Z" fill="#E8EEF5" stroke="#9fb4cf" stroke-width="4"/>
 <circle cx="180" cy="270" r="9" fill="#9fb4cf"/>
 <ellipse cx="236" cy="380" rx="48" ry="62" fill="${RED}" opacity=".35"/>
 <ellipse cx="236" cy="380" rx="30" ry="40" fill="${RED}" opacity=".5"/>
 <path d="M226 350 l-12 28 h20 l-12 28" stroke="${RED}" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const torso = `
<svg viewBox="0 0 440 540" width="440" height="540">
 <path d="M130 90 Q220 40 310 90 L 360 140 Q 340 200 330 280 Q 340 400 310 500 L 130 500 Q 100 400 110 280 Q 100 200 80 140 Z" fill="#E8EEF5" stroke="#9fb4cf" stroke-width="4"/>
 <ellipse cx="220" cy="55" rx="42" ry="46" fill="#E8EEF5" stroke="#9fb4cf" stroke-width="4"/>
 <path d="M118 250 Q220 215 322 250" fill="none" stroke="${TEAL}" stroke-width="8" stroke-linecap="round"/>
 <text x="220" y="238" font-size="22" font-weight="800" fill="${TEAL}" text-anchor="middle">diaphragme</text>
 <path d="M130 420 Q220 380 310 420 L 306 480 L 134 480 Z" fill="${RED}" opacity=".6"/>
 <path d="M175 380 C 150 330, 150 300, 160 260 C 165 220, 110 190, 92 150" fill="none" stroke="${RED}" stroke-width="6" stroke-dasharray="3 14" stroke-linecap="round"/>
 <circle cx="86" cy="140" r="30" fill="${RED}"/>
 <path d="M86 122 v22 M86 152 v4" stroke="#fff" stroke-width="7" stroke-linecap="round"/>
</svg>`;

const drop = (c, s = 1) => `<svg width="${140*s}" height="${180*s}" viewBox="0 0 140 180"><path d="M70 8 C 70 8, 12 80, 12 118 A 58 58 0 0 0 128 118 C 128 80, 70 8, 70 8 Z" fill="${c}"/><path d="M42 118 A 30 30 0 0 0 68 148" stroke="#fff" stroke-opacity=".5" stroke-width="8" fill="none" stroke-linecap="round"/></svg>`;

const ecg = `<svg width="900" height="120" viewBox="0 0 900 120"><path d="M0 70 H210 L240 70 L262 20 L292 110 L316 50 L336 70 H520 L550 70 L572 20 L602 110 L626 50 L646 70 H900" fill="none" stroke="${RED}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const ico = (d, c = TEAL) => `<div style="width:76px;height:76px;border-radius:20px;background:${c};display:grid;place-items:center;flex:none"><svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${d}</svg></div>`;
const I = {
  test: '<rect x="9" y="2" width="6" height="20" rx="3"/><path d="M12 8v4M10 10h4"/>',
  syringe: '<path d="M12 3v18M7 8h10"/><path d="M6 21h12"/>',
  scan: '<path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3"/><path d="M4 12h16"/>',
  warn: '<path d="M12 3 2 21h20L12 3z"/><path d="M12 10v5M12 18v.5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  smoke: '<path d="M3 17h13v3H3z"/><path d="M19 17v3M16 10c2-1 2-3 0-4"/>',
  bandage: '<rect x="3" y="9" width="18" height="6" rx="3" transform="rotate(-35 12 12)"/>',
  scalpel: '<path d="M4 20 16 8l4-4-1 6-6 6z"/>',
  flask: '<path d="M9 3h6M10 3v6l-5 10a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-10V3"/>',
  rep: '<path d="M12 21s-8-5-8-11a4.5 4.5 0 0 1 8-2.5A4.5 4.5 0 0 1 20 10c0 6-8 11-8 11z"/>',
  dizzy: '<circle cx="12" cy="12" r="9"/><path d="M8 9l2 2M10 9l-2 2M14 9l2 2M16 9l-2 2M9 16c2-1.5 4-1.5 6 0"/>',
  pale: '<circle cx="12" cy="12" r="9"/><path d="M9 10h.01M15 10h.01M9 16h6"/>',
  faint: '<path d="M3 18h18M6 18l2-8h8l2 8M12 4a2 2 0 1 0 0 .01"/>',
  phone: '<path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"/>',
  car: '<path d="M3 16v-4l2-5h14l2 5v4M3 16h18M7 19v-3M17 19v-3"/><path d="M4 4l16 16" stroke="#fff"/>',
  hosp: '<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M12 8v8M8 12h8"/>',
};
const item = (icon, text, c) => `<div class="row" style="margin:14px 0">${ico(icon, c)}<div style="font-size:36px;font-weight:700">${text}</div></div>`;

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

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
for (const [k, body] of Object.entries(scenes)) {
  await page.setContent(`<html><head><meta charset="utf-8"><style>${css}</style></head><body>${body}</body></html>`);
  await page.screenshot({ path: `${out}/${k}.png` });
}
await browser.close();
console.log('ok', Object.keys(scenes).length);
