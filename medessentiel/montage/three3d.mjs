// Ajoute un objet 3D (three.js) à un projet HyperFrames déjà construit.
// Usage: node three3d.mjs <projDir> <kind> "<start-end,start-end,...>" [x y size]
// kind: drop (goutte de sang + sphères de glucose), lungs, syringe, heart
// Le rendu est une fonction pure du temps (écouteur hf-seek), aucune horloge.
import fs from 'fs'; import path from 'path';
const [proj, kind = 'drop', rng = '0-9999', x = '240', y = '470', size = '600'] = process.argv.slice(2);
const T = '/tmp/claude-0/-home-user-estudiamedproject/16b98a64-396b-5e63-b8b5-fc0723bed50e/scratchpad/t3/node_modules/three/build/three.module.min.js';
fs.mkdirSync(path.join(proj, 'lib'), { recursive: true });
fs.copyFileSync(T, path.join(proj, 'lib/three.module.min.js'));
const ranges = rng.split(',').map(r => r.split('-').map(Number));
const html = fs.readFileSync(path.join(proj, 'index.html'), 'utf-8');
const canvas = `<canvas id="d3" width="${size}" height="${size}" style="position:absolute;left:${x}px;top:${y}px;width:${size}px;height:${size}px;z-index:50;pointer-events:none;opacity:0"></canvas>`;
const script = `<script type="module">
import * as THREE from './lib/three.module.min.js';
const RANGES=${JSON.stringify(ranges)}, KIND=${JSON.stringify(kind)};
const cv=document.getElementById('d3');
const R=new THREE.WebGLRenderer({canvas:cv,alpha:true,antialias:true,preserveDrawingBuffer:true});
R.setPixelRatio(1);R.setSize(${size},${size},false);R.setClearColor(0x000000,0);R.outputColorSpace=THREE.SRGBColorSpace;R.toneMapping=THREE.ACESFilmicToneMapping;R.toneMappingExposure=1.15;
const S=new THREE.Scene();const C=new THREE.PerspectiveCamera(32,1,.1,50);C.position.set(0,.2,9);
S.add(new THREE.HemisphereLight(0xcfe8ff,0x0a2a55,1.1));
const key=new THREE.DirectionalLight(0xffffff,3.2);key.position.set(4,6,6);S.add(key);
const rim=new THREE.DirectionalLight(0x19D3C5,2.6);rim.position.set(-6,2,-4);S.add(rim);
const hero=new THREE.Group();S.add(hero);
const hash=i=>{let h=Math.imul(i+1,2654435761)>>>0;h^=h>>>15;h=Math.imul(h,2246822519)>>>0;return (h>>>0)/4294967296};
let orbs=[];
function drop(){
  const p2=[];for(let i=0;i<=72;i++){const t=Math.PI*i/72;p2.push(new THREE.Vector2(Math.max(.0008,Math.sin(t)*Math.sin(t/2)*1.35),-Math.cos(t)*1.45));}
  const g=new THREE.LatheGeometry(p2,72);
  const m=new THREE.MeshPhysicalMaterial({color:0xE5484D,roughness:.2,metalness:0,clearcoat:1,clearcoatRoughness:.1,emissive:0x5a0a12,emissiveIntensity:.35});
  const d=new THREE.Mesh(g,m);hero.add(d);
  const sg=new THREE.SphereGeometry(.2,32,24);const sm=new THREE.MeshPhysicalMaterial({color:0x19D3C5,roughness:.15,clearcoat:1,emissive:0x0a6a66,emissiveIntensity:.5});
  for(let i=0;i<8;i++){const s=new THREE.Mesh(sg,sm);hero.add(s);orbs.push(s)}
}
drop();
function inRange(t){for(const [a,b] of RANGES) if(t>=a&&t<b) return [a,b];return null}
function renderAt(t){
  const r=inRange(t);
  if(!r){cv.style.opacity=0;return}
  const f=Math.min(1,(t-r[0])/.6), o=Math.min(f,Math.min(1,(r[1]-t)/.5));
  cv.style.opacity=Math.max(0,o);
  hero.rotation.y=t*.7;hero.rotation.z=Math.sin(t*.9)*.08;hero.position.y=Math.sin(t*1.3)*.12;
  const prog=(t-r[0])/(r[1]-r[0]);
  orbs.forEach((s,i)=>{const a=t*.9+i*(Math.PI*2/orbs.length);const rad=2.05+.1*Math.sin(t*1.7+i);s.position.set(Math.cos(a)*rad,Math.sin(a*1.3+i)*.9+.2,Math.sin(a)*rad);const keep=KIND==='glucose'?Math.max(1,Math.ceil(8*(1-prog)+0.01)):8;s.visible=i<keep});
  R.render(S,C);
}
window.addEventListener('hf-seek',e=>renderAt(e.detail.time));
renderAt(0);
</script>`;
const out = html.replace('</div>\n</body>', `${canvas}\n</div>\n</body>`).replace('</body>', `${script}\n</body>`);
fs.writeFileSync(path.join(proj, 'index.html'), out.includes('id="d3"') ? out : html.replace('</body>', `${canvas}${script}</body>`));
console.log('3D', kind, 'ajouté', proj);
