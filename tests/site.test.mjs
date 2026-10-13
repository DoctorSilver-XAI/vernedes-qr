import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { parseHTML } from 'linkedom';
import sharp from 'sharp';
import jsQR from 'jsqr';

const c=JSON.parse(await readFile('content/pharmacy.json','utf8'));
const site=new URL(c.publication.siteUrl);
const destination=new URL('bienvenue/',site).href;
const pages=['index.html','bienvenue/index.html','presentation/index.html','kit/index.html','404.html'];

test('Toutes les pages et leurs ressources respectent le sous-chemin de publication',async()=>{
  for(const page of pages){
    const {document}=parseHTML(await readFile(`dist/${page}`,'utf8'));
    assert.equal(document.documentElement.lang,'fr');
    assert.match(document.querySelector('meta[name="robots"]').content,/noindex/);
    assert.equal(document.querySelectorAll('h1').length,1);
    for(const el of document.querySelectorAll('[href],[src]')){
      const link=el.getAttribute('href')??el.getAttribute('src');
      if(link.startsWith('#')){assert.ok(document.getElementById(link.slice(1)),`${page}: ${link}`);continue;}
      if(!link.startsWith('/')) continue;
      assert.ok(link.startsWith(site.pathname),`Chemin hors base : ${link}`);
      const path=link.slice(site.pathname.length);
      await access(`dist/${path}${path.endsWith('/')?'index.html':''}`);
    }
  }
});

test('Les informations pratiques et le statut de présentation sont présents sans JavaScript',async()=>{
  const {document}=parseHTML(await readFile('dist/bienvenue/index.html','utf8'));
  const text=document.body.textContent;
  for(const expected of [c.name,c.address,c.postalCity,c.phone,c.hours.morning,c.hours.afternoon,c.publication.notice,c.publication.opening,'Jours d’ouverture à confirmer',...c.services.map(s=>s.title)]) assert.ok(text.includes(expected),expected);
  assert.equal(document.querySelectorAll('form,input,textarea,iframe').length,0);
  for(const el of document.querySelectorAll('a[href^="tel:"]')) assert.equal(el.getAttribute('href'),`tel:${c.phoneInternational}`);
  const maps=new URL(document.querySelector('a[href^="https://www.google.com/maps/dir/"]').getAttribute('href'));
  assert.equal(maps.searchParams.get('destination'),`${c.address}, ${c.postalCity}`);
  assert.ok(document.querySelector('[data-copy-address]').hasAttribute('hidden'));
  assert.equal(document.querySelector('#copy-status').getAttribute('role'),'status');
  assert.equal(document.querySelectorAll('script').length,1);
});

test('Les QR PNG, SVG et encart sont décodables vers la même URL de démonstration',async()=>{
  for(const file of ['qr-demo.png','qr-demo.svg','encart-demo.svg','encart-demo.png']){
    let source=sharp(`dist/downloads/${file}`);
    if(file.endsWith('.svg')) source=sharp(`dist/downloads/${file}`,{density:144});
    const {data,info}=await source.resize({width:1200}).ensureAlpha().raw().toBuffer({resolveWithObject:true});
    const decoded=jsQR(new Uint8ClampedArray(data),info.width,info.height);
    assert.ok(decoded,`${file}: QR non décodé`);
    assert.equal(decoded.data,destination,file);
    assert.notEqual(decoded.data,c.publication.permanentUrl);
  }
});

test('Le kit distingue démonstration et impression définitive',async()=>{
  const kit=await readFile('dist/kit/index.html','utf8');
  const encart=await readFile('dist/downloads/encart-demo.svg','utf8');
  assert.ok(kit.includes(c.qr.label));
  assert.ok(encart.includes(c.qr.label));
  assert.match(encart,/pas un BAT/);
  assert.ok(kit.includes(c.publication.permanentUrl));
});

test('La page essentielle reste légère et toutes les ressources visuelles sont locales',async()=>{
  const html=await readFile('dist/bienvenue/index.html');
  const css=await readFile('dist/styles.css');
  const js=await readFile('dist/app.js');
  const hero=await readFile('dist/assets/future-pharmacie.webp');
  assert.ok(html.length+css.length+js.length+hero.length<400_000,'Budget initial de 400 ko dépassé');
  assert.match(css.toString(),/prefers-reduced-motion:reduce/);
  assert.match(css.toString(),/:focus-visible/);
  const {document}=parseHTML(html.toString());
  for(const image of document.querySelectorAll('img')){
    assert.ok(image.hasAttribute('alt'));
    assert.ok(image.getAttribute('src').startsWith(site.pathname));
    assert.ok(image.hasAttribute('width')&&image.hasAttribute('height'));
  }
});
