# SEO 1 : Comment fonctionne un moteur de recherche ?

## Les trois étapes

1. **Crawl** : des robots (Googlebot) suivent les liens `<a href>` de page en page et téléchargent le contenu. Une page orpheline, vers laquelle aucun lien ne pointe, a très peu de chances d'être explorée.
2. **Indexation** : Google analyse la page (titres, texte, `alt` des images, structure) et la stocke dans son index si elle est jugée assez utile. Une page peut être crawlée sans être indexée (contenu pauvre, doublon, `noindex`).
3. **Ranking** : à chaque requête, Google interroge son index et classe les pages selon des signaux : pertinence, popularité/autorité, expérience utilisateur, autorité du domaine.

Le budget de crawl est la part de ressources que Google alloue à l'exploration d'un site. Il ne pose presque jamais de problème sur un petit site.

## Exercice : le contenu est-il dans le HTML brut ?

Méthode : télécharger le HTML tel que le serveur l'envoie (sans exécuter de JavaScript), avec `curl`, et compter ce qu'il contient.

| Page | Taille du HTML brut | Titre | `<h1>` | `<p>` | liens `<a href>` |
|---|---|---|---|---|---|
| https://quetes.dev/quests (application Angular, SPA) | 535 octets | présent (`Quêtes`) | 0 | 0 | 0 |
| https://fr.wikipedia.org/wiki/Moteur_de_recherche | ~262 Ko | présent | présent | 52 | 661 |

**Constat :**
- Sur Wikipédia, le contenu principal est déjà dans le HTML reçu (rendu côté serveur). Le crawler y trouve tout de suite le texte et 661 liens à suivre.
- Sur quetes.dev, le HTML brut est une coquille vide : un titre, une balise `<app-root></app-root>` vide et des scripts, aucun texte, aucun lien. Le contenu n'apparaît qu'après exécution du JavaScript. Google sait exécuter le JS, mais en deuxième passe et avec des limites. Les liens et le texte ne sont découverts qu'après ce rendu, ce qui retarde ou fragilise l'indexation.

**Conséquence pour une SPA (React, Angular...) :** pour du contenu qui doit être référencé, il vaut mieux du rendu côté serveur ou du pré-rendu, afin que le HTML brut contienne déjà le texte et les liens.

## Quiz de la quête

4 / 4.
