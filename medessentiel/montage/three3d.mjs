// Ajoute des objets 3D (three.js) à un projet HyperFrames déjà construit. Dessin = fonction pure du temps (hf-seek).
// Usage: node three3d.mjs <projDir> '<spec JSON>'
// spec = [{"kind":"drop|glucose|pathogen|rbc","ranges":"0-11.5,140-150","x":220,"y":880,"size":640}, ...]
import fs from 'fs'; import path from 'path';
const [proj, specArg] = process.argv.slice(2);
const spec = JSON.parse(specArg);
const T = '/tmp/claude-0/-home-user-estudiamedproject/16b98a64-396b-5e63-b8b5-fc0723bed50e/scratchpad/t3/node_modules/three/build/three.module.min.js';
fs.mkdirSync(path.join(proj, 'lib'), { recursive: true });
fs.copyFileSync(T, path.join(proj, 'lib/three.module.min.js'));
let html = fs.readFileSync(path.join(proj, 'index.html'), 'utf-8');
html = html.replace(/<canvas id="d3[^>]*><\/canvas>\n?/g, '').replace(/<script type="module">\nimport \* as THREE[\s\S]*?<\/script>\n?/g, '');
const inst = spec.map((s, i) => ({ ...s, id: 'd3_' + i, ranges: s.ranges.split(',').map(r => r.split('-').map(Number)) }));
const canvases = inst.map(s => `<canvas id="${s.id}" width="${s.size}" height="${s.size}" style="position:absolute;left:${s.x}px;top:${s.y}px;width:${s.size}px;height:${s.size}px;z-index:50;pointer-events:none;opacity:0"></canvas>`).join('\n');
const script = `<script type="module">
import * as THREE from './lib/three.module.min.js';
const INST=${JSON.stringify(inst)};
const mk=(col,r=.2,em=0)=>new THREE.MeshPhysicalMaterial({color:col,roughness:r,clearcoat:1,clearcoatRoughness:.12,emissive:em,emissiveIntensity:.4});
function scene3(kind){
  const S=new THREE.Scene();S.add(new THREE.HemisphereLight(0xcfe8ff,0x0a2a55,1.1));
  const k=new THREE.DirectionalLight(0xffffff,3.2);k.position.set(4,6,6);S.add(k);
  const rim=new THREE.DirectionalLight(0x19D3C5,2.6);rim.position.set(-6,2,-4);S.add(rim);
  const hero=new THREE.Group();S.add(hero);const parts=[];
  if(kind==='drop'||kind==='glucose'){
    const pts=[];for(let i=0;i<=72;i++){const t=Math.PI*i/72;pts.push(new THREE.Vector2(Math.max(.0008,Math.sin(t)*Math.sin(t/2)*1.35),-Math.cos(t)*1.45));}
    hero.add(new THREE.Mesh(new THREE.LatheGeometry(pts,72),mk(0xE5484D,.2,0x5a0a12)));
    const sg=new THREE.SphereGeometry(.2,32,24),sm=mk(0x19D3C5,.15,0x0a6a66);
    for(let i=0;i<8;i++){const s=new THREE.Mesh(sg,sm);hero.add(s);parts.push(s)}
  }
  if(kind==='pathogen'){
    hero.add(new THREE.Mesh(new THREE.SphereGeometry(1,64,48),mk(0x19D3C5,.25,0x0a6a66)));
    const N=42,cg=new THREE.ConeGeometry(.12,.55,14),cm=mk(0xffffff,.3,0x335577);
    for(let i=0;i<N;i++){const y=1-2*(i+.5)/N,r=Math.sqrt(1-y*y),a=i*2.399963;const d=new THREE.Vector3(Math.cos(a)*r,y,Math.sin(a)*r);
      const c=new THREE.Mesh(cg,cm);c.position.copy(d).multiplyScalar(1.22);c.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),d);hero.add(c);}
    const rg=(()=>{const p=[];for(let i=0;i<=24;i++){const t=i/24;const x=t*.9;const y=.2*Math.cos(Math.PI*t)*(1-t*.2)+.05;p.push(new THREE.Vector2(Math.max(.001,x),y));}return new THREE.LatheGeometry(p.concat(p.slice().reverse().map(v=>new THREE.Vector2(v.x,-v.y+.0))),48)})();
    for(let i=0;i<5;i++){const m=new THREE.Mesh(rg,mk(0xE5484D,.3,0x4a0a10));m.userData.i=i;hero.add(m);parts.push(m)}
  }
  if(kind==='rbc'){
    const p=[];for(let i=0;i<=30;i++){const t=i/30;const x=t*1.0;const y=.32*Math.pow(Math.sin(Math.PI*Math.min(1,t*1.05)),.6)*(.35+.65*t)+.04;p.push(new THREE.Vector2(Math.max(.001,x),y));}
    const prof=p.concat(p.slice().reverse().map(v=>new THREE.Vector2(v.x,-v.y)));
    const g=new THREE.LatheGeometry(prof,64);
    for(let i=0;i<5;i++){const m=new THREE.Mesh(g,mk(0xE5484D,.28,0x5a0a12));m.userData.i=i;m.scale.setScalar(i===0?1.5:.95);hero.add(m);parts.push(m)}
  }
  return {S,hero,parts};
}
const R=INST.map(s=>{
  const cv=document.getElementById(s.id);
  const r=new THREE.WebGLRenderer({canvas:cv,alpha:true,antialias:true,preserveDrawingBuffer:true});
  r.setPixelRatio(1);r.setSize(s.size,s.size,false);r.setClearColor(0x000000,0);r.outputColorSpace=THREE.SRGBColorSpace;r.toneMapping=THREE.ACESFilmicToneMapping;r.toneMappingExposure=1.15;
  const C=new THREE.PerspectiveCamera(32,1,.1,50);C.position.set(0,.2,(s.kind==='pathogen'||s.kind==='rbc')?13.5:9);
  return {s,cv,r,C,...scene3(s.kind)};
});
function inRange(ranges,t){for(const [a,b] of ranges) if(t>=a&&t<b) return [a,b];return null}
function draw(o,t){
  const {s,cv,r,C,S,hero,parts}=o;const rg=inRange(s.ranges,t);
  if(!rg){cv.style.opacity=0;return}
  const f=Math.min(1,(t-rg[0])/.6),op=Math.min(f,Math.min(1,(rg[1]-t)/.5));cv.style.opacity=Math.max(0,op);
  hero.rotation.y=t*.7;hero.rotation.z=Math.sin(t*.9)*.08;hero.position.y=Math.sin(t*1.3)*.12;
  const prog=(t-rg[0])/(rg[1]-rg[0]);
  if(s.kind==='drop'||s.kind==='glucose'){
    parts.forEach((p,i)=>{const a=t*.9+i*(Math.PI*2/parts.length),rad=2.05+.1*Math.sin(t*1.7+i);p.position.set(Math.cos(a)*rad,Math.sin(a*1.3+i)*.9+.2,Math.sin(a)*rad);
      p.visible=s.kind==='glucose'?i<Math.max(1,Math.ceil(8*(1-prog)+.01)):true});
  }
  if(s.kind==='pathogen'){parts.forEach(p=>{const i=p.userData.i,a=t*.6+i*1.25,rad=2.5+.15*Math.sin(t+i);p.position.set(Math.cos(a)*rad,Math.sin(a*1.2+i)*1.0,Math.sin(a)*rad);p.rotation.set(t*.8+i,t*.5,0)})}
  if(s.kind==='rbc'){parts.forEach(p=>{const i=p.userData.i;if(i===0){p.position.set(0,0,0);p.rotation.set(Math.PI/2.4,t*.9,0)}else{const a=t*.7+i*1.57,rad=2.3+.15*Math.sin(t*1.1+i);p.position.set(Math.cos(a)*rad,Math.sin(a*1.3+i)*.9,Math.sin(a)*rad);p.rotation.set(t*.9+i,t*.6,0)}})}
  r.render(S,C);
}
window.addEventListener('hf-seek',e=>{for(const o of R)draw(o,e.detail.time)});
for(const o of R)draw(o,0);
</script>`;
html = html.replace('</body>', `${canvases}\n${script}\n</body>`);
fs.writeFileSync(path.join(proj, 'index.html'), html);
console.log('3D', inst.map(i => i.kind + '@' + i.ranges.map(r => r.join('-')).join(',')).join(' | '));
