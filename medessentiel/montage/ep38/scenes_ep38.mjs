// Fonds de scène de l'épisode 38 (dengue). Usage: THEME=brand node scenes_ep38.mjs <outDir>
import { TEAL, RED, GREEN, brand, ico, I, item, hookScene, introScene, outroScene, render } from '../lib.mjs';
const big = (t, c = TEAL) => `<div class="pill" style="font-size:34px;border-color:${c};margin-top:16px">${t}</div>`;
const scenes = {
x01: hookScene(`Forte fièvre,<br>douleurs derrière les yeux,<br>courbatures…`, `Est-ce<div style="color:#13A8A8;margin-top:12px">la dengue&nbsp;?</div>`),
x02: introScene(38, `La <span style="color:${TEAL}">dengue</span> : savoir quand s'inquiéter`),
x03: `${brand}<div class="card"><span class="chip">LA MALADIE</span><h1>Virus et moustique</h1>
  ${item(I.flask, '4 virus étroitement apparentés', TEAL)}${item(I.scan, 'Endémique dans > 100 pays', RED)}${item(I.warn, 'Vecteur en expansion (climat)', TEAL)}</div>`,
x04: `${brand}<div class="card"><span class="chip">PRÉVENIR</span><h1>Lutter contre les moustiques</h1>
  ${big('Supprimer les eaux stagnantes')}${big('Se protéger des piqûres', '#0274BB')}${big('Moustiquaires', '#2EAD6B')}</div>`,
x05: `${brand}<div class="card"><span class="chip">SIGNES</span><h1>Que ressent-on ?</h1>
  ${item(I.pale, 'Fièvre élevée brutale', TEAL)}${item(I.dizzy, 'Maux de tête · douleurs derrière les yeux', TEAL)}${item(I.faint, 'Douleurs musculaires et articulaires · éruption', TEAL)}</div>`,
x06: `${brand}<div class="card" style="background:#FFF3F3"><span class="chip red">ALERTE</span><h1 style="color:#8f1d22">Urgences</h1>
  ${item(I.warn, 'Douleurs abdominales persistantes', RED)}${item(I.pale, 'Vomissements répétés · saignements', RED)}${item(I.dizzy, 'Somnolence · agitation · faiblesse', RED)}${item(I.phone, 'Souvent quand la fièvre baisse', RED)}</div>`,
x07: `${brand}<div class="card"><span class="chip">DIAGNOSTIC</span><h1>Analyses</h1>
  ${item(I.test, 'Examen clinique', TEAL)}${item(I.syringe, 'Virus ou anticorps dans le sang', TEAL)}${item(I.scan, 'Surveillance des plaquettes', TEAL)}</div>`,
x08: `${brand}<div class="card"><span class="chip">PRISE EN CHARGE</span><h1>Pas d'antiviral spécifique</h1>
  ${item(I.hosp, 'Surveillance attentive', TEAL)}${item(I.syringe, 'Hydratation IV si fuite plasmatique', TEAL)}${item(I.warn, 'Pas d\'aspirine ni AINS sans avis', RED)}</div>`,
x09: `${brand}<div class="card"><span class="chip">PERSPECTIVES</span><h1>Nouvelles armes</h1>
  ${big('Vaccins partiellement efficaces')}${big('Nouveaux contrôles du moustique', '#0274BB')}</div>`,
x10: outroScene(`Paz-Bailey et al., Lancet 2024 (PMID 38280388)<br>Wilder-Smith et al., Lancet 2019 (PMID 30696575)<br>Vidéos : Pixabay`),
};
await render(process.argv[2], scenes);
