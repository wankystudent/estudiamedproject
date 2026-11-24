// Ajoute un plan de coupe (B-roll Pixabay) en fond du hook + intro d'un projet HyperFrames déjà construit.
// Usage: node broll.mjs <projDir> <clip.mp4> <fin_s> [ss=début dans le clip en s] [scenes=s0,s1]
// Le clip est recadré en 9:16, légèrement assombri, encodé en 24 fps sans audio ; le texte reste lisible grâce à un voile marine.
import fs from 'fs'; import path from 'path'; import { execFileSync } from 'child_process';
const [proj, clip, end = '12', ss = '0', scenes = 's0,s1'] = process.argv.slice(2);
fs.mkdirSync(path.join(proj, 'assets'), { recursive: true });
const out = path.join(proj, 'assets/broll.mp4');
execFileSync('ffmpeg', ['-nostdin', '-v', 'error', '-y', '-ss', ss, '-t', String(+end + 0.5), '-i', clip, '-an',
  '-vf', 'crop=ih*9/16:ih,scale=1080:1920,eq=brightness=-0.08:saturation=0.85,fps=24,format=yuv420p',
  '-c:v', 'libx264', '-crf', '24', '-preset', 'veryfast', '-movflags', '+faststart', out]);
let html = fs.readFileSync(path.join(proj, 'index.html'), 'utf-8');
html = html.replace(/<video id="broll"[^>]*><\/video>\n?/g, '').replace(/<style id="brollcss">[\s\S]*?<\/style>\n?/g, '');
const css = scenes.split(',').map(s => `#${s} .dk`).join(',') + '{background:linear-gradient(180deg,rgba(6,41,92,.62) 0%,rgba(3,22,52,.82) 100%)!important}';
html = html.replace('</head>', `<style id="brollcss">${css}</style></head>`);
const vid = `<video id="broll" class="clip" data-start="0" data-duration="${end}" data-track-index="0" muted playsinline src="assets/broll.mp4" style="position:absolute;left:0;top:0;width:1080px;height:1920px;object-fit:cover;z-index:0"></video>`;
html = html.replace(/(<div id="root"[^>]*>)/, `$1\n${vid}`);
fs.writeFileSync(path.join(proj, 'index.html'), html);
console.log('B-roll', path.basename(clip), '0 →', end, 's sur', scenes);
