// Fonds de scène de l'épisode 18 (score d'Apgar, quiz clinique). Usage: THEME=brand node scenes_ep18.mjs <outDir>
import { TEAL, RED, GREEN, brand, ico, I, item, hookScene, introScene, outroScene, render } from '../lib.mjs';
const big = (t, c = TEAL) => `<div class="pill" style="font-size:34px;border-color:${c};margin-top:16px">${t}</div>`;
const row = (a, b, c = TEAL) => `<div class="pill" style="display:flex;justify-content:space-between;align-items:center;border-color:${c};margin-top:12px;font-size:32px;font-weight:800"><span>${a}</span><span style="color:${c}">${b}</span></div>`;
const crit = (l, t, d) => `<div class="pill" style="display:flex;align-items:center;gap:20px;margin-top:12px;padding:16px 22px"><span style="width:64px;height:64px;border-radius:16px;background:#0195B1;color:#fff;font-weight:900;font-size:40px;display:grid;place-items:center;flex:none">${l}</span><div><div style="font-size:32px;font-weight:800">${t}</div><div style="font-size:25px;font-weight:600;color:#bcd6ee">${d}</div></div></div>`;
const cd = () => `<div style="display:flex;justify-content:space-between;margin-top:26px">${[5,4,3,2,1].map((n,k)=>`<div class="cdn" data-k="${k}" style="width:150px;height:150px;border-radius:30px;background:#0195B1;color:#fff;font-size:92px;font-weight:900;display:grid;place-items:center">${n}</div>`).join('')}</div>`;
const scenes = {
q01: hookScene(`Un nouveau-né<br>vient de naître…`, `Quel score<div style="color:#13A8A8;margin-top:12px">sur dix&nbsp;?</div>`),
q02: introScene(1, `Le score d'<span style="color:${TEAL}">Apgar</span>`),
q03: `${brand}<div class="card"><span class="chip">LE PRINCIPE</span><h1>5 critères · 0 à 2 · /10</h1>
  ${crit('A', 'Appearance', 'couleur de la peau')}${crit('P', 'Pulse', 'fréquence cardiaque')}${crit('G', 'Grimace', 'réaction à la stimulation')}${crit('A', 'Activity', 'tonus')}${crit('R', 'Respiration', 'effort respiratoire')}
  <p class="sub" style="font-size:24px;margin-top:8px">Noté à 1 minute et à 5 minutes de vie.</p></div>`,
q04: `${brand}<div class="card"><span class="chip">CAS 1</span><h1>Nouveau-né à terme, 1 min</h1>
  ${item(I.rep, 'FC 130/min', TEAL)}${item(I.faint, 'Pleure fort, bouge bien', TEAL)}${item(I.pale, 'Tronc rose, mains et pieds bleutés', TEAL)}${item(I.scan, 'Grimace et pleure à la stimulation', TEAL)}</div>`,
q05: `${brand}<div class="card"><span class="chip">À VOUS</span><h1>Calculez le score</h1>${cd()}
  <p class="sub" style="font-size:26px;margin-top:18px">A · P · G · A · R : de 0 à 2 points chacun</p></div>`,
q06: `${brand}<div class="card"><span class="chip">CORRECTION 1</span><h1>Total : 9 / 10</h1>
  ${row('A  tronc rose, extrémités bleues', '1', '#F5B82E')}${row('P  130/min', '2', '#2EAD6B')}${row('G  pleure à la stimulation', '2', '#2EAD6B')}${row('A  mouvements actifs', '2', '#2EAD6B')}${row('R  pleurs vigoureux', '2', '#2EAD6B')}</div>`,
q07: `${brand}<div class="card"><span class="chip red">CAS 2</span><h1>Plus difficile, 1 min</h1>
  ${item(I.pale, 'Pâle', RED)}${item(I.rep, 'FC 80/min', RED)}${item(I.scan, 'Grimace faible', RED)}${item(I.faint, 'Tonus flasque · gasps', RED)}</div>`,
q08: `${brand}<div class="card"><span class="chip">À VOUS</span><h1>Calculez le score</h1>${cd()}
  <p class="sub" style="font-size:26px;margin-top:18px">Pâle · FC 80 · grimace faible · flasque · gasps</p></div>`,
q09: `${brand}<div class="card"><span class="chip red">CORRECTION 2</span><h1>Total : 3 / 10</h1>
  ${row('A  pâle', '0', '#E5484D')}${row('P  80/min', '1', '#F5B82E')}${row('G  grimace faible', '1', '#F5B82E')}${row('A  flasque', '0', '#E5484D')}${row('R  gasps, irrégulier', '1', '#F5B82E')}</div>`,
q10: `${brand}<div class="card" style="background:#FFF3F3"><span class="chip red">ATTENTION</span><h1 style="color:#8f1d22">Le score ne décide pas</h1>
  ${item(I.warn, 'Réanimation : débutée avant le score de 1 minute', RED)}${item(I.hosp, 'L\'Apgar ne sert pas à décider de réanimer, ni comment', RED)}
  <p class="sub" style="font-size:24px;margin-top:6px">Source : avis AAP/ACOG n° 644 (2015).</p></div>`,
q11: `${brand}<div class="card"><span class="chip">LIMITES</span><h1>Population ≠ individu</h1>
  ${item(I.test, 'Décrit l\'état à la naissance et la réponse à la réanimation', TEAL)}${item(I.warn, 'Ne prouve pas une asphyxie, ne prédit pas le devenir neurologique', RED)}${row('À terme, Apgar 5 min 0–3', '244 ‰ décès', RED)}${row('À terme, Apgar 5 min 7–10', '0,2 ‰ décès', '#2EAD6B')}
  <p class="sub" style="font-size:22px;margin-top:6px">Casey et al., NEJM 2001 — chiffres de population.</p></div>`,
q12: `${brand}<div class="card"><span class="chip">À RETENIR</span><h1>A · P · G · A · R</h1>
  ${big('0 à 2 par critère · total sur 10')}${big('Noté à 1 et à 5 minutes', '#0274BB')}${big('Jamais un prétexte pour retarder la réanimation', '#E5484D')}</div>`,
q13: outroScene(`AAP/ACOG — Committee Opinion n° 644 (2015)<br>Casey et al. — NEJM 2001<br>Apgar V. — 1953 (rééd. 2015)`),
};
await render(process.argv[2], scenes);
