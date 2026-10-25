// Fonds de scène de l'épisode 2 (cœur). Usage: node scenes_ep02.mjs <outDir>
import { TEAL, RED, brand, ico, I, ecg, render } from '../lib.mjs';
const BLUE = '#3B7DDD';

const heart = `
<svg viewBox="0 0 560 520" width="560" height="520">
 <path d="M280 500 C 90 380, 40 250, 90 150 C 130 70, 250 70, 280 150 C 310 70, 430 70, 470 150 C 520 250, 470 380, 280 500 Z" fill="#fff" stroke="#9fb4cf" stroke-width="5"/>
 <path d="M280 150 L280 480" stroke="#0B2545" stroke-width="8" stroke-dasharray="2 14" stroke-linecap="round"/>
 <path d="M110 160 C 120 110, 200 100, 262 150 L262 270 L100 270 C 95 220, 100 190, 110 160Z" fill="${BLUE}" opacity=".35"/>
 <path d="M100 285 L262 285 L262 440 C 180 390, 120 340, 100 285Z" fill="${BLUE}" opacity=".75"/>
 <path d="M298 150 C 360 100, 440 110, 452 160 C 462 190, 462 230, 460 270 L298 270Z" fill="${RED}" opacity=".35"/>
 <path d="M298 285 L460 285 C 440 340, 380 390, 298 440Z" fill="${RED}" opacity=".75"/>
 <g font-family="Inter" font-weight="800" font-size="26" fill="#0B2545" text-anchor="middle">
  <text x="180" y="215">OD</text><text x="180" y="375" fill="#fff">VD</text><text x="380" y="215">OG</text><text x="380" y="375" fill="#fff">VG</text></g>
 <text x="280" y="38" font-family="Inter" font-weight="800" font-size="22" fill="#0B2545" text-anchor="middle">septum</text>
</svg>`;

const coro = `
<svg viewBox="0 0 520 480" width="520" height="480">
 <path d="M260 460 C 80 350, 40 240, 90 150 C 130 80, 240 80, 260 150 C 280 80, 390 80, 430 150 C 480 240, 440 350, 260 460 Z" fill="#E88A98" stroke="#b9495a" stroke-width="5"/>
 <path d="M260 120 C 230 190, 200 250, 170 340 M260 120 C 310 190, 340 260, 360 330 M215 215 C 160 220, 130 250, 120 290" fill="none" stroke="#B3202C" stroke-width="12" stroke-linecap="round"/>
 <circle cx="196" cy="268" r="22" fill="#2b2b2b"/><path d="M182 254 l28 28 M210 254 l-28 28" stroke="#fff" stroke-width="6" stroke-linecap="round"/>
 <path d="M170 340 C 160 380, 150 400, 140 420" fill="none" stroke="#B3202C" stroke-width="12" stroke-linecap="round" stroke-dasharray="3 18" opacity=".5"/>
</svg>`;

const valve = (n, name, where, c) => `<div style="background:#fff;border:2px solid #dbe6f0;border-radius:22px;padding:24px 26px;width:430px"><div class="row"><div style="width:56px;height:56px;border-radius:50%;background:${c};color:#fff;font-weight:900;font-size:32px;display:grid;place-items:center;flex:none">${n}</div><div style="font-size:34px;font-weight:800">${name}</div></div><div style="font-size:26px;margin-top:10px;color:#4a5f7a;font-weight:600">${where}</div></div>`;

const step = (t, c) => `<div class="pill" style="border-color:${c};color:${c};padding:14px 22px;font-size:30px">${t}</div>`;
const arr = `<span style="font-size:36px;color:#9fb4cf;font-weight:800">→</span>`;

const scenes = {
c01: `${brand}
 <div style="position:absolute;left:34px;top:300px;width:400px;font-size:46px;font-weight:900;line-height:1.2"><span style="color:${TEAL}">1</span> pompe<br><span style="color:${TEAL}">4</span> cavités<br><span style="color:${TEAL}">4</span> valves</div>
 <div style="position:absolute;right:34px;top:330px;width:400px;font-size:52px;font-weight:900;line-height:1.1">Il bat sans s'arrêter.<div style="font-size:34px;font-weight:700;color:#cfe0f3;margin-top:18px">Mais que fait-il&nbsp;?</div></div>`,
c02: `${brand}
 <div style="position:absolute;left:34px;top:330px;width:400px"><div style="font-size:30px;font-weight:700;color:${TEAL};letter-spacing:2px">SÉRIE 1 · ÉPISODE 2</div>
  <div style="font-size:48px;font-weight:900;line-height:1.1;margin-top:14px">La médecine en 3 minutes</div></div>
 <div style="position:absolute;right:34px;top:300px;width:400px;font-size:54px;font-weight:900;line-height:1.1">Comment fonctionne <span style="color:${TEAL}">le cœur</span>&nbsp;?</div>`,
c03: `${brand}<div class="card"><span class="chip">ANATOMIE</span><h1>Quatre cavités</h1><p class="sub">2 oreillettes en haut · 2 ventricules en bas · séparés par le septum</p>
 <div style="display:flex;justify-content:center;margin-top:-6px">${heart}</div>
 <div class="row" style="justify-content:center;gap:40px;font-size:26px;font-weight:700;margin-top:-30px"><span style="color:${BLUE}">● Cœur droit</span><span style="color:${RED}">● Cœur gauche</span></div></div>`,
c04: `${brand}<div class="card"><span class="chip">DEUX POMPES</span><h1>En série</h1>
 <div style="display:flex;gap:30px;margin-top:40px">
  <div class="pill" style="flex:1;border-color:${BLUE};padding:34px"><div style="color:${BLUE};font-size:44px;font-weight:900">Cœur droit</div><div style="font-size:60px;margin:12px 0">↓</div><div style="font-size:38px;font-weight:800">Poumons</div><div style="font-size:26px;color:#4a5f7a;margin-top:8px">le sang se charge en oxygène</div></div>
  <div class="pill" style="flex:1;border-color:${RED};padding:34px"><div style="color:${RED};font-size:44px;font-weight:900">Cœur gauche</div><div style="font-size:60px;margin:12px 0">↓</div><div style="font-size:38px;font-weight:800">Tout le corps</div><div style="font-size:26px;color:#4a5f7a;margin-top:8px">via l'aorte</div></div></div></div>`,
c05: `${brand}<div class="card"><span class="chip">LE TRAJET DU SANG</span><h1>Corps → cœur → poumons → cœur → corps</h1>
 <div style="margin-top:20px;display:flex;flex-direction:column;gap:16px;align-items:flex-start">
  <div class="row" style="gap:14px;flex-wrap:wrap">${step('Veines', BLUE)}${arr}${step('Oreillette droite', BLUE)}${arr}${step('Ventricule droit', BLUE)}</div>
  <div class="row" style="gap:14px;flex-wrap:wrap">${arr}${step('Poumons (oxygène)', TEAL)}${arr}</div>
  <div class="row" style="gap:14px;flex-wrap:wrap">${step('Oreillette gauche', RED)}${arr}${step('Ventricule gauche', RED)}${arr}${step('Aorte → organes', RED)}</div></div></div>`,
c06: `${brand}<div class="card"><span class="chip">LES 4 VALVES</span><h1>Des portes à sens unique</h1>
 <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:20px">
  ${valve(1, 'Tricuspide', 'oreillette droite → ventricule droit', BLUE)}${valve(2, 'Pulmonaire', 'sortie du ventricule droit', BLUE)}
  ${valve(3, 'Mitrale', 'oreillette gauche → ventricule gauche', RED)}${valve(4, 'Aortique', 'sortie du ventricule gauche', RED)}</div>
 <p class="sub" style="font-size:28px;margin-top:26px">Le bruit du cœur : en grande partie la fermeture des valves.</p></div>`,
c07: `${brand}<div class="card"><span class="chip">LE MUSCLE CARDIAQUE</span><h1>Les artères coronaires</h1>
 <div class="row" style="justify-content:space-between"><div style="margin-left:-10px">${coro}</div>
 <div style="width:380px"><div class="pill" style="margin-bottom:18px">Elles nourrissent le cœur</div><div class="pill" style="border-color:${RED};color:${RED}">Artère bouchée = infarctus</div></div></div></div>`,
c08: `${brand}
 <div style="position:absolute;left:34px;top:270px;width:400px"><div style="font-size:46px;font-weight:900;line-height:1.1">Abonnez-vous</div>
  <div style="font-size:32px;font-weight:600;margin-top:18px;color:#cfe0f3">Quel sujet médical voulez-vous voir expliqué&nbsp;?<br>Dites-le en commentaire.</div></div>
 <div style="position:absolute;right:34px;top:250px;width:400px"><div style="font-size:26px;font-weight:800;color:${TEAL};letter-spacing:1px">SOURCES</div>
  <div style="font-size:27px;font-weight:600;margin-top:10px;line-height:1.35;color:#cfe0f3">American Heart Association — « How the Healthy Heart Works »<br>NHLBI — « How the Heart Works »</div>
  <div style="font-size:23px;font-weight:600;margin-top:34px;line-height:1.35;color:#9fb4cf">Information éducative — ne remplace pas une consultation médicale.</div></div>`,
};
await render(process.argv[2], scenes);
