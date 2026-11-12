// Fonds de scène de l'épisode 15 (infarctus du myocarde). Usage: THEME=brand node scenes_ep15.mjs <outDir>
import { TEAL, RED, GREEN, brand, ico, I, item, hookScene, introScene, outroScene, render } from '../lib.mjs';
const big = (t, c = TEAL) => `<div class="pill" style="font-size:34px;border-color:${c};margin-top:16px">${t}</div>`;
const scenes = {
i01: hookScene(`Pression dans<br>la poitrine<br>bras · mâchoire`, `Ça va passer…<div style="color:#13A8A8;margin-top:12px">ou infarctus&nbsp;?</div>`),
i02: introScene(15, `L'<span style="color:${TEAL}">infarctus</span> du myocarde`),
i03: `${brand}<div class="card"><span class="chip">MÉCANISME</span><h1>Une coronaire se bouche</h1>
  ${item(I.rep, 'Le cœur est un muscle nourri par les coronaires', TEAL)}${item(I.warn, 'Caillot sur une plaque de cholestérol', RED)}${item(I.clock, 'Le temps, c\'est du muscle', TEAL)}</div>`,
i04: `${brand}<div class="card"><span class="chip red">SIGNES</span><h1>Douleur en étau</h1>
  ${item(I.warn, 'Poitrine, au milieu : pression, lourdeur', RED)}${item(I.clock, 'Plus de quelques minutes, ne cède pas au repos', RED)}${item(I.faint, 'Irradie : bras gauche, cou, mâchoire, dos', RED)}${item(I.pale, 'Sueurs · nausées · essoufflement · angoisse', RED)}</div>`,
i05: `${brand}<div class="card"><span class="chip">FORMES ATYPIQUES</span><h1>Moins de signes nets</h1>
  ${item(I.rep, 'Femmes · personnes âgées · diabétiques', TEAL)}${item(I.pale, 'Fatigue inhabituelle · essoufflement', TEAL)}${item(I.warn, 'Douleur haut du ventre · nausées', TEAL)}
  <p class="sub" style="font-size:26px;margin-top:6px">Dans le doute, mieux vaut appeler.</p></div>`,
i06: `${brand}<div class="card" style="background:#FFF3F3"><span class="chip red">QUE FAIRE</span><h1 style="color:#8f1d22">Appelez les secours</h1>
  ${item(I.phone, 'Immédiatement (France : 15)', RED)}${item(I.car, 'Ne conduisez pas vous-même', RED)}${item(I.clock, 'Au repos, assis ou à demi allongé', RED)}${item(I.syringe, 'Aspirine : seulement sur conseil du médecin régulateur', RED)}</div>`,
i07: `${brand}<div class="card" style="background:#FFF3F3"><span class="chip red">ARRÊT CARDIAQUE</span><h1 style="color:#8f1d22">Il ne respire plus</h1>
  ${item(I.phone, 'Appelez les secours', RED)}${item(I.rep, 'Massage cardiaque : centre de la poitrine, fort et vite', RED)}${item(I.hosp, 'Défibrillateur si disponible', RED)}</div>`,
i08: `${brand}<div class="card"><span class="chip">DIAGNOSTIC</span><h1>Confirmer vite</h1>
  ${item(I.scan, 'Électrocardiogramme, dès que possible', TEAL)}${item(I.syringe, 'Prise de sang : troponine', TEAL)}</div>`,
i09: `${brand}<div class="card"><span class="chip">TRAITEMENT</span><h1>Rouvrir l'artère</h1>
  ${item(I.hosp, 'Angioplastie + stent', TEAL)}${item(I.flask, 'Parfois : médicament qui dissout le caillot', TEAL)}${item(I.syringe, 'Traitements au long cours ensuite', TEAL)}</div>`,
i10: `${brand}<div class="card"><span class="chip">PRÉVENTION</span><h1>Protéger son cœur</h1>
  ${item(I.rep, 'Tension · cholestérol · diabète', TEAL)}${item(I.smoke, 'Arrêter le tabac', TEAL)}${item(I.clock, 'Bouger · manger équilibré · poids sain', TEAL)}</div>`,
i11: `${brand}<div class="card"><span class="chip">À RETENIR</span><h1>Douleur thoracique</h1>
  ${big('Plus de quelques minutes : appelez.')}${big('Ne conduisez pas seul.', '#0274BB')}</div>`,
i12: outroScene(`ESC — SCA avec/sans sus-décalage ST · HAS · AHA<br>(à vérifier sur les textes intégraux)`),
};
await render(process.argv[2], scenes);
