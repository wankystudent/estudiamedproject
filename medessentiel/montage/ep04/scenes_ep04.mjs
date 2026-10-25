// Fonds de scène de l'épisode 4 (AVC). Usage: node scenes_ep04.mjs <outDir>
import { TEAL, RED, GREEN, brand, ico, I, render } from '../lib.mjs';

const brain = (kind) => `
<svg viewBox="0 0 360 300" width="360" height="300">
 <path d="M60 170 C 20 120, 60 50, 130 50 C 160 20, 230 20, 250 50 C 320 50, 350 120, 310 170 C 320 220, 270 260, 230 250 C 200 275, 150 275, 130 250 C 80 260, 40 220, 60 170Z" fill="#F4C6CC" stroke="#c9808c" stroke-width="5"/>
 <path d="M180 270 L180 190 C 180 150, 140 130, 110 110 M180 190 C 190 150, 230 130, 260 110" fill="none" stroke="#B3202C" stroke-width="10" stroke-linecap="round"/>
 ${kind === 'clot' ? `<rect x="162" y="150" width="36" height="30" rx="10" fill="#2b2b2b"/><path d="M110 110 C 90 90, 80 90, 70 80" stroke="#B3202C" stroke-width="8" stroke-dasharray="2 14" fill="none" stroke-linecap="round" opacity=".45"/>`
  : `<circle cx="230" cy="125" r="26" fill="#B3202C" opacity=".85"/><circle cx="244" cy="108" r="12" fill="#B3202C" opacity=".6"/><circle cx="215" cy="104" r="9" fill="#B3202C" opacity=".5"/>`}
</svg>`;

const face = (droop) => `
<svg viewBox="0 0 260 300" width="260" height="300"><ellipse cx="130" cy="150" rx="95" ry="120" fill="#F2D2B6" stroke="#b58a67" stroke-width="5"/>
 <circle cx="95" cy="120" r="9" fill="#2b2b2b"/><circle cx="165" cy="${droop ? 130 : 120}" r="9" fill="#2b2b2b"/>
 <path d="${droop ? 'M85 215 Q 130 245 178 205' : 'M85 210 Q 130 250 175 210'}" fill="none" stroke="#8a3b3b" stroke-width="9" stroke-linecap="round"/></svg>`;

const letter = (a, b, t) => `<div style="flex:1;background:#fff;border:2px solid #dbe6f0;border-radius:24px;padding:22px;text-align:center"><div style="font-size:90px;font-weight:900;color:${TEAL};line-height:1">${a}</div><div style="font-size:46px;font-weight:900;color:#0B2545">${b}</div><div style="font-size:26px;font-weight:700;color:#4a5f7a;margin-top:6px">${t}</div></div>`;

const arms = `<svg viewBox="0 0 360 300" width="360" height="300"><circle cx="180" cy="70" r="34" fill="#F2D2B6" stroke="#b58a67" stroke-width="4"/><rect x="140" y="110" width="80" height="150" rx="24" fill="#3B7DDD"/>
 <path d="M146 125 L70 40" stroke="#F2D2B6" stroke-width="22" stroke-linecap="round"/><path d="M214 125 L250 215" stroke="#F2D2B6" stroke-width="22" stroke-linecap="round"/>
 <path d="M270 150 l0 70 m-16 -16 l16 16 l16 -16" stroke="${RED}" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const scenes = {
a01: `${brand}
 <div style="position:absolute;left:34px;top:280px;width:400px;font-size:46px;font-weight:900;line-height:1.35"><span style="color:${TEAL}">●</span> Visage<br><span style="color:${TEAL}">●</span> Bras<br><span style="color:${TEAL}">●</span> Parole</div>
 <div style="position:absolute;right:34px;top:300px;width:400px;font-size:50px;font-weight:900;line-height:1.1">Une seule chose compte&nbsp;:<div style="color:${RED};margin-top:12px">le temps.</div></div>`,
a02: `${brand}
 <div style="position:absolute;left:34px;top:330px;width:400px"><div style="font-size:30px;font-weight:700;color:${TEAL};letter-spacing:2px">SÉRIE 1 · ÉPISODE 4</div><div style="font-size:48px;font-weight:900;line-height:1.1;margin-top:14px">La médecine en 3 minutes</div></div>
 <div style="position:absolute;right:34px;top:300px;width:400px;font-size:54px;font-weight:900;line-height:1.1">AVC&nbsp;: reconnaître les signes <span style="color:${TEAL}">FAST</span></div>`,
a03: `${brand}<div class="card"><span class="chip">DÉFINITION</span><h1>AVC = arrêt du sang dans le cerveau</h1>
 <div style="display:flex;gap:26px;margin-top:10px">
  <div style="flex:1;text-align:center"><div class="pill" style="padding:6px 0 0">${brain('clot')}<div style="font-size:32px;font-weight:800;padding:0 0 16px">Artère bouchée</div></div></div>
  <div style="flex:1;text-align:center"><div class="pill" style="padding:6px 0 0;border-color:${RED}">${brain('bleed')}<div style="font-size:32px;font-weight:800;color:${RED};padding:0 0 16px">Artère qui saigne</div></div></div></div>
 <p class="sub" style="font-size:28px;margin-top:20px">Dans les deux cas, les cellules du cerveau souffrent très vite.</p></div>`,
a04: `${brand}<div class="card"><span class="chip">LE MÉMO</span><h1>FAST ou VITE</h1>
 <div style="display:flex;gap:20px;margin-top:24px">${letter('F', 'V', 'Face · Visage')}${letter('A', 'I', 'Arm · Inertie')}${letter('S', 'T', 'Speech · Trouble de la parole')}${letter('T', 'E', 'Time · En urgence')}</div></div>`,
a05: `${brand}<div class="card"><span class="chip">F / V · VISAGE</span><h1>Demandez de sourire</h1>
 <div style="display:flex;justify-content:space-around;margin-top:8px"><div style="text-align:center">${face(false)}<div style="font-size:30px;font-weight:800;color:${GREEN}">Symétrique</div></div><div style="text-align:center">${face(true)}<div style="font-size:30px;font-weight:800;color:${RED}">Un côté tombe</div></div></div></div>`,
a06: `${brand}<div class="card"><span class="chip">A / I · BRAS</span><h1>Demandez de lever les deux bras</h1>
 <div class="row" style="justify-content:space-around;margin-top:10px">${arms}<div style="width:340px"><div class="pill" style="border-color:${RED};color:${RED}">Un bras retombe ou ne bouge pas</div></div></div></div>`,
a07: `${brand}<div class="card"><span class="chip">S / T · PAROLE</span><h1>Demandez de répéter une phrase</h1>
 <div style="margin-top:34px;display:flex;flex-direction:column;gap:22px">
  <div class="pill" style="border-color:${GREEN};color:${GREEN}">« Aujourd'hui, il fait beau. »</div>
  <div class="pill" style="border-color:${RED};color:${RED};letter-spacing:2px">« Aujou… bi… fé… bo… »</div>
  <p class="sub" style="font-size:30px">Parole confuse, impossible ou incompréhensible.</p></div></div>`,
a08: `${brand}<div class="card" style="background:#FFF3F3"><span class="chip red">T / E · URGENCE</span><h1 style="color:#8f1d22">Un seul signe brutal :<br>appelez immédiatement</h1>
 <div class="row" style="margin-top:20px">${ico(I.phone, RED)}<div style="font-size:58px;font-weight:900;color:#8f1d22">France : 15</div></div>
 <p class="sub" style="font-size:28px;margin-top:20px;color:#6a2a2e">Dans les autres pays : numéro d'urgence local.</p></div>`,
a09: `${brand}<div class="card"><span class="chip">ATTENTION</span><h1>Les signes disparaissent&nbsp;?</h1>
 <div class="pill" style="margin-top:30px;border-color:${RED};padding:30px;font-size:38px">Appelez quand même.</div>
 <p class="sub" style="font-size:32px;margin-top:26px">Ils peuvent annoncer un AVC plus grave.</p></div>`,
a10: `${brand}<div class="card" style="background:#FFF8EC"><span class="chip">LE TEMPS</span><h1>Chaque minute compte</h1>
 <div class="row" style="margin-top:30px">${ico(I.clock, '#E8A33D')}<div style="font-size:38px;font-weight:800">Traitements possibles dans un délai limité après le début des symptômes</div></div></div>`,
a11: `${brand}<div class="card"><span class="chip">EN ATTENDANT LES SECOURS</span><h1>Que faire&nbsp;?</h1>
 <div class="row" style="margin:16px 0">${ico(I.clock, TEAL)}<div style="font-size:36px;font-weight:700">Noter l'heure du début des signes</div></div>
 <div class="row" style="margin:16px 0">${ico(I.rep, TEAL)}<div style="font-size:36px;font-weight:700">Installer confortablement, rester présent</div></div>
 <div class="row" style="margin:16px 0">${ico(I.warn, RED)}<div style="font-size:36px;font-weight:700;color:#8f1d22">Ni boire, ni manger, ni médicament sans avis médical</div></div></div>`,
a12: `${brand}
 <div style="position:absolute;left:34px;top:270px;width:400px"><div style="font-size:46px;font-weight:900;line-height:1.1">Abonnez-vous</div><div style="font-size:32px;font-weight:600;margin-top:18px;color:#cfe0f3">Quel sujet médical voulez-vous voir expliqué&nbsp;?<br>Dites-le en commentaire.</div></div>
 <div style="position:absolute;right:34px;top:250px;width:400px"><div style="font-size:26px;font-weight:800;color:${TEAL};letter-spacing:1px">SOURCES</div>
  <div style="font-size:27px;font-weight:600;margin-top:10px;line-height:1.35;color:#cfe0f3">HAS — « AVC : des signes d'alerte »<br>Campagne « AVC VITE le 15 »</div>
  <div style="font-size:23px;font-weight:600;margin-top:34px;line-height:1.35;color:#9fb4cf">Information éducative — ne remplace pas une consultation médicale.</div></div>`,
};
await render(process.argv[2], scenes);
