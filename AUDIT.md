# AUDIT.md : à compléter

Pour chaque ligne, retrouve le problème correspondant dans `src/App.tsx` / `src/App.css`
et remplis les 3 colonnes. Il y a **6 problèmes volontaires** dans ce starter.

| # | Problème trouvé (où, quoi) | Principe WCAG (P / O / U / R) | Pourquoi c'est bloquant, et pour qui |
|---|------------------------------|-------------------------------|----------------------------------------|
| 1 | `App.tsx` ligne 20 : `<img src="/hero.jpg" />` sans attribut `alt` | P (Perceptible) – critère 1.1.1 Contenu non textuel | Le lecteur d'écran n'a rien à lire, il annonce juste "image" ou le nom du fichier. Une personne aveugle ou malvoyante ne sait pas ce que montre l'image ni si elle est importante. Si l'image est décorative il faut au minimum `alt=""` pour qu'elle soit ignorée. |
| 2 | `App.tsx` ligne 22 : le `<h3>Derniers articles</h3>` arrive juste après le `<h1>`, il n'y a pas de `h2` (saut de niveau) | R (Robuste) – lié aussi au 1.3.1 Information et relations | Les technologies d'assistance se servent des niveaux de titre pour construire un plan de la page et naviguer de titre en titre (touche H sous NVDA par exemple). Un niveau manquant donne une structure incohérente : l'utilisateur de lecteur d'écran pense avoir raté une section. Le code doit être interprétable de façon fiable par les outils. |
| 3 | `App.tsx` ligne 37 : le bouton "Voir plus" est un `<div className="see-more" onClick>` au lieu d'un `<button>` | O (Opérable) – critère 2.1.1 Clavier | Un `div` n'est pas focusable : impossible d'y arriver avec Tab, et Entrée/Espace ne déclenchent rien. Les personnes qui naviguent sans souris (handicap moteur, clavier seul, switch) ne peuvent pas charger la suite. En plus il n'a aucun rôle, le lecteur d'écran le lit comme du texte normal et pas comme un contrôle. |
