#!/usr/bin/env bash
# Construit les projets HyperFrames animés de tous les épisodes (sans rendu).
# Usage: build_hf_all.sh <scratchpad> [ép ...]
set -euo pipefail
S=$1; shift
M=$(cd "$(dirname "$0")" && pwd); D=$S/dl; P=$S/speech; ROOT=$(dirname "$M")
declare -A DUR=( [01]=130.64 [02]=109.85 [03]=209.84 [04]=106.15 [05]=192.42 [06]=104.09 [07]=187.90 [08]=189.99 [09]=203.34 [10]=191.51 [11]=205.81 [12]=183.71 [13]=190.34 [14]=174.49 [15]=168.24 [16]=169.73 )
declare -A PH
PH[01]='s01=x s02=Bonjour s03=D'"'"'abord s04=Premier_signe s05=Deuxième_signe s06=Troisième_signe s07=Quatrième_signe s08=Cinquième_signe s09=Certaines_situations s10=Que_faire s11=Cette_vidéo_est'
PH[02]='c01=x c02=Bonjour c03=Le_cœur_est_une_pompe c04=On_peut_le_voir c05=Suivons_une_goutte c06=Comment_le_sang_évite c07=Et_le_cœur_lui-même c08=Cette_vidéo_est_éducative'
PH[03]='z01=x z02=Bonjour z03=Commençons_par_la_physiologie z04=Trois_degrés z05=Pourquoi_cela_arrive z06=Quels_sont_les_risques z07=Le_point_clé z08=Si_le_diagnostic_est_suspecté z09=Sur_le_plan_chirurgical z10=Retenez_trois_idées z11=Cette_vidéo_est_éducative'
PH[04]='a01=x a02=Bonjour a03=Qu'"'"'est-ce_qu'"'"'un_AVC a04=Pour_reconnaître a05=F,_comme_Face a06=A,_comme_Arm a07=S,_comme_Speech a08=T,_comme_Time a09=Même_si_les_signes a10=Pourquoi_tant a11=En_attendant_les_secours a12=Cette_vidéo_est'
PH[05]='n01=x n02=Bonjour n03=La_NFS_compte n04=Première_lignée n05=Deuxième_lignée n06=Troisième_lignée n07=Maintenant,_les_règles n08=Quand_faut-il_consulter n09=Pour_les_étudiants n10=Cette_vidéo_est_éducative'
PH[06]='p01=x p02=Bonjour p03=L'"'"'appendice_est p04=Les_signes_évocateurs p05=Deuxièmement p06=Troisièmement p07=Quatrièmement p08=Mais_la_maladie p09=Quand_consulter p10=Comment_le_médecin p11=En_attendant_la_consultation p12=Cette_vidéo_est'
PH[07]='k01=x k02=Bonjour k03=Nous_avons_deux_reins k04=Quatre_mécanismes k05=Comment_mesure-t-on k06=Le_problème_des_maladies k07=Qui_doit_être_surveillé k08=Comment_protéger k09=Quand_consulter_rapidement k10=Retenez k11=Cette_vidéo_est_éducative'
PH[08]='d01=x d02=Bonjour d03=Commençons_par_le_fonctionnement d04=Dans_le_diabète,_cette d05=Le_diabète_de_type_1 d06=Le_diabète_de_type_2 d07=Comment_fait-on_le_diagnostic d08=Quels_sont_les_signes d09=Pourquoi_est-ce_important d10=Une_urgence_à_connaître d11=Que_faire d12=Retenez d13=Cette_vidéo_est_éducative'
PH[09]='t01=x t02=Bonjour t03=Cinq_constantes_de_base t04=La_température. t05=La_fréquence_cardiaque. t06=La_fréquence_respiratoire. t07=La_tension_artérielle. t08=La_saturation_en_oxygène. t09=La_conscience_et_la_douleur t10=Maintenant,_l'"'"'essentiel t11=Quand_alerter t12=Retenez_cinq t13=Cette_vidéo_est_éducative'
PH[10]='e01=x e02=Bonjour e03=quoi_parle e04=Quels_sont_les_signes e05=Un_indice_important e06=Qui_est_à_risque e07=Quand_faut_il_appeler e08=Comment_le_médecin e09=Quel_est_le_traitement e10=Et_la_prévention e11=Retenez e12=Cette_vidéo_est_éducative'
PH[11]='m01=x m02=Bonjour m03=Étape_un m04=Une_phrase_pour m05=Étape_deux m06=Étape_trois m07=Deuxième_groupe m08=Troisième_groupe m09=Quatrième_groupe m10=Prenons_deux m11=Votre_plan m12=Cette_vidéo_est_éducative'
PH[12]='g01=x g02=Bonjour g03=On_distingue g04=Première_étape g05=Deuxième_étape g06=Troisième_étape g07=Et_la_douleur g08=Quand_partir g09=Quand_faut_il_aller g10=Retenez g11=Cette_vidéo_est_éducative'
PH[13]='r01=x r02=Bonjour r03=Qu'"'"'est_ce_que_c'"'"'est r04=Pourquoi_est_ce_grave r05=Quels_sont_les_signes r06=Qui_est_le_plus r07=Comment_fait_on r08=Quel_est_le_traitement r09=Peut_on_la_prévenir r10=Quand_consulter_sans_attendre r11=Retenez r12=Cette_vidéo_est_éducative'
PH[14]='h01=x h02=Bonjour h03=Qu'"'"'est_ce_que_la_tension h04=Pourquoi_parle_t_on h05=Quelles_sont_les_causes h06=Comment_bien_mesurer h07=D'"'"'abord_les_mesures h08=Quand_faut_il_consulter h09=Retenez h10=Cette_vidéo_est_éducative'
PH[15]='i01=x i02=Bonjour i03=Qu'"'"'est_ce i04=Quels_sont_les_signes i05=Attention_aux_formes i06=Que_faire i07=Et_si_la_personne i08=Comment_le_médecin i09=Quel_est_le_traitement i10=Comment_éviter i11=Retenez i12=Cette_vidéo_est_éducative'
PH[16]='y01=x y02=Bonjour y03=Qu'"'"'est_ce_que_c'"'"'est y04=Quels_sont_les_signes y05=On_peut_aussi_voir y06=Quel_taux_est y07=Pourquoi_le_taux y08=Comment_les_faire y09=Le_point_essentiel y10=Quand_consulter_en_urgence y11=Retenez y12=Cette_vidéo_est_éducative'
for ep in "$@"; do
  if [[ 10#$ep -ge 10 ]]; then SRT=$P/ep$ep.srt; WAV=$P/ep$ep.wav; WORDS=$P/ep${ep}_words.json
  else SRT=$D/ep$ep.srt; WAV=$S/hf_audio_$ep.wav; ffmpeg -v error -y -i $D/ep${ep}_raw.mp4 -vn -ac 1 -ar 44100 $WAV; WORDS=$S/hf_words_$ep.json; python3 $M/srt_words.py $SRT $WORDS >/dev/null; fi
  SF=$M/ep$ep/scenes_ep$ep.mjs
  (cd $M/ep$ep && THEME=brand node scenes_ep$ep.mjs $S/brand_$ep >/dev/null)
  ARGS=(); for kv in ${PH[$ep]}; do ARGS+=("${kv//_/ }"); done
  T=$(python3 $M/timing.py $SRT ${DUR[$ep]} "${ARGS[@]}")
  PR=$ROOT/${PROJ:-hyperframes}/ep$ep; mkdir -p $PR
  node $M/${BUILDER:-hf_build.mjs} $S/brand_$ep $PR $WORDS $WAV "$T" $ep
  cp $ROOT/hyperframes/ep10/hyperframes.json $PR/; sed "s/medessentiel-ep10/medessentiel-ep$ep/" $ROOT/hyperframes/ep10/package.json > $PR/package.json
  printf 'assets/vo.wav\nrenders/\n*.mp4\n.hyperframes/\nnode_modules/\n' > $PR/.gitignore
done
