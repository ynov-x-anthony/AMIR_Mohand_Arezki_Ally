# SEO 4 : Les fondamentaux du SEO technique

## Ce que j'ai retenu

- **robots.txt** (à la racine du site) : `Disallow` empêche le **crawl**, pas forcément l'indexation. Une page bloquée peut quand même apparaître dans les résultats (sans description) si des sites font un lien vers elle. Pour qu'elle n'apparaisse jamais, il faut `<meta name="robots" content="noindex">`, et donc que le crawler puisse l'atteindre pour lire la balise. Les deux mécanismes se complètent.
- **sitemap.xml** : liste les URLs importantes pour aider les crawlers à les découvrir, surtout sur un site récent ou gros. On le soumet dans Google Search Console.
- **Balise canonique** : `<link rel="canonical" href="...">` indique la version de référence quand plusieurs URLs affichent le même contenu (paramètres, pagination, contenu syndiqué).
- **Duplicate content** : causes techniques fréquentes (HTTP/HTTPS, www/non-www, slash final, paramètres de tracking, pagination).

## Exercice : 4 URLs pour la même fiche produit

```
https://monsite.fr/produit/42
https://monsite.fr/produit/42/
http://monsite.fr/produit/42
https://monsite.fr/produit/42?utm_source=facebook
```

Version retenue comme référence : `https://monsite.fr/produit/42` (HTTPS, sans slash final, sans paramètre).

| URL | Problème | Solution |
|---|---|---|
| `https://monsite.fr/produit/42/` | slash final | redirection 301 vers la version sans slash (à défaut, canonical) |
| `http://monsite.fr/produit/42` | HTTP | redirection 301 vers HTTPS, pour tout le site |
| `https://monsite.fr/produit/42?utm_source=facebook` | paramètre de tracking | `canonical` vers l'URL propre : on ne peut pas rediriger, sinon le tracking est perdu |

Et sur la page de référence, une balise canonique qui se pointe elle-même, comme filet de sécurité :

```html
<link rel="canonical" href="https://monsite.fr/produit/42" />
```

Côté serveur, par exemple avec nginx :

```nginx
# HTTP -> HTTPS
server {
  listen 80;
  server_name monsite.fr www.monsite.fr;
  return 301 https://monsite.fr$request_uri;
}

# slash final : /produit/42/ -> /produit/42
rewrite ^/(.*)/$ /$1 permanent;
```

Il faut aussi choisir entre `www` et non-www et rediriger l'autre (même principe que HTTP vers HTTPS). Les URLs du sitemap ne doivent contenir que les versions canoniques. La redirection 301 est préférée à la canonical dès qu'on peut, parce qu'elle est suivie de façon sûre alors que la canonical n'est qu'un conseil que Google peut ignorer.

Un `robots.txt` minimal cohérent avec ça :

```
User-agent: *
Disallow: /admin/
Disallow: /panier

Sitemap: https://monsite.fr/sitemap.xml
```

## Quiz de la quête

4 / 4.
