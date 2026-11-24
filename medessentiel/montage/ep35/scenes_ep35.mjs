// Fonds de scène de l'épisode 35 (insuffisance cardiaque). Usage: THEME=brand node scenes_ep35.mjs <outDir>
import { TEAL, RED, GREEN, brand, ico, I, item, hookScene, introScene, outroScene, render } from '../lib.mjs';
const big = (t, c = TEAL) => `<div class="pill" style="font-size:34px;border-color:${c};margin-top:16px">${t}</div>`;
const scenes = {
x01: hookScene(`Essoufflement à l'effort,<br>chevilles gonflées,<br>grande fatigue…`, `Et si c'était<div style="color:#13A8A8;margin-top:12px">le cœur&nbsp;?</div>`),
x02: introScene(35, `L'<span style="color:${TEAL}">insuffisance cardiaque</span>`),
x03: `${brand}<div class="card"><span class="chip">LE SYNDROME</span><h1>Le cœur pompe moins bien</h1>
  ${item(I.flask, 'Débit insuffisant pour les besoins du corps', TEAL)}${item(I.hosp, '> 64 millions de personnes dans le monde', RED)}${item(I.scan, 'Vieillissement · meilleure survie après infarctus', TEAL)}</div>`,
x04: `${brand}<div class="card"><span class="chip">CAUSES</span><h1>Causes fréquentes</h1>
  ${big('Hypertension artérielle')}${big('Artères coronaires · valves', '#0274BB')}${big('Cardiomyopathies · arythmies', '#2EAD6B')}</div>`,
x05: `${brand}<div class="card"><span class="chip">LES SIGNES</span><h1>Que ressent-on ?</h1>
  ${item(I.scan, 'Essoufflement : effort, puis repos', TEAL)}${item(I.pale, 'Fatigue · prise de poids rapide', TEAL)}${item(I.faint, 'Chevilles gonflées · toux nocturne', TEAL)}</div>`,
x06: `${brand}<div class="card" style="background:#FFF3F3"><span class="chip red">ALARME</span><h1 style="color:#8f1d22">Urgence</h1>
  ${item(I.scan, 'Essoufflement brutal · difficulté à parler', RED)}${item(I.pale, 'Lèvres bleutées · crachats mousseux', RED)}${item(I.warn, 'Douleur thoracique · syncope', RED)}${item(I.phone, 'Appelez les secours', RED)}</div>`,
x07: `${brand}<div class="card"><span class="chip">DIAGNOSTIC</span><h1>Examens</h1>
  ${item(I.test, 'Examen clinique · ECG', TEAL)}${item(I.syringe, 'Prise de sang : peptides natriurétiques', TEAL)}${item(I.hosp, 'Échocardiographie : fonction du cœur', TEAL)}</div>`,
x08: `${brand}<div class="card"><span class="chip">TRAITEMENT</span><h1>Plusieurs volets</h1>
  ${item(I.syringe, 'Médicaments prescrits par le médecin', TEAL)}${item(I.test, 'Suivi régulier · traiter la cause', TEAL)}${item(I.hosp, 'Parfois : appareil ou intervention', TEAL)}</div>`,
x09: `${brand}<div class="card"><span class="chip">AU QUOTIDIEN</span><h1>Les bons réflexes</h1>
  ${big('Se peser · surveiller les gonflements')}${big('Sel limité selon avis médical', '#0274BB')}${big('Activité adaptée · sans tabac', '#2EAD6B')}</div>`,
x10: outroScene(`Savarese et al., Cardiovasc Res 2023 (PMID 35150240)<br>Vidéos : Pixabay`),
};
await render(process.argv[2], scenes);
