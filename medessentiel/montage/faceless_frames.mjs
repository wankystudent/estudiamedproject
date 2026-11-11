// Images 1080x1920 du style « Reels sans avatar » (fond brun, grand titre, carte sombre, appel à l'action).
// Usage: node faceless_frames.mjs <darkScenesDir> <outDir>   (le dossier contient les PNG et titles.json rendus avec THEME=dark)
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
import fs from 'fs';

const [dir, out] = process.argv.slice(2);
fs.mkdirSync(out, { recursive: true });
const titles = JSON.parse(fs.readFileSync(`${dir}/titles.json`, 'utf-8'));
const Y = '#F5B82E';
const esc = (t) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;');

const css = `*{box-sizing:border-box;margin:0;padding:0}
body{width:1080px;height:1920px;position:relative;overflow:hidden;font-family:'Inter',sans-serif;color:#fff;
 background:radial-gradient(900px 900px at 50% 52%,#6b2a12 0%,#2e1206 58%,#170803 100%)}
.brand{position:absolute;left:50px;top:46px;font-weight:800;font-size:34px;letter-spacing:.3px;opacity:.95}.brand b{color:${Y}}
.head{position:absolute;left:60px;right:60px;top:130px;height:380px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:900;line-height:1.08}
.cardwrap{position:absolute;left:50px;width:980px;border-radius:28px;overflow:hidden;border:2px solid #5b3523}
.cta{position:absolute;left:60px;right:60px;bottom:70px;text-align:center;font-size:44px;font-weight:800;line-height:1.2}.cta b{color:${Y}}
.big{position:absolute;left:60px;right:60px;top:360px;text-align:center}`;

const lines = (t) => t.split('\n').map(s => s.trim()).filter(Boolean);

function fullScene(t, last) {
  const L = lines(t);
  if (t.includes('Abonnez-vous')) {
    const i = L.findIndex(x => x === 'SOURCES');
    const src = i >= 0 ? L.slice(i + 1).filter(x => !x.startsWith('Information')) : [];
    return `<div class="big"><div style="font-size:112px;font-weight:900;color:${Y};line-height:1">Abonnez-vous</div>
     <div style="font-size:60px;font-weight:800;margin-top:34px;line-height:1.15">pour plus de médecine simple</div>
     <div style="font-size:42px;font-weight:600;margin-top:44px;color:#e3cdbd;line-height:1.25">Quel sujet médical voulez-vous voir expliqué ? Dites-le en commentaire.</div>
     <div style="font-size:28px;font-weight:700;margin-top:70px;color:${Y};letter-spacing:2px">SOURCES</div>
     <div style="font-size:30px;font-weight:600;margin-top:10px;color:#e3cdbd;line-height:1.3">${src.map(esc).join('<br>')}</div>
     <div style="font-size:26px;font-weight:600;margin-top:40px;color:#bfa593">Information éducative — ne remplace pas une consultation médicale.</div></div>`;
  }
  if (L[0].startsWith('SÉRIE')) {
    return `<div class="big" style="top:420px"><div style="font-size:40px;font-weight:800;color:${Y};letter-spacing:3px">${esc(L[0])}</div>
     <div style="font-size:50px;font-weight:700;margin-top:18px;color:#e3cdbd">${esc(L[1])}</div>
     <div style="font-size:104px;font-weight:900;margin-top:60px;line-height:1.05">${esc(L.slice(2).join(' '))}</div></div>`;
  }
  // accroche : lignes à puces (gauche) puis phrase d'effet (droite)
  const bullets = L.filter(x => x.startsWith('●') || (!x.includes('?') && L.indexOf(x) < Math.ceil(L.length / 2)));
  const rest = L.filter(x => !bullets.includes(x));
  return `<div class="big" style="top:330px"><div style="font-size:78px;font-weight:900;line-height:1.18;color:#fff">${bullets.map(x => esc(x.replace('● ', ''))).join('<br>')}</div>
   <div style="font-size:92px;font-weight:900;margin-top:70px;line-height:1.08;color:${Y}">${rest.map(esc).join('<br>')}</div></div>`;
}

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1080, height: 1920 } });
const ids = Object.keys(titles);
for (const id of ids) {
  const t = titles[id];
  const last = id === ids[ids.length - 1];
  let body;
  if (t.card) {
    const w = 980, sc = w / t.rect.w, h = t.rect.h * sc;
    const top = 560 + Math.max(0, (840 - h) / 2);
    const fs_ = t.title.length > 34 ? 78 : 92;
    body = `<div class="brand">Med<b>Essentiel</b></div><div class="head" style="font-size:${fs_}px">${esc(t.title)}</div>
     <div class="cardwrap" style="top:${top}px;height:${h}px"><img src="data:image/png;base64,${fs.readFileSync(`${dir}/${id}.png`).toString('base64')}" style="position:absolute;width:${1920 * sc}px;left:${-t.rect.x * sc}px;top:${-t.rect.y * sc}px"></div>`;
  } else {
    body = `<div class="brand">Med<b>Essentiel</b></div>${fullScene(t.title, last)}`;
  }
  const cta = last ? '' : `<div class="cta">Suivez <b>MedEssentiel</b><br>pour plus de médecine simple</div>`;
  await page.setContent(`<html><head><meta charset="utf-8"><style>${css}</style></head><body>${body}${cta}</body></html>`);
  await page.waitForTimeout(80);
  await page.screenshot({ path: `${out}/${id}.png` });
}
await browser.close();
console.log('frames', ids.length);
