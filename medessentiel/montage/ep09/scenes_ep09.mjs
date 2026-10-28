// Fonds de scène de l'épisode 9 (constantes vitales). Usage: node scenes_ep09.mjs <outDir>
import { TEAL, RED, GREEN, brand, ico, I, item, hookScene, introScene, outroScene, render } from '../lib.mjs';
const BLUE = '#3B7DDD';

const vital = (chip, title, big, unit, rows, pit) => `${brand}<div class="card"><span class="chip">${chip}</span><h1>${title}</h1>
 <div class="row" style="align-items:flex-end;gap:16px;margin:6px 0 10px"><div style="font-size:92px;font-weight:900;color:${TEAL};line-height:1">${big}</div><div style="font-size:34px;font-weight:700;color:#4a5f7a;padding-bottom:10px">${unit}</div></div>
 ${rows.map(r => `<div class="pill" style="font-size:28px;padding:14px 20px;margin-top:10px">${r}</div>`).join('')}
 ${pit ? `<div class="pill" style="font-size:27px;padding:14px 20px;margin-top:10px;border-color:${RED};color:${RED}">⚠ ${pit}</div>` : ''}</div>`;
const chipItem = (n, t, c = TEAL) => `<div class="pill" style="display:flex;align-items:center;gap:16px;font-size:30px;padding:16px 20px;margin-top:12px"><span style="width:46px;height:46px;border-radius:50%;background:${c};color:#fff;font-weight:900;display:grid;place-items:center;flex:none">${n}</span>${t}</div>`;

const scenes = {
t01: hookScene(`Tension ✔<br>Pouls ✔<br>Fréquence respiratoire&nbsp;?`, `L'erreur la plus fréquente<div style="color:#13A8A8;margin-top:12px">en stage.</div>`),
t02: introScene(9, `Les <span style="color:${TEAL}">constantes vitales</span> à connaître en stage`),
t03: `${brand}<div class="card"><span class="chip">5 + 2</span><h1>Les constantes de base</h1>
  ${chipItem(1, 'Température')}${chipItem(2, 'Fréquence cardiaque')}${chipItem(3, 'Fréquence respiratoire')}${chipItem(4, 'Tension artérielle')}${chipItem(5, 'Saturation en oxygène')}
  <div class="pill" style="margin-top:14px;font-size:28px;border-color:${TEAL}">+ conscience · + douleur · valeurs repères adultes</div></div>`,
t04: vital('1 · TEMPÉRATURE', 'Fièvre à partir d\'environ 38 °C', '36,5–37,5', '°C', ['Voie de mesure : orale · axillaire · tympanique · rectale'], 'Toujours noter la voie utilisée'),
t05: vital('2 · FRÉQUENCE CARDIAQUE', 'Au repos, adulte', '60–100', 'bat/min', ['> 100 : tachycardie · < 50–60 : bradycardie', 'Pouls radial 30 s × 2 ; irrégulier : 1 minute'], null),
t06: vital('3 · FRÉQUENCE RESPIRATOIRE', 'La plus négligée', '12–20', '/min', ['Compter 1 minute, sans prévenir le patient', '> 20 : se méfier — signe précoce de détérioration'], null),
t07: vital('4 · TENSION ARTÉRIELLE', 'Repère', '120/80', 'mmHg', ['Hypotension < 90/60 · HTA > 140/90 (mesures répétées)', 'Repos 5 min · assis · bras au niveau du cœur · brassard adapté'], 'Brassard trop petit : tension surestimée'),
t08: vital('5 · SATURATION EN O₂', 'Oxymètre de pouls', '95–100', '%', ['Mains froides, vernis, mauvaise perfusion : mesure faussée'], 'Saturation normale ≠ pas de détresse respiratoire'),
t09: `${brand}<div class="card"><span class="chip">+ 2</span><h1>Conscience et douleur</h1>
  ${item(I.dizzy, 'Confusion, somnolence : alerter même si les chiffres sont normaux', RED)}${item(I.warn, 'Douleur : échelle numérique de 0 à 10', TEAL)}</div>`,
t10: `${brand}<div class="card"><span class="chip">L'ESSENTIEL</span><h1>La tendance compte</h1>
  ${item(I.scan, 'Une constante isolée ne dit pas tout', TEAL)}${item(I.clock, 'Comparer avec les valeurs précédentes', TEAL)}${item(I.hosp, 'Scores d\'alerte précoce : plusieurs constantes → un chiffre', TEAL)}</div>`,
t11: `${brand}<div class="card" style="background:#FFF3F3"><span class="chip red">QUAND ALERTER</span><h1 style="color:#8f1d22">Dès que vous avez un doute</h1>
  ${item(I.warn, 'FR élevée · saturation basse', RED)}${item(I.warn, 'Tension très basse · pouls très rapide', RED)}${item(I.dizzy, 'Confusion · douleur intense', RED)}
  <div class="pill" style="margin-top:12px;font-size:30px;border-color:${RED}">Prévenir l'infirmière ou l'interne, tout de suite</div></div>`,
t12: `${brand}<div class="card"><span class="chip">À RETENIR</span><h1>5 constantes + 2</h1>
  <div class="pill" style="margin-top:20px;font-size:36px">Mesurer bien · noter tout · comparer · alerter</div></div>`,
t13: outroScene(`Fiches pédagogiques (valeurs repères)<br>À aligner sur le protocole de votre service`),
};
await render(process.argv[2], scenes);
