# Grande Pharmacie des Vernedes

Page mobile de présentation de la future pharmacie à Fréjus, accompagnée d’un QR de démonstration et d’une proposition d’encart pour porte-ordonnance. Cette V1 permet à Marjorie de valider le contenu et la direction visuelle avant la communication aux patients.

## Consulter la présentation

- [Page de présentation](https://doctorsilver-xai.github.io/vernedes-qr/bienvenue/)
- [Kit QR et encart](https://doctorsilver-xai.github.io/vernedes-qr/kit/)

Publication vérifiée le 13 octobre 2026 : les pages et les quatre fichiers QR/encart répondent en HTTPS. Le workflow de construction et de publication a réussi. Audit Lighthouse mobile de la page publique : performance 100, accessibilité 100, bonnes pratiques 100 (mesure ponctuelle, pas une certification).

La date d’ouverture, les jours et certaines informations restent à confirmer. Aucun compte, formulaire patient, dépôt d’ordonnance, outil publicitaire ou mesure d’audience n’est intégré.

## Lancer le projet

Utiliser Node.js 22 ou supérieur et npm, depuis le dossier du projet.

```sh
npm ci
npm run build
npm test
npm run preview
```

Ouvrir ensuite [la présentation locale](http://127.0.0.1:4173/vernedes-qr/bienvenue/). La prévisualisation reproduit le préfixe `/vernedes-qr/` de GitHub Pages. Arrêter le serveur avec `Ctrl+C`.

Le build crée le site dans `dist/` et copie les fichiers de démonstration dans `delivery/`. Il faut reconstruire après chaque modification : le serveur local ne reconstruit pas automatiquement.

## Modifier et publier

Les coordonnées, horaires, services et principaux textes sont centralisés dans `content/pharmacy.json`. Le générateur HTML se trouve dans `scripts/build.mjs`, les styles dans `src/styles.css` et la copie d’adresse dans `src/app.js`.

Le workflow `.github/workflows/deploy.yml` installe les dépendances, construit le site, exécute les tests puis publie `dist/` sur GitHub Pages à chaque push sur `main`. Il peut aussi être lancé manuellement. Dans les réglages Pages du dépôt, la source doit être **GitHub Actions**.

- [Guide de modification](docs/guide-modification.md)
- [Informations à confirmer et prochaines étapes](docs/prochaines-etapes.md)
- [Journal de livraison et vérifications](docs/journal-livraison.md)
- [Illustration : fichier, provenance et prompt](docs/illustration.md)

## QR et impression

Les exports PNG et SVG sont de vrais QR pointant vers la présentation GitHub Pages. **Démonstration — ne pas imprimer en série.** L’encart est une proposition, pas un bon à tirer ; le gabarit de l’imprimeur reste à obtenir.

La cible pérenne proposée est `https://grandepharmaciedesvernedes.fr/bienvenue/`. Ce projet ne raccorde pas le domaine et ne fournit pas de QR définitif. Vérifier domaine, HTTPS, page et scan sur support physique avant toute impression finale. Les tests de décodage automatique ne remplacent pas cet essai physique.

## Accès public et données

Le dépôt et le site de démonstration sont publics. La consigne `noindex` demande aux moteurs de ne pas indexer les pages ; elle n’offre aucune confidentialité. Les enregistrements audio, transcriptions, notes personnelles et secrets sont exclus de la publication. Ne pas les ajouter à ce dépôt.

Les tests présents contrôlent les ressources, les informations pratiques, les destinations des QR et le poids initial. Les résultats effectivement obtenus et les vérifications navigateur doivent être consignés dans le journal de livraison ; ce README n’atteste pas de leur exécution.
