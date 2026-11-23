// Fonds de scène de l'épisode 29 (gaz du sang). Usage: THEME=brand node scenes_ep29.mjs <outDir>
import { TEAL, RED, GREEN, brand, ico, I, item, hookScene, introScene, outroScene, render } from '../lib.mjs';
const big = (t, c = TEAL) => `<div class="pill" style="font-size:34px;border-color:${c};margin-top:16px">${t}</div>`;
const row = (a, b, c = TEAL) => `<div class="pill" style="display:flex;justify-content:space-between;align-items:center;border-color:${c};margin-top:12px;font-size:32px;font-weight:800"><span>${a}</span><span style="color:${c}">${b}</span></div>`;
const scenes = {
b01: hookScene(`pH 7,29<br>PaCO₂ 30<br>HCO₃⁻ 14`, `Que se passe-t-il<div style="color:#13A8A8;margin-top:12px">dans ce sang&nbsp;?</div>`),
b02: introScene(29, `Lire des <span style="color:${TEAL}">gaz du sang</span>`),
b03: `${brand}<div class="card"><span class="chip">LES PARAMÈTRES</span><h1>Ce que mesure le gaz du sang</h1>
  ${row('pH', 'acidité', '#E5484D')}${row('PaCO₂', 'ventilation', '#0274BB')}${row('HCO₃⁻', 'composante métabolique', TEAL)}${row('PaO₂', 'oxygénation', '#2EAD6B')}</div>`,
b04: `${brand}<div class="card"><span class="chip">ÉTAPES 1 À 3</span><h1>pH, PaCO₂, bicarbonates</h1>
  ${item(I.warn, 'pH bas : acidémie · pH haut : alcalémie', RED)}${item(I.scan, 'PaCO₂ : composante respiratoire', TEAL)}${item(I.flask, 'HCO₃⁻ : composante métabolique', TEAL)}</div>`,
b05: `${brand}<div class="card"><span class="chip">ÉTAPE 4</span><h1>Qui explique le pH ?</h1>
  ${item(I.warn, 'pH bas + HCO₃⁻ bas : acidose métabolique', RED)}${item(I.scan, 'PaCO₂ basse : compensation respiratoire', TEAL)}${item(I.test, 'PaCO₂ ↓ ≈ 1 mmHg par mmol/L de HCO₃⁻ perdu', TEAL)}</div>`,
b06: `${brand}<div class="card"><span class="chip">ÉTAPE 5</span><h1>Le trou anionique</h1>
  ${big('Na⁺ − (HCO₃⁻ + Cl⁻)')}${item(I.warn, 'Élevé : acides en excès (cétones, lactate)', RED)}${item(I.flask, 'Normal : perte de bicarbonates (diarrhée)', TEAL)}</div>`,
b07: `${brand}<div class="card"><span class="chip">AUTRES TABLEAUX</span><h1>Quatre profils</h1>
  ${row('pH ↓ · PaCO₂ ↑', 'acidose respiratoire', '#E5484D')}${row('pH ↑ · PaCO₂ ↓', 'alcalose respiratoire', '#0274BB')}${row('pH ↑ · HCO₃⁻ ↑', 'alcalose métabolique', '#2EAD6B')}</div>`,
b08: `${brand}<div class="card"><span class="chip">À RETENIR</span><h1>Méthode et contexte</h1>
  ${big('pH · PaCO₂ · HCO₃⁻')}${big('Compensation · trou anionique', '#0274BB')}${big('Jamais lu sans le patient', '#E5484D')}</div>`,
b09: outroScene(`Berend & Duits, Crit Rev Clin Lab Sci 2019 (PMID 30917291)<br>Kraut & Madias, Nat Rev Nephrol 2010 (PMID 20308999)`),
};
await render(process.argv[2], scenes);
