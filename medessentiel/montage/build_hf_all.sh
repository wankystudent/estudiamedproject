#!/usr/bin/env bash
# Construit les projets HyperFrames animés de tous les épisodes (sans rendu).
# Usage: build_hf_all.sh <scratchpad> [ép ...]
set -euo pipefail
S=$1; shift
M=$(cd "$(dirname "$0")" && pwd); D=$S/dl; P=$S/speech; ROOT=$(dirname "$M")
declare -A DUR=( [01]=130.64 [02]=109.85 [03]=209.84 [04]=106.15 [05]=192.42 [06]=104.09 [07]=187.90 [08]=189.99 [09]=203.34 [10]=191.51 [11]=205.81 [12]=183.71 [13]=190.34 [14]=174.49 [15]=168.24 [16]=169.73 [17]=548.69 [18]=193.29 [19]=168.46 [20]=163.25 [21]=151.69 [22]=143.98 [23]=133.53 [24]=146.34 [25]=145.04 [26]=159.26 [27]=159.39 [28]=157.58 [29]=177.27 [30]=167.75 )
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
PH[17]='v01=x v02=Bonjour v03=Commençons_par_les_recommandations v04=Pourquoi_attendre v05=Deuxième_argument v06=Troisième_argument v07=Parlons_de_sécurité v08=Qu'"'"'en_est_il_des_infections v09=Autre_risque v10=Faut_il_craindre v11=Résumons_la_différence v12=Quelques_idées_reçues v13=Concrètement_que_faire v14=Soyons_clairs v15=Pour_conclure v16=Cette_vidéo_est_éducative'
PH[18]='q01=x q02=Bienvenue_sur_MedEssentiel q03=Le_principe q04=Premier_cas q05=À_vous_de_calculer q06=Correction._Apparence q07=Deuxième_cas q08=À_vous_:_cinq q09=Apparence_:_pâle q10=Mais_le_score_ne_décide q11=Ses_limites q12=Retenez q13=Cette_vidéo_est_éducative'
PH[19]='a01=x a02=Bienvenue_sur_MedEssentiel a03=L'"'"'anaphylaxie_est_une a04=Les_signes a05=Que_faire a06=Ensuite,_la_position a07=Un_point_essentiel a08=Après_l'"'"'urgence a09=Retenez a10=Cette_vidéo_est_éducative'
PH[20]='e01=x e02=Bienvenue_sur_MedEssentiel e03=D'"'"'abord,_le_papier e04=Étape_un e05=Étape_deux e06=Étape_trois e07=Étape_cinq e08=Dernière_étape e09=Une_règle_d'"'"'or e10=Retenez e11=Cette_vidéo_est_éducative'
PH[21]='s01=x s02=Bienvenue_sur_MedEssentiel s03=L'"'"'asthme_est_une s04=Pour_confirmer s05=Le_traitement s06=Trois_gestes s07=Quand_s'"'"'inquiéter s08=Retenez s09=Cette_vidéo_est_éducative'
PH[22]='p01=x p02=Bienvenue_sur_MedEssentiel p03=L'"'"'épilepsie_est_une p04=Une_crise_ne_se_résume p05=Pendant_une_crise p06=Ne_mettez_rien p07=Quand_les_convulsions p08=Quand_appeler p09=Le_traitement_de_fond p10=Cette_vidéo_est_éducative'
PH[23]='f01=x f02=Bienvenue_sur_MedEssentiel f03=D'"'"'abord,_une_idée f04=Par_conséquent f05=Que_faire_à_la_maison f06=Si_l'"'"'enfant_est_inconfortable f07=Quand_consulter f08=Retenez f09=Cette_vidéo_est_éducative'
PH[24]='h01=x h02=Bienvenue_sur_MedEssentiel h03=L'"'"'hypoglycémie_est_une h04=Elle_survient_surtout h05=Les_signes h06=Que_faire_si h07=Si_la_personne_est_inconsciente h08=Après_un_épisode h09=Retenez h10=Cette_vidéo_est_éducative'
PH[25]='t01=x t02=Bienvenue_sur_MedEssentiel t03=Selon_la_définition t04=Comment_le_reconnaître t05=Dans_la_vie_courante t06=Les_personnes_les_plus_à_risque t07=Que_faire t08=Pour_prévenir t09=Retenez t10=Cette_vidéo_est_éducative'
PH[26]='n01=x n02=Bienvenue_sur_MedEssentiel n03=L'"'"'anémie_est_une n04=Les_signes n05=Quelles_sont_les_causes n06=Comment_faire_le_diagnostic n07=Le_traitement_dépend n08=Pour_mieux_absorber n09=Retenez n10=Cette_vidéo_est_éducative'
PH[27]='m01=x m02=Bienvenue_sur_MedEssentiel m03=Le_paludisme_est_une m04=Les_signes m05=Quand_faut-il_s'"'"'alarmer m06=Le_diagnostic_repose m07=Le_traitement_dépend m08=Comment_se_protéger m09=Retenez m10=Cette_vidéo_est_éducative'
PH[28]='g01=x g02=Bienvenue_sur_MedEssentiel g03=La_gastrite_est_une g04=Les_symptômes g05=Quand_faut-il_consulter g06=Consultez_aussi g07=Comment_faire_le_diagnostic g08=Le_traitement g09=Retenez g10=Cette_vidéo_est_éducative'
PH[29]='b01=x b02=Bienvenue_sur_MedEssentiel b03=Les_gaz_du_sang_artériels b04=Étape_un b05=Étape_quatre b06=Étape_cinq b07=Les_autres_tableaux b08=Retenez b09=Cette_vidéo_est_éducative'
PH[30]='c01=x c02=Bienvenue_sur_MedEssentiel c03=Les_antibiotiques_tuent c04=Pourquoi_est-ce_si_important c05=Alors,_quand_un_antibiotique c06=Les_règles_d'"'"'or c07=Quand_faut-il_s'"'"'inquiéter c08=Comment_réduire c09=Retenez c10=Cette_vidéo_est_éducative'
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
