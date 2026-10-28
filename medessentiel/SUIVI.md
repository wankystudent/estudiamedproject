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
| 02 | Comment fonctionne le cœur ? | **généré (brouillon HeyGen, 1 min 50 s)** — https://app.heygen.com/videos/91fd93c3b89abe8a47c13c75040be6e4 — video_id `91fd93c3b89abe8a47c13c75040be6e4` | `episodes/ep02/EPISODE.md` |
| 03 | Placenta accreta : comprendre les risques | **généré (brouillon HeyGen 3 min, en cours)** — https://app.heygen.com/videos/15177d36b7e8ff7576deedc8b48272ff — video_id `15177d36b7e8ff7576deedc8b48272ff` | `episodes/ep03/EPISODE.md` |
| 04 | AVC : reconnaître les signes FAST | **généré (brouillon HeyGen, 1 min 46 s)** — https://app.heygen.com/videos/7cb9fc36392e558c9f79256ea7e2f1e9 — video_id `7cb9fc36392e558c9f79256ea7e2f1e9` | `episodes/ep04/EPISODE.md` |
| 05 | NFS : comprendre les résultats | **généré (brouillon HeyGen 3 min, en cours)** — https://app.heygen.com/videos/79fdddc4c9e95d386089de38dae7f10a — video_id `79fdddc4c9e95d386089de38dae7f10a` | `episodes/ep05/EPISODE.md` |
| 06 | Appendicite : comment la reconnaître ? | **généré (brouillon HeyGen, 1 min 44 s)** — https://app.heygen.com/videos/5d122e919a6cb928474272bffc6178b8 — video_id `5d122e919a6cb928474272bffc6178b8` | `episodes/ep06/EPISODE.md` |
| 07 | Les reins : leur rôle | **généré (brouillon HeyGen 3 min, en cours)** — https://app.heygen.com/videos/23bff6c2db1622fe6fa7f02fe09891c0 — video_id `23bff6c2db1622fe6fa7f02fe09891c0` | `episodes/ep07/EPISODE.md` |
| 08 | Diabète : pourquoi le glucose augmente-t-il ? | **généré (brouillon HeyGen 3 min, en cours)** — https://app.heygen.com/videos/ab0a599b5e35ab5d3d553fe10a1a3ba7 — video_id `ab0a599b5e35ab5d3d553fe10a1a3ba7` | `episodes/ep08/EPISODE.md` |
| 09 | Constantes vitales en stage | **généré (brouillon HeyGen 3 min, en cours)** — https://app.heygen.com/videos/94bcf319d63a48e1ce2da5b6b63dbff0 — video_id `94bcf319d63a48e1ce2da5b6b63dbff0` | `episodes/ep09/EPISODE.md` |
| 10 | Embolie pulmonaire : signes d'urgence | **script 3 min rédigé (à vérifier, non généré)** | `episodes/ep10/EPISODE.md` |
| 11 | Les 12 nerfs crâniens | **script 3 min rédigé (à vérifier, non généré)** | `episodes/ep11/EPISODE.md` |
| 12 | Étapes de l'accouchement | **script 3 min rédigé (à vérifier, non généré)** | `episodes/ep12/EPISODE.md` |

## Journal

- 2026-10-25 — Utilisateur fixe l'avatar `37d8ceaf22a64f23832965cb2cf3dcaf` et la voix `06027f8821064073bf88d2a660173bc1` (D2 résolu). Look en portrait : le storyboard 16:9 de l'ép. 1 est à adapter (avatar centré/à gauche sur fond uni, schémas en incrustation). Toujours aucune génération (D3 ouvert).
- 2026-10-25 — Dépôt vide analysé. Compte HeyGen inspecté en lecture seule (aucune génération, aucune dépense). Sources de l'ép. 1 recherchées (voir `SOURCES.md`) : textes intégraux non accessibles depuis ce poste (réseau limité) → **sources à confirmer manuellement avant publication**. Dossier de lancement, script, storyboard, métadonnées de l'ép. 1 rédigés.

- 2026-10-25 — Génération lancée : `f961be91b377fe035191a600d1a8e765`. Brouillon à contrôler (voix, prononciation, lip-sync, cadrage portrait en 16:9) ; D4 toujours requise avant publication.
- 2026-10-25 12:09 UTC — Rendu terminé : durée 130,6 s (plus court que les 2 min 30 estimées → recaler les minutages du storyboard). Sous-titres .srt générés côté HeyGen (liens signés temporaires ; à retélécharger via get_video). Contrôle qualité humain à faire.
- 2026-10-25 — Montage ép. 1 réalisé (ffmpeg + Chromium, scripts dans `montage/ep01/`) : 11 scènes, illustrations originales, sous-titres incrustés, durée 2 min 11 s. Fichier : `montage/ep01_montage_v1.mp4` (hors dépôt, voir note). Scripts des ép. 2, 4, 6 rédigés (à vérifier, non générés dans HeyGen : aucun crédit dépensé).
- 2026-10-25 — Sur demande explicite de l'utilisateur : génération HeyGen des ép. 2, 4, 6 lancée (mêmes réglages que l'ép. 1). IDs dans le tableau. Contrôle des rendus à faire.
- 2026-10-25 12:35 UTC — Ép. 2, 4, 6 rendus terminés (durées 1:50, 1:46, 1:44, un peu sous la cible 2–3 min). Crédits premium : 454 → 328 (≈ 31 par vidéo de ~2 min). Montage non lancé (en attente de demande).
- 2026-10-25 — Montages v1 des ép. 2 (1:50), 4 (1:46), 6 (1:44) réalisés avec le pipeline `montage/` (lib.mjs, scenes_epXX.mjs, timing.py, build.sh). Fichiers locaux `ep0X_montage_v1.mp4` (hors dépôt). Aucun crédit HeyGen utilisé. Contrôle humain (voix, lip-sync, cadrage) toujours à faire ; D4 requise.
- 2026-10-28 — Versions Facebook (9:16, 1080×1920, sous-titres incrustés) des ép. 1, 2, 4, 6 produites avec `montage/vertical.sh` ; textes de publication dans `facebook/POSTS.md`. Fichiers locaux `epXX_facebook_9x16.mp4` (hors dépôt). À confirmer : limite de durée des Reels Facebook, étiquette « Info IA ». Aucune publication effectuée.
- 2026-10-28 — Sur demande (« scripts de 3 minutes ») : scripts des ép. 3, 5, 7, 8, 9, 10, 11, 12 rédigés au format 3 min (~500 mots ≈ 3 min au débit mesuré de 2,78 mots/s sur les rendus HeyGen). Aucune génération HeyGen, aucun crédit dépensé. Sources de niveau B (résumés de recherche) ; points non vérifiés listés dans chaque fichier. Ép. 1, 2, 4, 6 restent à ~1:45–2:10 (à rallonger si souhaité).
- 2026-10-28 — Réponse « Non, les autres » : pas de rallonge des ép. 1/2/4/6 ; génération HeyGen des ép. restants. Budget : 328 crédits ≈ 6 vidéos de 3 min (~50 chacune, estimation) → lancés d'abord ép. 3, 5, 7, 8, 9 ; ép. 10, 11, 12 en attente du solde réel après rendu (les crédits sont débités à la fin du rendu).

## Prochaines actions autonomes (ordre)

0. Reprendre le montage v2 après retour de l'utilisateur sur la v1 (cadrage, rythme, illustrations).
1. Après validation D4 : passer ép. 1 « prêt pour HeyGen » (génération uniquement après D3).
2. Rédiger ép. 2, 4, 6 (pack des 4 premières vidéos avec ép. 1) : même gabarit que `episodes/ep01/`.
3. Modèles intro/outro et gabarit miniature.
