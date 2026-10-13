# Vernedes QR

Page statique de présentation, en français, publiée sur GitHub Pages.

- Source métier : `content/pharmacy.json`. Ne pas inventer la date ni les jours d'ouverture, ni l'activation des services.
- Cette V1 reste en mode `presentation`, publique et `noindex`. Aucun formulaire, donnée patient ou suivi publicitaire.
- Commandes : `npm ci`, `npm run build`, `npm test`, `npm run preview` (Node 22+).
- Générateur : `scripts/build.mjs`. Rendu et interactions : `src/styles.css`, `src/app.js`.
- Publier seulement `dist/` via le workflow. Ne jamais ajouter l'audio de réunion, des transcriptions, secrets ou notes personnelles.
- Tous les liens locaux doivent fonctionner sous le préfixe de `publication.siteUrl`.
- QR de démonstration uniquement. Ne produire aucun QR définitif ni BAT sans raccordement vérifié du domaine et spécifications imprimeur.
- Toute modification de destination impose régénération et décodage des QR/encarts. Tester l'URL déployée.
- Terminer par un commit, le journal de livraison et la prochaine action.
