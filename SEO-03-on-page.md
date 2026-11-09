# SEO 3 : SEO on-page (title, meta description, URLs, titres, maillage)

## Les règles retenues

- **`<title>`** : environ 50-60 caractères, mot-clé principal en premier, marque à la fin, unique par page.
- **Meta description** : pas d'impact direct sur le ranking, mais forte influence sur le taux de clic. Environ 150-160 caractères, orientée bénéfice/action, unique par page.
- **URLs** : lisibles, mots-clés séparés par des tirets, minuscules, sans accents, courtes et stables (301 si changement).
- **Titres** : un seul `<h1>`, puis `<h2>`/`<h3>` sans sauter de niveau. Même logique que pour l'accessibilité.
- **Maillage interne** : ancres descriptives (pas « cliquez ici »), pages regroupées par thème, aucune page orpheline.

## Exercice : la page mal optimisée

```html
<head>
<title>Accueil</title>
</head>
<body>
<h2>Bienvenue sur notre site</h2>
<h1>Nos produits</h1>
<a href="/produit?id=42">cliquez ici</a>
<a href="/produit?id=43">cliquez ici</a>
</body>
```

Problèmes repérés :

1. **`<title>` « Accueil »** : trop court (7 caractères), aucun mot-clé, aucune marque. Il ne dit rien du sujet du site.
2. **Pas de meta description** : Google affichera un extrait au hasard et le taux de clic en pâtit.
3. **Hiérarchie des titres inversée** : le `<h2>` arrive avant le `<h1>`. Le `<h1>` « Nos produits » est lui-même vague.
4. **Ancres « cliquez ici »** (deux fois) : elles ne décrivent pas les pages ciblées, et deux liens différents ont le même texte.
5. **URLs avec paramètres** (`/produit?id=42`) : illisibles, sans mot-clé, au lieu de `/produits/nom-du-produit`.
6. **Contenu quasi vide** : aucun texte pour dire ce que sont les produits.
7. Au passage : pas de `<html lang>`, ni de `<meta charset>` ni de `viewport`.

Version corrigée (le site est fictif, les noms sont des exemples) :

```html
<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Vélos électriques pliables et de ville | MonSiteVélo</title>
  <meta name="description" content="Découvrez nos vélos électriques pliables et de ville : autonomie jusqu'à 60 km, livraison offerte. Comparez les modèles et trouvez le vôtre en quelques clics.">
</head>
<body>
  <h1>Nos vélos électriques</h1>
  <h2>Les modèles les plus vendus</h2>
  <a href="/velos-electriques/pliable-x9">Vélo électrique pliable X9</a>
  <a href="/velos-electriques/ville-v2">Vélo électrique de ville V2</a>
</body>
</html>
```

## Quiz de la quête

4 / 4.
