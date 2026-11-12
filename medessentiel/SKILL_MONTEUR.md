# Skill — Monteur vidéo médical MedEssentiel (reçu le 2026-11-12)

Rôle : transformer toute vidéo source fournie par l'utilisateur en vidéo finale **9:16, 1080×1920, MP4 H.264/AAC**, prête à publier. Exécuter le montage (pas seulement le décrire) ; ne jamais déclarer « terminé » sans rendu final visionné et vérifié.

## Workflow
1. Inspecter la vidéo (ffprobe : durée, fps, résolution, audio). 2. Détecter la parole/silences. 3. Transcrire intégralement. 4. Repérer silences, « euh », répétitions. 5. Timeline de montage. 6. Exécuter. 7. Contrôle qualité (voir plus bas). 8. Livrer MP4 (+ SRT optionnel).

## Règles de coupe
Retirer silences inutiles, « euh », répétitions accidentelles ; **ne jamais couper un mot, une syllabe ni une information médicale** ; transitions naturelles (coupes sur respiration, micro-fondus audio).

## Sous-titres
Mot par mot, mot courant en couleur contrastée (#19D3C5), police épaisse (Inter), zone sûre mobile (haut ≥ 168 px, bas hors zone interface), orthographe/accents/terminologie corrigés, synchronisation sur la transcription.

## Visuels médicaux
Pour chaque organe, maladie, mécanisme, aliment, étape : schéma/animation **anatomiquement crédible**, créé sur mesure (HTML/GSAP → HyperFrames, ou ffmpeg), sans masquer le visage ; aucune image décorative sans rapport ; pas de photo sans licence.

## Image
Lissage **léger** du visage (zone du visage uniquement), texture naturelle, correction d'exposition/contraste/balance des blancs ; ne jamais modifier les traits.

## Audio
Voix : débruitage (afftdn/arnndn), normalisation (loudnorm −16 LUFS), compression douce. Musique instrumentale **originale ou sous licence**, très basse sous la voix (sidechain), pas d'écrêtage.

## Marque
Logo discret (`brand/logo_icon.png`), palette logo (marine #022F72, bleu #0274BB, turquoise #0195B1/#19D3C5), peu d'effets, pas d'emojis superflus.

## Contrôle qualité avant livraison
Visionner l'intégralité ; vérifier chaque sous-titre, la synchro, qu'aucun mot n'est coupé, l'exactitude des schémas, la balance musique/voix, la résolution/ratio/intégrité du fichier ; corriger puis re-rendre si problème.

## État des capacités de l'environnement (vérifié le 2026-11-12)
| Capacité | État |
|---|---|
| ffmpeg 6.1 : coupe, rendu H.264/AAC, sous-titres, débruitage (afftdn, arnndn), loudnorm, sidechain, bilateral/smartblur, eq/colorbalance | **Disponible** |
| HyperFrames (animations HTML/GSAP → MP4) pour schémas et sous-titres animés | **Disponible** |
| Transcription (Whisper) | **Non installé ; modèles inaccessibles** (huggingface.co et openaipublic.azureedge.net bloqués). Solution : autoriser un hôte de modèles (demande d'accès réseau) ou fournir le texte du script |
| Lissage du visage ciblé (détection de visage) | Faisable via `opencv-python` (PyPI accessible) ; non installé |
| Musique sous licence | Aucune bibliothèque accessible ; **musique instrumentale originale synthétisée** (ffmpeg/Python) possible |
| Illustrations médicales | Créées sur mesure (vectoriel/HTML) ; **à faire relire** pour l'exactitude anatomique |
