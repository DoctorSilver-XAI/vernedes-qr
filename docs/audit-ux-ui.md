# Revue UX/UI — 13 octobre 2026

Périmètre : parcours de la page de présentation, dans Chrome, largeurs 320, 390, 768 et 1440 px. Améliorations ciblées, sans refonte. Les familles et les personnes s’installant pour leur retraite sont des hypothèses de public fournies par Pierre, pas une étude démographique réalisée ici. Le choix est une lecture confortable, des actions explicites et une identité de proximité ; aucun service, accès, engagement ou positionnement tarifaire n’est ajouté.

1. **Découvrir la pharmacie — amélioré.** L’ancien V accompagné d’un éclat formait un signe peu explicite, avec une petite typographie mobile. Remplacement par une signature typographique centrée sur « Grande Pharmacie des Vernedes », plus grande, alignée avec les titres. Décor du favicon simplifié. Façade, couleurs et composition conservées. Capture locale `01-accueil-avant.jpg` puis `01-accueil-apres.jpg`.
2. **Trouver l’adresse et les horaires — amélioré.** Sur téléphone, la carte précédait le panneau utile et le repoussait sous le premier écran de la section. Le panneau est maintenant prioritaire dans le DOM et sur mobile. CTA explicite « Adresse & horaires », lien « Ouvrir l’itinéraire », copie confirmée par un message. Destination Google Maps vérifiée au 151 rue de la Vernède, 83600 Fréjus. Capture `02-adresse-avant.jpg` puis `02-adresse-apres.jpg`.
3. **Parcourir les services — amélioré.** Les deux colonnes mobiles imposaient des lignes très courtes. Cartes en une colonne sur téléphone, pictogramme à gauche, textes de 16 px, numérotation décorative masquée. Accès direct « Les services prévus » dès l’accueil. Aucune modalité de prestation inventée. Capture `04-services-avant.jpg` puis `03-services-apres.jpg`.
4. **Contacter — fonctionnel, libellés clarifiés.** Numéro immédiatement repérable, lien tel correct, contact disponible en haut et dans la barre mobile. « Appeler » remplace « Se renseigner » dans cette barre. Les textes de contact et de réserve sont agrandis. Capture `03-contact-avant.jpg` puis `04-contact-apres.jpg`.

## Vérifications

- Aucun débordement horizontal aux quatre largeurs ; aucune image cassée détectée. Visuel de façade intégral, carte et QR locaux conservés.
- Copie d’adresse fonctionnelle et message annoncé par une zone de statut ; focus clavier visible observé. Informations principales présentes dans le HTML sans JavaScript, vérifiées par la suite de tests.
- Les liens téléphone pointent vers `tel:+33494512898`. Aucun appel réel passé. Google Maps ouvre bien la destination attendue. Aucun envoi de trajet ni usage de données du compte Google dans les livrables.
- Lighthouse mobile local : performance **100**, accessibilité **100**, bonnes pratiques **100** ; LCP **1,8 s**. Aucun avertissement ou erreur console capturé pour le site.
- Les 5 tests existants passent, y compris les quatre décodages QR ; destination inchangée.

## Limites et suite

Audit expert avec parcours simulés, pas test avec de vrais patients. Pas de validation VoiceOver/Safari/iPhone physique, ni d’audit WCAG exhaustif, ni de nouveau test physique d’impression. Les petits noms de rue sont secondaires : l’adresse en texte reste la référence et l’itinéraire ouvre une carte agrandissable. Les hypothèses de public devront être confrontées au terrain ; les accès, le stationnement et l’entrée ne sont pas confirmés, donc aucune promesse n’est ajoutée.

Prochaine action : montrer cette version à Marjorie, puis faire essayer les quatre parcours à une personne peu familière du projet. Captures et rapport illustré dans `delivery/audit/` (hors dépôt).
