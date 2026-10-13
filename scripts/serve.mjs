import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
const c = JSON.parse(await readFile('content/pharmacy.json','utf8'));
const base = new URL(c.publication.siteUrl).pathname;
const root = resolve('dist');
const port = Number(process.env.PORT || 4173);
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.webp':'image/webp','.txt':'text/plain; charset=utf-8'};
createServer(async(req,res)=>{
  try {
    let path = decodeURIComponent(new URL(req.url,'http://localhost').pathname);
    if(path===base.slice(0,-1)) {res.writeHead(302,{Location:base});res.end();return;}
    if(path.startsWith(base)) path=path.slice(base.length);
    let file=resolve(root,`.${sep}${path}`);
    if(file!==root && !file.startsWith(root+sep)) {res.writeHead(403);res.end();return;}
    if((await stat(file)).isDirectory()) file=resolve(file,'index.html');
    const body=await readFile(file);
    res.writeHead(200,{'Content-Type':types[extname(file)]??'application/octet-stream','Cache-Control':'no-store'});res.end(body);
  }catch{res.writeHead(404,{'Content-Type':'text/plain; charset=utf-8'});res.end('Page introuvable');}
}).listen(port,'127.0.0.1',()=>console.log(`Local : http://127.0.0.1:${port}${base}bienvenue/`));
