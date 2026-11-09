# SEO 5 : Core Web Vitals, mesurer et améliorer la performance

## Les 3 métriques

| Métrique | Ce qu'elle mesure | Objectif |
|---|---|---|
| LCP (Largest Contentful Paint) | temps d'affichage du plus grand élément visible | moins de 2,5 s |
| INP (Interaction to Next Paint) | réactivité aux interactions sur toute la visite (a remplacé le FID) | moins de 200 ms |
| CLS (Cumulative Layout Shift) | déplacements visuels inattendus pendant le chargement | moins de 0,1 |

Lighthouse donne des données de **labo** (une simulation, un seul essai). Google utilise pour le ranking les données de **terrain** (CrUX, visibles dans la Search Console). Les deux se complètent : Lighthouse pour déboguer, la Search Console pour voir ce que vivent les vrais visiteurs.

## Exercice : audit Lighthouse d'une page de mon projet React

- **Page auditée :** l'application React (Vite) de ce dépôt, branche `a11y-05-contrastes-audit`, après `npm run build`, servie en local avec `vite preview` sur `http://localhost:4173/`.
- **Outil :** Lighthouse 12.8.2 en ligne de commande, catégorie Performance seule, Chrome headless, 3 passes par profil.

| Profil | Score | LCP | TBT | CLS | Speed Index |
|---|---|---|---|---|---|
| Mobile (simulation par défaut) | 100 / 100 (3 passes sur 3) | 1,2 s | 0 ms | 0 | 1,2 s |
| Bureau | 100 / 100 (3 passes sur 3) | 0,3 s | 0 ms | 0 | 0,3 s |

Les trois passes donnent les mêmes valeurs.

### Lecture

- **LCP :** 1,2 s sur mobile (réseau et processeur ralentis par simulation), sous l'objectif de 2,5 s. Sur bureau 0,3 s.
- **CLS :** 0, aucun déplacement. La page n'a ni image ni contenu injecté après coup.
- **INP :** Lighthouse ne le mesure pas, car il demande de vraies interactions d'utilisateurs. La valeur de remplacement en labo est le **TBT** (Total Blocking Time) : 0 ms, donc pas de JavaScript qui bloque le thread principal.
- **Métrique la plus problématique :** aucune n'est en défaut. Celle qui a le moins de marge est le **LCP mobile** (1,2 s sur 2,5 s). Le bundle JavaScript fait environ 143 ko (46 ko compressés), c'est le principal poids à télécharger avant le premier affichage.

### Limites de la mesure

- Le projet est un petit starter : une page, aucune image, aucun appel réseau. Un score de 100 est normal ici et ne dit rien d'un vrai site.
- Mesure faite en local, sans latence réelle du serveur. Ce sont des données de labo, pas des données de terrain : pour le ranking, il faudrait la Search Console ou la partie CrUX de PageSpeed Insights sur un site public.

### Pistes si la page grossissait

- LCP : images en WebP/AVIF avec dimensions, ne pas mettre de `loading="lazy"` sur l'élément LCP, découper le bundle (import dynamique).
- INP : éviter les re-renders React inutiles, découper les gros traitements.
- CLS : réserver la place des images avec `width`/`height` ou `aspect-ratio`.

## Quiz de la quête

4 / 4.
