# -*- coding: utf-8 -*-
"""Source de vérité du registre MedEssentiel. Génère videos.json, REGISTRE_PRODUCTION.md, CALENDRIER_PUBLICATION.md.
Numérotation VID-xxx : STRICTEMENT INTERNE (jamais dans titres, descriptions, miniatures, hashtags, vidéos)."""
import json, datetime
V = [
 # id, ep, titre public, spécialité, catégorie YT, durée s, vitesse (1.0 = inchangée), plateformes, icône, miniature (grand, petit), accroche, description, hashtags
 ("VID-001",1,"Grossesse extra-utérine : 5 signes d'alerte à ne jamais ignorer","Gynécologie","Urgences médicales",130.6,1.0,"FB+YT","uterus","GEU|signes d'alerte","Retard de règles, douleur d'un côté, saignement : pas toujours banal.","La grossesse extra-utérine est une urgence potentielle. Les signes d'alerte, les facteurs de risque et quand consulter.","#Grossesse #Urgence #GEU #Gynécologie #MedEssentiel"),
 ("VID-002",2,"Comment fonctionne le cœur ? Le trajet du sang expliqué","Cardiologie","Anatomie et physiologie",109.9,1.0,"FB+YT","heart","CŒUR|le trajet du sang","Quatre cavités, quatre valves, un seul circuit.","Cavités, valves, grande et petite circulation : comprendre comment le cœur fait circuler le sang.","#Cœur #Cardiologie #Anatomie #Physiologie #MedEssentiel"),
 ("VID-003",3,"Placenta accreta : comprendre ce risque d'hémorragie à l'accouchement","Obstétrique","Comprendre les maladies",209.8,1.0,"FB","uterus","PLACENTA|quand il adhère trop","Quand le placenta adhère trop à l'utérus.","Accreta, increta, percreta : définitions, facteurs de risque et prise en charge en centre expert.","#Placenta #Obstétrique #Grossesse #Médecine #MedEssentiel"),
 ("VID-004",4,"AVC : comment reconnaître les premiers signes ?","Neurologie","Urgences médicales",106.2,1.0,"FB+YT","brain","AVC|reconnaître les signes","Visage, bras, parole, temps : chaque minute compte.","Les signes d'alerte d'un AVC et pourquoi il faut appeler les secours immédiatement.","#AVC #Neurologie #Urgence #Prévention #MedEssentiel"),
 ("VID-005",5,"NFS : comment lire votre numération formule sanguine ?","Hématologie","Sémiologie et examens médicaux",192.4,1.08,"FB+YT","blood","NFS|lire ses résultats","Globules rouges, blancs, plaquettes : que disent-ils ?","Comprendre les trois lignées de la NFS et les valeurs de référence.","#NFS #Hématologie #Biologie #Médecine #MedEssentiel"),
 ("VID-006",6,"Appendicite : quels sont les signes qui doivent alerter ?","Gastro-entérologie","Urgences médicales",104.1,1.0,"FB+YT","abdomen","APPENDICITE|les signes d'alerte","Une douleur du ventre : quand penser à l'appendicite ?","Signes évocateurs, diagnostic et conduite à tenir devant une suspicion d'appendicite.","#Appendicite #Urgence #Chirurgie #Digestif #MedEssentiel"),
 ("VID-007",7,"Les reins : comment filtrent-ils le sang ?","Néphrologie","Anatomie et physiologie",187.9,1.07,"FB+YT","kidneys","REINS|comment ils filtrent","Un million de néphrons par rein.","Néphron, filtration, créatinine et DFG : comprendre le travail des reins et comment les protéger.","#Reins #Néphrologie #Physiologie #Prévention #MedEssentiel"),
 ("VID-008",8,"Diabète : pourquoi la glycémie augmente-t-elle ?","Endocrinologie","Comprendre les maladies",190.0,1.07,"FB+YT","drop","DIABÈTE|pourquoi la glycémie monte","Insuline, cellules, glucose : le mécanisme du diabète.","Diabète de type 1 et de type 2, seuils de diagnostic, signes et urgences à connaître.","#Diabète #Endocrinologie #Glycémie #Santé #MedEssentiel"),
 ("VID-009",9,"Constantes vitales : les 5 valeurs essentielles","Sémiologie","Sémiologie et examens médicaux",203.3,1.0,"FB","pulse","CONSTANTES|les 5 essentielles","Température, pouls, respiration, tension, saturation.","Les cinq constantes de base, leurs repères chez l'adulte et quand alerter.","#ConstantesVitales #Sémiologie #Stage #Médecine #MedEssentiel"),
 ("VID-010",10,"Embolie pulmonaire : les signes d'urgence à connaître","Pneumologie","Urgences médicales",191.5,1.08,"FB+YT","lungs","EMBOLIE|signes d'urgence","Essoufflement brutal : ne jamais minimiser.","Caillot, phlébite, facteurs de risque, diagnostic et traitement de l'embolie pulmonaire.","#EmbolieP #Pneumologie #Urgence #Thrombose #MedEssentiel"),
 ("VID-011",11,"Les 12 nerfs crâniens : une méthode pour les retenir","Neurologie","Anatomie et physiologie",205.8,1.0,"FB","nerve","12 NERFS|une méthode pour les retenir","Ordre, fonctions, mnémotechnique.","Une méthode en trois étapes pour mémoriser les douze nerfs crâniens.","#NerfsCrâniens #Neurologie #Anatomie #Étudiants #MedEssentiel"),
 ("VID-012",12,"Les étapes de l'accouchement expliquées simplement","Obstétrique","Médecine générale",183.7,1.04,"FB+YT","baby","ACCOUCHEMENT|les étapes","Dilatation, expulsion, délivrance.","Les trois étapes de l'accouchement par voie basse, quand contacter la maternité et quand consulter en urgence.","#Accouchement #Grossesse #Maternité #Obstétrique #MedEssentiel"),
 ("VID-013",13,"Prééclampsie : les signes d'alerte pendant la grossesse","Obstétrique","Urgences médicales",190.3,1.07,"FB+YT","gauge","PRÉÉCLAMPSIE|signes d'alerte","Maux de tête, vision floue, douleur sous les côtes.","Définition, signes d'alerte, facteurs de risque, diagnostic et prise en charge de la prééclampsie.","#Prééclampsie #Grossesse #Obstétrique #Urgence #MedEssentiel"),
 ("VID-014",14,"Hypertension artérielle : pourquoi est-elle dangereuse ?","Cardiologie","Prévention et santé publique",174.5,1.0,"FB+YT","gauge","TENSION|le tueur silencieux","Une tension élevée, aucun symptôme.","Seuils, bonne mesure, causes et mesures de mode de vie : tout savoir sur l'hypertension.","#Hypertension #Cardiologie #Prévention #Tension #MedEssentiel"),
 ("VID-015",15,"Infarctus : les signes d'alerte à ne jamais ignorer","Cardiologie","Urgences médicales",168.2,1.0,"FB+YT","heart-cor","INFARCTUS|chaque minute compte","Pression dans la poitrine : que faire ?","Signes typiques et atypiques, conduite à tenir et traitement de l'infarctus du myocarde.","#Infarctus #Cardiologie #Urgence #Cœur #MedEssentiel"),
 ("VID-016",16,"Triglycérides élevés : signes, seuils et comment les faire baisser","Endocrinologie","Prévention et santé publique",169.7,1.0,"FB+YT","fat","TRIGLYCÉRIDES|le risque silencieux","Aucun symptôme, mais un vrai risque.","Repères, causes, complications possibles et conseils pour faire baisser les triglycérides.","#Triglycérides #Cholestérol #Prévention #Santé #MedEssentiel"),
 ("VID-017",17,"Aliments avant 6 mois : ce que dit vraiment la science","Pédiatrie","Prévention et santé publique",548.7,1.0,"FB","spoon","BÉBÉ & SOLIDES|avant 6 mois ?","Faut-il donner de la bouillie avant 6 mois ?","OMS, ESPGHAN, AAP : ce qui est démontré, ce qui est suspecté et les signes de maturité de bébé.","#Nourrisson #Diversification #Allaitement #Pédiatrie #MedEssentiel"),
 ("VID-018",18,"Score d'Apgar : saurez-vous calculer le score de ce nouveau-né ?","Pédiatrie/néonatologie","Cas cliniques",None,1.0,"FB+YT","baby","APGAR /10 ?|saurez-vous calculer ?","Un nouveau-né, cinq critères, un score sur dix.","Quiz clinique : calculez le score d'Apgar de deux nouveau-nés et comprenez ses limites.","#Apgar #Néonatologie #CasClinique #Pédiatrie #MedEssentiel"),
]
# ordre de publication (VID), 2 par jour : 08:00 et 17:30 AST (UTC-4)
ORDER = ["VID-015","VID-004","VID-006","VID-014","VID-008","VID-010","VID-007","VID-016","VID-002","VID-005","VID-013","VID-009","VID-011","VID-001","VID-012","VID-003","VID-017","VID-018"]
START = datetime.date(2026,11,23)
keys = ["vid","ep","titre","specialite","categorie_yt","duree_s","vitesse","plateformes","icone","miniature","accroche","description","hashtags"]
rows = [dict(zip(keys, v)) for v in V]
by = {r["vid"]: r for r in rows}
sched = []
for i, vid in enumerate(ORDER):
    d = START + datetime.timedelta(days=i//2); slot = "08:00" if i % 2 == 0 else "17:30"
    by[vid]["date"] = d.isoformat(); by[vid]["heure_AST"] = slot
    h, m = map(int, slot.split(":")); utc = datetime.datetime(d.year, d.month, d.day, h + 4, m)
    by[vid]["scheduled_at_utc"] = utc.strftime("%Y-%m-%dT%H:%M:00Z")
status = {  # états réels vérifiés
 "prod": "Vidéo existante (à re-rendre sans numérotation interne)", "thumb": "À créer", "fb": "Non programmée", "yt": "Non programmée"}
for r in rows:
    r["statut_production"] = status["prod"] if r["vid"] != "VID-018" else "En production (narration en attente)"
    r["statut_miniature"] = status["thumb"]; r["statut_fb"] = status["fb"]; r["statut_yt"] = "Non applicable (> 3 min)" if r["plateformes"] == "FB" else status["yt"]
    r["lien"] = ""
json.dump(rows, open("videos.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print(len(rows), "vidéos")
