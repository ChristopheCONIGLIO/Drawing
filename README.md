![logo](./READMEsrc/logo.png){: style="width: 20%;"}

# Drawing v1.0.0

**Créateur** : Christophe CONIGLIO

**Contact** : christophe.coniglio@gmail.com

**Date de création** : 19/12/2024

## Description
Drawing est une application de dessin minimaliste, conçue spécifiquement pour les enfants. Elle offre une interface simple et intuitive permettant aux jeunes utilisateurs d'exprimer leur créativité de manière ludique et sans complexe.

## Usage
Il suffit de télécharger le dépôt et de lancer le fichier index.html avec un navigateur, comme Google Chrome, pour utiliser l'application.

## License
Ce travail est sous licence [Creative Commons Zero (CC0)](https://creativecommons.org/publicdomain/zero/1.0/).
Vous pouvez copier, modifier, distribuer et réaliser ce travail, même à des fins commerciales, sans avoir à demander la permission.

This work is licensed under the [Creative Commons Zero (CC0) License](https://creativecommons.org/publicdomain/zero/1.0/).
You can copy, modify, distribute and perform the work, even for commercial purposes, all without asking permission.

## Architecture
L'application est développée en HTML, CSS et JavaScript, sans utilisation de bibliothèques externes. Le code est compact, avec une taille totale d'environ 1 Mo, icône et design inclus, ce qui la rend particulièrement légère.

L'application est conçue pour fonctionner en local sans besoin d'un serveur web (bien que des améliorations sur la fonctionnalité de sauvegarde d'image soient envisagées).

## Fonctionnalités
- **Compatibilité** : L'application est adaptée pour tous les types de supports (tactiles, web classiques, etc.), avec une expérience utilisateur optimale sur les tablettes tactiles.
- **Interface pour enfants** : Les boutons sont conçus de manière ergonomique et intuitive pour les enfants, et placés de façon à minimiser les interruptions liées au système d'exploitation (par exemple, les notifications de sortie d'application).
- **Icônes simplifiées** : Les icônes sont soigneusement dessinées pour être facilement compréhensibles par les enfants.
- **Calques de dessin** : Des calques préintégrés permettent aux enfants de dessiner sans trop déborder, facilitant ainsi la création de leurs œuvres.
- **Tampons personnalisés** : Des tampons tels que cœur, étoile, arc-en-ciel et arc-en-ciel coloré sont disponibles pour enrichir l'expérience.
- **Outils de dessin** : Quatre types de pinceaux (dont la gomme) sont proposés, chacun avec différentes tailles pour s'adapter aux besoins créatifs des enfants.
- **Palette de couleurs** : Une large gamme de couleurs est disponible pour permettre une expression visuelle variée.

## Liste des versions
1.0.0 : Première version

## Améliorations à envisager
1. **Enregistrement local** : Le bouton d'enregistrement ne fonctionne pas en local. Une solution basée sur l'enregistrement en Base64 des calques de dessin pourrait contourner cette limitation.
2. **Redimensionnement de l'écran** : Lors de la rotation d'un appareil (par exemple, un iPad de portrait à paysage), l'image devrait être redimensionnée correctement sans perte de qualité.
3. **Qualité des calques** : Les calques de dessin sont actuellement d'une qualité insuffisante, et la transparence sur certains aplats n'est pas parfaite. Une refonte graphique des calques est nécessaire pour améliorer cet aspect.
4. **Temps de réaction sur vieux matériels** : Le bouton de calque de dessin met quelques secondes à apparaître sur les appareils plus anciens. Un optimisateur de performance serait un bon ajout.


