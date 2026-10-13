# Visuels du projet et carte

Mise à jour du 13 octobre 2026.

La simulation architecturale a été fournie par Pierre pour intégration à cette présentation publique. `src/assets/future-pharmacie.webp` est une compression WebP du JPEG fourni, sans montage, modification de façade ni recadrage. Le visuel original mesure 1280 × 682 pixels. Il reste une projection non contractuelle, pas une photographie de locaux ouverts. Crédit architecte et autorisation de diffusion pérenne à confirmer pour la publication officielle.

La carte est une création SVG locale, sans appels réseau au chargement. Géométrie réelle des rues et bâtiments : © les contributeurs OpenStreetMap, licence ODbL, extraction du 13 octobre 2026 sur https://www.openstreetmap.org/api/0.6/map?bbox=6.717,43.440,6.728,43.447 . Attribution et lien https://www.openstreetmap.org/copyright visibles sous la carte. L’extrait minimal utilisé, sans métadonnées de contributeurs, est conservé dans `scripts/data/quartier.osm.gz` sous ODbL.

Repère : réponse du géocodage IGN, Base Adresse Nationale, pour « 151 rue de la vernede 83600 frejus » : longitude 6.722490, latitude 43.443636, type housenumber, identifiant 83061_2154_00151, score 0.9667. Source : https://data.geopf.fr/geocodage/search?q=151%20rue%20de%20la%20vernede%2083600%20frejus&limit=3 . Ce point localise l’adresse, pas une entrée ou un accès patient vérifié.

Régénération : `python3 scripts/generate-map.py`, puis `npm run build`. Le script est autonome (bibliothèque standard Python) et utilise l’extrait local, sans téléchargement. Les coordonnées et légendes éditables sont dans `content/pharmacy.json`. Mettre à jour l’extrait et vérifier le cadrage si l’adresse change.

L’illustration méditerranéenne précédente reste archivée dans les ressources mais n’est plus utilisée sur la page. Sa provenance historique est décrite dans `illustration.md`.
