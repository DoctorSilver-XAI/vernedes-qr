# Journal de livraison

## 13 octobre 2026 — version de présentation

Page mobile, page d'information sur la présentation et kit de démonstration réalisés. QR SVG/PNG et encart SVG/PNG générés ; les quatre fichiers se décodent vers `https://doctorsilver-xai.github.io/vernedes-qr/bienvenue/`.

### Vérifications locales

- Construction et cinq tests automatisés réussis : chemins avec préfixe GitHub Pages, données métier et HTML sans dépendance au JavaScript, liens, ressources, budget de poids, QR/encarts.
- Formats Chrome contrôlés à 320, 390, 768 et 1440 px : aucun débordement horizontal mesuré. Zoom natif 200 % contrôlé, puis remis à 100 %.
- Copie d'adresse réellement exécutée dans Chrome, avec retour « Adresse copiée. » ; numéro `tel:+33494512898` et destination Google Maps vérifiés dans le DOM, sans lancer d'appel.
- Focus clavier visible ; règles de réduction des mouvements présentes. Les données essentielles sont dans le HTML généré et contrôlées par les tests, sans exécution de JavaScript.
- Audit Lighthouse mobile local : performance 99, accessibilité 100, bonnes pratiques 100, CLS 0. Audit automatique, pas une certification d'accessibilité.
- Relecture indépendante du contenu, des chemins, du QR et des contrastes ; taille des textes secondaires mobile relevée.
- Dépendances de génération auditées sans vulnérabilité signalée après mise à jour de Sharp.
- Maquette d'encart inspectée visuellement. Aucun essai d'impression physique effectué.

### Publication

Dépôt public créé ; GitHub Pages configuré pour GitHub Actions. Déploiement et vérification publique à consigner après leur exécution.

### Prochaine action

Faire valider à Marjorie la direction graphique et les informations listées dans `prochaines-etapes.md`. Le domaine définitif et l'impression en série restent une étape distincte.
