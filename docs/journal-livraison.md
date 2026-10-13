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

Déploiement du commit `15b8d45` réussi via [GitHub Actions](https://github.com/DoctorSilver-XAI/vernedes-qr/actions/runs/38351832145).

- Page vérifiée : https://doctorsilver-xai.github.io/vernedes-qr/bienvenue/
- Kit : https://doctorsilver-xai.github.io/vernedes-qr/kit/
- Onze chemins publics contrôlés avec réponse HTTP 200 : racine, trois pages, CSS, JS, illustration, quatre fichiers QR/encart.
- Les quatre fichiers récupérés depuis le site public ont été décodés automatiquement et pointent vers la page attendue.
- Audit Lighthouse mobile public : **performance 100, accessibilité 100, bonnes pratiques 100** ; LCP simulé 1,7 s, CLS 0. Le défaut de libellé du monogramme est corrigé et l'audit correspondant passe.
- Copie d'adresse sur le site public réussie ; ressources visuelles chargées ; aucun avertissement ou erreur collecté dans la console Chrome pendant cette vérification.
- Captures et rapports conservés localement dans `delivery/` : `apercu-ordinateur.jpg`, `apercu-accueil.jpg`, `apercu-mobile.jpg`, `apercu-mobile-accueil.jpg`, `apercu-kit.jpg`, `controle-zoom-200.jpg`, `lighthouse-public-mobile.json`, `verification-publique.json`.
- Code et documentation commités ; audio, données privées et exports de vérification exclus du dépôt.

Les scores sont une mesure ponctuelle sur Chrome avec simulation mobile, pas un essai sur tous les appareils. Aucun test sur iPhone physique, Safari ou support imprimé n'est revendiqué.

### Prochaine action

Faire valider à Marjorie la direction graphique et les informations listées dans `prochaines-etapes.md`. Le domaine définitif et l'impression en série restent une étape distincte.


## Personnalisation — 13 octobre 2026

Simulation architecturale fournie par Pierre intégrée en grand format sans recadrage, légendée comme projection non contractuelle. Introduction et légende nomment Marjorie Lahaie comme porteuse du projet. Carte statique du quartier en palette sauge/émeraude, données OpenStreetMap et repère d’adresse BAN/IGN ; visible aussi sur mobile et accessible sans JavaScript. Provenance et régénération : `visuels-et-carte.md`.

Vérification locale : 5 tests réussis, 4 exports QR décodés, largeurs 320/390/768/1440 sans débordement, copie d’adresse fonctionnelle, console sans erreur. Lighthouse mobile : performance 99, accessibilité 100, bonnes pratiques 100. Correction du libellé accessible du lien cartographique après audit. Aucun essai physique de scan supplémentaire ; destination QR inchangée.

Prochaine action : validation par Marjorie du visuel, des informations pratiques et de la présentation de son projet ; confirmer le crédit du visuel et l’accès patient avant diffusion officielle.
