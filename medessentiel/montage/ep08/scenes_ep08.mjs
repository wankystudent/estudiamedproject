// Fonds de scène de l'épisode 8 (diabète). Usage: node scenes_ep08.mjs <outDir>
import { TEAL, RED, GREEN, brand, ico, I, item, hookScene, introScene, outroScene, render } from '../lib.mjs';
const AMBER = '#E8A33D';

const lock = `
<svg viewBox="0 0 560 300" width="560" height="300">
 <rect x="300" y="30" width="230" height="240" rx="26" fill="#F4C6CC" stroke="#B9495A" stroke-width="5"/>
 <text x="415" y="62" text-anchor="middle" font-family="Inter" font-weight="800" font-size="22" fill="#0B2545">cellule</text>
 <rect x="285" y="120" width="30" height="80" rx="10" fill="#0B2545"/>
 <g fill="${AMBER}"><circle cx="60" cy="70" r="20"/><circle cx="110" cy="130" r="20"/><circle cx="60" cy="190" r="20"/><circle cx="130" cy="230" r="20"/></g>
 <text x="90" y="285" text-anchor="middle" font-family="Inter" font-weight="800" font-size="22" fill="#0B2545">glucose</text>
 <path d="M175 160 H262" stroke="#13A8A8" stroke-width="12" stroke-linecap="round"/><circle cx="170" cy="160" r="18" fill="#13A8A8"/>
 <path d="M240 140 L272 160 L240 180" fill="none" stroke="#13A8A8" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
 <text x="215" y="125" text-anchor="middle" font-family="Inter" font-weight="800" font-size="22" fill="#13A8A8">insuline</text>
</svg>`;
const gauge = `
<div style="display:flex;height:70px;border-radius:18px;overflow:hidden;margin-top:30px;font-weight:800;font-size:26px;color:#fff;text-align:center">
 <div style="flex:1.1;background:${GREEN};display:grid;place-items:center">Normal</div><div style="flex:.9;background:${AMBER};display:grid;place-items:center">Prédiabète</div><div style="flex:1.2;background:${RED};display:grid;place-items:center">Diabète</div></div>
<div style="display:flex;font-size:28px;font-weight:800;margin-top:10px"><div style="flex:1.1">&lt; 1,10 g/L</div><div style="flex:.9">1,10 – 1,25</div><div style="flex:1.2">≥ 1,26 g/L (2 prélèvements)</div></div>`;
const two = (a, b) => `<div style="display:flex;gap:22px;margin-top:20px">${a}${b}</div>`;
const box = (t, lines, c) => `<div class="pill" style="flex:1;border-color:${c};padding:26px"><div style="font-size:42px;font-weight:900;color:${c}">${t}</div>${lines.map(l => `<div style="font-size:28px;font-weight:600;margin-top:12px;color:#34495e">${l}</div>`).join('')}</div>`;
const organ = (t, c = RED) => `<div class="pill" style="font-size:28px;padding:18px;border-color:${c}">${t}</div>`;

const scenes = {
d01: hookScene(`Repas<br>↓<br>Glycémie ↑`, `Chez le diabétique,<div style="color:#E5484D;margin-top:12px">elle reste élevée.</div>`),
d02: introScene(8, `Diabète : pourquoi la <span style="color:${TEAL}">glycémie</span> augmente`),
d03: `${brand}<div class="card"><span class="chip">FONCTIONNEMENT NORMAL</span><h1>L'insuline, la clé du glucose</h1>
  <div style="display:flex;justify-content:center">${lock}</div>
  <p class="sub" style="font-size:27px;margin-top:-4px">Pancréas (cellules bêta) → insuline → les cellules captent le glucose.</p></div>`,
d04: `${brand}<div class="card"><span class="chip">LA RÉGULATION EST PERTURBÉE</span><h1>Deux types principaux</h1>
  ${two(box('Type 1', ['Cellules bêta détruites', 'Peu d\'insuline'], RED), box('Type 2', ['Insulinorésistance', 'Le plus fréquent'], AMBER))}</div>`,
d05: `${brand}<div class="card"><span class="chip">TYPE 1</span><h1>Destruction des cellules bêta</h1>
  ${item(I.flask, 'Origine auto-immune', RED)}${item(I.clock, 'Souvent chez l\'enfant ou le jeune adulte', RED)}${item(I.syringe, 'Insuline tous les jours, à vie', RED)}</div>`,
d06: `${brand}<div class="card"><span class="chip">TYPE 2</span><h1>Insulinorésistance</h1>
  ${item(I.warn, 'Cellules qui répondent mal à l\'insuline', AMBER)}${item(I.warn, 'Production d\'insuline insuffisante avec le temps', AMBER)}${item(I.clock, 'Surpoids · sédentarité · âge · antécédents', AMBER)}${item(I.pale, 'Souvent silencieux pendant des années', AMBER)}</div>`,
d07: `${brand}<div class="card"><span class="chip">DIAGNOSTIC</span><h1>Glycémie à jeun</h1>${gauge}
  <p class="sub" style="font-size:26px;margin-top:20px">Ou &gt; 2 g/L avec symptômes. Seuils à discuter avec votre médecin.</p></div>`,
d08: `${brand}<div class="card"><span class="chip">SIGNES D'ALERTE</span><h1>Ce qui doit alerter</h1>
  ${item(I.flask, 'Soif intense', TEAL)}${item(I.rep, 'Urines abondantes', TEAL)}${item(I.pale, 'Fatigue inhabituelle', TEAL)}${item(I.warn, 'Amaigrissement · infections répétées', TEAL)}
  <p class="sub" style="font-size:26px;margin-top:6px">Beaucoup n'ont aucun symptôme au début.</p></div>`,
d09: `${brand}<div class="card"><span class="chip">COMPLICATIONS</span><h1>Les vaisseaux abîmés</h1>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:6px">${organ('Rétinopathie (yeux)')}${organ('Néphropathie (reins)')}${organ('Neuropathie (nerfs)')}${organ('Infarctus · AVC', '#8f1d22')}${organ('Artérite des jambes', '#8f1d22')}</div></div>`,
d10: `${brand}<div class="card" style="background:#FFF3F3"><span class="chip red">URGENCE</span><h1 style="color:#8f1d22">Acidocétose</h1>
  <p class="sub" style="font-size:30px;color:#6a2a2e">Surtout dans le type 1</p>
  ${item(I.flask, 'Soif extrême · nausées · vomissements', RED)}${item(I.warn, 'Douleurs du ventre · respiration rapide', RED)}${item(I.hosp, 'Haleine à odeur de fruit → consulter immédiatement', RED)}</div>`,
d11: `${brand}<div class="card"><span class="chip">TRAITEMENT ET SUIVI</span><h1>Que faire ?</h1>
  ${item(I.rep, 'Alimentation · activité physique', TEAL)}${item(I.hosp, 'Suivi médical', TEAL)}${item(I.syringe, 'Médicaments ou insuline si besoin', TEAL)}${item(I.clock, 'HbA1c : glycémie moyenne des 2–3 derniers mois', TEAL)}</div>`,
d12: `${brand}<div class="card"><span class="chip">À RETENIR</span><h1>Le glucose augmente quand…</h1>
  <div class="pill" style="margin-top:24px;font-size:36px">l'insuline manque, ou n'agit plus.</div>
  <div class="pill" style="margin-top:20px;font-size:36px;border-color:${TEAL}">Dépister tôt = prévenir les complications.</div></div>`,
d13: outroScene(`HAS (seuils cités par sources secondaires)<br>La Revue du Praticien<br>À vérifier sur texte officiel`),
};
await render(process.argv[2], scenes);
