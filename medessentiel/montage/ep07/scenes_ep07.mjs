// Fonds de scène de l'épisode 7 (reins). Usage: node scenes_ep07.mjs <outDir>
import { TEAL, RED, GREEN, brand, ico, I, item, hookScene, introScene, outroScene, render } from '../lib.mjs';
const BLUE = '#3B7DDD';

const nephron = `
<svg viewBox="0 0 560 330" width="560" height="330">
 <circle cx="80" cy="150" r="52" fill="#F4C6CC" stroke="#B9495A" stroke-width="5"/><circle cx="80" cy="150" r="22" fill="#D62839"/>
 <path d="M132 150 C 220 150, 220 60, 310 60 C 400 60, 380 250, 300 250 C 230 250, 250 290, 330 290 L 520 290" fill="none" stroke="#3B7DDD" stroke-width="22" stroke-linecap="round"/>
 <g font-family="Inter" font-weight="800" font-size="22" fill="#0B2545"><text x="80" y="235" text-anchor="middle">glomérule</text><text x="310" y="35" text-anchor="middle">tubule</text><text x="470" y="270" text-anchor="middle">urine →</text></g>
 <g fill="#13A8A8"><circle cx="140" cy="118" r="17"/><circle cx="275" cy="92" r="17"/><circle cx="385" cy="140" r="17"/><circle cx="360" cy="262" r="17"/></g>
 <g font-family="Inter" font-weight="900" font-size="20" fill="#fff" text-anchor="middle"><text x="140" y="125">1</text><text x="275" y="99">2</text><text x="385" y="147">3</text><text x="360" y="269">4</text></g>
</svg>`;
const fn = (n, t) => `<div style="background:#fff;border:2px solid #dbe6f0;border-radius:20px;padding:16px 18px"><div class="row" style="gap:14px"><div style="width:46px;height:46px;border-radius:50%;background:${TEAL};color:#fff;font-weight:900;font-size:26px;display:grid;place-items:center;flex:none">${n}</div><div style="font-size:27px;font-weight:700;line-height:1.2">${t}</div></div></div>`;

const scenes = {
k01: hookScene(`2 reins<br>1 million de néphrons<br>chacun`, `Ils filtrent tout votre sang,<div style="color:#13A8A8;margin-top:12px">sans bruit.</div>`),
k02: introScene(7, `Les <span style="color:${TEAL}">reins</span> : leur rôle dans l'organisme`),
k03: `${brand}<div class="card"><span class="chip">LE NÉPHRON</span><h1>Unité de base du rein</h1>
  <div style="display:flex;justify-content:center;margin-top:-6px">${nephron}</div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px 24px;font-size:26px;font-weight:700;margin-top:-6px"><span><b style="color:${TEAL}">1</b> Filtration</span><span><b style="color:${TEAL}">2</b> Réabsorption</span><span><b style="color:${TEAL}">3</b> Sécrétion</span><span><b style="color:${TEAL}">4</b> Excrétion</span></div></div>`,
k04: `${brand}<div class="card"><span class="chip">6 FONCTIONS</span><h1>Le rein filtre, régule, fabrique</h1>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:8px">${fn(1, 'Élimine les déchets (urée, créatinine) et médicaments')}${fn(2, 'Régule l\'eau du corps')}${fn(3, 'Contrôle sodium, potassium…')}${fn(4, 'Équilibre acido-basique (pH)')}${fn(5, 'Participe à la tension artérielle')}${fn(6, 'Hormones : érythropoïétine, vitamine D active')}</div></div>`,
k05: `${brand}<div class="card"><span class="chip">MESURER</span><h1>Le débit de filtration glomérulaire</h1>
  ${item(I.flask, 'DFG estimé à partir de la créatinine sanguine', TEAL)}${item(I.scan, 'Albumine dans les urines : signe précoce', TEAL)}
  <div class="pill" style="margin-top:16px;border-color:${TEAL};font-size:30px">DFG : meilleure mesure globale de la fonction rénale</div></div>`,
k06: `${brand}<div class="card"><span class="chip">MALADIE SILENCIEUSE</span><h1>Des années sans symptôme</h1>
  <div class="pill" style="margin-top:20px;font-size:32px">Insuffisance rénale chronique : longtemps sans douleur</div>
  <p class="sub" style="font-size:30px;margin-top:20px">Symptômes tardifs : fatigue · œdèmes · urines moussantes</p></div>`,
k07: `${brand}<div class="card"><span class="chip">QUI SURVEILLER ?</span><h1>Les personnes à risque</h1>
  ${item(I.rep, 'Diabète', TEAL)}${item(I.warn, 'Hypertension', TEAL)}${item(I.hosp, 'Antécédents familiaux', TEAL)}${item(I.flask, 'Certains médicaments pris régulièrement', TEAL)}
  <div class="pill" style="margin-top:12px;font-size:28px;border-color:${TEAL}">Dépistage : créatinine + albuminurie</div></div>`,
k08: `${brand}<div class="card"><span class="chip">PROTÉGER SES REINS</span><h1>5 gestes</h1>
  ${item(I.warn, 'Contrôler tension et glycémie', TEAL)}${item(I.smoke, 'Ne pas fumer', TEAL)}${item(I.flask, 'Éviter l\'automédication prolongée (AINS)', TEAL)}${item(I.rep, 'S\'hydrater, sans excès', TEAL)}${item(I.hosp, 'Bilan régulier si facteurs de risque', TEAL)}</div>`,
k09: `${brand}<div class="card" style="background:#FFF3F3"><span class="chip red">CONSULTER RAPIDEMENT</span><h1 style="color:#8f1d22">Si…</h1>
  ${item(I.warn, 'Forte diminution des urines', RED)}${item(I.warn, 'Sang dans les urines', RED)}${item(I.warn, 'Douleur intense du flanc', RED)}${item(I.warn, 'Jambes très gonflées · fièvre + brûlures', RED)}</div>`,
k10: `${brand}<div class="card"><span class="chip">À RETENIR</span><h1>Les reins filtrent, régulent, fabriquent</h1>
  <div class="pill" style="margin-top:30px;font-size:38px;border-color:${TEAL}">Ils ne se plaignent pas : à nous de les surveiller.</div></div>`,
k11: outroScene(`NIDDK — « The Kidneys and How They Work »<br>Lecturio — Kidney function tests`),
};
await render(process.argv[2], scenes);
