# Modifier la présentation des Vernedes

Cette V1 est un site statique. Les changements de contenu sont préparés localement, vérifiés, puis publiés par GitHub Actions. Aucun espace d’administration ni serveur applicatif n’est nécessaire.

## Modifier le contenu

Ouvrir `content/pharmacy.json` et conserver un JSON valide : guillemets doubles, virgules entre propriétés, aucune virgule finale.

| Élément | Champs |
| --- | --- |
| Identité et contact | `name`, `shortName`, `city`, `address`, `postalCity`, `phone`, `phoneInternational` |
| Statut et adresses de publication | `publication` |
| Accueil | `hero` |
| Horaires | `hours` |
| Services | `servicesIntro`, `services` |
| Informations pratiques et contact | `practical`, `contact`, `actions` |
| Kit et points de validation | `qr`, `reviewItems` |

Le téléphone affiché et `phoneInternational` doivent désigner le même numéro ; ce dernier utilise le format international, par exemple `+33494512898`. L’itinéraire et la copie d’adresse sont générés à partir de `address` et `postalCity`.

Ne renseigner que des informations validées. Garder les réserves sur les horaires, services et ouverture tant que leurs modalités ne sont pas confirmées. Certains libellés structurels sont écrits dans `scripts/build.mjs` : une ouverture effective nécessite donc une revue du template, pas seulement une modification du JSON.

## Comprendre les adresses

`publication.siteUrl` vaut `https://doctorsilver-xai.github.io/vernedes-qr/`. Elle doit être une URL HTTPS terminée par `/`. Le build en dérive les chemins des ressources et la destination du QR : `/bienvenue/` sous cette adresse.

Le site comprend une page à la racine ainsi que `/bienvenue/`, `/presentation/` et `/kit/`, toutes sous `/vernedes-qr/` sur GitHub Pages. Lancer `npm run preview` puis ouvrir `http://127.0.0.1:4173/vernedes-qr/bienvenue/` permet de tester cette structure locale.

`publication.permanentUrl` indique uniquement la cible future proposée, `https://grandepharmaciedesvernedes.fr/bienvenue/`. Changer ce champ ne raccorde aucun domaine et ne change pas le QR de démonstration. Le build refuse un mode différent de `presentation` : le passage en publication officielle doit faire l’objet d’une adaptation explicite.

## Reconstruire et vérifier

Avec Node.js 22 ou supérieur :

```sh
npm ci
npm run build
npm test
npm run preview
```

`npm ci` installe les versions du fichier de verrouillage. `npm run build` remplace `dist/` et régénère les exports dans `delivery/`. `npm test` nécessite un build à jour ; il vérifie notamment le décodage des QR PNG/SVG et des encarts. `npm run preview` sert uniquement les fichiers déjà générés.

Avant publication, vérifier sur petit écran et ordinateur : coordonnées, jours à confirmer, boutons téléphone et itinéraire, copie d’adresse, navigation clavier, zoom à 200 % et affichage sans JavaScript. Inspecter aussi les fichiers de l’encart, car leur mise en page diffère de celle du site.

Ne pas éditer directement `dist/` ou `delivery/` : le prochain build écrasera ces changements. Les tests ne prouvent ni que le site public répond ni qu’un QR imprimé se scanne correctement.

## Publier une modification

Après vérification, committer les sources et pousser sur `main`. Le workflow GitHub Actions construit, teste et publie le site. Consulter son résultat, puis ouvrir la page publique et le kit : un commit réussi ne suffit pas à prouver le déploiement.

GitHub Pages doit utiliser **GitHub Actions** comme source de publication. Le workflow possède les permissions nécessaires à Pages et utilise l’environnement `github-pages`. Une éventuelle demande d’approbation propre à cet environnement apparaît dans GitHub.

Ne pas ajouter d’audio, transcription, notes privées, identifiants ou données de santé. Le dépôt public et les exports ne sont pas des espaces de stockage confidentiels. `noindex` n’en restreint pas l’accès.
