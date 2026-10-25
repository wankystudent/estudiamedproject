# MedEssentiel — Fichier de suivi du projet

> Reprendre ici après toute interruption. Dernière mise à jour : 2026-10-25.
> Nom de travail : **MedEssentiel** — « La médecine, clairement expliquée. » (provisoire, disponibilité non vérifiée)

## Décisions en attente (nécessitent l'utilisateur)

| # | Décision | Pourquoi | Statut |
|---|----------|----------|--------|
| D1 | Valider le nom MedEssentiel (domaine, YouTube, Facebook, marque INPI/OMPI) | Vérification légale non faite | OUVERT |
| D2 | Choisir le look HeyGen principal | Plusieurs looks dans le compte | **RÉSOLU 2026-10-25** : look `37d8ceaf22a64f23832965cb2cf3dcaf` (« Photo Avatar », portrait) + voix `06027f8821064073bf88d2a660173bc1` |
| D3 | Génération HeyGen ép. 1 | Accord donné (« premier vidéo à produire ») | **RÉSOLU 2026-10-25** : 1 génération lancée (16:9, 1080p, fond #0B2545) |
| D4 | Relecture scientifique finale du script ép. 1 par le Dr Massenat | Contrôle qualité obligatoire avant génération | OUVERT |
| D5 | Pays/numéro d'urgence à citer à l'écran (15/112 France ? autre ?) | Audience francophone multi-pays | OUVERT |

## Suivi des épisodes

Statuts : à rédiger → à vérifier → prêt pour HeyGen → généré → contrôlé → publié

| Ép. | Sujet | Statut | Fichier |
|-----|-------|--------|---------|
| 01 | Grossesse extra-utérine : 5 signes d'alerte | **généré (brouillon HeyGen, non publié, 2 min 11 s)** — page https://app.heygen.com/videos/f961be91b377fe035191a600d1a8e765 — video_id `f961be91b377fe035191a600d1a8e765` | `episodes/ep01/` |
| 02 | Comment fonctionne le cœur ? | à rédiger | — |
| 03 | Placenta accreta : comprendre les risques | à rédiger | — |
| 04 | AVC : reconnaître les signes FAST | à rédiger | — |
| 05 | NFS : comprendre les résultats | à rédiger | — |
| 06 | Appendicite : comment la reconnaître ? | à rédiger | — |
| 07 | Les reins : leur rôle | à rédiger | — |
| 08 | Diabète : pourquoi le glucose augmente-t-il ? | à rédiger | — |
| 09 | Constantes vitales en stage | à rédiger | — |
| 10 | Embolie pulmonaire : signes d'urgence | à rédiger | — |
| 11 | Les 12 nerfs crâniens | à rédiger | — |
| 12 | Étapes de l'accouchement | à rédiger | — |

## Journal

- 2026-10-25 — Utilisateur fixe l'avatar `37d8ceaf22a64f23832965cb2cf3dcaf` et la voix `06027f8821064073bf88d2a660173bc1` (D2 résolu). Look en portrait : le storyboard 16:9 de l'ép. 1 est à adapter (avatar centré/à gauche sur fond uni, schémas en incrustation). Toujours aucune génération (D3 ouvert).
- 2026-10-25 — Dépôt vide analysé. Compte HeyGen inspecté en lecture seule (aucune génération, aucune dépense). Sources de l'ép. 1 recherchées (voir `SOURCES.md`) : textes intégraux non accessibles depuis ce poste (réseau limité) → **sources à confirmer manuellement avant publication**. Dossier de lancement, script, storyboard, métadonnées de l'ép. 1 rédigés.

- 2026-10-25 — Génération lancée : `f961be91b377fe035191a600d1a8e765`. Brouillon à contrôler (voix, prononciation, lip-sync, cadrage portrait en 16:9) ; D4 toujours requise avant publication.
- 2026-10-25 12:09 UTC — Rendu terminé : durée 130,6 s (plus court que les 2 min 30 estimées → recaler les minutages du storyboard). Sous-titres .srt générés côté HeyGen (liens signés temporaires ; à retélécharger via get_video). Contrôle qualité humain à faire.

## Prochaines actions autonomes (ordre)

1. Après validation D4 : passer ép. 1 « prêt pour HeyGen » (génération uniquement après D3).
2. Rédiger ép. 2, 4, 6 (pack des 4 premières vidéos avec ép. 1) : même gabarit que `episodes/ep01/`.
3. Modèles intro/outro et gabarit miniature.
