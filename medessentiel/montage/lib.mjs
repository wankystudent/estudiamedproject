// Bibliothèque commune de mise en page (CSS, icônes, illustrations) pour les fonds de scène.
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
import fs from 'fs';


export const NAVY = '#0B2545', TEAL = '#13A8A8', RED = '#E5484D', GREEN = '#2EAD6B', INK = '#0B2545';

export const css = `
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

export const logoSvg = `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>`;
export const brand = `<div class="brand"><div class="logo">${logoSvg}</div><span>Med<b>Essentiel</b></span></div>`;

// ---------- Illustrations (SVG originaux) ----------
export const uterus = `
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

export const abdomen = `
<svg viewBox="0 0 360 520" width="360" height="520">
 <path d="M120 20 Q180 5 240 20 L 262 120 Q 290 220 270 330 Q 260 440 180 500 Q 100 440 90 330 Q 70 220 98 120 Z" fill="#E8EEF5" stroke="#9fb4cf" stroke-width="4"/>
 <circle cx="180" cy="270" r="9" fill="#9fb4cf"/>
 <ellipse cx="236" cy="380" rx="48" ry="62" fill="${RED}" opacity=".35"/>
 <ellipse cx="236" cy="380" rx="30" ry="40" fill="${RED}" opacity=".5"/>
 <path d="M226 350 l-12 28 h20 l-12 28" stroke="${RED}" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

export const torso = `
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

export const drop = (c, s = 1) => `<svg width="${140*s}" height="${180*s}" viewBox="0 0 140 180"><path d="M70 8 C 70 8, 12 80, 12 118 A 58 58 0 0 0 128 118 C 128 80, 70 8, 70 8 Z" fill="${c}"/><path d="M42 118 A 30 30 0 0 0 68 148" stroke="#fff" stroke-opacity=".5" stroke-width="8" fill="none" stroke-linecap="round"/></svg>`;

export const ecg = `<svg width="900" height="120" viewBox="0 0 900 120"><path d="M0 70 H210 L240 70 L262 20 L292 110 L316 50 L336 70 H520 L550 70 L572 20 L602 110 L626 50 L646 70 H900" fill="none" stroke="${RED}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

export const ico = (d, c = TEAL) => `<div style="width:76px;height:76px;border-radius:20px;background:${c};display:grid;place-items:center;flex:none"><svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${d}</svg></div>`;
export const I = {
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
export const item = (icon, text, c) => `<div class="row" style="margin:14px 0">${ico(icon, c)}<div style="font-size:36px;font-weight:700">${text}</div></div>`;


export async function render(out, scenes) {
  fs.mkdirSync(out, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  for (const [k, body] of Object.entries(scenes)) {
    await page.setContent(`<html><head><meta charset="utf-8"><style>${css}</style></head><body>${body}</body></html>`);
    await page.screenshot({ path: `${out}/${k}.png` });
  }
  await browser.close();
  console.log('ok', Object.keys(scenes).length);
}

// ---------- Gabarits communs (accroche, introduction, fin) ----------
export const hookScene = (leftHtml, rightHtml) => `${brand}
 <div style="position:absolute;left:34px;top:260px;width:400px;font-size:44px;font-weight:900;line-height:1.25">${leftHtml}</div>
 <div style="position:absolute;right:34px;top:300px;width:400px;font-size:50px;font-weight:900;line-height:1.1">${rightHtml}</div>`;
export const introScene = (n, titleHtml) => `${brand}
 <div style="position:absolute;left:34px;top:330px;width:400px"><div style="font-size:30px;font-weight:700;color:${TEAL};letter-spacing:2px">SÉRIE 1 · ÉPISODE ${n}</div><div style="font-size:48px;font-weight:900;line-height:1.1;margin-top:14px">La médecine en 3 minutes</div></div>
 <div style="position:absolute;right:34px;top:300px;width:400px;font-size:52px;font-weight:900;line-height:1.1">${titleHtml}</div>`;
export const outroScene = (sourcesHtml) => `${brand}
 <div style="position:absolute;left:34px;top:270px;width:400px"><div style="font-size:46px;font-weight:900;line-height:1.1">Abonnez-vous</div><div style="font-size:32px;font-weight:600;margin-top:18px;color:#cfe0f3">Quel sujet médical voulez-vous voir expliqué&nbsp;?<br>Dites-le en commentaire.</div></div>
 <div style="position:absolute;right:34px;top:250px;width:400px"><div style="font-size:26px;font-weight:800;color:${TEAL};letter-spacing:1px">SOURCES</div>
  <div style="font-size:26px;font-weight:600;margin-top:10px;line-height:1.35;color:#cfe0f3">${sourcesHtml}</div>
  <div style="font-size:23px;font-weight:600;margin-top:34px;line-height:1.35;color:#9fb4cf">Information éducative — ne remplace pas une consultation médicale.</div></div>`;
