// Fonds de scène de l'épisode 25 (sepsis). Usage: THEME=brand node scenes_ep25.mjs <outDir>
import { TEAL, RED, GREEN, brand, ico, I, item, hookScene, introScene, outroScene, render } from '../lib.mjs';
const big = (t, c = TEAL) => `<div class="pill" style="font-size:34px;border-color:${c};margin-top:16px">${t}</div>`;
const scenes = {
t01: hookScene(`Une infection banale…<br>puis tout<br>s'accélère`, `À quel moment<div style="color:#13A8A8;margin-top:12px">s'inquiéter&nbsp;?</div>`),
t02: introScene(25, `Le <span style="color:${TEAL}">sepsis</span> : une urgence vitale`),
t03: `${brand}<div class="card"><span class="chip red">DÉFINITION (SEPSIS-3)</span><h1>Dysfonction d'organe</h1>
  ${item(I.warn, 'Menace vitale', RED)}${item(I.flask, 'Réponse dérégulée de l\'organisme à une infection', TEAL)}${item(I.rep, 'Choc septique : tension à soutenir par médicaments', RED)}</div>`,
t04: `${brand}<div class="card"><span class="chip">SCORE qSOFA</span><h1>2 signes sur 3 = alerte</h1>
  ${item(I.scan, 'Respiration ≥ 22 / min', RED)}${item(I.dizzy, 'Confusion ou somnolence', RED)}${item(I.rep, 'Tension systolique ≤ 100 mmHg', RED)}
  <p class="sub" style="font-size:24px;margin-top:8px">Outil d'alerte, pas un diagnostic.</p></div>`,
t05: `${brand}<div class="card"><span class="chip">AU QUOTIDIEN</span><h1>Signes qui inquiètent</h1>
  ${item(I.pale, 'Peau pâle, froide ou marbrée', TEAL)}${item(I.rep, 'Cœur très rapide · frissons · vertiges', TEAL)}${item(I.warn, 'Fièvre élevée ou température basse', RED)}${item(I.test, 'Urines très rares · douleur extrême', RED)}</div>`,
t06: `${brand}<div class="card"><span class="chip">PLUS À RISQUE</span><h1>Qui est concerné ?</h1>
  ${item(I.faint, 'Nourrissons · personnes âgées', TEAL)}${item(I.hosp, 'Grossesse, post-partum · après chirurgie', TEAL)}${item(I.flask, 'Immunodéprimés · diabétiques', TEAL)}</div>`,
t07: `${brand}<div class="card" style="background:#FFF3F3"><span class="chip red">URGENCE</span><h1 style="color:#8f1d22">Chaque heure compte</h1>
  ${item(I.phone, 'Appeler les secours ou aller aux urgences', RED)}${item(I.syringe, 'Antibiotiques précoces (idéalement < 1 h en cas de choc)', RED)}${item(I.test, 'Remplissage · lactate · prélèvements', RED)}</div>`,
t08: `${brand}<div class="card"><span class="chip">PRÉVENIR</span><h1>Les bons réflexes</h1>
  ${big('Vaccination à jour')}${big('Hygiène des mains · soin des plaies', '#0274BB')}${big('Consulter si l\'infection s\'aggrave', '#2EAD6B')}</div>`,
t09: `${brand}<div class="card"><span class="chip">À RETENIR</span><h1>Reconnaître · Alerter · Traiter</h1>
  ${big('Dégradation + infection = urgence', '#E5484D')}${big('Confusion · respiration rapide · tension basse', '#0274BB')}${big('N\'attendez pas')}</div>`,
t10: outroScene(`Sepsis-3 — Singer et al., JAMA 2016 (PMID 26903338)<br>Surviving Sepsis Campaign 2021 — Evans et al. (PMID 34643578)`),
};
await render(process.argv[2], scenes);
