// Fonds de scène de l'épisode 6 (appendicite). Usage: node scenes_ep06.mjs <outDir>
import { TEAL, RED, GREEN, brand, abdomen, ico, I, item, render } from '../lib.mjs';

const gut = (inflamed) => `
<svg viewBox="0 0 420 340" width="420" height="340">
 <path d="M70 60 H350 V280 H260 V150 H160 V280 H70Z" fill="none" stroke="#E0A3AC" stroke-width="44" stroke-linejoin="round"/>
 <path d="M70 60 H350 V280 H260 V150 H160 V280 H70Z" fill="none" stroke="#F4C6CC" stroke-width="26" stroke-linejoin="round"/>
 <path d="M300 285 C 320 320, 360 330, 372 306" fill="none" stroke="${inflamed ? RED : '#E0A3AC'}" stroke-width="${inflamed ? 34 : 24}" stroke-linecap="round"/>
 ${inflamed ? `<circle cx="365" cy="300" r="40" fill="none" stroke="${RED}" stroke-width="5" stroke-dasharray="8 8"/>` : ''}
 <text x="250" y="326" font-family="Inter" font-weight="800" font-size="22" fill="#0B2545" text-anchor="middle">appendice</text>
</svg>`;

const migrate = `
<svg viewBox="0 0 360 520" width="360" height="520">
 <path d="M120 20 Q180 5 240 20 L 262 120 Q 290 220 270 330 Q 260 440 180 500 Q 100 440 90 330 Q 70 220 98 120 Z" fill="#E8EEF5" stroke="#9fb4cf" stroke-width="4"/>
 <circle cx="180" cy="230" r="16" fill="#E8A33D"/><text x="180" y="190" text-anchor="middle" font-family="Inter" font-weight="800" font-size="20" fill="#9a6a1a">nombril</text>
 <path d="M196 244 C 220 290, 235 320, 232 366" fill="none" stroke="${RED}" stroke-width="7" stroke-dasharray="3 16" stroke-linecap="round"/>
 <circle cx="232" cy="390" r="30" fill="${RED}" opacity=".6"/><path d="M222 372 l-10 22 h18 l-10 22" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const people = (t, e) => `<div style="flex:1;background:#fff;border:2px solid #dbe6f0;border-radius:24px;padding:30px 12px;text-align:center"><div style="font-size:84px">${e}</div><div style="font-size:30px;font-weight:800;margin-top:10px">${t}</div></div>`;

const scenes = {
p01: `${brand}
 <div style="position:absolute;left:34px;top:300px;width:400px;font-size:46px;font-weight:900;line-height:1.2"><span style="color:#E8A33D">Nombril</span><br><span style="font-size:60px;color:#9fb4cf">↓</span><br><span style="color:${RED}">Bas à droite</span></div>
 <div style="position:absolute;right:34px;top:330px;width:400px;font-size:52px;font-weight:900;line-height:1.1">Est-ce l'<span style="color:${TEAL}">appendicite</span>&nbsp;?</div>`,
p02: `${brand}
 <div style="position:absolute;left:34px;top:330px;width:400px"><div style="font-size:30px;font-weight:700;color:${TEAL};letter-spacing:2px">SÉRIE 1 · ÉPISODE 6</div><div style="font-size:48px;font-weight:900;line-height:1.1;margin-top:14px">La médecine en 3 minutes</div></div>
 <div style="position:absolute;right:34px;top:300px;width:400px;font-size:54px;font-weight:900;line-height:1.1">Appendicite&nbsp;: comment la <span style="color:${TEAL}">reconnaître</span>&nbsp;?</div>`,
p03: `${brand}<div class="card"><span class="chip">ANATOMIE</span><h1>Appendice normal ou enflammé</h1>
 <div style="display:flex;gap:20px;margin-top:0">
  <div style="flex:1;text-align:center"><div class="pill" style="padding:0">${gut(false)}<div style="font-size:28px;font-weight:800;color:${GREEN};padding-bottom:14px">Normal</div></div></div>
  <div style="flex:1;text-align:center"><div class="pill" style="padding:0;border-color:${RED}">${gut(true)}<div style="font-size:28px;font-weight:800;color:${RED};padding-bottom:14px">Appendicite</div></div></div></div>
 <p class="sub" style="font-size:27px;margin-top:20px">Sans traitement : risque de perforation et de péritonite.</p></div>`,
p04: `${brand}<div class="card"><span class="chip">SIGNE 1 / 4</span><h1>Une douleur qui migre</h1>
 <div class="row" style="justify-content:space-between"><div style="margin-left:30px">${migrate}</div><div style="width:430px"><div class="pill" style="margin-bottom:20px">Débute autour du nombril</div><div style="font-size:44px;color:#9fb4cf;margin:0 0 6px 30px">↓</div><div class="pill" style="border-color:${RED};color:${RED}">Puis en bas à droite, de plus en plus forte</div></div></div></div>`,
p05: `${brand}<div class="card"><span class="chip">SIGNE 2 / 4</span><h1>Aggravée par le mouvement</h1>
 <div style="margin-top:20px">${item(I.warn, 'Quand on bouge', TEAL)}${item(I.warn, 'Quand on tousse', TEAL)}${item(I.warn, 'Quand on marche', TEAL)}</div></div>`,
p06: `${brand}<div class="card"><span class="chip">SIGNE 3 / 4</span><h1>Digestion perturbée</h1>
 <div style="margin-top:20px">${item(I.flask, "Perte d'appétit", TEAL)}${item(I.dizzy, 'Nausées', TEAL)}${item(I.faint, 'Parfois vomissements', TEAL)}</div></div>`,
p07: `${brand}<div class="card"><span class="chip">SIGNE 4 / 4</span><h1>Parfois de la fièvre</h1>
 <div class="pill" style="margin-top:34px;border-color:${RED};padding:34px;font-size:40px">Pas de fièvre ≠ pas d'appendicite</div>
 <p class="sub" style="font-size:30px;margin-top:24px">La fièvre est peu discriminante.</p></div>`,
p08: `${brand}<div class="card"><span class="chip">ATTENTION</span><h1>Signes parfois atypiques</h1>
 <div style="display:flex;gap:20px;margin-top:30px">${people('Enfant', '🧒')}${people('Femme enceinte', '🤰')}${people('Personne âgée', '🧓')}</div>
 <p class="sub" style="font-size:28px;margin-top:26px">Diagnostic plus difficile : consultez.</p></div>`,
p09: `${brand}<div class="card" style="background:#FFF3F3"><span class="chip red">URGENCE</span><h1 style="color:#8f1d22">Quand consulter en urgence&nbsp;?</h1>
 ${item(I.warn, 'Douleur intense, qui persiste ou s\'aggrave', RED)}${item(I.faint, 'Surtout avec vomissements ou fièvre', RED)}${item(I.hosp, 'Ventre dur et très douloureux', RED)}</div>`,
p10: `${brand}<div class="card"><span class="chip">DIAGNOSTIC</span><h1>Comment le médecin confirme</h1>
 ${item(I.hosp, 'Examen clinique', TEAL)}${item(I.flask, 'Prise de sang', TEAL)}${item(I.scan, 'Imagerie : échographie ou scanner', TEAL)}
 <div class="pill" style="margin-top:14px;border-color:${TEAL};font-size:30px">Aucun signe seul ne suffit.</div></div>`,
p11: `${brand}<div class="card"><span class="chip">EN ATTENDANT LA CONSULTATION</span><h1>À éviter</h1>
 ${item(I.warn, 'Manger et boire', RED)}${item(I.warn, 'Laxatifs', RED)}${item(I.warn, 'Médicaments contre la douleur sans avis médical', RED)}
 <p class="sub" style="font-size:28px;margin-top:16px">Ils peuvent masquer les signes.</p></div>`,
p12: `${brand}
 <div style="position:absolute;left:34px;top:270px;width:400px"><div style="font-size:46px;font-weight:900;line-height:1.1">Abonnez-vous</div><div style="font-size:32px;font-weight:600;margin-top:18px;color:#cfe0f3">Quel sujet médical voulez-vous voir expliqué&nbsp;?<br>Dites-le en commentaire.</div></div>
 <div style="position:absolute;right:34px;top:250px;width:400px"><div style="font-size:26px;font-weight:800;color:${TEAL};letter-spacing:1px">SOURCES</div>
  <div style="font-size:27px;font-weight:600;margin-top:10px;line-height:1.35;color:#cfe0f3">SFCD / SIAD — RPC « Appendicite de l'adulte » (2021)</div>
  <div style="font-size:23px;font-weight:600;margin-top:34px;line-height:1.35;color:#9fb4cf">Information éducative — ne remplace pas une consultation médicale.</div></div>`,
};
await render(process.argv[2], scenes);
