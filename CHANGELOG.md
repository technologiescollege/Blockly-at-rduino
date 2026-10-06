# Changelog

Toutes les versions notables de Blockly@rduino sont documentées ici.

## [3.4.0] - 2026-10-07

### Compatibilité navigateurs
- Compatible avec les navigateurs Chromium récents (Chrome / Edge **144+**).
- Correction de la régression de glisser-déposer des blocs Blockly sur Chromium 144+.
- Meilleure prise en charge de l’usage **hors ligne** via `file://` (restrictions CORS des navigateurs modernes).

### Nouveautés
- Bundles offline pour toolbox, liste d’exemples et XML d’exemples (`toolbox_bundle.js`, `examples_bundle.js`, `examples_xml_bundle.js`).
- Scripts npm : `build:toolbox`, `build:examples`, `build:offline`.
- Ouverture des exemples corrigée (liens URL valides, chargement XML depuis le bundle).
- Compatibilité des exemples anciens (alias / blocs legacy, migration XML).
- Carte par défaut `none` conservée ; garde-fous pour les listes série vides.
- Avertissement modal si une toolbox `*_functions` est absente, avec retour automatique du switch « fonctions ».
- Renforcement du chargement des toolboxes / exemples pour éviter les plantages silencieux.

### Remarques
- Les exemples TechnoZone Wi‑Fi (`technozone_wf_*`) restent non supportés (blocs absents du projet).
- Pour régénérer les bundles offline : `npm run build:offline`.

## [3.3.3] - 2026-08-03

Version précédente (référence UI).
