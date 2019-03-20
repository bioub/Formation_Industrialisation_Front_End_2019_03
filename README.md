# Exerice Webpack

## Ajouter 3 loader de webpack

sass-loader, css-loader, style-loader

et ajouter un `import './scss/app.scss'` dans `index.js`

Suivre le guide :
https://webpack.js.org/loaders/sass-loader

## Extraire le CSS dans un fichier séparé

Uniquement en production (voir devtool)

Suivre le guide
https://webpack.js.org/loaders/sass-loader#in-production

## Ajouter un nouveau point d'entrée

Nouveau point d'entrée `tooltip-button.js` avec le code :

```
$(".btn-lg").tooltip({
  placement: "right"
});
```

En dépendances -> bootstrap

Guide Importing JavaScript
https://getbootstrap.com/docs/4.3/getting-started/webpack/#importing-javascript


