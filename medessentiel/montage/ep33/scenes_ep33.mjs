// Fonds de scène de l'épisode 33 (méningite). Usage: THEME=brand node scenes_ep33.mjs <outDir>
import { TEAL, RED, GREEN, brand, ico, I, item, hookScene, introScene, outroScene, render } from '../lib.mjs';
const big = (t, c = TEAL) => `<div class="pill" style="font-size:34px;border-color:${c};margin-top:16px">${t}</div>`;
const scenes = {
x01: hookScene(`Fièvre,<br>mal de tête violent,<br>nuque raide…`, `Faut-il craindre<div style="color:#13A8A8;margin-top:12px">une méningite&nbsp;?</div>`),
x02: introScene(33, `La <span style="color:${TEAL}">méningite</span> : l'urgence à reconnaître`),
x03: `${brand}<div class="card"><span class="chip red">DÉFINITION</span><h1>Inflammation des méninges</h1>
  ${item(I.flask, 'Virus : souvent moins grave', TEAL)}${item(I.warn, 'Bactéries (méningocoque, pneumocoque) : urgence vitale', RED)}</div>`,
x04: `${brand}<div class="card"><span class="chip">LES SIGNES</span><h1>Adulte et enfant</h1>
  ${item(I.pale, 'Fièvre · mal de tête intense', RED)}${item(I.dizzy, 'Nuque raide · gêne à la lumière', RED)}${item(I.faint, 'Nausées · vomissements', TEAL)}${item(I.warn, 'Confusion · somnolence', RED)}</div>`,
x05: `${brand}<div class="card"><span class="chip">NOURRISSON</span><h1>Des signes moins typiques</h1>
  ${item(I.faint, 'Irritabilité · pleurs inhabituels · refus de manger', TEAL)}${item(I.pale, 'Enfant mou · somnolent', TEAL)}${item(I.scan, 'Fontanelle bombée', RED)}</div>`,
x06: `${brand}<div class="card" style="background:#FFF3F3"><span class="chip red">TEST DU VERRE</span><h1 style="color:#8f1d22">Taches qui ne s'effacent pas</h1>
  ${item(I.warn, 'Rouges ou violacées, même sous un verre pressé', RED)}${item(I.clock, 'Ne pas attendre l\'éruption pour consulter', RED)}${item(I.phone, 'Secours ou urgences immédiatement', RED)}</div>`,
x07: `${brand}<div class="card"><span class="chip">À L'HÔPITAL</span><h1>Agir sans délai</h1>
  ${item(I.test, 'Examen · analyses · ponction lombaire', TEAL)}${item(I.syringe, 'Antibiotiques sans délai si méningite bactérienne suspectée', RED)}${item(I.hosp, 'Corticoïde associé dans certains cas', TEAL)}</div>`,
x08: `${brand}<div class="card"><span class="chip">PRÉVENIR</span><h1>Vaccins et entourage</h1>
  ${big('Hib · pneumocoque · méningocoque')}${big('Antibiotique préventif pour l\'entourage proche', '#0274BB')}${big('Calendrier selon le pays', '#2EAD6B')}</div>`,
x09: `${brand}<div class="card"><span class="chip">À RETENIR</span><h1>Fièvre + nuque raide = urgence</h1>
  ${big('Taches qui ne s\'effacent pas : sans attendre', '#E5484D')}${big('Antibiotiques sans délai', '#0274BB')}${big('Vaccins à jour', '#2EAD6B')}</div>`,
x10: outroScene(`ESCMID — van de Beek et al., Clin Microbiol Infect 2016 (PMID 27062097)<br>GBD 2016 — Lancet Neurol 2019 (PMID 30879893)`),
};
await render(process.argv[2], scenes);
