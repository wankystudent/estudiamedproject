// Fonds de scène de l'épisode 30 (bon usage des antibiotiques). Usage: THEME=brand node scenes_ep30.mjs <outDir>
import { TEAL, RED, GREEN, brand, ico, I, item, hookScene, introScene, outroScene, render } from '../lib.mjs';
const big = (t, c = TEAL) => `<div class="pill" style="font-size:34px;border-color:${c};margin-top:16px">${t}</div>`;
const row = (a, b, c = TEAL) => `<div class="pill" style="display:flex;justify-content:space-between;align-items:center;border-color:${c};margin-top:12px;font-size:32px;font-weight:800"><span>${a}</span><span style="color:${c}">${b}</span></div>`;
const scenes = {
c01: hookScene(`Rhume,<br>mal de gorge,<br>toux…`, `Un antibiotique,<div style="color:#13A8A8;margin-top:12px">ça aide&nbsp;?</div>`),
c02: introScene(30, `Bien utiliser les <span style="color:${TEAL}">antibiotiques</span>`),
c03: `${brand}<div class="card"><span class="chip">À SAVOIR</span><h1>Bactéries oui, virus non</h1>
  ${item(I.flask, 'Tuent les bactéries ou bloquent leur multiplication', TEAL)}${item(I.warn, 'Inefficaces sur les virus : rhume, grippe, beaucoup de bronchites et maux de gorge', RED)}</div>`,
c04: `${brand}<div class="card"><span class="chip red">RÉSISTANCE</span><h1>Un enjeu mondial (2019)</h1>
  ${row('Décès attribuables', '≈ 1,27 million', '#E5484D')}${row('Décès associés', '≈ 4,95 millions', '#E5484D')}${item(I.warn, 'Plus fort fardeau : Afrique subsaharienne de l\'Ouest', RED)}</div>`,
c05: `${brand}<div class="card"><span class="chip">UTILE QUAND</span><h1>Infection bactérienne</h1>
  ${item(I.scan, 'Pneumonie · infection urinaire', TEAL)}${item(I.test, 'Angine à streptocoque · peau', TEAL)}${item(I.hosp, 'Sepsis', TEAL)}${item(I.faint, 'Décision du médecin, après examen', TEAL)}</div>`,
c06: `${brand}<div class="card"><span class="chip">4 RÈGLES D'OR</span><h1>Bien les utiliser</h1>
  ${item(I.test, '1 · Seulement sur prescription', TEAL)}${item(I.clock, '2 · Dose et durée prescrites', TEAL)}${item(I.warn, '3 · Ni restes, ni partage', RED)}${item(I.warn, '4 · Pas d\'automédication', RED)}</div>`,
c07: `${brand}<div class="card" style="background:#FFF3F3"><span class="chip red">ATTENTION</span><h1 style="color:#8f1d22">Effets indésirables</h1>
  ${item(I.faint, 'Diarrhée · nausées · mycoses', TEAL)}${item(I.warn, 'Éruption étendue · gonflement · gêne respiratoire : urgence', RED)}${item(I.hosp, 'Diarrhée sévère ou persistante : consulter', RED)}</div>`,
c08: `${brand}<div class="card"><span class="chip">PRÉVENIR</span><h1>Moins d'infections</h1>
  ${big('Vaccins à jour')}${big('Lavage des mains · eau propre', '#0274BB')}${big('Rhume : repos, boissons, antalgiques', '#2EAD6B')}</div>`,
c09: `${brand}<div class="card"><span class="chip">À RETENIR</span><h1>Virus = pas d'antibiotique</h1>
  ${big('Prescrits · bien dosés · bien suivis')}${big('Jamais d\'automédication', '#E5484D')}${big('Allergie grave : secours', '#E5484D')}</div>`,
c10: outroScene(`Murray et al., Lancet 2022 (PMID 35065702)<br>Rosenfeld et al., Otolaryngol Head Neck Surg 2015 (PMID 25832968)`),
};
await render(process.argv[2], scenes);
