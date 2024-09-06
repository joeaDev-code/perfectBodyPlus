import IMG_EQUIPEMENT_1 from '../images/tapisCourse.jpg';
import IMG_EQUIPEMENT_2 from '../images/equipement2.jpg';
import IMG_EQUIPEMENT_3 from '../images/equipement3.jpg';
import IMG_EQUIPEMENT_4 from '../images/equipement4.jpg';
import IMG_EQUIPEMENT_5 from '../images/equipement5.jpg';
// import IMG2 from '../images/haltères.jpg';
// import IMG3 from '../images/véloStationnaire.jpg';
// import IMG4 from '../images/machineMusculation.jpg';
// import IMG5 from '../images/ballonExercice.jpg';


import IMG_ARTICLE_1 from '../images/imgArticle_1.jpg'
import IMG_ARTICLE_2 from '../images/imgArticle_2.jpg';
import IMG_ARTICLE_3 from '../images/imgArticle_3.jpg';
import IMG_ARTICLE_4 from '../images/imgArticle_4.jpg';
import IMG_ARTICLE_5 from '../images/imgArticle_5.jpg';
import IMG_ARTICLE_6 from '../images/imgArticle_6.jpg';
import IMG_ARTICLE_7 from '../images/imgArticle_7.jpg';
import IMG_ARTICLE_8 from '../images/imgArticle_8.jpg';
import IMG_ARTICLE_9 from '../images/imgArticle_9.jpg';
import IMG_ARTICLE_10 from '../images/imgArticle_3.jpg';

export const equipement = [
    {
        id: 1,
        Image: IMG_EQUIPEMENT_1,
        Title: 'Tapis de Course',
        Description: "Le tapis de course est un équipement de cardio indispensable qui permet aux utilisateurs de courir ou de marcher à l'intérieur, quelles que soient les conditions météorologiques. Il aide à améliorer la condition cardiovasculaire, à brûler des calories et à renforcer les muscles des jambes. Sa capacité à ajuster la vitesse et l'inclinaison permet aux utilisateurs de personnaliser leur entraînement selon leur niveau de forme physique."
    },
    {
        id: 2,
        Image: IMG_EQUIPEMENT_2,
        Title: 'Haltères',
        Description: "Les haltères sont essentiels pour une large gamme d'exercices de musculation. Ils permettent de travailler différents groupes musculaires, notamment les bras, les épaules et le dos. Les haltères sont polyvalents et peuvent être utilisés pour des exercices de force, d'endurance et de réhabilitation. Ils sont également efficaces pour améliorer la stabilité et la coordination musculaire."
    },
    {
        id: 3,
        Image: IMG_EQUIPEMENT_3,
        Title: 'Vélos Stationnaires',
        Description: "Les vélos stationnaires sont parfaits pour les entraînements cardiovasculaires à faible impact, ce qui en fait une excellente option pour les personnes ayant des problèmes articulaires ou des blessures. Ils aident à améliorer l'endurance cardiovasculaire, à renforcer les muscles des jambes et à brûler des calories tout en étant doux pour les articulations."
    },
    {
        id: 4,
        Image: IMG_EQUIPEMENT_5,
        Title: 'Machines de Musculation',
        Description: "Les machines de musculation ciblées permettent de travailler des groupes musculaires spécifiques avec une forme correcte et une sécurité accrues. Elles sont idéales pour les débutants et ceux qui souhaitent se concentrer sur des exercices précis comme le développé couché, les extensions de jambes et les tirages dorsaux. Les machines de musculation aident à développer la force et la masse musculaire de manière contrôlée."
    },
    {
        id: 5,
        Image: IMG_EQUIPEMENT_4,
        Title: 'Ballons d’Exercice',
        Description: "Les ballons d’exercice, également connus sous le nom de ballons de stabilité, sont polyvalents et peuvent être utilisés pour divers exercices de renforcement du tronc, de stretching et d'amélioration de la flexibilité. Ils aident à renforcer les muscles du tronc, améliorer l'équilibre et la coordination, et augmenter la difficulté des exercices de base, ce qui en fait un ajout précieux pour les séances d’entraînement fonctionnel."
    }
];

export const services = [
    {
      id: 1,
      title: "Entraînement en Musculation",
      description: "Accès à des équipements modernes pour la musculation, incluant des machines de musculation, des poids libres et des équipements de résistance. Les espaces sont conçus pour permettre un travail complet de tous les groupes musculaires en toute sécurité."
    },
    {
      id: 2,
      title: "Entraînement Cardio",
      description: "Variété d'équipements de cardio, incluant des tapis de course, des vélos d'appartement et des elliptique. Les machines sont modernes et conçues pour améliorer l'endurance et la santé cardiovasculaire."
    },
    {
      id: 3,
      title: "Séances d'Échauffement et de Récupération",
      description: "Espaces dédiés à l'échauffement et à la récupération, avec des équipements comme des rouleaux de massage, des balles de massage et des espaces pour les étirements. Ces pratiques sont essentielles pour prévenir les blessures et optimiser les performances."
    },
    {
      id: 4,
      title: "Coaching Personnel",
      description: "Sessions de coaching personnalisé avec des entraîneurs expérimentés. Les programmes spécifiques et les conseils permettent d’atteindre les objectifs de fitness de manière efficace grâce à un accompagnement sur mesure."
    },
    {
      id: 5,
      title: "Cours Collectifs (Yoga, Pilates, Fitness Intense)",
      description: "Cours collectifs variés comme le yoga, le Pilates et des séances de fitness intense, animés par des instructeurs qualifiés et adaptés à tous les niveaux. Ces cours offrent l'énergie et la motivation d'un groupe pour travailler la flexibilité, la force et l'endurance."
    },
    {
      id: 6,
      title: "Consultations Nutritionnelles",
      description: "Consultations avec des nutritionnistes qualifiés pour recevoir des conseils sur l'alimentation et des plans de repas adaptés aux objectifs de fitness. Ces consultations aident à faire des choix alimentaires sains et équilibrés."
    },
    {
      id: 7,
      title: "Ateliers de Fitness",
      description: "Ateliers éducatifs sur divers aspects du fitness, tels que les techniques d’entraînement, la prévention des blessures et des stratégies pour rester motivé. Ces ateliers enrichissent les connaissances sur le fitness et optimisent les entraînements."
    },
    {
      id: 8,
      title: "Suivi de Progrès",
      description: "Consultations régulières pour évaluer les progrès, ajuster les programmes d'entraînement et rester sur la bonne voie. Le suivi aide à suivre les performances et à rester motivé."
    }
  ];

export const tarif = [
    {
      id: 1,
      name: "Forfait Standard",
      description: "Forfait complet pour utiliser la salle de gym avec équipements de musculation et de cardio.",
      servicesIncluded: [
        "Utilisation de la Salle de Gym",
        "Entraînement en Musculation",
        "Entraînement Cardio"
      ],
      price: "30,000 XOF par mois"
    },
    {
      id: 2,
      name: "Forfait Avancé",
      description: "Forfait complet incluant l'utilisation de la salle de gym avec équipements de musculation, cardio, et accès aux séances d'échauffement et de récupération.",
      servicesIncluded: [
        "Utilisation de la Salle de Gym",
        "Entraînement en Musculation",
        "Entraînement Cardio",
        "Séances d'Échauffement et de Récupération"
      ],
      price: "45,000 XOF par mois"
    },
    {
      id: 3,
      name: "Forfait Premium",
      description: "Forfait complet avec tous les équipements, séances collectives, coaching personnel, consultations nutritionnelles et ateliers.",
      servicesIncluded: [
        "Utilisation de la Salle de Gym",
        "Entraînement en Musculation",
        "Entraînement Cardio",
        "Séances d'Échauffement et de Récupération",
        "Coaching Personnel",
        "Cours Collectifs (Yoga, Pilates, Fitness Intense)",
        "Consultations Nutritionnelles",
        "Ateliers de Fitness",
        "Suivi de Progrès"
      ],
      price: "70,000 XOF par mois"
    }
  ];


export const blogArticles = [{
  id: 1,
  title: "Les Bienfaits de l’Exercice Régulier",
  subtitle: "Découvrez comment l'exercice régulier améliore la santé physique et mentale.",
  image: IMG_ARTICLE_1,
  content: [
    {
      subtitle: "Introduction",
      text: `L'exercice régulier est crucial pour maintenir une bonne santé physique et mentale. Que vous souhaitiez perdre du poids, renforcer votre cœur ou simplement améliorer votre bien-être général, l'activité physique offre une multitude de bénéfices. Découvrez comment intégrer l'exercice dans votre routine quotidienne peut transformer votre vie et vous aider à atteindre vos objectifs de santé.`
    },
    {
      subtitle: "Amélioration de la Santé Cardiovasculaire",
      text: `Faire de l'exercice régulièrement renforce votre cœur et vos poumons. Les activités comme la course, la natation et le vélo augmentent la circulation sanguine, réduisent la pression artérielle et améliorent l'efficacité du système cardiovasculaire. Un cœur en meilleure forme signifie une meilleure oxygénation des tissus et une réduction des risques de maladies cardiaques.`
    },
    {
      subtitle: "Renforcement Musculaire et Flexibilité",
      text: `L'exercice aide à développer la masse musculaire et à améliorer la flexibilité. En intégrant des exercices de résistance comme la musculation ou les poids corporels, vous pouvez augmenter votre force musculaire, améliorer votre posture et réduire les risques de blessures. De plus, les étirements réguliers favorisent une meilleure souplesse et préviennent les douleurs musculaires.`
    },
    {
      subtitle: "Bien-être Mental",
      text: `L'activité physique joue un rôle important dans la gestion du stress et l'amélioration de l'humeur. L'exercice libère des endorphines, des hormones du bien-être, qui peuvent aider à réduire l'anxiété et la dépression. Une routine d'exercice régulière favorise également un meilleur sommeil et une meilleure concentration au quotidien.`
    },
    {
      subtitle: "Conclusion",
      text: `Intégrer l'exercice dans votre routine quotidienne peut transformer votre santé physique et mentale. Que vous choisissiez des séances de cardio, des exercices de renforcement musculaire ou des activités de relaxation, les bénéfices sont nombreux. Faites de l'exercice une priorité et observez les changements positifs dans votre vie.`
    }
  ],
  author: "L'équipe de PerfectBody+",
  date: "2024-08-10"
},
{
  id: 2,
  title: "Comment Établir un Plan d’Entraînement Efficace",
  subtitle: "Créez un plan d'entraînement structuré pour atteindre vos objectifs de fitness.",
  image: IMG_ARTICLE_2,
  content: [
    {
      subtitle: "Introduction",
      text: `Établir un plan d'entraînement efficace est essentiel pour atteindre vos objectifs de fitness. Que vous cherchiez à perdre du poids, à gagner en force ou à améliorer votre endurance, un plan bien structuré peut vous aider à progresser de manière organisée et mesurable. Voici comment créer un plan d'entraînement qui répond à vos besoins et à vos objectifs.`
    },
    {
      subtitle: "Définir des Objectifs Clairs",
      text: `Avant de commencer, il est important de définir des objectifs clairs et réalistes. Souhaitez-vous perdre du poids, augmenter votre force ou améliorer votre endurance ? Fixez des objectifs spécifiques, mesurables, atteignables, pertinents et temporellement définis (SMART) pour guider votre entraînement.`
    },
    {
      subtitle: "Choisir les Bonnes Activités",
      text: `Sélectionnez des activités qui correspondent à vos objectifs et à vos préférences. Pour perdre du poids, intégrez des exercices cardiovasculaires comme la course ou le vélo. Pour augmenter la force, optez pour des exercices de musculation. Variez vos activités pour éviter la monotonie et maintenir votre motivation.`
    },
    {
      subtitle: "Établir une Routine Régulière",
      text: `Planifiez vos séances d'entraînement de manière régulière et cohérente. Créez un emploi du temps qui inclut des jours spécifiques pour chaque type d'exercice. Assurez-vous de respecter votre plan tout en restant flexible pour ajuster en fonction de vos progrès et de votre emploi du temps.`
    },
    {
      subtitle: "Suivre les Progrès",
      text: `Suivez vos progrès pour évaluer l'efficacité de votre plan. Notez vos performances, vos réalisations et les éventuels obstacles rencontrés. Utilisez ces informations pour ajuster votre plan d'entraînement et vous assurer que vous restez sur la bonne voie pour atteindre vos objectifs.`
    },
    {
      subtitle: "Conclusion",
      text: `Un plan d'entraînement bien élaboré est la clé pour atteindre vos objectifs de fitness de manière efficace. En définissant des objectifs clairs, en choisissant les bonnes activités et en établissant une routine régulière, vous pouvez maximiser vos résultats et améliorer votre forme physique. Restez motivé et suivez vos progrès pour ajuster votre plan en fonction de vos besoins.`
    }
  ],
  author: "L'équipe de PerfectBody+",
  date: "2024-08-11"
},
{
  id: 3,
  title: "Les Erreurs Courantes à Éviter Lors de l’Entraînement",
  subtitle: "Évitez les pièges courants pour optimiser vos séances d'entraînement et prévenir les blessures.",
  image: IMG_ARTICLE_3,
  content: [
    {
      subtitle: "Introduction",
      text: `Lors de l'entraînement, il est facile de commettre des erreurs qui peuvent nuire à vos progrès et même entraîner des blessures. Identifier ces erreurs courantes et les éviter peut vous aider à maximiser vos résultats et à vous entraîner en toute sécurité. Découvrez les pièges les plus fréquents et comment les éviter.`
    },
    {
      subtitle: "Ignorer l'Échauffement",
      text: `L'échauffement est une étape cruciale avant de commencer votre entraînement. Il prépare vos muscles et vos articulations à l'effort physique, réduit le risque de blessures et améliore votre performance. Prenez toujours le temps de vous échauffer correctement avant de commencer votre séance d'exercice.`
    },
    {
      subtitle: "Sauter les Étirements",
      text: `Les étirements aident à maintenir la souplesse de vos muscles et à prévenir les douleurs post-entraînement. Ignorer les étirements peut conduire à une raideur musculaire et augmenter le risque de blessures. Assurez-vous d'inclure des étirements dans votre routine d'entraînement, avant et après vos séances.`
    },
    {
      subtitle: "S'entraîner avec une Forme Incorrecte",
      text: `Une mauvaise forme lors des exercices peut non seulement réduire l'efficacité de l'entraînement mais également entraîner des blessures. Veillez à adopter la bonne technique pour chaque exercice et si nécessaire, demandez l'avis d'un professionnel pour corriger votre forme.`
    },
    {
      subtitle: "Ne Pas Respecter les Jours de Repos",
      text: `Les jours de repos sont essentiels pour permettre à vos muscles de récupérer et de se renforcer. Ignorer ces jours peut entraîner de la fatigue, des douleurs et une diminution de vos performances. Planifiez des jours de repos dans votre programme d'entraînement pour optimiser vos résultats.`
    },
    {
      subtitle: "Conclusion",
      text: `Éviter les erreurs courantes lors de l'entraînement peut vous aider à progresser plus rapidement et en toute sécurité. En vous échauffant correctement, en vous étirant, en maintenant une bonne forme et en respectant les jours de repos, vous optimiserez vos résultats et réduirez les risques de blessures.`
    }
  ],
  author: "L'équipe de PerfectBody+",
  date: "2024-08-12"
},
{
  id: 4,
  title: "Les Meilleures Techniques de Relaxation Après l’Entraînement",
  subtitle: "Découvrez comment optimiser votre récupération après une séance d'entraînement intense.",
  image: IMG_ARTICLE_4,
  content: [
    {
      subtitle: "Introduction",
      text: `Après une séance d'entraînement intense, il est important de prendre le temps de se détendre et de récupérer. Les techniques de relaxation aident à réduire la tension musculaire, à améliorer la circulation sanguine et à favoriser une récupération plus rapide. Découvrez les meilleures techniques de relaxation à intégrer dans votre routine post-entraînement.`
    },
    {
      subtitle: "Étirements Profonds",
      text: `Les étirements profonds après l'entraînement aident à détendre les muscles et à améliorer la souplesse. Prenez le temps d'effectuer des étirements ciblés pour chaque groupe musculaire travaillé. Cela aide à réduire la raideur et à prévenir les douleurs musculaires.`
    },
    {
      subtitle: "Utilisation de Rouleaux de Massage",
      text: `Les rouleaux de massage, ou foam rollers, sont des outils efficaces pour relâcher les tensions musculaires et améliorer la circulation sanguine. Utilisez le rouleau sur les zones tendues pour aider à décomposer les points de pression et favoriser une meilleure récupération.`
    },
    {
      subtitle: "Hydratation",
      text: `Maintenir une bonne hydratation est crucial pour la récupération après l'entraînement. L'eau aide à éliminer les toxines produites pendant l'exercice et à restaurer les niveaux d'électrolytes. Assurez-vous de boire suffisamment d'eau après votre séance pour favoriser une récupération optimale.`
    },
    {
      subtitle: "Alimentation Post-Entraînement",
      text: `Consommer un repas équilibré après l'entraînement est important pour restaurer les réserves d'énergie et favoriser la réparation musculaire. Optez pour des aliments riches en protéines, en glucides et en vitamines pour soutenir votre processus de récupération.`
    },
    {
      subtitle: "Conclusion",
      text: `Intégrer des techniques de relaxation après l'entraînement peut améliorer votre récupération et vous aider à vous préparer pour votre prochaine séance. Les étirements, les rouleaux de massage, une bonne hydratation et une alimentation appropriée sont essentiels pour optimiser votre bien-être post-entraînement.`
    }
  ],
  author: "L'équipe de PerfectBody+",
  date: "2024-08-13"
},
{
  id: 5,
  title: "L'Importance du Repos dans un Programme d’Entraînement",
  subtitle: "Comprenez pourquoi le repos est crucial pour optimiser vos performances.",
  image: IMG_ARTICLE_5,
  content: [
    {
      subtitle: "Introduction",
      text: `Le repos est un élément clé d'un programme d'entraînement efficace. Trop souvent, les gens négligent l'importance du repos en se concentrant uniquement sur les séances d'exercice. Cependant, le repos est essentiel pour permettre à votre corps de récupérer et de se renforcer. Découvrez pourquoi le repos est crucial pour optimiser vos performances.`
    },
    {
      subtitle: "Récupération Musculaire",
      text: `Pendant les séances d'entraînement, vos muscles subissent des micro-déchirures. Le repos permet à ces muscles de se réparer et de se renforcer. Sans repos adéquat, vous risquez de développer des blessures ou de vous retrouver avec des performances stagnantes.`
    },
    {
      subtitle: "Prévention de la Fatigue et du Burnout",
      text: `Un manque de repos peut entraîner une fatigue excessive et un risque de burnout. Les symptômes de la fatigue peuvent inclure une diminution de l'énergie, des douleurs musculaires persistantes et une perte de motivation. Le repos aide à prévenir ces problèmes et à maintenir un niveau d'énergie optimal.`
    },
    {
      subtitle: "Optimisation des Performances",
      text: `Le repos permet à votre corps de s'adapter et de progresser. Les périodes de repos bien planifiées permettent à votre corps de récupérer plus efficacement et de répondre mieux aux séances d'entraînement. Cela peut conduire à des améliorations significatives dans vos performances globales.`
    },
    {
      subtitle: "Conclusion",
      text: `Le repos est tout aussi important que l'exercice lui-même dans un programme d'entraînement. En accordant une attention appropriée aux périodes de repos, vous optimisez vos performances, favorisez la récupération musculaire et prévenez les risques de fatigue et de blessures. Assurez-vous d'inclure des jours de repos réguliers dans votre routine pour tirer le meilleur parti de vos efforts d'entraînement.`
    }
  ],
  author: "L'équipe de PerfectBody+",
  date: "2024-08-14"
},
{
  id: 6,
  title: "Les Meilleurs Exercices pour Renforcer les Abdominaux",
  subtitle: "Découvrez les exercices les plus efficaces pour développer une sangle abdominale forte.",
  image: IMG_ARTICLE_6,
  content: [
    {
      subtitle: "Introduction",
      text: `Renforcer vos abdominaux est essentiel pour améliorer votre posture, stabiliser votre tronc et prévenir les blessures. Il existe de nombreux exercices efficaces pour cibler les muscles abdominaux et obtenir des résultats visibles. Découvrez les meilleurs exercices pour développer une sangle abdominale forte et fonctionnelle.`
    },
    {
      subtitle: "Crunchs Classiques",
      text: `Les crunchs classiques sont un exercice fondamental pour travailler les muscles abdominaux. Allongez-vous sur le dos, pliez les genoux et placez vos mains derrière la tête. En utilisant vos muscles abdominaux, soulevez votre tête et vos épaules du sol, puis redescendez lentement.`
    },
    {
      subtitle: "Planche",
      text: `La planche est un excellent exercice pour renforcer les muscles abdominaux ainsi que les muscles du dos et des épaules. Placez-vous en position de pompe, mais avec les avant-bras au sol. Maintenez votre corps en ligne droite, en contractant vos abdominaux et vos fessiers.`
    },
    {
      subtitle: "Relevés de Jambes",
      text: `Les relevés de jambes ciblent les muscles inférieurs de l'abdomen. Allongez-vous sur le dos avec les jambes tendues et soulevez-les lentement jusqu'à ce qu'elles soient perpendiculaires au sol, puis redescendez sans toucher le sol.`
    },
    {
      subtitle: "Russian Twists",
      text: `Les Russian twists travaillent les obliques et renforcent la rotation du tronc. Assis sur le sol avec les genoux pliés et les pieds légèrement surélevés, inclinez légèrement le tronc en arrière. Tournez votre torse de gauche à droite en tenant un poids ou une balle.`
    },
    {
      subtitle: "Conclusion",
      text: `Incorporer ces exercices dans votre routine peut aider à renforcer efficacement vos muscles abdominaux. Combinez-les avec une alimentation équilibrée et un entraînement complet pour obtenir les meilleurs résultats et améliorer votre forme physique générale.`
    }
  ],
  author: "L'équipe de PerfectBody+",
  date: "2024-08-15"
},
{
  id: 7,
  title: "Comment Choisir le Bon Équipement pour Votre Entraînement",
  subtitle: "Conseils pour sélectionner l'équipement adapté à vos besoins de fitness.",
  image: IMG_ARTICLE_7,
  content: [
    {
      subtitle: "Introduction",
      text: `Choisir le bon équipement pour votre entraînement est crucial pour optimiser vos séances et atteindre vos objectifs de fitness. Que vous vous entraîniez à la maison ou en salle, disposer du bon matériel peut améliorer votre expérience et vos résultats. Voici quelques conseils pour sélectionner l'équipement adapté à vos besoins.`
    },
    {
      subtitle: "Définir Vos Objectifs",
      text: `Avant d'acheter de l'équipement, déterminez vos objectifs de fitness. Si vous cherchez à développer votre force, vous aurez besoin de poids et de machines de musculation. Pour le cardio, un tapis roulant ou un vélo stationnaire pourrait être plus approprié.`
    },
    {
      subtitle: "Évaluer l'Espace Disponible",
      text: `Considérez l'espace dont vous disposez pour l'équipement. Si vous avez une petite salle ou un espace limité, optez pour des équipements compacts ou multifonctions. Les équipements pliables peuvent également être une bonne option pour économiser de l'espace.`
    },
    {
      subtitle: "Vérifier la Qualité et la Durabilité",
      text: `Investir dans du matériel de qualité garantit sa durabilité et son efficacité. Recherchez des marques réputées et lisez les avis des utilisateurs avant de faire un achat. Assurez-vous que l'équipement est solide, stable et adapté à votre niveau d'entraînement.`
    },
    {
      subtitle: "Considérer le Budget",
      text: `Le budget est un facteur important à prendre en compte. Bien que l'équipement de haute qualité puisse être coûteux, il est souvent plus durable et efficace. Comparez les options en fonction de votre budget et privilégiez les équipements offrant le meilleur rapport qualité-prix.`
    },
    {
      subtitle: "Conclusion",
      text: `Choisir le bon équipement pour votre entraînement peut améliorer votre expérience et vous aider à atteindre vos objectifs plus rapidement. En définissant vos objectifs, en évaluant l'espace disponible, en vérifiant la qualité et en considérant le budget, vous pouvez sélectionner l'équipement adapté à vos besoins de fitness.`
    }
  ],
  author: "L'équipe de PerfectBody+",
  date: "2024-08-16"
},
{
  id: 8,
  title: "Les Avantages du Yoga pour les Sportifs",
  subtitle: "Comment le yoga peut compléter votre routine d'entraînement et améliorer vos performances.",
  image: IMG_ARTICLE_8,
  content: [
    {
      subtitle: "Introduction",
      text: `Le yoga est une pratique ancienne qui peut offrir de nombreux avantages aux sportifs. En complément de votre routine d'entraînement, le yoga peut améliorer la flexibilité, la force et la concentration. Découvrez comment le yoga peut optimiser vos performances et favoriser une meilleure récupération.`
    },
    {
      subtitle: "Amélioration de la Flexibilité",
      text: `Le yoga aide à augmenter la flexibilité des muscles et des articulations, ce qui est essentiel pour les sportifs. Une meilleure flexibilité peut améliorer la performance et réduire les risques de blessures en permettant une plus grande amplitude de mouvement.`
    },
    {
      subtitle: "Renforcement du Tronc",
      text: `Les postures de yoga renforcent les muscles du tronc, essentiels pour la stabilité et l'équilibre. Un tronc solide améliore la posture et la technique dans d'autres sports, réduisant ainsi le risque de blessures.`
    },
    {
      subtitle: "Réduction du Stress",
      text: `Le yoga incorpore des techniques de respiration et de relaxation qui aident à réduire le stress et l'anxiété. Une meilleure gestion du stress peut améliorer votre concentration et votre performance globale, tout en favorisant une récupération plus rapide.`
    },
    {
      subtitle: "Amélioration de la Concentration",
      text: `Les séances de yoga favorisent la concentration mentale en combinant mouvements et respiration. Cette amélioration de la concentration peut se traduire par de meilleures performances dans vos autres activités sportives.`
    },
    {
      subtitle: "Conclusion",
      text: `Intégrer le yoga dans votre routine d'entraînement peut apporter des bénéfices significatifs en termes de flexibilité, de renforcement du tronc, de gestion du stress et de concentration. Découvrez comment le yoga peut compléter votre programme de fitness et améliorer vos performances globales.`
    }
  ],
  author: "L'équipe de PerfectBody+",
  date: "2024-08-17"
},
{
  id: 9,
  title: "Les Avantages de la Nutrition Équilibrée pour les Athlètes",
  subtitle: "Optimisez vos performances sportives grâce à une alimentation équilibrée.",
  image: IMG_ARTICLE_9,
  content: [
    {
      subtitle: "Introduction",
      text: `Une nutrition équilibrée est essentielle pour les athlètes qui cherchent à optimiser leurs performances et leur récupération. Les nutriments que vous consommez peuvent influencer votre énergie, votre endurance et votre capacité à récupérer après l'exercice. Découvrez les avantages d'une alimentation équilibrée pour les athlètes et comment elle peut améliorer vos résultats.`
    },
    {
      subtitle: "Augmentation de l'Énergie",
      text: `Une alimentation équilibrée fournit les nutriments nécessaires pour maintenir des niveaux d'énergie optimaux. Les glucides, les protéines et les graisses saines jouent un rôle crucial dans le soutien des niveaux d'énergie pendant l'entraînement et les compétitions.`
    },
    {
      subtitle: "Amélioration de l'Endurance",
      text: `Les nutriments adéquats aident à améliorer l'endurance et la performance physique. Les protéines sont essentielles pour la réparation musculaire, tandis que les glucides fournissent l'énergie nécessaire pour les exercices prolongés.`
    },
    {
      subtitle: "Récupération Optimisée",
      text: `Une bonne nutrition favorise une récupération rapide et efficace après l'exercice. Les vitamines, les minéraux et les protéines contribuent à la réparation des tissus et à la réduction de l'inflammation, accélérant ainsi le processus de récupération.`
    },
    {
      subtitle: "Prévention des Blessures",
      text: `Les nutriments jouent également un rôle dans la prévention des blessures. Une alimentation équilibrée aide à maintenir des os solides et des articulations en bonne santé, réduisant ainsi le risque de blessures liées à l'exercice.`
    },
    {
      subtitle: "Conclusion",
      text: `Adopter une nutrition équilibrée est essentiel pour optimiser vos performances sportives et améliorer votre récupération. En fournissant à votre corps les nutriments nécessaires, vous pouvez soutenir vos efforts d'entraînement et maximiser vos résultats.`
    }
  ],
  author: "L'équipe de PerfectBody+",
  date: "2024-08-18"
},
{
  id: 10,
  title: "Les Meilleures Pratiques pour Rester Motivé",
  subtitle: "Découvrez des stratégies efficaces pour maintenir votre motivation tout au long de votre parcours de fitness.",
  image: IMG_ARTICLE_10,
  content: [
    {
      subtitle: "Introduction",
      text: `Maintenir la motivation peut être un défi dans votre parcours de fitness. Les obstacles et la monotonie peuvent parfois entraîner une perte d'intérêt. Découvrez des stratégies efficaces pour rester motivé et continuer à progresser vers vos objectifs de fitness.`
    },
    {
      subtitle: "Fixer des Objectifs Réalistes",
      text: `Définir des objectifs réalistes et atteignables est essentiel pour maintenir la motivation. Divisez vos objectifs à long terme en étapes plus petites et célébrez chaque réalisation. Des objectifs clairs et mesurables vous aident à rester concentré et motivé.`
    },
    {
      subtitle: "Varier les Activités",
      text: `Changer régulièrement vos activités et vos routines d'entraînement peut aider à prévenir l'ennui et à maintenir votre intérêt. Essayez de nouveaux exercices, de nouvelles classes ou même de nouveaux sports pour garder votre routine fraîche et excitante.`
    },
    {
      subtitle: "Trouver un Partenaire d’Entraînement",
      text: `S'entraîner avec un partenaire peut rendre les séances d'entraînement plus agréables et motivantes. Un partenaire d'entraînement peut offrir du soutien, de la responsabilité et un peu de compétition amicale pour vous aider à rester sur la bonne voie.`
    },
    {
      subtitle: "Suivre Vos Progrès",
      text: `Documenter vos progrès est une excellente manière de rester motivé. Tenez un journal de vos séances d'entraînement, prenez des photos de vos progrès ou utilisez des applications de suivi pour voir vos réalisations et ajuster vos objectifs si nécessaire.`
    },
    {
      subtitle: "Conclusion",
      text: `Rester motivé dans votre parcours de fitness nécessite des stratégies efficaces et une attitude positive. En fixant des objectifs réalistes, en variant les activités, en trouvant un partenaire d'entraînement et en suivant vos progrès, vous pouvez maintenir votre motivation et continuer à progresser vers vos objectifs.`
    }
  ],
  author: "L'équipe de PerfectBody+",
  date: "2024-08-19"
}];
  

// Testimonials.js
export const testimony = [
    {
      name: "Sophie D.",
      location: "Abidjan",
      message: "Je suis ravie des services offerts par cette salle de gym. Les équipements sont modernes, et les coachs sont vraiment motivants. J'ai constaté une amélioration significative de ma condition physique en seulement quelques mois. Je recommande vivement !"
    },
    {
      name: "Yves K.",
      location: "Bouaké",
      message: "L'ambiance à la salle est incroyable. Les cours collectifs sont variés et adaptés à tous les niveaux. Les entraîneurs sont professionnels et attentifs. C'est un plaisir de venir ici chaque semaine."
    },
    {
      name: "Aissatou N.",
      location: "Yamoussoukro",
      message: "Le programme de coaching personnel a vraiment fait la différence pour moi. Les conseils et le soutien que j'ai reçus m'ont aidée à atteindre mes objectifs plus rapidement. La salle est propre et bien équipée."
    },
    {
      name: "Jean-Paul T.",
      location: "San Pedro",
      message: "Je suis très satisfait des tarifs et des services proposés. La salle est bien entretenue et les horaires sont flexibles. Le personnel est toujours souriant et prêt à aider. C'est un excellent rapport qualité-prix."
    },
    {
      name: "Fatou B.",
      location: "Daloa",
      message: "Une salle de gym qui dépasse mes attentes. Les séances de groupe sont dynamiques et amusantes, et j'apprécie les options de forfaits disponibles. C'est un excellent endroit pour rester en forme et rencontrer des gens."
    }
  ];

export  const dataProgram = [
    {
      id: 1,
      jour: 'Lundi',
      program: [
        {
          horaire: '6H00 - 7H00',
          activite: 'Course sur tapis',
          description: 'Entraînement cardio sur tapis roulant. Exemples : 10 min de jogging, 5 x 30 sec de sprints, 1 min de récupération.'
        },
        {
          horaire: '8H30 - 10H30',
          activite: 'Exercice de musculation',
          description: 'Renforcement des muscles avec haltères et machines. Exemples : squats avec barre, développé couché, soulevé de terre.'
        },
        {
          horaire: '12H00 - 13H00',
          activite: 'TRX (Entraînement en suspension)',
          description: 'Exercices au poids du corps. Exemples : fentes suspendues, planches TRX, tirages à la corde.'
        },
        {
          horaire: '16H00 - 17H00',
          activite: 'Yoga',
          description: 'Postures et respiration. Exemples : posture du chien tête en bas, guerrier, respiration abdominale.'
        },
        {
          horaire: '18H00 - 19H00',
          activite: 'Cardio intense',
          description: 'HIIT avec burpees, jumping jacks, et vélo stationnaire.'
        }
      ]
    },
    {
      id: 2,
      jour: 'Mardi',
      program: [
        {
          horaire: '7H00 - 8H00',
          activite: 'Pilates',
          description: 'Renforcement des muscles profonds. Exemples : leg circles, the hundred, swan dive.'
        },
        {
          horaire: '9H00 - 10H30',
          activite: 'Boxe cardio',
          description: 'Shadow boxing, frappes sur sac, saut à la corde.'
        },
        {
          horaire: '12H00 - 13H00',
          activite: 'Zumba',
          description: 'Danse cardio. Exemples : salsa, merengue, reggaeton.'
        },
        {
          horaire: '15H00 - 16H00',
          activite: 'Étirements et mobilité',
          description: 'Étirements pour améliorer la souplesse. Exemples : étirements des ischio-jambiers, fentes statiques.'
        },
        {
          horaire: '17H30 - 19H00',
          activite: 'Boxe',
          description: 'Techniques de frappe et de défense. Exemples : crochets, uppercuts, jabs, esquives.'
        }
      ]
    },
    {
      id: 3,
      jour: 'Mercredi',
      program: [
        {
          horaire: '6H30 - 7H30',
          activite: 'Entraînement en circuit',
          description: 'Exercices fonctionnels. Exemples : pompes, burpees, planches, squats, soulevés de terre.'
        },
        {
          horaire: '8H30 - 10H00',
          activite: 'Body Pump',
          description: 'Utilisation de poids légers pour des répétitions rapides. Exemples : développé militaire, squats rapides.'
        },
        {
          horaire: '12H00 - 13H00',
          activite: 'Entraînement au poids du corps',
          description: 'Renforcement sans matériel. Exemples : planches, mountain climbers, squats, fentes.'
        },
        {
          horaire: '15H00 - 16H30',
          activite: 'HIIT',
          description: 'Courts intervalles à haute intensité. Exemples : burpees, box jumps, sprint, pompes explosives.'
        },
        {
          horaire: '18H00 - 19H00',
          activite: 'Stretching',
          description: 'Étirements pour relâcher les tensions. Exemples : étirements du dos, quadriceps, épaules.'
        }
      ]
    },
    {
      id: 4,
      jour: 'Jeudi',
      program: [
        {
          horaire: '7H00 - 8H30',
          activite: 'Spinning',
          description: 'Cours de vélo en salle. Exemples : sprints, côtes simulées, pédalage à haute intensité.'
        },
        {
          horaire: '9H00 - 10H30',
          activite: 'Entraînement fonctionnel',
          description: 'Exercices combinant force et cardio. Exemples : kettlebell swings, sauts sur box, burpees.'
        },
        {
          horaire: '12H00 - 13H00',
          activite: 'Circuit Training',
          description: 'Enchaînement d’exercices. Exemples : squats, planches, pompes, jumping jacks.'
        },
        {
          horaire: '15H00 - 16H30',
          activite: 'TRX avancé',
          description: 'Renforcement avec TRX. Exemples : tirages, squats suspendus, planches avec TRX.'
        },
        {
          horaire: '17H00 - 18H00',
          activite: 'Danse africaine',
          description: 'Mouvements traditionnels africains. Exemples : danses énergétiques, mouvements de hanches et jambes.'
        }
      ]
    },
    {
      id: 5,
      jour: 'Vendredi',
      program: [
        {
          horaire: '6H00 - 7H00',
          activite: 'Course en plein air',
          description: 'Jogging en extérieur. Exemples : intervalles de vitesse, jogging continu.'
        },
        {
          horaire: '8H00 - 9H00',
          activite: 'Renforcement musculaire',
          description: 'Exercices pour sculpter les muscles. Exemples : squats, fentes, gainage, curls biceps.'
        },
        {
          horaire: '12H30 - 13H30',
          activite: 'CrossFit',
          description: 'Haltérophilie, gymnastique, cardio. Exemples : deadlifts, kipping pull-ups, box jumps.'
        },
        {
          horaire: '16H00 - 17H00',
          activite: 'Body Combat',
          description: 'Mouvements inspirés des arts martiaux. Exemples : coups de pied, frappes de boxe, enchaînements de coups.'
        },
        {
          horaire: '18H00 - 19H00',
          activite: 'Étirements et relaxation',
          description: 'Étirements doux. Exemples : étirements des jambes, du dos, relaxation guidée.'
        }
      ]
    },
    {
      id: 6,
      jour: 'Samedi',
      program: [
        {
          horaire: '9H00 - 10H30',
          activite: 'Bootcamp en extérieur',
          description: 'Course, force et agilité en plein air. Exemples : sprint, burpees, pompes, sauts.'
        },
        {
          horaire: '11H00 - 12H00',
          activite: 'Aquagym',
          description: 'Exercices dans l’eau. Exemples : marche dans l’eau, battements de jambes, abdominaux dans l’eau.'
        },
        {
          horaire: '13H00 - 14H00',
          activite: 'Renforcement abdos-fessiers',
          description: 'Exercices ciblés sur les abdominaux et les fessiers. Exemples : crunchs, squats, levées de jambes.'
        },
        {
          horaire: '15H00 - 16H00',
          activite: 'TRX et poids du corps',
          description: 'Renforcement avec TRX et poids du corps. Exemples : planches, pompes TRX, fentes.'
        },
        {
          horaire: '17H00 - 18H00',
          activite: 'Relaxation et stretching',
          description: 'Étirements doux pour détendre le corps. Exemples : étirements des jambes, épaules, dos.'
        }
      ]
    },
    {
      id: 7,
      jour: 'Dimanche',
      program: [
        {
          horaire: '8H00 - 9H00',
          activite: 'Marche nordique',
          description: 'Marche rapide avec bâtons. Exemples : marche continue, variations de vitesse.'
        },
        {
          horaire: '10H00 - 11H00',
          activite: 'Renforcement musculaire global',
          description: 'Renforcement de tout le corps. Exemples : squats, fentes, pompes, planches.'
        },
        {
          horaire: '12H00 - 13H00',
          activite: 'Stretching dynamique',
          description: 'Étirements en mouvement. Exemples : balancements de jambes, fentes dynamiques, rotations des bras.'
        },
        {
          horaire: '15H00 - 16H00',
          activite: 'Cardio dance',
          description: 'Danses rythmées pour brûler des calories. Exemples : chorégraphies simples, mouvements rapides.'
        },
        {
          horaire: '17H00 - 18H00',
          activite: 'Yoga détente',
          description: 'Postures de yoga relaxantes. Exemples : posture de l’enfant, étirements du dos et des jambes.'
        }
      ]
    }
  ];
  
  
  
  
  
