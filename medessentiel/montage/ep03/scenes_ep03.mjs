// Fonds de scène de l'épisode 3 (placenta accreta). Usage: node scenes_ep03.mjs <outDir>
import { TEAL, RED, GREEN, brand, ico, I, item, hookScene, introScene, outroScene, render } from '../lib.mjs';

// Coupe schématique de la paroi utérine : kind = normal | accreta | increta | percreta
const layers = (kind) => {
  const reach = { normal: 118, accreta: 150, increta: 235, percreta: 345 }[kind];
  const villi = [50, 90, 130, 170, 210, 250].map(x => `<path d="M${x} 112 L${x} ${reach}" stroke="#B3402C" stroke-width="9" stroke-linecap="round"/>`).join('');
  return `<svg viewBox="0 0 300 400" width="270" height="360">
  <rect x="10" y="150" width="280" height="130" rx="6" fill="#E88A98"/>
  <rect x="10" y="280" width="280" height="10" fill="#B9495A"/>
  <path d="M30 330 Q150 300 270 330 L270 390 L30 390Z" fill="#BFD7EA"/>
  ${kind === 'normal' ? '<rect x="10" y="122" width="280" height="26" fill="#F7D9A8"/>' : '<rect x="10" y="122" width="280" height="26" fill="none" stroke="#c9a56a" stroke-dasharray="6 6"/>'}
  <path d="M10 112 Q150 10 290 112 Z" fill="#E9967A"/>
  ${villi}
  <g font-family="Inter" font-weight="700" font-size="17" fill="#0B2545"><text x="150" y="86" text-anchor="middle">placenta</text><text x="150" y="222" text-anchor="middle" fill="#fff">myomètre</text><text x="150" y="365" text-anchor="middle">vessie</text></g>
  </svg>`;
};
const tile = (svg, t, c) => `<div style="flex:1;text-align:center;background:#fff;border:2px solid ${c};border-radius:22px;padding:8px 0 14px">${svg}<div style="font-size:30px;font-weight:800;color:${c}">${t}</div></div>`;

const scenes = {
z01: hookScene(`Utérus cicatriciel<br>+ placenta prævia`, `Tout semble normal…<div style="color:#E5484D;margin-top:14px">jusqu'à la délivrance.</div>`),
z02: introScene(3, `Placenta <span style="color:${TEAL}">accreta</span> : comprendre les risques`),
z03: `${brand}<div class="card"><span class="chip">PHYSIOLOGIE</span><h1>Le décollement du placenta</h1>
  <div style="display:flex;gap:22px;margin-top:6px">${tile(layers('normal'), 'Caduque basale intacte', GREEN)}${tile(layers('accreta'), 'Caduque déficiente', RED)}</div></div>`,
z04: `${brand}<div class="card"><span class="chip">3 DEGRÉS</span><h1>Selon la profondeur</h1>
  <div style="display:flex;gap:14px;margin-top:0">${tile(layers('accreta'), 'Accreta', '#E8A33D')}${tile(layers('increta'), 'Increta', '#E5712F')}${tile(layers('percreta'), 'Percreta', RED)}</div></div>`,
z05: `${brand}<div class="card"><span class="chip">FACTEURS DE RISQUE</span><h1>Une cicatrice utérine</h1>
  ${item(I.scalpel, 'Césarienne (risque ↑ avec leur nombre)', RED)}${item(I.warn, 'Placenta prævia associé', RED)}${item(I.bandage, 'Autres chirurgies utérines, curetages', TEAL)}${item(I.flask, 'Syndrome d\'Asherman', TEAL)}${item(I.clock, 'Âge maternel avancé · PMA', TEAL)}</div>`,
z06: `${brand}<div class="card" style="background:#FFF3F3"><span class="chip red">RISQUES</span><h1 style="color:#8f1d22">Hémorragie à la délivrance</h1>
  ${item(I.warn, 'Hémorragie massive', RED)}${item(I.flask, 'Transfusion massive', RED)}${item(I.scalpel, 'Hystérectomie', RED)}${item(I.hosp, 'Lésions des organes voisins (vessie)', RED)}</div>`,
z07: `${brand}<div class="card"><span class="chip">DIAGNOSTIC ANTÉNATAL</span><h1>Échographie obstétricale</h1>
  ${item(I.scan, 'Lacunes placentaires', TEAL)}${item(I.scan, 'Perte de la zone claire rétroplacentaire', TEAL)}${item(I.scan, 'Myomètre aminci', TEAL)}${item(I.scan, 'Hypervascularisation utéro-vésicale (Doppler)', TEAL)}
  <div class="pill" style="margin-top:12px;font-size:28px;border-color:${TEAL}">IRM en complément selon les cas</div></div>`,
z08: `${brand}<div class="card"><span class="chip">PRISE EN CHARGE</span><h1>Centre expert, équipe multidisciplinaire</h1>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:10px">${['Obstétriciens', 'Anesthésistes', 'Chirurgiens', 'Radiologues interventionnels', 'Banque du sang prête', 'Césarienne programmée'].map(t => `<div class="pill" style="font-size:28px;padding:20px">${t}</div>`).join('')}</div></div>`,
z09: `${brand}<div class="card"><span class="chip">CHIRURGIE · PRÉVENTION</span><h1>Pas de délivrance forcée</h1>
  <div class="pill" style="border-color:${RED};color:${RED};margin-top:14px">Risque d'hémorragie majeure</div>
  <p class="sub" style="margin-top:20px;font-size:30px">Hystérectomie ou stratégie conservatrice : décision de l'équipe.</p>
  <div class="pill" style="border-color:${TEAL};margin-top:20px">Prévention : justifier chaque césarienne, anticiper les patientes à risque</div></div>`,
z10: `${brand}<div class="card"><span class="chip">À RETENIR</span><h1>3 idées</h1>
  <div class="pill" style="margin-top:14px;font-size:34px">1 · Utérus cicatriciel + prævia = accreta jusqu'à preuve du contraire</div>
  <div class="pill" style="margin-top:16px;font-size:34px">2 · Le diagnostic anténatal change le pronostic</div>
  <div class="pill" style="margin-top:16px;font-size:34px">3 · Accouchement préparé en centre expert</div></div>`,
z11: outroScene(`CMAJ 2020 — Placenta accreta spectrum<br>Consensus FIGO<br>SOGC n° 383 · ACOG OCC n° 7`),
};
await render(process.argv[2], scenes);
