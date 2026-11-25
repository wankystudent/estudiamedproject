// Miniatures MedEssentiel 1080x1920 (couvertures Reels/Shorts). Usage: node thumbs.mjs [VID-xxx ...]
import fs from 'fs'; import path from 'path'; import { createRequire } from 'module'; const { chromium } = createRequire(import.meta.url)('playwright');
const rows = JSON.parse(fs.readFileSync(new URL('./videos.json', import.meta.url), 'utf-8'));
const only = process.argv.slice(2);
const fd = '/root/.cache/hyperframes/fonts/league-gothic/';
const faces = fs.readdirSync(fd).filter(f => f.endsWith('.woff2')).map((f, i) => `@font-face{font-family:LG${i};src:url(data:font/woff2;base64,${fs.readFileSync(fd + f).toString('base64')})}`).join('');
const fam = fs.readdirSync(fd).filter(f => f.endsWith('.woff2')).map((_, i) => `LG${i}`).join(',');
const logo = 'data:image/png;base64,' + fs.readFileSync(new URL('../brand/logo_icon.png', import.meta.url)).toString('base64');
const G = (id, a, b) => `<linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient>`;
const defs = `<defs>${G('t', '#19D3C5', '#0274BB')}${G('r', '#ff8a8a', '#E5484D')}${G('y', '#FFD66B', '#F5B82E')}${G('w', '#ffffff', '#bcd6ee')}<filter id="s"><feDropShadow dx="0" dy="10" stdDeviation="14" flood-color="#001F44" flood-opacity=".55"/></filter></defs>`;
const S = (inner) => `<svg viewBox="0 0 400 400" width="760" height="760">${defs}<g filter="url(#s)">${inner}</g></svg>`;
const icons = {
  pyramid: S(`<path d="M200 70L350 330H50Z" fill="url(#y)"/><path d="M200 70L350 330H200Z" fill="#E0A21F"/><path d="M95 250H305M135 190H265M170 130H230" stroke="#8a5a00" stroke-width="8" stroke-linecap="round" opacity=".55"/><circle cx="320" cy="80" r="30" fill="url(#w)"/>`),
  heart: S(`<path d="M200 350C60 250 35 150 108 100C150 72 190 92 200 128C210 92 250 72 292 100C365 150 340 250 200 350Z" fill="url(#r)"/><path d="M70 205H140L165 150L205 260L235 190H330" stroke="#fff" stroke-width="14" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`),
  'heart-cor': S(`<path d="M200 350C60 250 35 150 108 100C150 72 190 92 200 128C210 92 250 72 292 100C365 150 340 250 200 350Z" fill="url(#r)"/><path d="M200 130C170 170 160 210 190 250M200 150C240 170 255 205 240 240M180 190C150 195 130 215 135 245" stroke="#7a1218" stroke-width="12" fill="none" stroke-linecap="round"/><circle cx="190" cy="252" r="22" fill="#4a0a10"/>`),
  brain: S(`<path d="M105 215C70 170 100 100 165 95C195 65 260 78 280 120C335 130 345 205 300 240C298 292 248 312 212 296C188 325 128 305 122 262C88 258 80 232 105 215Z" fill="url(#t)"/><path d="M200 105V290M150 150C175 160 175 190 150 205M255 150C230 165 232 195 258 205M160 245C185 240 190 265 170 285M245 250C222 248 214 270 232 290" stroke="#fff" stroke-opacity=".75" stroke-width="9" fill="none" stroke-linecap="round"/>`),
  lungs: S(`<path d="M195 70V150L150 190" stroke="url(#w)" stroke-width="16" fill="none" stroke-linecap="round"/><path d="M205 150L250 190" stroke="url(#w)" stroke-width="16" fill="none" stroke-linecap="round"/><path d="M175 160C120 150 60 220 65 300C70 345 120 345 150 320C175 300 180 240 175 160Z" fill="url(#t)"/><path d="M225 160C280 150 340 220 335 300C330 345 280 345 250 320C225 300 220 240 225 160Z" fill="url(#t)"/><circle cx="270" cy="260" r="24" fill="url(#r)"/>`),
  kidneys: S(`<path d="M150 80C85 80 60 150 75 215C88 275 130 320 165 300C195 285 170 250 150 232C132 212 160 190 185 185C215 170 205 85 150 80Z" fill="url(#r)"/><path d="M250 80C315 80 340 150 325 215C312 275 270 320 235 300C205 285 230 250 250 232C268 212 240 190 215 185C185 170 195 85 250 80Z" fill="url(#r)"/><path d="M200 110V300" stroke="url(#w)" stroke-width="14" stroke-linecap="round"/>`),
  uterus: S(`<path d="M200 110C150 110 120 170 140 240C150 280 175 305 200 305C225 305 250 280 260 240C280 170 250 110 200 110Z" fill="url(#t)"/><path d="M150 140C110 120 70 135 55 175M250 140C290 120 330 135 345 175" stroke="url(#w)" stroke-width="14" fill="none" stroke-linecap="round"/><circle cx="52" cy="190" r="28" fill="url(#y)"/><circle cx="348" cy="190" r="28" fill="url(#y)"/><circle cx="200" cy="215" r="34" fill="#fff" fill-opacity=".85"/>`),
  blood: S(`<circle cx="130" cy="150" r="70" fill="url(#r)"/><circle cx="130" cy="150" r="26" fill="#7a1218" fill-opacity=".6"/><circle cx="275" cy="135" r="56" fill="url(#r)"/><circle cx="275" cy="135" r="20" fill="#7a1218" fill-opacity=".6"/><circle cx="215" cy="285" r="64" fill="url(#r)"/><circle cx="215" cy="285" r="24" fill="#7a1218" fill-opacity=".6"/><circle cx="318" cy="268" r="26" fill="url(#w)"/><circle cx="82" cy="288" r="22" fill="url(#y)"/>`),
  abdomen: S(`<path d="M130 70H270C305 110 320 210 290 330H110C80 210 95 110 130 70Z" fill="url(#t)"/><circle cx="150" cy="255" r="52" fill="url(#r)"/><circle cx="150" cy="255" r="22" fill="#fff"/><path d="M200 120V320" stroke="#fff" stroke-opacity=".5" stroke-width="6"/>`),
  drop: S(`<path d="M200 50C200 50 100 170 100 250C100 305 145 350 200 350C255 350 300 305 300 250C300 170 200 50 200 50Z" fill="url(#t)"/><text x="200" y="290" text-anchor="middle" font-family="Inter" font-weight="900" font-size="120" fill="#fff">G</text>`),
  pulse: S(`<rect x="45" y="85" width="310" height="230" rx="34" fill="#001F44" stroke="url(#t)" stroke-width="12"/><path d="M70 205H130L160 130L210 285L245 190H330" stroke="#19D3C5" stroke-width="16" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`),
  gauge: S(`<path d="M60 290A140 140 0 0 1 340 290" stroke="url(#w)" stroke-width="34" fill="none" stroke-linecap="round"/><path d="M60 290A140 140 0 0 1 130 168" stroke="#2EAD6B" stroke-width="34" fill="none" stroke-linecap="round"/><path d="M270 168A140 140 0 0 1 340 290" stroke="#E5484D" stroke-width="34" fill="none" stroke-linecap="round"/><path d="M200 290L262 175" stroke="#fff" stroke-width="16" stroke-linecap="round"/><circle cx="200" cy="290" r="28" fill="url(#t)"/>`),
  nerve: S(`<circle cx="200" cy="180" r="88" fill="url(#t)"/><path d="M130 250L100 340M170 270L160 350M230 270L240 350M270 250L300 340M200 100V70M140 130L105 95M260 130L295 95" stroke="url(#w)" stroke-width="14" fill="none" stroke-linecap="round"/><circle cx="165" cy="170" r="16" fill="#fff"/><circle cx="235" cy="170" r="16" fill="#fff"/>`),
  syringe: S(`<g transform="rotate(-40 200 200)"><rect x="110" y="165" width="150" height="70" rx="12" fill="url(#w)"/><rect x="128" y="180" width="60" height="40" rx="6" fill="url(#r)"/><path d="M150 165V185M175 165V180M200 165V185M225 165V180M245 165V185" stroke="#0B2545" stroke-width="5"/><rect x="260" y="188" width="50" height="24" fill="url(#w)"/><path d="M310 200H350" stroke="url(#w)" stroke-width="8" stroke-linecap="round"/><rect x="58" y="150" width="14" height="100" rx="7" fill="url(#t)"/><path d="M72 200H110" stroke="url(#w)" stroke-width="14"/></g>`),
  baby: S(`<circle cx="200" cy="130" r="72" fill="url(#y)"/><path d="M110 330C95 250 130 205 200 205C270 205 305 250 290 330Z" fill="url(#t)"/><circle cx="175" cy="125" r="8" fill="#02285c"/><circle cx="225" cy="125" r="8" fill="#02285c"/><path d="M178 155Q200 172 222 155" stroke="#02285c" stroke-width="7" fill="none" stroke-linecap="round"/>`),
  fat: S(`<path d="M150 70C150 70 85 150 85 205C85 245 112 270 150 270C188 270 215 245 215 205C215 150 150 70 150 70Z" fill="url(#y)"/><path d="M275 150C275 150 225 215 225 255C225 285 245 305 275 305C305 305 325 285 325 255C325 215 275 150 275 150Z" fill="url(#y)"/><path d="M215 285C215 285 180 325 180 345C180 360 192 370 208 370C224 370 236 360 236 345C236 325 215 285 215 285Z" fill="url(#y)"/>`),
  spoon: S(`<path d="M55 215H345C340 305 280 350 200 350C120 350 60 305 55 215Z" fill="url(#t)"/><ellipse cx="200" cy="215" rx="145" ry="26" fill="url(#w)"/><ellipse cx="292" cy="92" rx="38" ry="54" fill="url(#y)" transform="rotate(30 292 92)"/><path d="M268 138L205 222" stroke="url(#y)" stroke-width="22" stroke-linecap="round"/>`),
};
const css = `*{margin:0;box-sizing:border-box}body{width:1080px;height:1920px;position:relative;overflow:hidden;font-family:'Inter',sans-serif;color:#fff;background:linear-gradient(180deg,#0F5FA8 0%,#06295c 45%,#031634 100%)}
.g1{position:absolute;width:1000px;height:1000px;left:-300px;top:380px;border-radius:50%;background:#19D3C5;opacity:.30;filter:blur(120px)}.g2{position:absolute;width:800px;height:800px;right:-300px;top:1000px;border-radius:50%;background:#0274BB;opacity:.5;filter:blur(110px)}
.dots{position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.10) 2.2px,transparent 2.4px);background-size:48px 48px}
.brand{position:absolute;left:60px;top:190px;display:flex;align-items:center;gap:20px;font-weight:900;font-size:44px}.brand img{width:104px;height:86px;background:#fff;border-radius:22px;padding:5px;object-fit:contain}.brand b{color:#19D3C5}
.ic{position:absolute;left:0;right:0;top:330px;display:flex;justify-content:center}
.big{position:absolute;left:50px;right:50px;top:1060px;text-align:center;font-family:${fam},'Inter';font-size:330px;line-height:.9;letter-spacing:2px;text-transform:uppercase;text-shadow:0 12px 40px rgba(0,0,0,.5)}
.big.sm{font-size:250px}.big.xs{font-size:205px}
.sub{position:absolute;left:70px;right:70px;top:1500px;text-align:center}.sub span{display:inline-block;background:#19D3C5;color:#02285c;font-weight:900;font-size:58px;padding:16px 38px;border-radius:26px;box-shadow:0 12px 30px rgba(0,0,0,.35)}
.foot{position:absolute;left:0;right:0;top:1700px;text-align:center;font-size:34px;font-weight:700;color:#bcd6ee;letter-spacing:1px}`;
const browser = await chromium.launch({ args: ['--no-sandbox'] });
const page = await browser.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
for (const r of rows) {
  if (only.length && !only.includes(r.vid)) continue;
  const [big, sub] = r.miniature.split('|');
  const cls = big.length > 11 ? 'xs' : big.length > 8 ? 'sm' : '';
  const html = `<!doctype html><html><head><meta charset="utf-8"><style>${faces}${css}</style></head><body><div class="g1"></div><div class="g2"></div><div class="dots"></div>
  <div class="brand"><img src="${logo}"><span>Med<b>Essentiel</b></span></div><div class="ic">${icons[r.icone]}</div>
  <div class="big ${cls}">${big}</div><div class="sub"><span>${sub}</span></div><div class="foot">La médecine, clairement expliquée.</div></body></html>`;
  await page.setContent(html); await page.waitForTimeout(250);
  const out = path.join(path.dirname(new URL(import.meta.url).pathname), 'thumbs', `${r.vid}.png`);
  await page.screenshot({ path: out }); console.log('ok', r.vid);
}
await browser.close();
