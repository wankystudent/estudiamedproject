# -*- coding: utf-8 -*-
import re
WPS = 2.75
scenes = [
("Accroche : la question du biberon", "Hook",
"""« Docteur, mon bébé a trois mois et demi. Il pleure après son biberon. Je crois qu'il a encore faim. Je peux lui donner de la bouillie ? » C'est une situation très fréquente en consultation. Et la réponse n'est pas aussi simple qu'un oui ou un non. Dans cette vidéo, nous allons voir ce que dit réellement la science sur l'introduction des aliments avant six mois : ce qui est démontré, ce qui est seulement suspecté, et ce que vous pouvez faire dès aujourd'hui.""",
"Gros plan sur un nourrisson (illustration vectorielle) devant un biberon ; bulle de dialogue animée avec la question du parent.",
"Mini-animation : la bulle de dialogue s'écrit mot à mot ; une pendule tourne jusqu'à « 3 mois ½ ».",
"« Avant 6 mois ? » · « Ce qui est démontré / ce qui ne l'est pas »",
"Zoom avant sur la question, puis coupe sèche vers le logo."),
("Introduction MedEssentiel", "Intro",
"""Bonjour, je suis le docteur Wanky Massenat. Bienvenue sur MedEssentiel : la médecine, clairement expliquée. Cette vidéo s'adresse aux parents, aux étudiants en médecine et aux professionnels de santé. Elle s'appuie sur des recommandations officielles et des études publiées, que vous trouverez en description. Je distinguerai toujours les faits établis des simples associations statistiques.""",
"Logo MedEssentiel plein cadre ; bandeau « Sources en description ».",
"Le logo se construit (croix + livre) ; apparition du sous-titre « La médecine, clairement expliquée ».",
"« Parents · Étudiants · Soignants » · « Faits établis ≠ associations »",
"Fondu enchaîné."),
("Ce que recommandent les autorités", "Recommandations",
"""Commençons par les recommandations. L'Organisation mondiale de la santé et l'UNICEF recommandent l'allaitement exclusif pendant les six premiers mois de la vie, puis l'introduction d'aliments complémentaires à partir de six mois, en poursuivant l'allaitement jusqu'à deux ans ou plus. L'Académie américaine de pédiatrie aussi. En Europe, la société européenne de gastroentérologie pédiatrique, l'ESPGHAN, précise une fenêtre : les aliments complémentaires ne doivent pas être introduits avant quatre mois, ni retardés au-delà de six mois, avec un allaitement exclusif ou prédominant d'environ six mois comme objectif souhaitable. En France, l'Anses recommande de débuter la diversification entre quatre et six mois. Retenez donc deux messages : jamais avant quatre mois, et idéalement autour de six mois, selon le développement de l'enfant.""",
"Frise horizontale de 0 à 12 mois avec trois bandes colorées : OMS/AAP (6 mois), ESPGHAN (4–6 mois), France (4–6 mois).",
"La frise se déroule de gauche à droite ; chaque organisme apparaît avec son logo textuel et sa bande ; un trait rouge se pose sur « 4 mois ».",
"« OMS : ≈ 6 mois » · « ESPGHAN : pas avant 4 mois, pas après 6 » · « France (Anses) : 4–6 mois »",
"Glissement latéral."),
("Le système digestif du nourrisson", "Physiologie digestive",
"""Pourquoi attendre ? Première raison : le système digestif. À la naissance, l'intestin est immature. Il mûrit progressivement, et le lait maternel comme le lait infantile sont parfaitement adaptés à cette étape. Les selles du bébé qui débute les solides montrent parfois des fragments d'aliments non digérés. Cela ne signifie pas qu'il ne peut rien digérer : c'est pour cela qu'il existe une fenêtre. Mais la physiologie ne fournit pas une date exacte. Elle explique surtout pourquoi le lait doit rester l'aliment principal.""",
"Schéma anatomique simplifié du tube digestif d'un nourrisson : bouche, œsophage, estomac, intestin grêle.",
"Un flux de lait (bleu) circule le long du tube digestif ; un morceau d'aliment (orange) s'arrête à l'estomac et se fragmente puis traverse l'intestin sous forme de particules.",
"« Intestin immature » · « Le lait reste l'aliment principal »",
"Zoom dans l'abdomen."),
("Les reins et la charge en solutés", "Physiologie rénale",
"""Deuxième argument : les reins. Chez le très jeune nourrisson, la capacité à concentrer les urines est plus limitée. Les aliments riches en protéines ou en sel augmentent la quantité de solutés que les reins doivent éliminer. Soyons honnêtes sur le niveau de preuve : il s'agit surtout d'un raisonnement physiologique. Une petite étude ancienne, sur trente-neuf nourrissons de moins de trois mois, a montré que les solides augmentent bien la charge rénale en solutés, sans modifier l'osmolalité plasmatique ni le sodium dans le sang. Le risque est donc plausible, mais pas démontré chez le bébé sain. Et par prudence, on ne sale jamais les aliments du nourrisson.""",
"Schéma d'un rein avec un néphron ; deux jauges « sel » et « protéines » ; un étiquetage « preuve limitée ».",
"Le néphron s'illumine ; une jauge se remplit puis se vide quand on ajoute « lait seul » vs « lait + solides » ; un bandeau « Plausible ≠ démontré » apparaît.",
"« Charge en solutés » · « Plausible ≠ démontré » · « Pas de sel ajouté »",
"Fondu au noir bref."),
("Déglutition, motricité et signes de maturité", "Neurodéveloppement",
"""Troisième argument : le développement neuromoteur. Avaler une purée à la cuillère demande de tenir sa tête, de rester assis avec un peu de soutien, de coordonner la langue et la déglutition. Chez le tout-petit, un réflexe pousse la langue vers l'avant et fait ressortir la cuillère ; il s'estompe en général entre quatre et six mois. Les signes de maturité décrits par l'Académie américaine : le bébé tient bien sa tête, s'assoit avec un soutien, regarde votre repas, tend la main vers la nourriture et ouvre la bouche quand on la lui approche. Doubler son poids de naissance, souvent vers quatre mois, peut être un indice parmi d'autres, mais l'âge seul ne suffit pas.""",
"Trois illustrations d'un bébé : tenue de tête, position assise soutenue, main qui tend vers une cuillère.",
"Une coche verte apparaît à côté de chaque signe ; la langue du schéma buccal repousse puis laisse passer la cuillère.",
"« Tient sa tête » · « Assis avec soutien » · « S'intéresse à la nourriture » · « Âge seul ≠ prêt »",
"Panoramique vertical."),
("Étouffement et fausse route", "Risques : étouffement",
"""Parlons de sécurité. Un nourrisson qui n'est pas prêt est plus exposé à l'étouffement : c'est un raisonnement logique, mais les chiffres disponibles concernent des bébés de six mois et plus. Dans un essai contrôlé en Nouvelle-Zélande, sur deux cent six nourrissons, trente-cinq pour cent ont eu au moins un épisode d'étouffement entre six et huit mois, quelle que soit l'approche alimentaire. La leçon : texture adaptée, bébé assis, adulte présent. Avant un an, l'Académie américaine déconseille notamment les noix, les raisins entiers, le pop-corn, les morceaux de viande ou de fromage et les légumes crus durs.""",
"Illustration pédagogique : bébé dans une chaise haute avec adulte à côté ; liste d'aliments à risque en icônes barrées.",
"Les icônes d'aliments à risque se barrent une à une ; un pictogramme « adulte présent » clignote.",
"« 35 % : au moins un épisode (6–8 mois) » · « Assis · surveillé · texture adaptée »",
"Coupe nette."),
("Infections digestives et respiratoires", "Risques : infections",
"""Qu'en est-il des infections ? Les données montrent que l'allaitement exclusif jusqu'à six mois, comparé à trois ou quatre mois suivis d'un allaitement mixte, réduit le risque d'infection gastro-intestinale. C'est la conclusion d'une revue Cochrane. Un grand essai en Biélorussie a montré moins d'infections digestives quand l'allaitement était mieux soutenu : neuf virgule un pour cent contre treize virgule deux. Attention : ces résultats portent sur la promotion de l'allaitement, pas sur l'effet isolé d'un aliment introduit trop tôt. Et une étude écossaise plus ancienne n'a pas trouvé de lien entre introduction précoce et gastroentérites, avec seulement une hausse modérée des infections respiratoires. Le signal existe, mais il n'est pas démontré pour chaque bébé.""",
"Graphique en barres très simple : 13,2 % vs 9,1 % (données PROBIT) avec légende claire ; encadré « Revue Cochrane ».",
"Les barres montent puis une barre se réduit ; une loupe passe sur la mention « promotion de l'allaitement ≠ effet isolé ».",
"« 13,2 % → 9,1 % » · « Association, pas causalité prouvée » · « Cochrane : moins d'infections digestives »",
"Glissement vers la gauche."),
("Allaitement, croissance et carences", "Conséquences nutritionnelles",
"""Autre risque : que le bébé boive moins de lait. Dans trois cohortes britanniques, introduire des solides avant quatre mois était associé à un arrêt plus précoce de l'allaitement. Dans la plus ancienne, le risque d'arrêt était environ deux fois plus élevé. Mais association n'est pas causalité. Sur la croissance, la revue Cochrane ne montre aucun déficit chez les bébés exclusivement allaités six mois. Et l'OMS rappelle qu'après six mois, le lait seul ne suffit plus : retarder trop longtemps comporte aussi des risques, dont une altération possible du statut en fer dans certains contextes. D'où l'idée d'une fenêtre : ni trop tôt, ni trop tard. Dès six mois, tous les nourrissons devraient recevoir des aliments riches en fer, comme la viande ou des céréales enrichies.""",
"Schéma d'équilibre : une balance avec « lait » d'un côté, « aliments » de l'autre ; courbe de besoins en fer.",
"La balance bascule progressivement ; une icône de goutte de sang (fer) apparaît à partir de 6 mois.",
"« Introduction < 4 mois : arrêt plus précoce de l'allaitement (association) » · « À 6 mois : fer »",
"Transition par un fondu."),
("Obésité, allergies et maladies métaboliques", "Obésité et allergies",
"""Faut-il craindre l'obésité ? Une étude américaine a suivi huit cent quarante-sept enfants. Chez ceux nourris au biberon, introduire des solides avant quatre mois était associé à des chances multipliées par six d'obésité à trois ans. Chez les bébés allaités au moins quatre mois, aucun lien. Mais le groupe au biberon était petit, et l'étude est observationnelle. Une revue de vingt-quatre études n'a pas trouvé d'association claire. Pour les maladies métaboliques, les données ne permettent pas de conclure. Côté allergies, c'est le contraire de ce que l'on croyait : retarder les aliments allergènes ne protège pas. Chez les bébés à risque, avec un eczéma sévère ou une allergie à l'œuf, introduire l'arachide entre quatre et onze mois a fait passer le taux d'allergie de treize virgule sept à un virgule neuf pour cent. Cela se fait sur avis médical, et jamais avant quatre mois.""",
"Deux panneaux : « Obésité » (graphique OR) et « Allergies » (étude LEAP : 13,7 % vs 1,9 %).",
"Les deux panneaux se remplissent ; sur le panneau obésité une étiquette « association observationnelle » clignote ; sur le panneau allergie une flèche descendante apparaît.",
"« Obésité : association, preuve incertaine » · « Allergènes : ne pas retarder » · « Jamais avant 4 mois »",
"Coupe nette."),
("Avant 4 mois ou entre 4 et 6 mois ?", "Comparaison des fenêtres",
"""Résumons la différence entre les deux périodes. Avant quatre mois, aucun bénéfice n'est démontré, et on observe plusieurs associations défavorables : arrêt plus précoce de l'allaitement, un lien possible avec l'obésité chez le bébé au biberon, et l'immaturité digestive, rénale et motrice. Entre quatre et six mois, les autorités divergent : l'OMS et l'Académie américaine visent six mois, l'ESPGHAN et la France acceptent un début dès quatre mois si le bébé est prêt. Des chercheurs ont d'ailleurs critiqué les bases scientifiques de la version précédente de la position européenne. Le point commun : personne ne recommande de commencer avant quatre mois.""",
"Tableau comparatif à deux colonnes : « Avant 4 mois » / « Entre 4 et 6 mois » avec des icônes de risque et de bénéfice.",
"Les lignes du tableau apparaissent une à une ; une barre verticale rouge sépare les deux périodes à « 4 mois ».",
"« < 4 mois : pas de bénéfice démontré » · « 4–6 mois : débat entre les autorités » · « Consensus : pas avant 4 mois »",
"Glissement vers la droite."),
("Idées reçues des parents", "Idées reçues",
"""Quelques idées reçues, maintenant. Première : mon bébé pleure après le biberon, il a faim, donc je lui donne une bouillie. Les pleurs ont de nombreuses causes : mieux vaut en parler à son médecin que donner une bouillie. Deuxième : mon bébé regarde mon assiette, il est prêt. C'est un signe parmi d'autres, il ne suffit pas à lui seul. Troisième : je vais mettre la bouillie dans le biberon. Ce n'est pas recommandé, sauf avis médical : l'Académie américaine évoque un risque d'étouffement et de prise de poids excessive. Quatrième : en attendant plus longtemps, je préviens les allergies. C'est faux : retarder les allergènes ne protège pas.""",
"Quatre cartes « Idée reçue / Réalité » alignées.",
"Chaque carte se retourne : le mythe passe en rouge barré, la réalité en vert.",
"« Pleurs ≠ faim de solides » · « Un signe ne suffit pas » · « Pas de bouillie au biberon » · « Retarder ne protège pas »",
"Retournement de cartes."),
("Recommandations pratiques pour les parents", "Conseils pratiques",
"""Concrètement, que faire ? Un : avant quatre mois, uniquement du lait maternel ou infantile. Deux : entre quatre et six mois, demandez l'avis de votre médecin ou pédiatre avant de commencer, surtout si l'allaitement est exclusif. Trois : commencez en petites quantités, avec une texture lisse, bébé assis, à la cuillère. Quatre : proposez des aliments riches en fer, comme la viande, et des légumes variés, sans sel ni sucre ajouté. Cinq : pas de jus de fruits avant un an, pas de lait de vache comme boisson principale avant un an. Six : continuez l'allaitement, ou le lait infantile, en parallèle. Et si votre bébé est né prématuré, ou s'il a une maladie particulière, suivez les conseils de son équipe médicale : ces recommandations concernent les nourrissons nés à terme et en bonne santé.""",
"Liste numérotée de six pictogrammes : biberon/sein, médecin, cuillère, viande/légumes, interdits, parent.",
"Les six pictogrammes s'illuminent l'un après l'autre en suivant le rythme de la narration.",
"« 1 Lait seul avant 4 mois » · « 2 Avis médical entre 4 et 6 » · « 3 Texture lisse, assis » · « 4 Fer, pas de sel/sucre » · « 5 Pas de jus avant 1 an » · « 6 Continuer le lait »",
"Fondu lent."),
("Limites des connaissances actuelles", "Limites scientifiques",
"""Soyons clairs sur ce que nous ne savons pas. La plupart des données sur l'introduction précoce sont observationnelles : elles montrent des associations, souvent influencées par des facteurs comme le niveau d'éducation ou le mode d'alimentation initial. Les essais randomisés sont rares et difficiles à mener. Les études diffèrent par leurs définitions et leurs contextes, pays riches ou pays pauvres. Enfin, les recommandations évoluent : la directive de l'OMS sur l'alimentation complémentaire date de deux mille vingt-trois, la position de l'ESPGHAN de deux mille dix-sept. Votre médecin reste la meilleure personne pour adapter ces conseils à votre enfant.""",
"Texte pédagogique ; icône d'une loupe sur un tableau de chiffres.",
"La loupe passe sur « associations » ; une chronologie 2017 → 2023 → 2026 s'affiche.",
"« Associations ≠ causalité » · « Peu d'essais randomisés » · « Recommandations en évolution »",
"Fondu."),
("Conclusion et message de prévention", "Conclusion",
"""Pour conclure. Avant quatre mois : lait seul. Entre quatre et six mois : une fenêtre possible, selon les signes de maturité de l'enfant et l'avis du médecin. À partir de six mois : des aliments adaptés, tout en continuant le lait. Ne retardez pas inutilement, et ne précipitez rien. Le plus important, c'est de répondre aux signaux de faim et de satiété de votre bébé, et de vous appuyer sur un professionnel de santé. Cette vidéo est éducative et ne remplace pas une consultation. Abonnez-vous, et dites-nous en commentaire quel sujet médical vous voulez voir expliqué. À bientôt sur MedEssentiel.""",
"Récapitulatif en trois colonnes : < 4 mois / 4–6 mois / ≥ 6 mois ; logo.",
"Les trois colonnes se remplissent ; le logo MedEssentiel se reforme ; écran final avec abonnement et sources.",
"« < 4 mois : lait seul » · « 4–6 mois : selon maturité + avis médical » · « ≥ 6 mois : aliments + lait »",
"Fondu au logo."),
]
t = 0.0
rows = []
full = []
for i, (title, tag, narr, vis, anim, kw, tr) in enumerate(scenes, 1):
    words = len(narr.split())
    dur = words / WPS
    rows.append((i, title, tag, t, t + dur, words, narr, vis, anim, kw, tr))
    full.append(narr)
    t += dur
total = t
tc = lambda s: f"{int(s//60)}:{int(s%60):02d}"
open('script.txt', 'w', encoding='utf-8').write('\n\n'.join(full) + '\n')
nw = sum(r[5] for r in rows)
print('mots', nw, 'durée estimée', tc(total))
out = []
for i, title, tag, a, b, w, narr, vis, anim, kw, tr in rows:
    out.append(f"### Séquence {i:02d} — {title}  ·  {tc(a)} → {tc(b)}  ({w} mots, ≈ {round(b-a)} s)\n\n**Narration intégrale :**\n> {narr}\n\n- **Images / illustrations à afficher :** {vis}\n- **Animations anatomiques / graphiques :** {anim}\n- **Mots-clés à l'écran :** {kw}\n- **Transition :** {tr}\n")
open('_scenes.md', 'w', encoding='utf-8').write('\n'.join(out))
open('_meta.txt', 'w').write(f"{nw}|{tc(total)}")
