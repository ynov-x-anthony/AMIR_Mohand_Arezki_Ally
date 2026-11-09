# SEO 6 (bonus) : SEO des applications React et introduction au SEA

## Le problème des SPA

Une SPA React « pure » (Vite, sans rendu serveur) envoie un HTML quasi vide (`<div id="root"></div>` et un script). Tout le contenu naît côté client, après exécution du JavaScript. Googlebot sait exécuter le JS, mais en deuxième passe, parfois des jours après le crawl, et avec des limites. Beaucoup d'autres robots (aperçus de liens des réseaux sociaux, certains outils) n'exécutent pas le JS du tout.

J'ai pu le vérifier dans la quête SEO 1 : le HTML brut de quetes.dev fait 535 octets et ne contient ni texte ni lien, alors que celui de Wikipédia contient tout le contenu.

## Les solutions

- **SSR** : le HTML complet est généré à chaque requête (Next.js).
- **SSG** : le HTML est généré au build puis servi tel quel. Idéal pour un contenu qui change rarement.
- **Pré-rendu** : un snapshot HTML par route pour les crawlers, utile pour migrer une SPA existante.

Meta tags par route : `react-helmet-async` en SPA (met à jour le `<head>` côté client, ne règle pas le problème du crawler qui lit le HTML brut), Metadata API avec Next.js (déjà dans le HTML serveur). Il faut aussi de vraies URLs (pas de hash routing `/#/route`) et de vrais codes HTTP (un 404 réel pour une page introuvable, pas un composant « introuvable » avec un statut 200).

## Exercice : site vitrine de restaurant en SPA React pure

Situation : Vite + React Router, sans SSR, une page par plat. Le site n'apparaît jamais dans Google, même en cherchant le nom exact du restaurant.

**Vérification préalable (5 minutes)** : s'assurer qu'aucun `noindex` ni `Disallow: /` dans `robots.txt` n'est resté en place, et regarder dans la Search Console si le site est connu de Google. Ça écarte une erreur de configuration avant de reconstruire quoi que ce soit.

**Piste 1 (priorité) : faire en sorte que le HTML brut contienne le contenu.**
Le menu d'un restaurant change peu, donc le **SSG** est le meilleur choix : générer au build une page HTML par route (accueil, carte, chaque plat, contact), avec le vrai texte et de vrais liens `<a href>` entre elles. Deux voies :
- migrer vers un framework qui le fait nativement (Next.js ou équivalent) ;
- ou, pour ne pas tout réécrire, ajouter un outil de **pré-rendu** au build actuel (un snapshot HTML par route).

Vérification : `curl` de l'URL doit renvoyer le nom du restaurant, le `<h1>` et les plats dans le HTML, sans exécuter de JavaScript.

**Piste 2 : donner à chaque page ses signaux d'indexation.**
- un `<title>` et une meta description uniques par route (nom du plat, nom du restaurant, ville), avec `react-helmet-async` dans la SPA ou la Metadata API en Next.js. Cette piste n'a d'effet réel que si la piste 1 est faite, sinon le crawler ne voit toujours rien dans le HTML brut ;
- une balise `canonical` par page, de vraies URLs propres (pas de hash routing), un `sitemap.xml` soumis dans la Search Console, et un vrai 404 pour les pages inexistantes.

**Pourquoi cet ordre :** le symptôme (le nom exact du restaurant est introuvable) indique que Google n'a pas accès au contenu, ou pas encore. Tant que le HTML brut est vide, des meta tags soignés ne servent à rien. La piste 1 traite la cause, la piste 2 optimise ce qui est ensuite indexé.

## SEO et SEA

| | SEO | SEA |
|---|---|---|
| Coût | gratuit (hors temps et outils) | payant, au clic (CPC) |
| Délai | long terme, semaines à mois | immédiat |
| Position | gagnée par la pertinence | achetée aux enchères |
| Pérennité | dure tant que le contenu est pertinent | s'arrête quand on arrête de payer |

Dans Google Ads, le classement dépend de l'enchère **et** du Quality Score (pertinence de l'annonce et de la page de destination). Les deux leviers se complètent : le SEA teste vite un mot-clé ou occupe le haut de page pendant que le SEO monte en puissance, puis on réduit le SEA sur les mots-clés où le SEO est installé.

## Quiz de la quête

4 / 4.
