# AUDIT.md : à compléter

## 1. Audits outillés

Les audits ont été lancés sur la page d'origine (build de production servi en local).

- **Lighthouse** (v12, catégorie Accessibility) : score **90 / 100**. Un seul audit en échec : `color-contrast`, avec 5 nœuds concernés (`.subtitle`, `.label` deux fois, `.hint` et le bouton `.btn-primary`). Le ratio le plus bas est celui de `.hint` (1,91:1).
- **axe DevTools** (moteur axe-core 4.14, règles WCAG 2.0 / 2.1 A et AA plus bonnes pratiques) : **3 violations**.
  - `color-contrast` (sérieux) : les mêmes 5 nœuds que Lighthouse.
  - `landmark-one-main` (modéré) : la page n'a pas de repère `<main>`.
  - `region` (modéré) : le contenu n'est contenu dans aucun repère.
- **WAVE** : non lancé pour cette passe. Les deux autres outils ont déjà remonté les 4 mêmes éléments de contraste.

Les deux violations de repères (`main`, `region`) ne relèvent pas du CSS : elles se règlent dans `App.tsx` avec un `<main>`. Elles ne font pas partie des 4 corrections demandées dans cette quête.

## 2. Les éléments à corriger

| Élément | Couleur texte | Couleur fond | Ratio mesuré | Ratio AA requis | Conforme ? |
|---------|---------------|--------------|--------------|------------------|------------|
| `.subtitle` | `#aaaaaa` | `#ffffff` | 2,32:1 | 4.5:1 | Non |
| `.label` | `#999999` | `#ffffff` | 2,84:1 | 4.5:1 | Non |
| `.hint` | `#bbbbbb` | `#ffffff` | 1,91:1 | 4.5:1 | Non |
| `.btn-primary` | `#ffffff` | `#6fa8dc` | 2,52:1 | 4.5:1 (texte) | Non |

> Ratios relevés par Lighthouse et axe, identiques dans les deux outils.

## 3. Priorisation

1. **`.hint` (1,91:1)** : c'est le pire ratio, le texte est presque invisible. Et il porte une information utile : vérifier sa facturation avant le renouvellement automatique. Ne pas la lire peut coûter de l'argent.
2. **`.btn-primary` (2,52:1)** : c'est l'action principale de la page (« Gérer mon abonnement »). Un bouton illisible bloque la seule chose qu'on vient faire ici.
3. **`.label` (2,84:1)** : petit texte (13,6 px) qui apparaît sur deux cartes. Il nomme les informations de la page, donc les perdre rend les valeurs difficiles à comprendre.
4. **`.subtitle` (2,32:1)** : texte d'introduction en 16 px. Gênant, mais le titre `h1` juste au-dessus donne déjà le contexte et rien d'essentiel n'y est caché.

## 4. Après correction

Les 4 couleurs ont été changées dans `src/App.css` (un commit par élément), puis les audits ont été relancés sur la version corrigée.

| Élément | Couleur texte | Couleur fond | Ratio après | Ratio AA requis | Conforme ? |
|---------|---------------|--------------|-------------|------------------|------------|
| `.subtitle` | `#5c5c5c` | `#ffffff` | 6,69:1 | 4.5:1 | Oui |
| `.label` | `#595959` | `#ffffff` | 7,00:1 | 4.5:1 | Oui |
| `.hint` | `#595959` | `#ffffff` | 7,00:1 | 4.5:1 | Oui |
| `.btn-primary` | `#ffffff` | `#1a5fa8` | 6,47:1 | 4.5:1 (texte) | Oui |

- **Lighthouse** : score d'accessibilité passé de 90 à **100 / 100**, l'audit `color-contrast` est validé.
- **axe** : plus aucune violation de contraste. Restent `landmark-one-main` et `region` (pas de `<main>`), qui demandent un changement dans `App.tsx` et pas dans le CSS.

Le style reste cohérent : des gris foncés doux au lieu du noir pur, et un bleu plus soutenu pour le bouton, sans repeindre la page en noir sur blanc.
