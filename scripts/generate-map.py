from pathlib import Path
import json,xml.etree.ElementTree as E,html,math,gzip
p=Path(__file__).resolve().parent.parent
c=json.loads((p/'content/pharmacy.json').read_text())
# Local SVG from actual OSM geometries; projection respects longitude/latitude scale.
r=E.parse(gzip.open(p/'scripts/data/quartier.osm.gz','rb')).getroot();nodes={n.attrib['id']:(float(n.attrib['lon']),float(n.attrib['lat'])) for n in r.findall('node')}
lon,lat=c['location']['longitude'],c['location']['latitude'];scale=71000
xy=lambda v:((v[0]-lon)*math.cos(math.radians(lat))*scale+350,235-(v[1]-lat)*scale)
svg=['<svg xmlns="http://www.w3.org/2000/svg" width="700" height="470" viewBox="0 0 700 470"><title>Quartier de la future Grande Pharmacie des Vernedes</title><desc>Données OpenStreetMap. Repère d’adresse issu de la Base Adresse Nationale. Le nord est en haut.</desc><rect width="700" height="470" fill="#e5eadc"/>']
ways=[]
for w in r.findall('way'):
 t={x.attrib['k']:x.attrib['v'] for x in w.findall('tag')};pts=[xy(nodes[n.attrib['ref']]) for n in w.findall('nd') if n.attrib['ref'] in nodes]
 if len(pts)<2:continue
 d='M'+' L'.join(f'{x:.1f},{y:.1f}' for x,y in pts)
 if 'building' in t:svg.append(f'<path d="{d}Z" fill="#d3dbc9" stroke="#c6cfbd" stroke-width=".6"/>')
 if 'highway' in t:ways.append((t,pts,d))
for t,pts,d in ways:
 typ=t['highway'];width=12 if typ in ['primary','secondary','tertiary','residential','unclassified'] else 5
 svg.append(f'<path d="{d}" fill="none" stroke="#fffefa" stroke-width="{width}" stroke-linecap="round" stroke-linejoin="round"/>')
 if t.get('name')=='Rue de la Vernède':svg.append(f'<path d="{d}" fill="none" stroke="#a6b88d" stroke-width="3"/>')
# One label for each selected street, positioned on its actual geometry, away from central marker.
for name in ['Rue de la Vernède','Rue du Pigeonnier','Rue Rudolf Diesel']:
 segs=[w for w in ways if w[0].get('name')==name]
 choices=[(x,y) for _,pts,_ in segs for x,y in pts if 95<x<590 and 55<y<410 and not (180<x<530 and 135<y<290)]
 if choices:
  x,y=choices[len(choices)//2];svg.append(f'<text x="{x:.1f}" y="{y-8:.1f}" text-anchor="middle" font-family="Arial,sans-serif" font-size="13" fill="#41543f" stroke="#e5eadc" stroke-width="5" paint-order="stroke">{html.escape(name)}</text>')
svg.extend(['<circle cx="350" cy="235" r="31" fill="#173f35" opacity=".1"/><path d="M350 239c-4-6-18-19-18-29a18 18 0 1 1 36 0c0 10-14 23-18 29Z" fill="#173f35" stroke="#fffefa" stroke-width="3"/><path d="M350 203v13m-6.5-6.5h13" stroke="#fffefa" stroke-width="3"/>','<rect x="219" y="254" width="262" height="55" rx="6" fill="#fffefa" stroke="#bac8ae"/><text x="350" y="276" text-anchor="middle" font-family="Arial,sans-serif" font-weight="bold" font-size="14" fill="#173f35">La future pharmacie</text><text x="350" y="296" text-anchor="middle" font-family="Arial,sans-serif" font-size="12" fill="#465b51">151 rue de la Vernede</text>','<g fill="#173f35" font-family="Arial,sans-serif"><text x="660" y="32" text-anchor="middle" font-size="12">N</text><path d="m660 41-5 15 5-3 5 3Z"/><path d="M30 421v6h64v-6" fill="none" stroke="#173f35" stroke-width="2"/><text x="62" y="449" text-anchor="middle" font-size="11">100 m</text></g></svg>'])
(p/'src/assets/quartier.svg').write_text(''.join(svg))
