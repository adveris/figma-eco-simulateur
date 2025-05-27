# Plugin Figma EcoIndex

Ce plugin Figma permet d'analyser l'impact environnemental de vos designs et de fournir des recommandations pour améliorer leur éco-conception.

## Démarrage Rapide

- Exécutez `yarn` pour installer les dépendances
- Exécutez `yarn build:watch` pour démarrer webpack en mode watch
- Dans Figma, allez dans `Plugins` -> `Development` -> `Import plugin from manifest...` et sélectionnez le fichier `manifest.json` de ce projet

## Fonctionnalités

- Analyse de l'impact environnemental des designs
- Recommandations d'éco-conception
- Métriques de performance environnementale
- Suggestions d'optimisation

## Lien utile

- [Plugin Figma EcoSimulateur](https://www.figma.com/community/plugin/1430170108116488365/ecosimulateur)

## Structure du Projet

Pour modifier l'interface utilisateur du plugin (le code React), modifiez [App.tsx](./src/app/components/App.tsx)  
Pour interagir avec l'API Figma, modifiez [controller.ts](./src/plugin/controller.ts)  
Consultez la [Documentation de l'API Figma](https://www.figma.com/plugin-docs/api/api-overview/) pour plus d'informations.

## Technologies Utilisées

Ce projet utilise :

- React + Webpack
- TypeScript
- Prettier avec hook pre-commit
- [Autres technologies pertinentes]

## Installation

1. Clonez ce dépôt
2. Installez les dépendances avec `yarn`
3. Lancez le build en mode développement avec `yarn build:watch`
4. Importez le plugin dans Figma

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
- Ouvrir une issue pour signaler un bug
- Proposer une pull request pour ajouter une fonctionnalité
- Améliorer la documentation

## Licence

[Licence Creative Commons (CC BY-NC-ND 3.0)](LICENSE.md)
