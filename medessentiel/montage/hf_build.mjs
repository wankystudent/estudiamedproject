// Génère un projet HyperFrames (vidéo verticale 1080x1920 ANIMÉE, sans avatar) à partir des scènes MedEssentiel.
// Usage: node hf_build.mjs <darkScenesDir> <projectDir> <words.json> <audio.wav> "<scene:début:fin ...>" <ép.>
//   darkScenesDir : sortie de `THEME=brand node scenes_epXX.mjs` (titles.json avec cardHTML)
import fs from 'fs';
import path from 'path';
const [dir, proj, wordsFile, audio, SCENES, EP] = process.argv.slice(2);
const titles = JSON.parse(fs.readFileSync(`${dir}/titles.json`, 'utf-8'));
const words = JSON.parse(fs.readFileSync(wordsFile, 'utf-8')); // [[texte, début, fin], ...]
const scenes = SCENES.split(' ').map(x => { const [id, a, b] = x.split(':'); return { id, a: +a, b: +b }; });
const TOTAL = scenes[scenes.length - 1].b;
const esc = (t) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const TEAL = '#19D3C5', SOFT = '#bcd6ee', DIM = '#8fb3d6';
fs.mkdirSync(`${proj}/assets`, { recursive: true });
fs.copyFileSync(audio, `${proj}/assets/vo.wav`);
const logoDir = new URL('../brand/', import.meta.url).pathname;
fs.copyFileSync(`${logoDir}logo.jpg`, `${proj}/assets/logo.jpg`);
fs.copyFileSync(`${logoDir}logo_icon.png`, `${proj}/assets/logo_icon.png`);

// ---- CSS de la carte : reprend celui de lib.mjs (thème brand) ----
const libSrc = fs.readFileSync(new URL('./lib.mjs', import.meta.url), 'utf-8');
const baseCss = libSrc.match(/export const css = `([\s\S]*?)`;/)[1].replace(/\bbody\{[^}]*\}\n/, '').replace(/\$\{TEAL\}/g, '#13A8A8').replace(/\$\{RED\}/g, '#E5484D').replace(/\$\{NAVY\}/g, '#0B2545').replace(/\$\{INK\}/g, '#0B2545').replace(/\$\{GREEN\}/g, '#2EAD6B');
const darkRaw = libSrc.match(/const darkCss = `([\s\S]*?)`;/)[1];
const brandCss = darkRaw.replace(/#6b2a12/g, '#0F5FA8').replace(/#2e1206/g, '#06295c').replace(/#170803/g, '#031634').replace(/#140804/g, '#051a3a').replace(/#5b3523/g, '#1c5a96').replace(/#1f0e07/g, '#0a2a55').replace(/#6b4430/g, '#2a6fb0').replace(/#e3cdbd/g, '#bcd6ee').replace(/#F5B82E/g, '#19D3C5').replace(/#2a1206/g, '#01214a').replace(/^body\{[^}]*\}\n/m, '').split('\n').filter(l => !l.includes('[style*=')).join('\n');
// Le lint HyperFrames interdit les sélecteurs sur l'attribut style : on réécrit les styles inline au build.
const fixInline = (h) => h.replace(/background:#fff([;"])/g, 'background:#0a2a55;border-color:#2a6fb0$1').replace(/color:#4a5f7a|color:#34495e/g, 'color:#bcd6ee').replace(/color:#8f1d22|color:#6a2a2e/g, 'color:#ff9a9a').replace(/color:#0B2545/g, 'color:#ffffff').replace(/background:#FFF3F3/g, 'background:#2a0d0a').replace(/background:#FFF8EC/g, 'background:#2a1f0a');

// ---- scènes plein cadre (accroche / intro / fin) : lignes animées ----
function fullHTML(t) {
  const L = t.split('\n').map(s => s.trim()).filter(Boolean);
  if (t.includes('Abonnez-vous')) {
    const i = L.findIndex(x => x === 'SOURCES');
    const src = i >= 0 ? L.slice(i + 1).filter(x => !x.startsWith('Information')) : [];
    return `<div class="big" style="top:230px"><div class="ln biglogo"><img src="assets/logo.jpg"></div>
     <div class="ln" style="font-size:104px;font-weight:900;color:${TEAL};line-height:1">Abonnez-vous</div>
     <div class="ln" style="font-size:58px;font-weight:700;margin-top:26px">pour plus de médecine simple</div>
     <div class="ln" style="font-size:40px;font-weight:400;margin-top:36px;color:${SOFT}">Quel sujet médical voulez-vous voir expliqué ? Dites-le en commentaire.</div>
     <div class="ln" style="font-size:28px;font-weight:700;margin-top:56px;color:${TEAL};letter-spacing:2px">SOURCES</div>
     <div class="ln" style="font-size:30px;font-weight:400;margin-top:8px;color:${SOFT};line-height:1.3">${src.map(esc).join('<br>')}</div>
     <div class="ln" style="font-size:26px;font-weight:400;margin-top:30px;color:${DIM}">Information éducative — ne remplace pas une consultation médicale.</div></div>`;
  }
  if (L[0].startsWith('SÉRIE')) {
    return `<div class="big" style="top:420px"><div class="ln" style="font-size:40px;font-weight:900;color:${TEAL};letter-spacing:3px">${esc(L[0])}</div>
     <div class="ln" style="font-size:48px;font-weight:700;margin-top:18px;color:${SOFT}">${esc(L[1])}</div>
     <div class="ln" style="font-size:104px;font-weight:900;margin-top:60px;line-height:1.05">${esc(L.slice(2).join(' '))}</div></div>`;
  }
  const bullets = L.filter(x => x.startsWith('●') || (!x.includes('?') && L.indexOf(x) < Math.ceil(L.length / 2)));
  const rest = L.filter(x => !bullets.includes(x));
  return `<div class="big" style="top:300px">${bullets.map(x => `<div class="ln" style="font-size:78px;font-weight:900;line-height:1.2">${esc(x.replace('● ', ''))}</div>`).join('')}
   <div class="ln" style="font-size:92px;font-weight:900;margin-top:64px;line-height:1.08;color:${TEAL}">${rest.map(esc).join('<br>')}</div></div>`;
}

let body = '', js = '';
scenes.forEach((s, i) => {
  const t = titles[s.id], d = +(s.b - s.a).toFixed(3), o = s.a;
  const last = i === scenes.length - 1;
  let inner;
  if (t.card) {
    const fsz = t.title.length > 34 ? 76 : 90;
    const hw = esc(t.title).split(' ').map(w => `<span class="hw">${w}</span>`).join(' ');
    const sc = 980 / t.rect.w;
    inner = `<div class="head" style="font-size:${fsz}px">${hw}</div><div class="cardzone"><div class="cardscale" style="zoom:${sc.toFixed(3)}">${fixInline(t.cardHTML).replace(/class="card"/, 'class="card cardx"')}</div></div>`;
    js += `tl.from("#s${i} .hw",{y:60,opacity:0,duration:.5,stagger:.08,ease:"power3.out"},${(o + .05).toFixed(2)});
tl.from("#s${i} .cardx",{y:110,scale:.88,opacity:0,duration:.6,ease:"back.out(1.5)"},${(o + .3).toFixed(2)});
tl.from("#s${i} .cardx .chip",{scale:.5,opacity:0,duration:.35,ease:"back.out(2.4)"},${(o + .55).toFixed(2)});
tl.from("#s${i} .cardx > *:not(.chip)",{y:34,opacity:0,duration:.42,stagger:.16,ease:"power2.out"},${(o + .75).toFixed(2)});
tl.to("#s${i} .cardzone",{y:-10,duration:${Math.max(.5, d - 1.2).toFixed(2)},ease:"sine.inOut"},${(o + .9).toFixed(2)});
`;
  } else {
    inner = fullHTML(t.title);
    js += `tl.from("#s${i} .ln",{y:80,opacity:0,scale:.94,duration:.6,stagger:.18,ease:"back.out(1.3)"},${(o + .1).toFixed(2)});
`;
  }
  body += `<div id="s${i}" class="clip scene" data-start="${o}" data-duration="${d}" data-track-index="1"><div id="i${i}" class="inner">${inner}</div></div>\n`;
  js += `tl.to("#i${i}",{opacity:0,duration:.25,ease:"power2.in"},${(s.b - .27).toFixed(2)});\n`;
});

// ---- sous-titres mot à mot (groupes ≤ 5 mots) ----
const groups = []; let cur = [];
words.forEach((w, i) => {
  cur.push({ i, t: w[0], a: w[1], b: w[2] });
  const gap = i + 1 < words.length ? words[i + 1][1] - w[2] : 9;
  if (cur.length >= 5 || gap > 0.28) { groups.push(cur); cur = []; }
});
if (cur.length) groups.push(cur);
let caps = '', capjs = '';
groups.forEach((g, k) => {
  const a = Math.max(0.1, g[0].a - 0.05), b = g[g.length - 1].b + 0.1;
  caps += `<div id="c${k}" class="cap clip" data-start="${a.toFixed(2)}" data-duration="${(b - a).toFixed(2)}" data-track-index="3">${g.map(w => `<span id="w${w.i}" class="cw">${esc(w.t)}</span>`).join(' ')}</div>\n`;
  capjs += `tl.from("#c${k}",{y:24,opacity:0,duration:.14,ease:"power2.out"},${a.toFixed(2)});
${g.map(w => `tl.fromTo("#w${w.i}",{color:"#ffffff",scale:1},{color:"${TEAL}",scale:1.12,duration:.1,ease:"power2.out"},${w.a.toFixed(2)});tl.to("#w${w.i}",{color:"#ffffff",scale:1,duration:.12},${Math.max(w.b, w.a + .12).toFixed(2)});`).join('\n')}
tl.to("#c${k}",{opacity:0,duration:.1,ease:"power2.in"},${(b - .1).toFixed(2)});
`;
});

const html = `<!doctype html>
<html lang="fr"><head><meta charset="UTF-8"><meta name="viewport" content="width=1080, height=1920">
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/gsap.min.js"></script>
<style>
${baseCss}
${brandCss}
*{margin:0;padding:0;box-sizing:border-box}
html,body{margin:0;width:1080px;height:1920px;overflow:hidden;background:#031634;font-family:'Inter',sans-serif;color:#fff}
#root{position:absolute;inset:0;overflow:hidden;background:linear-gradient(180deg,#06295c 0%,#031634 100%)}
.glow{position:absolute;border-radius:50%;filter:blur(90px)}
#g1{width:900px;height:900px;left:-200px;top:380px;background:#0F5FA8;opacity:.55}
#g2{width:700px;height:700px;right:-250px;top:1000px;background:#0195B1;opacity:.35}
.scene{position:absolute;inset:0}.inner{position:absolute;inset:0}
.head{position:absolute;left:60px;right:60px;top:190px;height:330px;display:flex;flex-wrap:wrap;align-content:center;justify-content:center;text-align:center;font-weight:900;line-height:1.1;gap:0 22px}
.hw{display:inline-block}
.cardzone{position:absolute;left:50px;top:560px;width:980px}
.cardscale{width:780px}
.cardx{position:relative!important;left:auto!important;top:auto!important;box-shadow:0 20px 70px rgba(0,0,0,.5)}
.big{position:absolute;left:60px;right:60px;text-align:center}
.ln{display:block}.biglogo{width:520px;height:auto;margin:0 auto 34px;background:#fff;border-radius:32px;padding:8px}.biglogo img{width:100%;display:block}
.top{position:absolute;left:44px;top:46px;display:flex;align-items:center;gap:16px;font-weight:900;font-size:34px}.top b{color:${TEAL}}
.badge{width:92px;height:76px;border-radius:18px;background:#fff;display:grid;place-items:center}.badge img{width:78px}
.cap{position:absolute;left:40px;right:40px;top:1390px;text-align:center;font-weight:900;font-size:64px;line-height:1.15;text-shadow:0 4px 18px rgba(0,0,0,.65)}
.cw{display:inline-block;margin:0 .14em}
.cta{position:absolute;left:60px;right:60px;top:1640px;text-align:center;font-size:42px;font-weight:700;line-height:1.2;color:#fff;opacity:.9}.cta b{color:${TEAL}}
#bar{position:absolute;left:0;bottom:0;height:10px;width:1080px;background:${TEAL};transform-origin:left center}
</style></head><body>
<div id="root" data-composition-id="main" data-start="0" data-duration="${TOTAL}" data-width="1080" data-height="1920">
<div id="g1" class="glow"></div><div id="g2" class="glow"></div>
<div class="top"><div class="badge"><img src="assets/logo_icon.png"></div><span>Med<b>Essentiel</b></span></div>
${body}
<div class="cta" id="cta">Suivez <b>MedEssentiel</b><br>pour plus de médecine simple</div>
${caps}
<div id="bar"></div>
<audio id="vo" src="assets/vo.wav" data-start="0" data-duration="${TOTAL}" data-track-index="0"></audio>
</div>
<script>
window.__timelines = window.__timelines || {};
const tl = gsap.timeline({ paused: true });
tl.to("#g1",{x:260,y:-160,duration:${TOTAL},ease:"none"},0);
tl.to("#g2",{x:-220,y:140,duration:${TOTAL},ease:"none"},0);
tl.fromTo("#bar",{scaleX:0},{scaleX:1,duration:${TOTAL},ease:"none"},0);
tl.to("#cta",{opacity:0,duration:.3},${(TOTAL - 10.2).toFixed(2)});
${js}
${capjs}
window.__timelines["main"] = tl;
tl.seek(0);
</script></body></html>`;
fs.writeFileSync(`${proj}/index.html`, html);
fs.writeFileSync(`${proj}/meta.json`, JSON.stringify({ id: `ep${EP}`, name: `MedEssentiel ép. ${EP}` }));
console.log('projet', proj, 'scènes', scenes.length, 'groupes de sous-titres', groups.length, 'durée', TOTAL);
