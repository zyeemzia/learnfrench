/* Learn French, Unit 4: Grammar Made Easy. Copyright © ZyeemZia */
window.LC = window.LC || { course: null, alphabet: null, units: [] };
LC.units.push({
 "id": "grammar",
 "order": 4,
 "icon": "le",
 "color": "indigo",
 "title": "Grammar Made Easy",
 "subtitle": "The patterns behind French, explained simply",
 "lessons": [
  {
   "id": "u4-gender",
   "icon": "le",
   "title": "Nouns & Gender",
   "subtitle": "Masculine, feminine and plural nouns",
   "minutes": 13,
   "goals": [
    "Know that every noun is masculine or feminine",
    "Spot typical masculine and feminine endings",
    "Make nouns plural"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "In French, every noun has a gender: **masculine** or **feminine**. Even tables and chairs! It isn't about meaning: it's simply part of the word. So learn each noun **with its article**."
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "le livre",
       "tr": "luh LEEVR",
       "mean": "the book (masculine)"
      },
      {
       "t": "la table",
       "tr": "lah TAHBL",
       "mean": "the table (feminine)"
      },
      {
       "t": "le soleil",
       "tr": "luh soh-LEY",
       "mean": "the sun (masculine)"
      },
      {
       "t": "la lune",
       "tr": "lah LEWN",
       "mean": "the moon (feminine)"
      },
      {
       "t": "le problème",
       "tr": "luh proh-BLEM",
       "mean": "the problem (masculine!)"
      },
      {
       "t": "la voiture",
       "tr": "lah vwah-TEWR",
       "mean": "the car (feminine)"
      }
     ],
     "title": "Every noun has a gender"
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "Learn {{une table}}, not just {{table}}. The article is the word's gender label: {{le / un}} = masculine, {{la / une}} = feminine."
    },
    {
     "type": "table",
     "head": [
      "Usually masculine",
      "Example",
      "Usually feminine",
      "Example"
     ],
     "rows": [
      [
       "-ment",
       "{{le moment}}",
       "-tion / -sion",
       "{{la nation}}"
      ],
      [
       "-age",
       "{{le fromage}}",
       "-té",
       "{{la liberté}}"
      ],
      [
       "-eau",
       "{{le bateau}}",
       "-ette",
       "{{la baguette}}"
      ],
      [
       "-isme",
       "{{le tourisme}}",
       "-ure",
       "{{la voiture}}"
      ],
      [
       "-er / -ier",
       "{{le cahier}}",
       "-ance / -ence",
       "{{la chance}}"
      ]
     ],
     "title": "Endings that give a clue"
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "These are strong hints, not laws. {{la plage}} (beach), {{la page}} and {{l'eau}} (water) are feminine; {{le silence}} and {{l'été}} (summer) are masculine."
    },
    {
     "type": "vocab",
     "items": [
      {
       "t": "un ami / une amie",
       "tr": "an-nah-MEE / ew-nah-MEE",
       "mean": "a friend (male / female)"
      },
      {
       "t": "un étudiant / une étudiante",
       "tr": "an-nay-tew-DYAHN / ew-nay-tew-DYAHNT",
       "mean": "a student (male / female)"
      },
      {
       "t": "un acteur / une actrice",
       "tr": "an-nak-TUHR / ew-nak-TREESS",
       "mean": "an actor / an actress"
      },
      {
       "t": "un chanteur / une chanteuse",
       "tr": "an shahn-TUHR / ewn shahn-TUHZ",
       "mean": "a singer (male / female)"
      },
      {
       "t": "un boulanger / une boulangère",
       "tr": "an boo-lahn-ZHAY / ewn boo-lahn-ZHEHR",
       "mean": "a baker (male / female)"
      }
     ],
     "title": "People: gender follows the person"
    },
    {
     "type": "rule",
     "name": "Plurals: add -s",
     "color": "green",
     "desc": "Most nouns add a silent **-s**. You hear the plural in the article: {{le / la}} becomes {{les}}, {{un / une}} becomes {{des}}.",
     "how": "Words in {{-eau}} and most in {{-eu}} add {{-x}}. Most words in {{-al}} change to {{-aux}}.",
     "examples": [
      {
       "t": "un livre, des livres",
       "tr": "an LEEVR, day LEEVR"
      },
      {
       "t": "le gâteau, les gâteaux",
       "tr": "luh gah-TOH, lay gah-TOH"
      },
      {
       "t": "le jeu, les jeux",
       "tr": "luh ZHUH, lay ZHUH"
      },
      {
       "t": "le cheval, les chevaux",
       "tr": "luh shuh-VAL, lay shuh-VOH"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "The final -s and -x are silent: {{livre}} and {{livres}} sound the same. Listen to the article instead: {{le}} ('luh') versus {{les}} ('lay')."
    },
    {
     "type": "sentence",
     "t": "Les gâteaux sont sur la table.",
     "tr": "lay gah-TOH sohn sewr lah TAHBL",
     "mean": "The cakes are on the table.",
     "words": [
      {
       "t": "Les",
       "mean": "the (plural)"
      },
      {
       "t": "gâteaux",
       "mean": "cakes"
      },
      {
       "t": "sont",
       "mean": "are"
      },
      {
       "t": "sur",
       "mean": "on"
      },
      {
       "t": "la",
       "mean": "the (fem.)"
      },
      {
       "t": "table",
       "mean": "table"
      }
     ]
    },
    {
     "type": "practice",
     "text": "Read each noun with its article. Feel the gender!",
     "lines": [
      "le livre, la table",
      "le moment, la nation",
      "le fromage, la liberté",
      "le bateau, les bateaux",
      "un ami, une amie",
      "le cheval, les chevaux"
     ]
    },
    {
     "type": "quiz",
     "title": "Quick quiz",
     "items": [
      {
       "q": "Which noun is most likely feminine?",
       "options": [
        "situation",
        "fromage",
        "moment",
        "bateau"
       ],
       "answer": 0,
       "explain": "Nouns ending in {{-tion}} are feminine."
      },
      {
       "q": "What is the plural of {{le bateau}}?",
       "options": [
        "les bateaus",
        "les bateau",
        "les bateaux",
        "la bateaux"
       ],
       "answer": 2
      },
      {
       "q": "Why learn nouns with {{le}} or {{la}}?",
       "options": [
        "To spell the plural",
        "To know their gender",
        "To make them louder",
        "To show they're plural"
       ],
       "answer": 1
      },
      {
       "q": "Listen. Singular or plural?",
       "say": "les livres",
       "options": [
        "Singular: you hear 'luh'",
        "Plural: you hear 'lay'",
        "You can't tell at all"
       ],
       "answer": 1
      },
      {
       "q": "Which ending usually means a masculine noun?",
       "options": [
        "-tion",
        "-té",
        "-ment",
        "-ure"
       ],
       "answer": 2
      },
      {
       "q": "The feminine of {{un acteur}} is...",
       "options": [
        "une acteure",
        "une actrice",
        "une acteuse",
        "un actrice"
       ],
       "answer": 1
      },
      {
       "q": "Which word is feminine even though it ends in -age?",
       "options": [
        "fromage",
        "voyage",
        "plage",
        "garage"
       ],
       "answer": 2,
       "explain": "{{la plage}} (beach) is a famous exception."
      }
     ]
    }
   ]
  },
  {
   "id": "u4-articles",
   "icon": "un",
   "title": "Articles: the, a, some",
   "subtitle": "le, la, les · un, une, des · du, de la",
   "minutes": 15,
   "goals": [
    "Use le, la, l' and les (the)",
    "Use un, une and des (a, some)",
    "Use du, de la and de l' (some) with food and drink"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "English has 'the', 'a' and 'some'. French has a few more forms, because articles change with **gender** and **number**. Here's the whole set in three small tables."
    },
    {
     "type": "table",
     "head": [
      "",
      "Masculine",
      "Feminine",
      "Plural"
     ],
     "rows": [
      [
       "the",
       "{{le livre}}",
       "{{la table}}",
       "{{les livres}}"
      ],
      [
       "the (before a vowel or silent h)",
       "{{l'ami}}",
       "{{l'eau}}",
       "{{les amis}}"
      ]
     ],
     "title": "The: le, la, l', les"
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "{{le}} and {{la}} shorten to {{l'}} before a vowel or a silent h: {{l'hôtel}}, {{l'école}}. This is called elision, and it makes French flow."
    },
    {
     "type": "table",
     "head": [
      "",
      "Masculine",
      "Feminine",
      "Plural"
     ],
     "rows": [
      [
       "a / some",
       "{{un livre}}",
       "{{une pomme}}",
       "{{des amis}}"
      ],
      [
       "meaning",
       "a book",
       "an apple",
       "(some) friends"
      ]
     ],
     "title": "A / some: un, une, des"
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "English often drops 'some', but French needs {{des}}: {{J'ai des amis}} = I have (some) friends. A French noun almost never stands alone."
    },
    {
     "type": "table",
     "head": [
      "Masculine",
      "Feminine",
      "Before a vowel",
      "Plural"
     ],
     "rows": [
      [
       "{{du pain}}",
       "{{de la confiture}}",
       "{{de l'eau}}",
       "{{des pâtes}}"
      ],
      [
       "some bread",
       "some jam",
       "some water",
       "some pasta"
      ]
     ],
     "title": "Some: du, de la, de l', des"
    },
    {
     "type": "rule",
     "name": "When to use du / de la",
     "color": "blue",
     "desc": "Use {{du, de la, de l'}} for an amount of something you don't count: food, drinks, money, time, courage.",
     "examples": [
      {
       "t": "Je mange du pain.",
       "tr": "zhuh mahnzh dew PAN"
      },
      {
       "t": "Tu veux de la salade ?",
       "tr": "tew vuh duh lah sah-LAHD"
      },
      {
       "t": "Il boit de l'eau.",
       "tr": "eel bwah duh LOH"
      },
      {
       "t": "Elle a du courage.",
       "tr": "el ah dew koo-RAHZH"
      }
     ]
    },
    {
     "type": "compare",
     "items": [
      {
       "t": "J'aime le fromage.",
       "label": "In general: le, la, les",
       "desc": "Use after {{aimer, adorer, détester, préférer}}: cheese as a whole."
      },
      {
       "t": "Je mange du fromage.",
       "label": "An amount: du, de la",
       "desc": "Use when you eat, drink, buy or have **some** of it."
      }
     ]
    },
    {
     "type": "rule",
     "name": "After a negative: de",
     "color": "red",
     "desc": "After {{ne... pas}}, the articles {{un, une, des, du, de la}} all become {{de}} (or {{d'}}).",
     "examples": [
      {
       "t": "Je n'ai pas de chien.",
       "tr": "zhuh neh pah duh SHYAN"
      },
      {
       "t": "Il ne boit pas d'eau.",
       "tr": "eel nuh bwah pah DOH"
      },
      {
       "t": "Nous n'avons pas de pain.",
       "tr": "noo nah-vohn pah duh PAN"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "One exception: with {{être}} the article stays. {{C'est un chat}} becomes {{Ce n'est pas un chat}}."
    },
    {
     "type": "sentence",
     "t": "Je voudrais du pain et de la confiture.",
     "tr": "zhuh voo-dreh dew PAN ay duh lah kohn-fee-TEWR",
     "mean": "I'd like some bread and some jam.",
     "words": [
      {
       "t": "Je",
       "mean": "I"
      },
      {
       "t": "voudrais",
       "mean": "would like"
      },
      {
       "t": "du",
       "mean": "some"
      },
      {
       "t": "pain",
       "mean": "bread"
      },
      {
       "t": "et",
       "mean": "and"
      },
      {
       "t": "de",
       "mean": "some (of)"
      },
      {
       "t": "la",
       "mean": "the"
      },
      {
       "t": "confiture",
       "mean": "jam"
      }
     ],
     "note": "{{de la}} works as one unit: 'some' for a feminine noun."
    },
    {
     "type": "practice",
     "text": "Read aloud and notice each article.",
     "lines": [
      "le pain, la confiture, l'eau, les pâtes",
      "un croissant, une pomme, des fraises",
      "Je mange du fromage.",
      "Tu bois de l'eau ?",
      "Je n'ai pas de voiture."
     ]
    },
    {
     "type": "quiz",
     "title": "Quick quiz",
     "items": [
      {
       "q": "Complete (the school): ___ école",
       "options": [
        "la",
        "le",
        "les",
        "l'"
       ],
       "answer": 3,
       "explain": "{{école}} starts with a vowel, so {{la}} becomes {{l'}}."
      },
      {
       "q": "Complete (some milk): Je bois ___ lait.",
       "options": [
        "de la",
        "du",
        "des"
       ],
       "answer": 1,
       "explain": "{{lait}} is masculine: {{du lait}}."
      },
      {
       "q": "Complete: Je n'ai pas ___ voiture.",
       "options": [
        "une",
        "des",
        "de"
       ],
       "answer": 2,
       "explain": "After {{ne... pas}}, use {{de}}."
      },
      {
       "q": "Complete: J'adore ___ chocolat.",
       "options": [
        "le",
        "du",
        "de"
       ],
       "answer": 0,
       "explain": "After {{adorer}}, use {{le / la / les}}."
      },
      {
       "q": "Listen. What does it mean?",
       "say": "des pommes",
       "options": [
        "an apple",
        "some apples",
        "the apple"
       ],
       "answer": 1
      },
      {
       "q": "Which sentence is correct?",
       "options": [
        "J'ai des amis à Paris.",
        "J'ai amis à Paris.",
        "J'ai de amis à Paris.",
        "J'ai un amis à Paris."
       ],
       "answer": 0
      },
      {
       "q": "What does {{de l'eau}} mean?",
       "options": [
        "the water",
        "water's",
        "some water",
        "a waterfall"
       ],
       "answer": 2
      }
     ]
    }
   ]
  },
  {
   "id": "u4-etre",
   "icon": "est",
   "title": "Être: to be",
   "subtitle": "The most important verb in French",
   "minutes": 12,
   "goals": [
    "Conjugate être in the present",
    "Describe people and say jobs with être",
    "Choose between c'est and il est / elle est"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "{{être}} (to be) is the most important verb in French. It's irregular, so learn it like a little song: {{je suis, tu es, il est...}}"
    },
    {
     "type": "table",
     "head": [
      "Pronoun",
      "être",
      "Say it",
      "Meaning"
     ],
     "rows": [
      [
       "{{je}}",
       "{{suis}}",
       "zhuh SWEE",
       "I am"
      ],
      [
       "{{tu}}",
       "{{es}}",
       "tew EH",
       "you are (friendly)"
      ],
      [
       "{{il / elle / on}}",
       "{{est}}",
       "eel / el / ohn EH",
       "he / she / one is"
      ],
      [
       "{{nous}}",
       "{{sommes}}",
       "noo SOM",
       "we are"
      ],
      [
       "{{vous}}",
       "{{êtes}}",
       "voo-ZET",
       "you are (polite / plural)"
      ],
      [
       "{{ils / elles}}",
       "{{sont}}",
       "eel / el SOHN",
       "they are"
      ]
     ],
     "title": "être (to be): present"
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "{{on}} literally means 'one', but in everyday French it usually means **we**: {{On est en retard !}} = We're late!"
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "{{ils}} = they (all male, or a mixed group). {{elles}} = they (all female). One man in a group of women? It's {{ils}}."
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "Je suis étudiant.",
       "tr": "zhuh swee-zay-tew-DYAHN",
       "mean": "I'm a student.",
       "note": "No 'a' before a job after {{être}}."
      },
      {
       "t": "Tu es fatigué ?",
       "tr": "tew eh fah-tee-GAY",
       "mean": "Are you tired?"
      },
      {
       "t": "Elle est médecin.",
       "tr": "el eh mayd-SAN",
       "mean": "She's a doctor."
      },
      {
       "t": "Nous sommes en France.",
       "tr": "noo som-zahn FRAHNS",
       "mean": "We're in France."
      },
      {
       "t": "Vous êtes très gentil.",
       "tr": "voo-zet treh zhahn-TEE",
       "mean": "You're very kind."
      },
      {
       "t": "Ils sont à la maison.",
       "tr": "eel sohn-tah lah meh-ZOHN",
       "mean": "They're at home."
      }
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "Jobs after {{être}} drop the article: {{Il est professeur}} = 'He is teacher'. Think of the job as a description, like 'He is tall'."
    },
    {
     "type": "compare",
     "items": [
      {
       "t": "C'est...",
       "label": "It's / he's / she's + a noun",
       "desc": "Use with an article or a name: {{C'est un ami.}} {{C'est ma sœur.}} {{C'est Paris.}}"
      },
      {
       "t": "Il est / Elle est...",
       "label": "+ an adjective or a bare job",
       "desc": "{{Il est grand.}} {{Elle est avocate.}}"
      }
     ],
     "title": "C'est or il est?"
    },
    {
     "type": "sentence",
     "t": "Nous sommes contents d'être ici.",
     "tr": "noo som kohn-TAHN DETR ee-SEE",
     "mean": "We're happy to be here.",
     "words": [
      {
       "t": "Nous",
       "mean": "we"
      },
      {
       "t": "sommes",
       "mean": "are"
      },
      {
       "t": "contents",
       "mean": "happy"
      },
      {
       "t": "d'être",
       "mean": "to be"
      },
      {
       "t": "ici",
       "mean": "here"
      }
     ]
    },
    {
     "type": "dialogue",
     "lines": [
      {
       "who": "Teacher",
       "t": "Vous êtes nouveau ?",
       "tr": "voo-zet noo-VOH",
       "mean": "Are you new?"
      },
      {
       "who": "Raj",
       "t": "Oui, je suis Raj. Je suis indien.",
       "tr": "WEE, zhuh swee RAHDJ. zhuh swee-zan-DYAN",
       "mean": "Yes, I'm Raj. I'm Indian."
      },
      {
       "who": "Teacher",
       "t": "Bienvenue ! Les étudiants sont sympas ici.",
       "tr": "byan-vuh-NEW. lay-zay-tew-DYAHN sohn san-PAH ee-SEE",
       "mean": "Welcome! The students are nice here."
      },
      {
       "who": "Raj",
       "t": "C'est super. Vous êtes professeur de maths ?",
       "tr": "seh sew-PEHR. voo-zet proh-feh-suhr duh MAHT",
       "mean": "That's great. Are you the maths teacher?"
      },
      {
       "who": "Teacher",
       "t": "Non, je suis professeur de français !",
       "tr": "NOHN, zhuh swee proh-feh-suhr duh frahn-SEH",
       "mean": "No, I'm the French teacher!"
      }
     ],
     "title": "First day"
    },
    {
     "type": "practice",
     "text": "Chant être three times, faster each time!",
     "lines": [
      "je suis, tu es, il est, elle est, on est",
      "nous sommes, vous êtes, ils sont, elles sont",
      "Je suis content.",
      "C'est mon frère. Il est grand."
     ]
    },
    {
     "type": "quiz",
     "title": "Quick quiz",
     "items": [
      {
       "q": "nous ___ (être)",
       "options": [
        "êtes",
        "sont",
        "est",
        "sommes"
       ],
       "answer": 3
      },
      {
       "q": "vous ___ (être)",
       "options": [
        "es",
        "êtes",
        "sommes",
        "sont"
       ],
       "answer": 1
      },
      {
       "q": "Listen. Who is tired?",
       "say": "Ils sont fatigués.",
       "options": [
        "They are.",
        "We are.",
        "You are.",
        "He is."
       ],
       "answer": 0
      },
      {
       "q": "How do you say 'She's a doctor'?",
       "options": [
        "Elle est un médecin.",
        "C'est médecin.",
        "Elle a médecin.",
        "Elle est médecin."
       ],
       "answer": 3,
       "explain": "No article before a job after {{il est / elle est}}."
      },
      {
       "q": "Complete: ___ un bon livre.",
       "options": [
        "Il est",
        "C'est",
        "Elle est"
       ],
       "answer": 1,
       "explain": "Before an article + noun, use {{c'est}}."
      },
      {
       "q": "What does {{On est prêts !}} usually mean?",
       "options": [
        "One is ready.",
        "They're ready!",
        "We're ready!",
        "You're ready!"
       ],
       "answer": 2
      },
      {
       "q": "je ___ (être)",
       "options": [
        "es",
        "est",
        "sommes",
        "suis"
       ],
       "answer": 3
      }
     ]
    }
   ]
  },
  {
   "id": "u4-avoir",
   "icon": "ai",
   "title": "Avoir: to have",
   "subtitle": "Having things, and saying how you feel",
   "minutes": 13,
   "goals": [
    "Conjugate avoir in the present",
    "Use avoir for age, hunger, thirst and more",
    "Hear the difference between ils sont and ils ont"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "{{avoir}} (to have) is the second key verb. French also uses it where English uses 'to be': for age, hunger, thirst, fear and more."
    },
    {
     "type": "table",
     "head": [
      "Pronoun",
      "avoir",
      "Say it",
      "Meaning"
     ],
     "rows": [
      [
       "{{j'}}",
       "{{ai}}",
       "zhay",
       "I have"
      ],
      [
       "{{tu}}",
       "{{as}}",
       "tew AH",
       "you have"
      ],
      [
       "{{il / elle / on}}",
       "{{a}}",
       "eel / el / ohn AH",
       "he / she / one has"
      ],
      [
       "{{nous}}",
       "{{avons}}",
       "noo-zah-VOHN",
       "we have"
      ],
      [
       "{{vous}}",
       "{{avez}}",
       "voo-zah-VAY",
       "you have"
      ],
      [
       "{{ils / elles}}",
       "{{ont}}",
       "eel-ZOHN / el-ZOHN",
       "they have"
      ]
     ],
     "title": "avoir (to have): present"
    },
    {
     "type": "compare",
     "items": [
      {
       "t": "ils sont",
       "label": "they are: S sound",
       "desc": "'eel SOHN', a hissing S."
      },
      {
       "t": "ils ont",
       "label": "they have: Z sound",
       "desc": "'eel ZOHN', the S of {{ils}} links with a buzzing Z."
      }
     ],
     "title": "Listen carefully"
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "J'ai deux sœurs.",
       "tr": "zhay duh SUHR",
       "mean": "I have two sisters."
      },
      {
       "t": "Tu as un stylo ?",
       "tr": "tew ah an stee-LOH",
       "mean": "Do you have a pen?"
      },
      {
       "t": "Nous avons un chien.",
       "tr": "noo-zah-vohn an SHYAN",
       "mean": "We have a dog."
      },
      {
       "t": "Elles ont dix-huit ans.",
       "tr": "el-zohn dee-zwee-TAHN",
       "mean": "They're eighteen."
      }
     ]
    },
    {
     "type": "rule",
     "name": "Avoir where English says 'to be'",
     "color": "orange",
     "desc": "French says 'I **have** hunger', not 'I am hungry'. Learn these as fixed phrases.",
     "examples": [
      {
       "t": "J'ai faim.",
       "tr": "zhay FAN"
      },
      {
       "t": "J'ai froid.",
       "tr": "zhay FRWAH"
      }
     ]
    },
    {
     "type": "vocab",
     "items": [
      {
       "t": "avoir faim",
       "tr": "ah-vwahr FAN",
       "mean": "to be hungry",
       "example": {
        "t": "J'ai faim !",
        "tr": "zhay FAN",
        "mean": "I'm hungry!"
       }
      },
      {
       "t": "avoir soif",
       "tr": "ah-vwahr SWAHF",
       "mean": "to be thirsty"
      },
      {
       "t": "avoir chaud",
       "tr": "ah-vwahr SHOH",
       "mean": "to be hot / warm"
      },
      {
       "t": "avoir froid",
       "tr": "ah-vwahr FRWAH",
       "mean": "to be cold"
      },
      {
       "t": "avoir peur (de)",
       "tr": "ah-vwahr PUHR",
       "mean": "to be afraid (of)",
       "example": {
        "t": "Il a peur des chiens.",
        "tr": "eel ah puhr day SHYAN",
        "mean": "He's afraid of dogs."
       }
      },
      {
       "t": "avoir sommeil",
       "tr": "ah-vwahr soh-MEY",
       "mean": "to be sleepy"
      },
      {
       "t": "avoir raison",
       "tr": "ah-vwahr reh-ZOHN",
       "mean": "to be right"
      },
      {
       "t": "avoir tort",
       "tr": "ah-vwahr TOR",
       "mean": "to be wrong"
      },
      {
       "t": "avoir besoin de",
       "tr": "ah-vwahr buh-ZWAN duh",
       "mean": "to need",
       "example": {
        "t": "J'ai besoin d'aide.",
        "tr": "zhay buh-zwan DED",
        "mean": "I need help."
       }
      },
      {
       "t": "avoir ... ans",
       "tr": "ah-vwahr ... AHN",
       "mean": "to be ... years old"
      }
     ],
     "title": "Avoir expressions"
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "For temperature, never say {{Je suis chaud}}: it sounds like slang for 'I'm all fired up!'. Say {{J'ai chaud}}."
    },
    {
     "type": "sentence",
     "t": "J'ai très faim et un peu froid.",
     "tr": "zhay treh FAN ay an puh FRWAH",
     "mean": "I'm very hungry and a bit cold.",
     "words": [
      {
       "t": "J'ai",
       "mean": "I have"
      },
      {
       "t": "très",
       "mean": "very"
      },
      {
       "t": "faim",
       "mean": "hunger"
      },
      {
       "t": "et",
       "mean": "and"
      },
      {
       "t": "un",
       "mean": "a"
      },
      {
       "t": "peu",
       "mean": "little"
      },
      {
       "t": "froid",
       "mean": "cold"
      }
     ]
    },
    {
     "type": "dialogue",
     "lines": [
      {
       "who": "Lucas",
       "t": "Tu as faim ?",
       "tr": "tew ah FAN",
       "mean": "Are you hungry?"
      },
      {
       "who": "Chloé",
       "t": "Oui, j'ai très faim ! Et j'ai soif aussi.",
       "tr": "WEE, zhay treh FAN. ay zhay swahf oh-SEE",
       "mean": "Yes, I'm starving! And I'm thirsty too."
      },
      {
       "who": "Lucas",
       "t": "On a des sandwichs dans le sac, non ?",
       "tr": "ohn-nah day sahnd-WEETSH dahn luh SAK, NOHN",
       "mean": "We've got sandwiches in the bag, haven't we?"
      },
      {
       "who": "Chloé",
       "t": "Ah oui, tu as raison !",
       "tr": "ah WEE, tew ah reh-ZOHN",
       "mean": "Oh yes, you're right!"
      },
      {
       "who": "Lucas",
       "t": "Tu as froid ? Tu veux ma veste ?",
       "tr": "tew ah FRWAH? tew vuh mah VEST",
       "mean": "Are you cold? Do you want my jacket?"
      },
      {
       "who": "Chloé",
       "t": "Non merci, j'ai chaud maintenant !",
       "tr": "nohn mehr-SEE, zhay shoh mant-NAHN",
       "mean": "No thanks, I'm warm now!"
      }
     ],
     "title": "A picnic"
    },
    {
     "type": "practice",
     "text": "Say each line aloud with feeling!",
     "lines": [
      "j'ai, tu as, il a, elle a, on a",
      "nous avons, vous avez, ils ont, elles ont",
      "J'ai faim !",
      "Tu as raison.",
      "Nous avons froid.",
      "Ils ont peur."
     ]
    },
    {
     "type": "quiz",
     "title": "Quick quiz",
     "items": [
      {
       "q": "nous ___ (avoir)",
       "options": [
        "avez",
        "avons",
        "ont",
        "sommes"
       ],
       "answer": 1
      },
      {
       "q": "How do you say 'I'm cold'?",
       "options": [
        "Je suis froid.",
        "J'ai chaud.",
        "J'ai froid.",
        "Je froid."
       ],
       "answer": 2
      },
      {
       "q": "Listen. What does it mean?",
       "say": "Ils ont faim.",
       "options": [
        "They're thirsty.",
        "They're hungry.",
        "They're famous.",
        "We're hungry."
       ],
       "answer": 1
      },
      {
       "q": "What does {{avoir besoin de}} mean?",
       "options": [
        "to be busy",
        "to be afraid of",
        "to need",
        "to be sleepy"
       ],
       "answer": 2
      },
      {
       "q": "Listen. Which verb is it?",
       "say": "Elles ont vingt ans.",
       "options": [
        "avoir (they have)",
        "être (they are)",
        "aller (they go)"
       ],
       "answer": 0,
       "explain": "You hear a Z sound: {{elles ont}}."
      },
      {
       "q": "What does {{Tu as tort}} mean?",
       "options": [
        "You're wrong.",
        "You're right.",
        "You're tired.",
        "You're late."
       ],
       "answer": 0
      },
      {
       "q": "Complete: j'___ (avoir)",
       "options": [
        "ai",
        "as",
        "a",
        "es"
       ],
       "answer": 0
      }
     ]
    }
   ]
  },
  {
   "id": "u4-er-verbs",
   "icon": "-er",
   "title": "Regular -er Verbs",
   "subtitle": "One pattern, hundreds of verbs",
   "minutes": 15,
   "goals": [
    "Recognise -er verbs",
    "Conjugate them in the present",
    "Know which endings are silent"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Most French verbs end in **-er**, and almost all of them follow one pattern. Learn it once and you can use hundreds of verbs: {{parler}} (to speak), {{aimer}} (to like), {{habiter}} (to live)..."
    },
    {
     "type": "steps",
     "items": [
      {
       "title": "Start with the infinitive",
       "t": "parler",
       "tr": "par-LAY",
       "mean": "to speak"
      },
      {
       "title": "Remove -er to find the stem",
       "t": "parl-",
       "desc": "This part never changes."
      },
      {
       "title": "Add the ending for the person",
       "t": "je parle",
       "tr": "zhuh PARL",
       "mean": "I speak"
      }
     ],
     "title": "How to conjugate"
    },
    {
     "type": "table",
     "head": [
      "Pronoun",
      "Ending",
      "parler",
      "Say it"
     ],
     "rows": [
      [
       "{{je}}",
       "-e",
       "{{je parle}}",
       "zhuh PARL"
      ],
      [
       "{{tu}}",
       "-es",
       "{{tu parles}}",
       "tew PARL"
      ],
      [
       "{{il / elle / on}}",
       "-e",
       "{{il parle}}",
       "eel PARL"
      ],
      [
       "{{nous}}",
       "-ons",
       "{{nous parlons}}",
       "noo par-LOHN"
      ],
      [
       "{{vous}}",
       "-ez",
       "{{vous parlez}}",
       "voo par-LAY"
      ],
      [
       "{{ils / elles}}",
       "-ent",
       "{{ils parlent}}",
       "eel PARL"
      ]
     ],
     "title": "parler (to speak)"
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "Four forms, one sound: {{je parle, tu parles, il parle, ils parlent}} all sound like 'parl'. Only {{nous}} (-ons) and {{vous}} (-ez) sound different."
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "The {{-ent}} of {{ils parlent}} is **silent**. Never say 'parl-ENT'!"
    },
    {
     "type": "vocab",
     "items": [
      {
       "t": "parler",
       "tr": "par-LAY",
       "mean": "to speak",
       "example": {
        "t": "Tu parles anglais ?",
        "tr": "tew parl ahn-GLEH",
        "mean": "Do you speak English?"
       }
      },
      {
       "t": "aimer",
       "tr": "eh-MAY",
       "mean": "to like / to love"
      },
      {
       "t": "habiter",
       "tr": "ah-bee-TAY",
       "mean": "to live (somewhere)"
      },
      {
       "t": "travailler",
       "tr": "trah-vah-YAY",
       "mean": "to work"
      },
      {
       "t": "manger",
       "tr": "mahn-ZHAY",
       "mean": "to eat"
      },
      {
       "t": "regarder",
       "tr": "ruh-gar-DAY",
       "mean": "to watch / to look at",
       "example": {
        "t": "Elle regarde un film.",
        "tr": "el ruh-gard an FEELM",
        "mean": "She's watching a film."
       }
      },
      {
       "t": "écouter",
       "tr": "ay-koo-TAY",
       "mean": "to listen (to)"
      },
      {
       "t": "jouer",
       "tr": "zhoo-AY",
       "mean": "to play"
      },
      {
       "t": "chercher",
       "tr": "shehr-SHAY",
       "mean": "to look for"
      },
      {
       "t": "acheter",
       "tr": "ash-TAY",
       "mean": "to buy"
      },
      {
       "t": "étudier",
       "tr": "ay-tew-DYAY",
       "mean": "to study"
      },
      {
       "t": "adorer",
       "tr": "ah-doh-RAY",
       "mean": "to love / to adore"
      }
     ],
     "title": "Useful -er verbs"
    },
    {
     "type": "rule",
     "name": "Before a vowel: j'",
     "color": "gray",
     "desc": "{{je}} becomes {{j'}} before a vowel or a silent h.",
     "examples": [
      {
       "t": "j'aime",
       "tr": "ZHEM"
      },
      {
       "t": "j'habite",
       "tr": "zhah-BEET"
      },
      {
       "t": "j'écoute",
       "tr": "zhay-KOOT"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "Small spelling changes keep the sound right: {{nous mangeons}} keeps an E so the G stays soft, and {{j'achète}} gets an accent. The sound is your guide."
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "One French present = three English ones. {{Je parle}} means 'I speak', 'I'm speaking' and 'I do speak'."
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "Vous aimez le jazz ?",
       "tr": "voo-zeh-may luh DJAZZ",
       "mean": "Do you like jazz?"
      },
      {
       "t": "Ils écoutent de la musique.",
       "tr": "eel-zay-koot duh lah mew-ZEEK",
       "mean": "They're listening to music."
      },
      {
       "t": "Je cherche mes clés.",
       "tr": "zhuh shehrsh may KLAY",
       "mean": "I'm looking for my keys."
      },
      {
       "t": "On joue au tennis ?",
       "tr": "ohn zhoo oh teh-NEESS",
       "mean": "Shall we play tennis?"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "Nous habitons à Lyon et nous travaillons ensemble.",
     "tr": "noo-zah-bee-TOHN ah lee-OHN ay noo trah-vah-YOHN ahn-SAHMBL",
     "mean": "We live in Lyon and we work together.",
     "words": [
      {
       "t": "Nous",
       "mean": "we"
      },
      {
       "t": "habitons",
       "mean": "live"
      },
      {
       "t": "à",
       "mean": "in"
      },
      {
       "t": "Lyon",
       "mean": "Lyon"
      },
      {
       "t": "et",
       "mean": "and"
      },
      {
       "t": "nous",
       "mean": "we"
      },
      {
       "t": "travaillons",
       "mean": "work"
      },
      {
       "t": "ensemble",
       "mean": "together"
      }
     ]
    },
    {
     "type": "dialogue",
     "lines": [
      {
       "who": "Nina",
       "t": "Tu habites où ?",
       "tr": "tew ah-beet OO",
       "mean": "Where do you live?"
      },
      {
       "who": "Hugo",
       "t": "J'habite à Marseille. Je travaille dans un restaurant.",
       "tr": "zhah-beet ah mar-SEY. zhuh trah-vahy dahn-zan res-toh-RAHN",
       "mean": "I live in Marseille. I work in a restaurant."
      },
      {
       "who": "Nina",
       "t": "Tu cuisines bien ?",
       "tr": "tew kwee-zeen BYAN",
       "mean": "Are you a good cook?"
      },
      {
       "who": "Hugo",
       "t": "Oui ! Et le soir, je joue de la guitare.",
       "tr": "WEE. ay luh SWAHR, zhuh zhoo duh lah gee-TAR",
       "mean": "Yes! And in the evening, I play the guitar."
      },
      {
       "who": "Nina",
       "t": "Génial ! Nous adorons la musique aussi.",
       "tr": "zhay-NYAL. noo-zah-doh-rohn lah mew-ZEEK oh-SEE",
       "mean": "Great! We love music too."
      }
     ]
    },
    {
     "type": "practice",
     "text": "Conjugate aloud, then read the sentences.",
     "lines": [
      "je parle, tu parles, il parle",
      "nous parlons, vous parlez, ils parlent",
      "J'aime le cinéma.",
      "Nous regardons la télé.",
      "Vous travaillez où ?",
      "Elles écoutent la radio."
     ]
    },
    {
     "type": "quiz",
     "title": "Quick quiz",
     "items": [
      {
       "q": "tu ___ (parler)",
       "options": [
        "parle",
        "parlez",
        "parles",
        "parlons"
       ],
       "answer": 2
      },
      {
       "q": "nous ___ (aimer)",
       "options": [
        "aimez",
        "aimons",
        "aiment",
        "aimes"
       ],
       "answer": 1
      },
      {
       "q": "Listen to the verb. How is the ending -ent said?",
       "say": "Ils regardent la télé.",
       "options": [
        "It is silent",
        "Like English 'ant'",
        "Like the 'on' of nous"
       ],
       "answer": 0
      },
      {
       "q": "Which two forms sound exactly the same?",
       "options": [
        "nous parlons and vous parlez",
        "je parle and ils parlent",
        "tu parles and vous parlez"
       ],
       "answer": 1
      },
      {
       "q": "How do you say 'I'm listening to music'?",
       "options": [
        "Je suis écoute la musique.",
        "Je écoute de la musique.",
        "J'écoute de la musique.",
        "J'écoutons la musique."
       ],
       "answer": 2
      },
      {
       "q": "vous ___ (habiter)",
       "options": [
        "habitons",
        "habitent",
        "habitez",
        "habites"
       ],
       "answer": 2
      },
      {
       "q": "{{Elle travaille}} can mean...",
       "options": [
        "she works / she's working",
        "only: she worked",
        "only: she will work"
       ],
       "answer": 0
      }
     ]
    }
   ]
  },
  {
   "id": "u4-negation",
   "icon": "pas",
   "title": "Saying No: ne… pas",
   "subtitle": "Negative sentences, never, nothing, nobody",
   "minutes": 13,
   "goals": [
    "Make sentences negative with ne… pas",
    "Use n' before a vowel",
    "Use jamais, plus, rien and personne"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "To make a sentence negative, French wraps the verb in two little words: {{ne}} before it and {{pas}} after it. Think of it as a sandwich, with the verb as the filling."
    },
    {
     "type": "rule",
     "name": "The ne… pas sandwich",
     "color": "red",
     "desc": "{{ne}} + verb + {{pas}}.",
     "how": "{{ne}} becomes {{n'}} before a vowel or a silent h.",
     "examples": [
      {
       "t": "Je ne parle pas allemand.",
       "tr": "zhuh nuh parl pah-zahl-MAHN"
      },
      {
       "t": "Il n'aime pas le café.",
       "tr": "eel nem pah luh kah-FAY"
      },
      {
       "t": "Nous ne sommes pas fatigués.",
       "tr": "noo nuh som pah fah-tee-GAY"
      },
      {
       "t": "Tu n'habites pas ici ?",
       "tr": "tew nah-beet pah-zee-SEE"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "Je ne mange pas de viande.",
     "tr": "zhuh nuh mahnzh pah duh VYAHND",
     "mean": "I don't eat meat.",
     "words": [
      {
       "t": "Je",
       "mean": "I"
      },
      {
       "t": "ne",
       "mean": "(not)"
      },
      {
       "t": "mange",
       "mean": "eat"
      },
      {
       "t": "pas",
       "mean": "not"
      },
      {
       "t": "de",
       "mean": "any"
      },
      {
       "t": "viande",
       "mean": "meat"
      }
     ],
     "note": "Remember: after {{pas}}, {{du, de la, des, un, une}} become {{de}}."
    },
    {
     "type": "tip",
     "kind": "culture",
     "text": "In relaxed speech, people often drop the {{ne}}: {{Je sais pas}} (Dunno). Understand it when you hear it, but write the full {{ne... pas}}."
    },
    {
     "type": "table",
     "head": [
      "French",
      "Meaning",
      "Example"
     ],
     "rows": [
      [
       "{{ne... jamais}}",
       "never",
       "{{Je ne mange jamais de viande.}}"
      ],
      [
       "{{ne... plus}}",
       "no longer, not any more",
       "{{Il n'habite plus ici.}}"
      ],
      [
       "{{ne... rien}}",
       "nothing, not anything",
       "{{Je ne vois rien.}}"
      ],
      [
       "{{ne... personne}}",
       "nobody, not anyone",
       "{{Je ne connais personne.}}"
      ]
     ],
     "title": "Other negatives"
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "On its own, {{une personne}} means 'a person'. With {{ne}}, {{personne}} means **nobody**!"
    },
    {
     "type": "rule",
     "name": "Two verbs together",
     "color": "blue",
     "desc": "With two verbs, the sandwich goes around the first (conjugated) one.",
     "examples": [
      {
       "t": "Je ne veux pas partir.",
       "tr": "zhuh nuh vuh pah par-TEER"
      },
      {
       "t": "Elle ne va pas venir.",
       "tr": "el nuh vah pah vuh-NEER"
      }
     ]
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "Non, pas du tout.",
       "tr": "nohn, pah dew TOO",
       "mean": "No, not at all."
      },
      {
       "t": "Non, jamais !",
       "tr": "nohn, zhah-MEH",
       "mean": "No, never!"
      },
      {
       "t": "Moi non plus.",
       "tr": "mwah nohn PLEW",
       "mean": "Me neither."
      },
      {
       "t": "Pas encore.",
       "tr": "pah-zahn-KOR",
       "mean": "Not yet."
      }
     ],
     "title": "Short answers"
    },
    {
     "type": "dialogue",
     "lines": [
      {
       "who": "Max",
       "t": "Tu aimes le foot ?",
       "tr": "tew em luh FOOT",
       "mean": "Do you like football?"
      },
      {
       "who": "Sara",
       "t": "Non, je n'aime pas le sport.",
       "tr": "NOHN, zhuh nem pah luh SPOR",
       "mean": "No, I don't like sport."
      },
      {
       "who": "Max",
       "t": "Tu ne regardes jamais les matchs ?",
       "tr": "tew nuh ruh-gard zhah-meh lay MATSH",
       "mean": "You never watch the matches?"
      },
      {
       "who": "Sara",
       "t": "Jamais ! Je ne comprends rien aux règles.",
       "tr": "zhah-MEH. zhuh nuh kohm-prahn ryan oh REGL",
       "mean": "Never! I don't understand anything about the rules."
      },
      {
       "who": "Max",
       "t": "Moi non plus, en fait !",
       "tr": "mwah nohn PLEW, ahn FET",
       "mean": "Me neither, actually!"
      }
     ]
    },
    {
     "type": "practice",
     "text": "Make each sentence negative aloud, then check with the line below it.",
     "lines": [
      "Je parle chinois.",
      "Je ne parle pas chinois.",
      "Il aime le thé.",
      "Il n'aime pas le thé.",
      "Nous avons une voiture.",
      "Nous n'avons pas de voiture."
     ]
    },
    {
     "type": "quiz",
     "title": "Quick quiz",
     "items": [
      {
       "q": "Make it negative: {{Je parle chinois.}}",
       "options": [
        "Je parle ne pas chinois.",
        "Je ne parle pas chinois.",
        "Je pas parle chinois.",
        "Ne je parle pas chinois."
       ],
       "answer": 1
      },
      {
       "q": "Complete: Il ___ aime pas le thé.",
       "options": [
        "ne",
        "n'",
        "pas",
        "non"
       ],
       "answer": 1,
       "explain": "{{aime}} starts with a vowel, so {{ne}} becomes {{n'}}."
      },
      {
       "q": "What does {{Je ne mange jamais de poisson}} mean?",
       "options": [
        "I don't eat fish any more.",
        "I eat nothing at all.",
        "I never eat fish.",
        "Nobody eats fish."
       ],
       "answer": 2
      },
      {
       "q": "Listen. What does it mean?",
       "say": "Il n'habite plus ici.",
       "options": [
        "He has never lived here.",
        "He doesn't live here any more.",
        "He lives here now.",
        "Nobody lives here."
       ],
       "answer": 1
      },
      {
       "q": "Which sentence is correct?",
       "options": [
        "Je n'ai pas des voiture.",
        "Je n'ai pas de voiture.",
        "Je ne pas ai de voiture.",
        "Je n'ai de pas voiture."
       ],
       "answer": 1
      },
      {
       "q": "What does {{Moi non plus}} mean?",
       "options": [
        "Me too",
        "Me neither",
        "Not any more",
        "No more for me"
       ],
       "answer": 1
      },
      {
       "q": "Make it negative: {{Je veux partir.}}",
       "options": [
        "Je ne veux partir pas.",
        "Je veux partir pas.",
        "Ne je veux partir pas.",
        "Je ne veux pas partir."
       ],
       "answer": 3
      }
     ]
    }
   ]
  },
  {
   "id": "u4-questions",
   "icon": "?",
   "title": "Asking Questions",
   "subtitle": "Three ways to ask, plus who, what, where...",
   "minutes": 15,
   "goals": [
    "Ask yes/no questions in three ways",
    "Use the question words",
    "Ask natural everyday questions"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "French gives you three ways to ask a yes/no question, from relaxed to formal. Start with the easiest: you probably know it already!"
    },
    {
     "type": "steps",
     "items": [
      {
       "title": "1. Raise your voice (relaxed)",
       "t": "Tu parles anglais ?",
       "tr": "tew parl ahn-GLEH?",
       "mean": "Do you speak English?",
       "desc": "Just say the sentence with a rising tone. Very common in speech."
      },
      {
       "title": "2. Add est-ce que (neutral)",
       "t": "Est-ce que tu parles anglais ?",
       "tr": "ess-kuh tew parl ahn-GLEH?",
       "mean": "Do you speak English?",
       "desc": "Put {{est-ce que}} at the front. It works everywhere."
      },
      {
       "title": "3. Swap verb and subject (formal)",
       "t": "Parles-tu anglais ?",
       "tr": "parl-tew ahn-GLEH?",
       "mean": "Do you speak English?",
       "desc": "Join them with a hyphen. Common in writing and polite speech."
      }
     ],
     "title": "Three ways to ask"
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "{{est-ce que}} sounds like 'ESS-kuh'. It literally means 'is it that...?'. Before a vowel it becomes {{est-ce qu'}}: {{Est-ce qu'il vient ?}}"
    },
    {
     "type": "rule",
     "name": "Inversion with il / elle / on",
     "color": "purple",
     "desc": "If the verb ends in a vowel, add {{-t-}} between the verb and {{il, elle, on}} so it sounds smooth.",
     "examples": [
      {
       "t": "Parle-t-il français ?",
       "tr": "parl-teel frahn-SEH"
      },
      {
       "t": "A-t-elle un chien ?",
       "tr": "ah-tel an SHYAN"
      },
      {
       "t": "Va-t-on au cinéma ?",
       "tr": "vah-tohn oh see-nay-MAH"
      }
     ]
    },
    {
     "type": "vocab",
     "items": [
      {
       "t": "qui",
       "tr": "KEE",
       "mean": "who",
       "example": {
        "t": "Qui est-ce ?",
        "tr": "kee ESS",
        "mean": "Who is it?"
       }
      },
      {
       "t": "qu'est-ce que",
       "tr": "KESS-kuh",
       "mean": "what",
       "example": {
        "t": "Qu'est-ce que tu manges ?",
        "tr": "kess-kuh tew MAHNZH",
        "mean": "What are you eating?"
       }
      },
      {
       "t": "quoi",
       "tr": "KWAH",
       "mean": "what (at the end)",
       "example": {
        "t": "Tu manges quoi ?",
        "tr": "tew mahnzh KWAH",
        "mean": "You're eating what?"
       }
      },
      {
       "t": "où",
       "tr": "OO",
       "mean": "where",
       "example": {
        "t": "Où est la gare ?",
        "tr": "oo eh lah GAR",
        "mean": "Where is the station?"
       }
      },
      {
       "t": "quand",
       "tr": "KAHN",
       "mean": "when",
       "example": {
        "t": "Tu pars quand ?",
        "tr": "tew par KAHN",
        "mean": "When are you leaving?"
       }
      },
      {
       "t": "comment",
       "tr": "koh-MAHN",
       "mean": "how",
       "example": {
        "t": "Comment tu t'appelles ?",
        "tr": "koh-mahn tew tah-PEL",
        "mean": "What's your name?"
       }
      },
      {
       "t": "pourquoi",
       "tr": "poor-KWAH",
       "mean": "why",
       "example": {
        "t": "Pourquoi tu ris ?",
        "tr": "poor-kwah tew REE",
        "mean": "Why are you laughing?"
       }
      },
      {
       "t": "combien",
       "tr": "kohm-BYAN",
       "mean": "how much / how many",
       "example": {
        "t": "Combien de frères as-tu ?",
        "tr": "kohm-byan duh frehr ah-TEW",
        "mean": "How many brothers do you have?"
       }
      },
      {
       "t": "quel / quelle",
       "tr": "KEL",
       "mean": "which / what",
       "example": {
        "t": "Quel âge as-tu ?",
        "tr": "kel ahzh ah-TEW",
        "mean": "How old are you?"
       }
      }
     ],
     "title": "Question words"
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "{{pourquoi}} (why) is answered with {{parce que}} (because): {{Pourquoi tu ris ? Parce que c'est drôle !}}"
    },
    {
     "type": "table",
     "head": [
      "Relaxed",
      "Neutral",
      "Formal"
     ],
     "rows": [
      [
       "{{Tu vas où ?}}",
       "{{Où est-ce que tu vas ?}}",
       "{{Où vas-tu ?}}"
      ],
      [
       "{{Il arrive quand ?}}",
       "{{Quand est-ce qu'il arrive ?}}",
       "{{Quand arrive-t-il ?}}"
      ],
      [
       "{{Vous voulez quoi ?}}",
       "{{Qu'est-ce que vous voulez ?}}",
       "{{Que voulez-vous ?}}"
      ]
     ],
     "title": "Same question, three styles"
    },
    {
     "type": "sentence",
     "t": "Qu'est-ce que tu fais ce soir ?",
     "tr": "kess-kuh tew feh suh SWAHR",
     "mean": "What are you doing tonight?",
     "words": [
      {
       "t": "Qu'est-ce",
       "mean": "what is it"
      },
      {
       "t": "que",
       "mean": "that"
      },
      {
       "t": "tu",
       "mean": "you"
      },
      {
       "t": "fais",
       "mean": "do"
      },
      {
       "t": "ce",
       "mean": "this"
      },
      {
       "t": "soir",
       "mean": "evening"
      }
     ]
    },
    {
     "type": "dialogue",
     "lines": [
      {
       "who": "Yasmine",
       "t": "Salut ! Qu'est-ce que tu fais ce week-end ?",
       "tr": "sah-LEW. kess-kuh tew feh suh wee-KEND",
       "mean": "Hi! What are you doing this weekend?"
      },
      {
       "who": "Noah",
       "t": "Je vais à la plage. Tu veux venir ?",
       "tr": "zhuh veh ah lah PLAHZH. tew vuh vuh-NEER",
       "mean": "I'm going to the beach. Do you want to come?"
      },
      {
       "who": "Yasmine",
       "t": "Oui ! Quand est-ce que tu pars ?",
       "tr": "WEE. kahn-tess-kuh tew PAR",
       "mean": "Yes! When are you leaving?"
      },
      {
       "who": "Noah",
       "t": "Samedi matin.",
       "tr": "sahm-dee mah-TAN",
       "mean": "Saturday morning."
      },
      {
       "who": "Yasmine",
       "t": "Et comment on y va ?",
       "tr": "ay koh-mahn ohn-nee VAH",
       "mean": "And how do we get there?"
      },
      {
       "who": "Noah",
       "t": "En train. Ce n'est pas cher !",
       "tr": "ahn TRAN. suh neh pah SHEHR",
       "mean": "By train. It isn't expensive!"
      }
     ]
    },
    {
     "type": "practice",
     "text": "Ask each question aloud. Let your voice go up at the end of yes/no questions.",
     "lines": [
      "Tu parles anglais ?",
      "Est-ce que tu as faim ?",
      "Parlez-vous français ?",
      "Où est la gare ?",
      "Pourquoi tu ris ?",
      "Combien ça coûte ?"
     ]
    },
    {
     "type": "quiz",
     "title": "Quick quiz",
     "items": [
      {
       "q": "Which question is the most formal?",
       "options": [
        "Vous parlez anglais ?",
        "Est-ce que vous parlez anglais ?",
        "Parlez-vous anglais ?"
       ],
       "answer": 2
      },
      {
       "q": "What does {{où}} mean?",
       "options": [
        "where",
        "when",
        "who",
        "why"
       ],
       "answer": 0
      },
      {
       "q": "Listen. What is the question?",
       "say": "Pourquoi tu pars ?",
       "options": [
        "When are you leaving?",
        "Where are you going?",
        "How are you leaving?",
        "Why are you leaving?"
       ],
       "answer": 3
      },
      {
       "q": "Complete (neutral style): ___ tu habites à Paris ?",
       "options": [
        "Est-ce que",
        "Qu'est-ce que",
        "Pourquoi que",
        "Quoi"
       ],
       "answer": 0
      },
      {
       "q": "Turn into an inversion question: {{Il parle français.}}",
       "options": [
        "Parle-il français ?",
        "Parle-t-il français ?",
        "Il parle-t-il français ?",
        "Parle français-il ?"
       ],
       "answer": 1
      },
      {
       "q": "How do you start an answer to {{Pourquoi ?}}",
       "options": [
        "Pour quoi...",
        "Quand...",
        "Parce que...",
        "Comme..."
       ],
       "answer": 2
      },
      {
       "q": "Listen. What is the question?",
       "say": "Combien ça coûte ?",
       "options": [
        "How does it work?",
        "When does it close?",
        "How much does it cost?",
        "What is that thing?"
       ],
       "answer": 2
      }
     ]
    }
   ]
  },
  {
   "id": "u4-adjectives",
   "icon": "bel",
   "title": "Adjectives: Agreement & Placement",
   "subtitle": "Match the noun, and find the right spot",
   "minutes": 15,
   "goals": [
    "Make adjectives agree in gender and number",
    "Put most adjectives after the noun",
    "Know the BAGS adjectives that go before"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "French adjectives are like chameleons: they change to match their noun, masculine or feminine, singular or plural. And most of them come **after** the noun."
    },
    {
     "type": "table",
     "head": [
      "",
      "Singular",
      "Plural"
     ],
     "rows": [
      [
       "Masculine",
       "{{petit}}",
       "{{petits}}"
      ],
      [
       "Feminine",
       "{{petite}}",
       "{{petites}}"
      ]
     ],
     "title": "Agreement: petit (small)"
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "Adding -e often makes the last consonant heard: {{petit}} is 'puh-TEE', {{petite}} is 'puh-TEET'. The plural -s stays silent."
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "Adjectives that already end in -e don't change for feminine: {{un homme calme, une femme calme}}."
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "heureux, heureuse",
       "tr": "uh-RUH, uh-RUHZ",
       "mean": "happy (-eux becomes -euse)"
      },
      {
       "t": "sportif, sportive",
       "tr": "spor-TEEF, spor-TEEV",
       "mean": "sporty (-f becomes -ve)"
      },
      {
       "t": "bon, bonne",
       "tr": "BOHN, BUN",
       "mean": "good (double the N)"
      },
      {
       "t": "gentil, gentille",
       "tr": "zhahn-TEE, zhahn-TEEY",
       "mean": "kind (double the L)"
      },
      {
       "t": "cher, chère",
       "tr": "SHEHR, SHEHR",
       "mean": "dear / expensive (add an accent)"
      },
      {
       "t": "blanc, blanche",
       "tr": "BLAHN, BLAHNSH",
       "mean": "white (fully irregular)"
      }
     ],
     "title": "Special feminine forms"
    },
    {
     "type": "rule",
     "name": "Most adjectives go after the noun",
     "color": "blue",
     "desc": "Colours, nationalities, shapes and most descriptions follow the noun.",
     "examples": [
      {
       "t": "un film français",
       "tr": "an feelm frahn-SEH"
      },
      {
       "t": "une voiture rouge",
       "tr": "ewn vwah-tewr ROOZH"
      },
      {
       "t": "des gens sympas",
       "tr": "day zhahn san-PAH"
      },
      {
       "t": "une idée intéressante",
       "tr": "ew-nee-day an-tay-reh-SAHNT"
      }
     ]
    },
    {
     "type": "rule",
     "name": "BAGS adjectives go before",
     "color": "green",
     "desc": "Short, common adjectives of **B**eauty, **A**ge, **G**oodness and **S**ize come before the noun.",
     "how": "Beauty: {{beau, joli}} · Age: {{jeune, vieux, nouveau}} · Good/bad: {{bon, mauvais}} · Size: {{petit, grand, gros}}",
     "examples": [
      {
       "t": "un beau jardin",
       "tr": "an boh zhar-DAN"
      },
      {
       "t": "une jolie maison",
       "tr": "ewn zhoh-lee meh-ZOHN"
      },
      {
       "t": "un vieux livre",
       "tr": "an vyuh LEEVR"
      },
      {
       "t": "une bonne idée",
       "tr": "ewn bun-nee-DAY"
      },
      {
       "t": "un petit chat",
       "tr": "an puh-tee SHAH"
      },
      {
       "t": "un grand appartement",
       "tr": "an grahn-tah-par-tuh-MAHN"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "BAGS = **B**eauty, **A**ge, **G**ood or bad, **S**ize. If the adjective fits in a BAG, it goes before the noun!"
    },
    {
     "type": "table",
     "head": [
      "Masculine",
      "Masculine before a vowel",
      "Feminine"
     ],
     "rows": [
      [
       "{{beau}}",
       "{{bel}}: {{un bel homme}}",
       "{{belle}}"
      ],
      [
       "{{nouveau}}",
       "{{nouvel}}: {{un nouvel ami}}",
       "{{nouvelle}}"
      ],
      [
       "{{vieux}}",
       "{{vieil}}: {{un vieil ami}}",
       "{{vieille}}"
      ]
     ],
     "title": "Three special adjectives"
    },
    {
     "type": "sentence",
     "t": "J'ai une petite voiture rouge.",
     "tr": "zhay ewn puh-teet vwah-tewr ROOZH",
     "mean": "I have a small red car.",
     "words": [
      {
       "t": "J'ai",
       "mean": "I have"
      },
      {
       "t": "une",
       "mean": "a"
      },
      {
       "t": "petite",
       "mean": "small"
      },
      {
       "t": "voiture",
       "mean": "car"
      },
      {
       "t": "rouge",
       "mean": "red"
      }
     ],
     "note": "{{petite}} (size) goes before the noun, {{rouge}} (colour) goes after."
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "Il est grand et sportif.",
       "tr": "eel eh grahn ay spor-TEEF",
       "mean": "He's tall and sporty."
      },
      {
       "t": "Elle est intelligente et drôle.",
       "tr": "el eh-tan-teh-lee-ZHAHNT ay DROHL",
       "mean": "She's clever and funny."
      },
      {
       "t": "Mes amis sont sympas.",
       "tr": "may-zah-mee sohn san-PAH",
       "mean": "My friends are nice."
      },
      {
       "t": "Ma grand-mère est petite mais très active.",
       "tr": "mah grahn-mehr eh puh-TEET meh treh-zak-TEEV",
       "mean": "My grandmother is small but very active."
      }
     ],
     "title": "Describing people"
    },
    {
     "type": "practice",
     "text": "Read aloud and listen for the feminine endings.",
     "lines": [
      "un garçon grand, une fille grande",
      "un chat noir, une chemise noire",
      "un homme heureux, une femme heureuse",
      "un beau jardin, une belle maison",
      "un vieil ami, une vieille amie"
     ]
    },
    {
     "type": "quiz",
     "title": "Quick quiz",
     "items": [
      {
       "q": "Complete: une maison ___ (blanc)",
       "options": [
        "blanche",
        "blanc",
        "blance",
        "blanches"
       ],
       "answer": 0
      },
      {
       "q": "How do you say 'an interesting book'?",
       "options": [
        "un livre intéressant",
        "un intéressant livre",
        "intéressant un livre"
       ],
       "answer": 0
      },
      {
       "q": "Which adjective goes BEFORE the noun?",
       "options": [
        "rouge",
        "française",
        "jolie",
        "intéressante"
       ],
       "answer": 2,
       "explain": "{{joli}} is a Beauty adjective: BAGS."
      },
      {
       "q": "Listen. What does it mean?",
       "say": "une bonne idée",
       "options": [
        "a good idea",
        "a nice house",
        "a new idea",
        "a bad idea"
       ],
       "answer": 0
      },
      {
       "q": "Complete (old): un ___ ami",
       "options": [
        "vieux",
        "vieille",
        "vieil"
       ],
       "answer": 2,
       "explain": "Before a masculine noun starting with a vowel, {{vieux}} becomes {{vieil}}."
      },
      {
       "q": "Complete (happy): Elles sont ___.",
       "options": [
        "heureuses",
        "heureux",
        "heureuse",
        "heureuxes"
       ],
       "answer": 0
      },
      {
       "q": "How do you say 'a big red car'?",
       "options": [
        "une grande voiture rouge",
        "une voiture grande rouge",
        "une rouge grande voiture",
        "un grand voiture rouge"
       ],
       "answer": 0
      }
     ]
    }
   ]
  },
  {
   "id": "u4-possessives",
   "icon": "mon",
   "title": "Possessives: my, your, his, her",
   "subtitle": "Match the thing, not the owner",
   "minutes": 13,
   "goals": [
    "Use all the possessive adjectives",
    "Choose the right form for gender and number",
    "Avoid the his/her trap"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "In French, 'my', 'your', 'his' and 'her' agree with the **thing owned**, not with the owner. This one idea makes everything click."
    },
    {
     "type": "table",
     "head": [
      "Owner",
      "Masculine noun",
      "Feminine noun",
      "Plural noun"
     ],
     "rows": [
      [
       "my",
       "{{mon}}",
       "{{ma}}",
       "{{mes}}"
      ],
      [
       "your (tu)",
       "{{ton}}",
       "{{ta}}",
       "{{tes}}"
      ],
      [
       "his / her / its",
       "{{son}}",
       "{{sa}}",
       "{{ses}}"
      ],
      [
       "our",
       "{{notre}}",
       "{{notre}}",
       "{{nos}}"
      ],
      [
       "your (vous)",
       "{{votre}}",
       "{{votre}}",
       "{{vos}}"
      ],
      [
       "their",
       "{{leur}}",
       "{{leur}}",
       "{{leurs}}"
      ]
     ],
     "title": "Possessive adjectives"
    },
    {
     "type": "rule",
     "name": "His or her? Same word!",
     "color": "red",
     "desc": "{{son, sa, ses}} agree with the noun, not the owner. So {{sa mère}} can mean **his** mother or **her** mother.",
     "examples": [
      {
       "t": "Paul aime sa mère.",
       "tr": "pohl em sah MEHR"
      },
      {
       "t": "Julie aime son père.",
       "tr": "zhew-lee em sohn PEHR"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "Look at the thing, not the person. {{voiture}} is feminine, so it's always {{sa voiture}}: his car or her car. The context tells you which."
    },
    {
     "type": "rule",
     "name": "mon, ton, son before a vowel",
     "color": "orange",
     "desc": "Before a feminine noun starting with a vowel or silent h, use {{mon, ton, son}} so the words flow.",
     "examples": [
      {
       "t": "mon amie",
       "tr": "moh-nah-MEE"
      },
      {
       "t": "ton école",
       "tr": "toh-nay-KOL"
      },
      {
       "t": "son histoire",
       "tr": "soh-nees-TWAHR"
      }
     ]
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "Voici notre maison.",
       "tr": "vwah-see noh-truh meh-ZOHN",
       "mean": "Here's our house."
      },
      {
       "t": "Où sont vos clés ?",
       "tr": "oo sohn voh KLAY",
       "mean": "Where are your keys?"
      },
      {
       "t": "Leurs enfants sont gentils.",
       "tr": "luhr-zahn-FAHN sohn zhahn-TEE",
       "mean": "Their children are kind."
      },
      {
       "t": "C'est ton sac ?",
       "tr": "seh tohn SAK",
       "mean": "Is this your bag?"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "French has no apostrophe-s. 'My brother's jumper' is {{le pull de mon frère}}: 'the jumper of my brother'."
    },
    {
     "type": "sentence",
     "t": "Marc cherche ses clés et son téléphone.",
     "tr": "mark shehrsh say KLAY ay sohn tay-lay-FON",
     "mean": "Marc is looking for his keys and his phone.",
     "words": [
      {
       "t": "Marc",
       "mean": "Marc"
      },
      {
       "t": "cherche",
       "mean": "is looking for"
      },
      {
       "t": "ses",
       "mean": "his (plural)"
      },
      {
       "t": "clés",
       "mean": "keys"
      },
      {
       "t": "et",
       "mean": "and"
      },
      {
       "t": "son",
       "mean": "his (masc.)"
      },
      {
       "t": "téléphone",
       "mean": "phone"
      }
     ]
    },
    {
     "type": "dialogue",
     "lines": [
      {
       "who": "Mum",
       "t": "Lina, c'est ton pull ?",
       "tr": "lee-NAH, seh tohn PEWL",
       "mean": "Lina, is this your jumper?"
      },
      {
       "who": "Lina",
       "t": "Non, c'est le pull de mon frère.",
       "tr": "NOHN, seh luh pewl duh mohn FREHR",
       "mean": "No, it's my brother's jumper."
      },
      {
       "who": "Mum",
       "t": "Et ces chaussures ?",
       "tr": "ay say shoh-SEWR",
       "mean": "And these shoes?"
      },
      {
       "who": "Lina",
       "t": "Ce sont ses chaussures aussi !",
       "tr": "suh sohn say shoh-sewr oh-SEE",
       "mean": "They're his shoes too!"
      },
      {
       "who": "Mum",
       "t": "Les enfants, votre chambre est un désastre !",
       "tr": "lay-zahn-FAHN, voh-truh shahmbr eh-tan day-ZASTR",
       "mean": "Kids, your room is a disaster!"
      }
     ],
     "title": "Whose is it?"
    },
    {
     "type": "practice",
     "text": "Read aloud. Point at the thing, not the owner!",
     "lines": [
      "mon frère, ma sœur, mes parents",
      "ton livre, ta clé, tes amis",
      "son chat, sa maison, ses enfants",
      "notre ville, votre voiture, leurs vacances"
     ]
    },
    {
     "type": "quiz",
     "title": "Quick quiz",
     "items": [
      {
       "q": "Complete (my): ___ sœur",
       "options": [
        "mon",
        "mes",
        "ma"
       ],
       "answer": 2
      },
      {
       "q": "{{Il aime sa voiture.}} Whose car is it?",
       "options": [
        "His car",
        "Her car",
        "Your car"
       ],
       "answer": 0,
       "explain": "{{sa}} agrees with {{voiture}} (feminine). The owner is {{il}}, so: his car."
      },
      {
       "q": "Complete (my): ___ amie Léa",
       "options": [
        "mon",
        "ma",
        "m'"
       ],
       "answer": 0,
       "explain": "Before a vowel, use {{mon}} even for a feminine noun."
      },
      {
       "q": "How do you say 'their parents'?",
       "options": [
        "leur parents",
        "ses parents",
        "son parents",
        "leurs parents"
       ],
       "answer": 3
      },
      {
       "q": "Listen. What does it mean?",
       "say": "nos enfants",
       "options": [
        "your children",
        "their children",
        "no children",
        "our children"
       ],
       "answer": 3
      },
      {
       "q": "How do you say 'Anna's book'?",
       "options": [
        "Anna's livre",
        "le livre d'Anna",
        "le Anna livre",
        "livre de l'Anna"
       ],
       "answer": 1
      },
      {
       "q": "Complete (your, polite): Vous avez ___ passeport ?",
       "options": [
        "votre",
        "vos",
        "ton"
       ],
       "answer": 0
      }
     ]
    }
   ]
  },
  {
   "id": "u4-aller",
   "icon": "va",
   "title": "Aller & the Near Future",
   "subtitle": "Going places and talking about plans",
   "minutes": 14,
   "goals": [
    "Conjugate aller",
    "Use au, à la, à l' and aux",
    "Talk about plans with aller + infinitive"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "{{aller}} (to go) is irregular but super useful. Bonus: it also builds the easiest future tense in French, the **futur proche** (near future)."
    },
    {
     "type": "table",
     "head": [
      "Pronoun",
      "aller",
      "Say it",
      "Meaning"
     ],
     "rows": [
      [
       "{{je}}",
       "{{vais}}",
       "zhuh VEH",
       "I go / I'm going"
      ],
      [
       "{{tu}}",
       "{{vas}}",
       "tew VAH",
       "you go"
      ],
      [
       "{{il / elle / on}}",
       "{{va}}",
       "eel / el / ohn VAH",
       "he / she / one goes"
      ],
      [
       "{{nous}}",
       "{{allons}}",
       "noo-zah-LOHN",
       "we go"
      ],
      [
       "{{vous}}",
       "{{allez}}",
       "voo-zah-LAY",
       "you go"
      ],
      [
       "{{ils / elles}}",
       "{{vont}}",
       "eel / el VOHN",
       "they go"
      ]
     ],
     "title": "aller (to go): present"
    },
    {
     "type": "table",
     "head": [
      "à +",
      "becomes",
      "Example"
     ],
     "rows": [
      [
       "{{le}}",
       "{{au}}",
       "{{Je vais au parc.}}"
      ],
      [
       "{{la}}",
       "{{à la}}",
       "{{Je vais à la gare.}}"
      ],
      [
       "{{l'}}",
       "{{à l'}}",
       "{{Je vais à l'hôpital.}}"
      ],
      [
       "{{les}}",
       "{{aux}}",
       "{{Je vais aux magasins.}}"
      ]
     ],
     "title": "Going to: à + the"
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "Never say {{à le}} or {{à les}}: they always merge into {{au}} and {{aux}}."
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "Going to someone's place? Use {{chez}}: {{Je vais chez Marie}} (to Marie's), {{chez le médecin}} (to the doctor's)."
    },
    {
     "type": "rule",
     "name": "The near future: aller + infinitive",
     "color": "green",
     "desc": "Present of {{aller}} + a verb in the infinitive = 'going to do'. It's the everyday way to talk about plans.",
     "examples": [
      {
       "t": "Je vais manger.",
       "tr": "zhuh veh mahn-ZHAY"
      },
      {
       "t": "Tu vas voir !",
       "tr": "tew vah VWAHR"
      },
      {
       "t": "Nous allons voyager en Italie.",
       "tr": "noo-zah-lohn vwah-yah-ZHAY ahn-nee-tah-LEE"
      },
      {
       "t": "Ils vont arriver demain.",
       "tr": "eel vohn-tah-ree-VAY duh-MAN"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "Just like English: 'I'm going to eat' = {{Je vais manger}}. Just don't add a word for 'to'!"
    },
    {
     "type": "rule",
     "name": "Negative: wrap aller",
     "color": "red",
     "desc": "{{ne... pas}} goes around {{aller}}, not around the infinitive.",
     "examples": [
      {
       "t": "Je ne vais pas travailler demain.",
       "tr": "zhuh nuh veh pah trah-vah-YAY duh-MAN"
      },
      {
       "t": "Il ne va pas pleuvoir.",
       "tr": "eel nuh vah pah pluh-VWAHR"
      }
     ]
    },
    {
     "type": "vocab",
     "items": [
      {
       "t": "ce soir",
       "tr": "suh SWAHR",
       "mean": "tonight / this evening"
      },
      {
       "t": "demain",
       "tr": "duh-MAN",
       "mean": "tomorrow"
      },
      {
       "t": "après-demain",
       "tr": "ah-preh-duh-MAN",
       "mean": "the day after tomorrow"
      },
      {
       "t": "ce week-end",
       "tr": "suh wee-KEND",
       "mean": "this weekend"
      },
      {
       "t": "la semaine prochaine",
       "tr": "lah suh-men proh-SHEN",
       "mean": "next week"
      },
      {
       "t": "l'année prochaine",
       "tr": "lah-nay proh-SHEN",
       "mean": "next year"
      },
      {
       "t": "bientôt",
       "tr": "byan-TOH",
       "mean": "soon"
      },
      {
       "t": "plus tard",
       "tr": "plew TAR",
       "mean": "later"
      }
     ],
     "title": "Future time words"
    },
    {
     "type": "sentence",
     "t": "Ce soir, je vais regarder un film.",
     "tr": "suh SWAHR, zhuh veh ruh-gar-DAY an FEELM",
     "mean": "Tonight, I'm going to watch a film.",
     "words": [
      {
       "t": "Ce",
       "mean": "this"
      },
      {
       "t": "soir",
       "mean": "evening"
      },
      {
       "t": "je",
       "mean": "I"
      },
      {
       "t": "vais",
       "mean": "am going"
      },
      {
       "t": "regarder",
       "mean": "to watch"
      },
      {
       "t": "un",
       "mean": "a"
      },
      {
       "t": "film",
       "mean": "film"
      }
     ]
    },
    {
     "type": "dialogue",
     "lines": [
      {
       "who": "Zoé",
       "t": "Qu'est-ce que tu vas faire ce week-end ?",
       "tr": "kess-kuh tew vah fehr suh wee-KEND",
       "mean": "What are you going to do this weekend?"
      },
      {
       "who": "Adam",
       "t": "Je vais aller à la montagne avec mes parents.",
       "tr": "zhuh veh-zah-LAY ah lah mohn-TANY ah-vek may pah-RAHN",
       "mean": "I'm going to go to the mountains with my parents."
      },
      {
       "who": "Zoé",
       "t": "Vous allez faire du ski ?",
       "tr": "voo-zah-lay fehr dew SKEE",
       "mean": "Are you going to ski?"
      },
      {
       "who": "Adam",
       "t": "Non, on va faire de la randonnée. Et toi ?",
       "tr": "NOHN, ohn vah fehr duh lah rahn-doh-NAY. ay TWAH",
       "mean": "No, we're going to go hiking. And you?"
      },
      {
       "who": "Zoé",
       "t": "Moi, je vais rester à la maison et dormir !",
       "tr": "MWAH, zhuh veh res-TAY ah lah meh-ZOHN ay dor-MEER",
       "mean": "Me? I'm going to stay at home and sleep!"
      }
     ],
     "title": "Weekend plans"
    },
    {
     "type": "practice",
     "text": "Say your plans aloud.",
     "lines": [
      "je vais, tu vas, il va, nous allons, vous allez, ils vont",
      "Je vais au cinéma ce soir.",
      "Nous allons à la plage demain.",
      "Elle va étudier ce week-end.",
      "Je ne vais pas sortir."
     ]
    },
    {
     "type": "quiz",
     "title": "Quick quiz",
     "items": [
      {
       "q": "nous ___ (aller)",
       "options": [
        "allez",
        "vont",
        "vais",
        "allons"
       ],
       "answer": 3
      },
      {
       "q": "Complete: Je vais ___ cinéma.",
       "options": [
        "à le",
        "à la",
        "aux",
        "au"
       ],
       "answer": 3,
       "explain": "{{cinéma}} is masculine: {{à + le = au}}."
      },
      {
       "q": "How do you say 'I'm going to eat'?",
       "options": [
        "Je vais à manger.",
        "Je mange aller.",
        "Je vais manger.",
        "Je vais mange."
       ],
       "answer": 2
      },
      {
       "q": "Listen. When will they leave?",
       "say": "Ils vont partir demain.",
       "options": [
        "yesterday",
        "right now",
        "every day",
        "tomorrow"
       ],
       "answer": 3
      },
      {
       "q": "Make it negative: {{Je vais travailler.}}",
       "options": [
        "Je vais travailler pas.",
        "Je ne vais travailler pas.",
        "Je ne vais pas travailler.",
        "Ne je vais pas travailler."
       ],
       "answer": 2
      },
      {
       "q": "Complete: Elle va ___ États-Unis.",
       "options": [
        "au",
        "aux",
        "à les",
        "à la"
       ],
       "answer": 1,
       "explain": "{{les États-Unis}} is plural: {{à + les = aux}}."
      },
      {
       "q": "What does {{la semaine prochaine}} mean?",
       "options": [
        "last week",
        "this week",
        "every week",
        "next week"
       ],
       "answer": 3
      }
     ]
    }
   ]
  },
  {
   "id": "u4-irregular",
   "icon": "fait",
   "title": "Key Irregular Verbs",
   "subtitle": "faire, prendre, vouloir, pouvoir, venir",
   "minutes": 18,
   "goals": [
    "Conjugate faire, prendre, vouloir, pouvoir and venir",
    "Use them in everyday phrases",
    "Spot the patterns they share"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "A handful of irregular verbs turn up in almost every conversation. Learn these five and you can **do**, **take**, **want**, **be able to** and **come**!"
    },
    {
     "type": "table",
     "head": [
      "Pronoun",
      "faire",
      "Say it"
     ],
     "rows": [
      [
       "{{je}}",
       "{{fais}}",
       "zhuh FEH"
      ],
      [
       "{{tu}}",
       "{{fais}}",
       "tew FEH"
      ],
      [
       "{{il / elle / on}}",
       "{{fait}}",
       "eel FEH"
      ],
      [
       "{{nous}}",
       "{{faisons}}",
       "noo fuh-ZOHN"
      ],
      [
       "{{vous}}",
       "{{faites}}",
       "voo FET"
      ],
      [
       "{{ils / elles}}",
       "{{font}}",
       "eel FOHN"
      ]
     ],
     "title": "faire (to do / to make)"
    },
    {
     "type": "vocab",
     "items": [
      {
       "t": "faire les courses",
       "tr": "fehr lay KOORS",
       "mean": "to do the shopping"
      },
      {
       "t": "faire la cuisine",
       "tr": "fehr lah kwee-ZEEN",
       "mean": "to cook"
      },
      {
       "t": "faire du sport",
       "tr": "fehr dew SPOR",
       "mean": "to do sport"
      },
      {
       "t": "faire une promenade",
       "tr": "fehr ewn prom-NAHD",
       "mean": "to go for a walk"
      },
      {
       "t": "Il fait beau.",
       "tr": "eel feh BOH",
       "mean": "The weather's nice."
      },
      {
       "t": "Il fait froid.",
       "tr": "eel feh FRWAH",
       "mean": "It's cold (weather)."
      }
     ],
     "title": "Everyday faire"
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "{{faisons}} is said 'fuh-ZOHN', not 'fay-ZOHN'. And it's {{vous faites}}, never 'vous faisez'!"
    },
    {
     "type": "table",
     "head": [
      "Pronoun",
      "prendre",
      "Say it"
     ],
     "rows": [
      [
       "{{je}}",
       "{{prends}}",
       "zhuh PRAHN"
      ],
      [
       "{{tu}}",
       "{{prends}}",
       "tew PRAHN"
      ],
      [
       "{{il / elle / on}}",
       "{{prend}}",
       "eel PRAHN"
      ],
      [
       "{{nous}}",
       "{{prenons}}",
       "noo pruh-NOHN"
      ],
      [
       "{{vous}}",
       "{{prenez}}",
       "voo pruh-NAY"
      ],
      [
       "{{ils / elles}}",
       "{{prennent}}",
       "eel PREN"
      ]
     ],
     "title": "prendre (to take)"
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "Use {{prendre}} for food, drinks and transport: {{Je prends un café}} (I'll have a coffee), {{Je prends le bus}}. Its cousins follow the same pattern: {{apprendre}} (to learn), {{comprendre}} (to understand)."
    },
    {
     "type": "table",
     "head": [
      "Pronoun",
      "vouloir (to want)",
      "pouvoir (can, to be able to)"
     ],
     "rows": [
      [
       "{{je}}",
       "{{veux}}",
       "{{peux}}"
      ],
      [
       "{{tu}}",
       "{{veux}}",
       "{{peux}}"
      ],
      [
       "{{il / elle / on}}",
       "{{veut}}",
       "{{peut}}"
      ],
      [
       "{{nous}}",
       "{{voulons}}",
       "{{pouvons}}"
      ],
      [
       "{{vous}}",
       "{{voulez}}",
       "{{pouvez}}"
      ],
      [
       "{{ils / elles}}",
       "{{veulent}}",
       "{{peuvent}}"
      ]
     ],
     "title": "Twin verbs: vouloir & pouvoir"
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "Tu veux un café ?",
       "tr": "tew vuh an kah-FAY",
       "mean": "Do you want a coffee?"
      },
      {
       "t": "Je peux entrer ?",
       "tr": "zhuh puh ahn-TRAY",
       "mean": "Can I come in?"
      },
      {
       "t": "Vous pouvez répéter, s'il vous plaît ?",
       "tr": "voo poo-vay ray-pay-TAY, seel voo PLEH",
       "mean": "Could you repeat that, please?"
      },
      {
       "t": "Ils veulent partir.",
       "tr": "eel vuhl par-TEER",
       "mean": "They want to leave."
      }
     ]
    },
    {
     "type": "tip",
     "kind": "culture",
     "text": "{{Je veux}} can sound blunt. Soften it with {{je voudrais}} (I would like) or ask {{Tu pourrais...?}} (Could you...?)."
    },
    {
     "type": "table",
     "head": [
      "Pronoun",
      "venir",
      "Say it"
     ],
     "rows": [
      [
       "{{je}}",
       "{{viens}}",
       "zhuh VYAN"
      ],
      [
       "{{tu}}",
       "{{viens}}",
       "tew VYAN"
      ],
      [
       "{{il / elle / on}}",
       "{{vient}}",
       "eel VYAN"
      ],
      [
       "{{nous}}",
       "{{venons}}",
       "noo vuh-NOHN"
      ],
      [
       "{{vous}}",
       "{{venez}}",
       "voo vuh-NAY"
      ],
      [
       "{{ils / elles}}",
       "{{viennent}}",
       "eel VYEN"
      ]
     ],
     "title": "venir (to come)"
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "Spot the 'boot' pattern in {{prendre, vouloir, pouvoir, venir}}: {{nous}} and {{vous}} keep the short stem from the infinitive ({{pren-, voul-, pouv-, ven-}}), while the other forms change."
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "{{venir de}} + infinitive = 'to have just done': {{Je viens de manger}} = I've just eaten."
    },
    {
     "type": "sentence",
     "t": "Tu veux venir au cinéma avec nous ?",
     "tr": "tew vuh vuh-NEER oh see-nay-MAH ah-vek NOO",
     "mean": "Do you want to come to the cinema with us?",
     "words": [
      {
       "t": "Tu",
       "mean": "you"
      },
      {
       "t": "veux",
       "mean": "want"
      },
      {
       "t": "venir",
       "mean": "to come"
      },
      {
       "t": "au",
       "mean": "to the"
      },
      {
       "t": "cinéma",
       "mean": "cinema"
      },
      {
       "t": "avec",
       "mean": "with"
      },
      {
       "t": "nous",
       "mean": "us"
      }
     ]
    },
    {
     "type": "dialogue",
     "lines": [
      {
       "who": "Ana",
       "t": "Qu'est-ce que tu fais ?",
       "tr": "kess-kuh tew FEH",
       "mean": "What are you doing?"
      },
      {
       "who": "Tom",
       "t": "Je fais mes devoirs.",
       "tr": "zhuh feh may duh-VWAHR",
       "mean": "I'm doing my homework."
      },
      {
       "who": "Ana",
       "t": "On va au parc. Tu veux venir ?",
       "tr": "ohn vah oh PARK. tew vuh vuh-NEER",
       "mean": "We're going to the park. Do you want to come?"
      },
      {
       "who": "Tom",
       "t": "Je ne peux pas, je dois finir.",
       "tr": "zhuh nuh puh PAH, zhuh dwah fee-NEER",
       "mean": "I can't, I have to finish."
      },
      {
       "who": "Ana",
       "t": "Dommage ! Tu viens demain, alors ?",
       "tr": "doh-MAHZH. tew vyan duh-MAN, ah-LOR",
       "mean": "Shame! Will you come tomorrow, then?"
      },
      {
       "who": "Tom",
       "t": "Oui, je prends le bus à dix heures.",
       "tr": "WEE, zhuh prahn luh bewss ah dee-ZUHR",
       "mean": "Yes, I'll take the bus at ten."
      }
     ]
    },
    {
     "type": "practice",
     "text": "Conjugate each verb aloud.",
     "lines": [
      "je fais, tu fais, il fait, nous faisons, vous faites, ils font",
      "je prends, nous prenons, ils prennent",
      "je veux, nous voulons, ils veulent",
      "je peux, nous pouvons, ils peuvent",
      "je viens, nous venons, ils viennent"
     ]
    },
    {
     "type": "quiz",
     "title": "Quick quiz",
     "items": [
      {
       "q": "vous ___ (faire)",
       "options": [
        "faisez",
        "faites",
        "font",
        "faisons"
       ],
       "answer": 1
      },
      {
       "q": "ils ___ (prendre)",
       "options": [
        "prendent",
        "prenent",
        "prennent",
        "prends"
       ],
       "answer": 2
      },
      {
       "q": "Listen. What does it mean?",
       "say": "Je peux entrer ?",
       "options": [
        "Do I want to come in?",
        "Can I come in?",
        "Can you come in?",
        "Must I come in?"
       ],
       "answer": 1
      },
      {
       "q": "How do you say 'The weather is nice'?",
       "options": [
        "Il est beau temps.",
        "C'est beau météo.",
        "Il a beau.",
        "Il fait beau."
       ],
       "answer": 3
      },
      {
       "q": "What does {{Je viens de manger}} mean?",
       "options": [
        "I've just eaten.",
        "I'm about to eat.",
        "I'm coming to eat."
       ],
       "answer": 0
      },
      {
       "q": "nous ___ (vouloir)",
       "options": [
        "veulons",
        "voulez",
        "voulons",
        "veux"
       ],
       "answer": 2
      },
      {
       "q": "Which is the most polite?",
       "options": [
        "Je veux un café, moi.",
        "Donne-moi un café !",
        "Je voudrais un café."
       ],
       "answer": 2
      }
     ]
    }
   ]
  },
  {
   "id": "u4-pronouns",
   "icon": "lui",
   "title": "Pronouns: I, me, him, it",
   "subtitle": "Subject, object and stressed pronouns",
   "minutes": 15,
   "goals": [
    "Know all the subject pronouns",
    "Use direct object pronouns: le, la, les",
    "Use stressed pronouns: moi, toi, lui..."
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Pronouns save you from repeating nouns. You already know the subject pronouns ({{je, tu, il}}...). Now meet the pronouns that replace objects, and find out where they hide in the sentence."
    },
    {
     "type": "table",
     "head": [
      "Subject",
      "Object",
      "Stressed",
      "English"
     ],
     "rows": [
      [
       "{{je}}",
       "{{me (m')}}",
       "{{moi}}",
       "I / me"
      ],
      [
       "{{tu}}",
       "{{te (t')}}",
       "{{toi}}",
       "you"
      ],
      [
       "{{il}}",
       "{{le (l')}}",
       "{{lui}}",
       "he / him / it"
      ],
      [
       "{{elle}}",
       "{{la (l')}}",
       "{{elle}}",
       "she / her / it"
      ],
      [
       "{{nous}}",
       "{{nous}}",
       "{{nous}}",
       "we / us"
      ],
      [
       "{{vous}}",
       "{{vous}}",
       "{{vous}}",
       "you"
      ],
      [
       "{{ils}}",
       "{{les}}",
       "{{eux}}",
       "they / them (m)"
      ],
      [
       "{{elles}}",
       "{{les}}",
       "{{elles}}",
       "they / them (f)"
      ]
     ],
     "title": "Three kinds of pronoun"
    },
    {
     "type": "rule",
     "name": "Object pronouns go BEFORE the verb",
     "color": "purple",
     "desc": "Unlike English, the object pronoun comes before the verb. {{le}} and {{la}} become {{l'}} before a vowel.",
     "examples": [
      {
       "t": "Je le regarde.",
       "tr": "zhuh luh ruh-GARD"
      },
      {
       "t": "Tu la connais ?",
       "tr": "tew lah koh-NEH"
      },
      {
       "t": "Il les aime.",
       "tr": "eel lay-ZEM"
      }
     ]
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "Je le regarde.",
       "tr": "zhuh luh ruh-GARD",
       "mean": "I'm watching it.",
       "note": "{{le}} = {{le film}}, from {{Je regarde le film.}}"
      },
      {
       "t": "Tu la connais ?",
       "tr": "tew lah koh-NEH",
       "mean": "Do you know her?",
       "note": "{{la}} = {{Marie}}, from {{Tu connais Marie ?}}"
      },
      {
       "t": "Il les aime.",
       "tr": "eel lay-ZEM",
       "mean": "He likes them.",
       "note": "{{les}} = {{les chats}}, from {{Il aime les chats.}}"
      },
      {
       "t": "Elle m'appelle ce soir.",
       "tr": "el mah-pel suh SWAHR",
       "mean": "She's calling me tonight."
      },
      {
       "t": "Je t'aime.",
       "tr": "zhuh TEM",
       "mean": "I love you."
      }
     ],
     "title": "From noun to pronoun"
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "Think of a magnet: the object pronoun sticks to the **front** of the verb. {{Je t'aime}} is literally 'I you love'."
    },
    {
     "type": "rule",
     "name": "With ne... pas and with two verbs",
     "color": "blue",
     "desc": "Negative: {{ne}} + pronoun + verb + {{pas}}. With two verbs, the pronoun goes before the infinitive.",
     "examples": [
      {
       "t": "Je ne le vois pas.",
       "tr": "zhuh nuh luh vwah PAH"
      },
      {
       "t": "Je vais le faire.",
       "tr": "zhuh veh luh FEHR"
      },
      {
       "t": "Tu peux m'aider ?",
       "tr": "tew puh meh-DAY"
      }
     ]
    },
    {
     "type": "rule",
     "name": "Stressed pronouns",
     "color": "green",
     "desc": "Use {{moi, toi, lui, elle, nous, vous, eux, elles}} after a preposition, for emphasis, and on their own.",
     "examples": [
      {
       "t": "Moi, je suis prof.",
       "tr": "MWAH, zhuh swee PROF"
      },
      {
       "t": "C'est pour toi.",
       "tr": "seh poor TWAH"
      },
      {
       "t": "Il vient avec nous.",
       "tr": "eel vyan ah-vek NOO"
      },
      {
       "t": "Et lui ?",
       "tr": "ay LWEE"
      },
      {
       "t": "Chez eux.",
       "tr": "sheh ZUH"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "{{Moi aussi}} = Me too. {{Moi non plus}} = Me neither. {{C'est moi !}} = It's me!"
    },
    {
     "type": "sentence",
     "t": "Ce livre, je le lis ce soir.",
     "tr": "suh LEEVR, zhuh luh lee suh SWAHR",
     "mean": "That book? I'm reading it tonight.",
     "words": [
      {
       "t": "Ce",
       "mean": "this"
      },
      {
       "t": "livre",
       "mean": "book"
      },
      {
       "t": "je",
       "mean": "I"
      },
      {
       "t": "le",
       "mean": "it"
      },
      {
       "t": "lis",
       "mean": "read"
      },
      {
       "t": "ce",
       "mean": "this"
      },
      {
       "t": "soir",
       "mean": "evening"
      }
     ]
    },
    {
     "type": "dialogue",
     "lines": [
      {
       "who": "Paul",
       "t": "Tu connais Léa ?",
       "tr": "tew koh-neh lay-AH",
       "mean": "Do you know Léa?"
      },
      {
       "who": "Nora",
       "t": "Oui, je la connais bien.",
       "tr": "WEE, zhuh lah koh-neh BYAN",
       "mean": "Yes, I know her well."
      },
      {
       "who": "Paul",
       "t": "Tu peux l'inviter à ma fête ?",
       "tr": "tew puh lan-vee-TAY ah mah FET",
       "mean": "Can you invite her to my party?"
      },
      {
       "who": "Nora",
       "t": "D'accord. Et ses frères ?",
       "tr": "dah-KOR. ay say FREHR",
       "mean": "OK. And her brothers?"
      },
      {
       "who": "Paul",
       "t": "Non, je ne les invite pas. Ils sont pénibles !",
       "tr": "NOHN, zhuh nuh lay-zan-veet PAH. eel sohn pay-NEEBL",
       "mean": "No, I'm not inviting them. They're annoying!"
      },
      {
       "who": "Nora",
       "t": "D'accord, pas eux !",
       "tr": "dah-KOR, pah-ZUH",
       "mean": "OK, not them!"
      }
     ],
     "title": "Party plans"
    },
    {
     "type": "practice",
     "text": "Replace the noun with a pronoun aloud, then check the second line.",
     "lines": [
      "Je mange la pomme.",
      "Je la mange.",
      "Tu regardes le match ?",
      "Tu le regardes ?",
      "Elle aime ses amis.",
      "Elle les aime."
     ]
    },
    {
     "type": "quiz",
     "title": "Quick quiz",
     "items": [
      {
       "q": "Replace the noun: Je mange la pomme. → Je ___ mange.",
       "options": [
        "le",
        "lui",
        "la",
        "les"
       ],
       "answer": 2
      },
      {
       "q": "How do you say 'I see him'?",
       "options": [
        "Je le vois.",
        "Je vois le.",
        "Je vois lui.",
        "Le je vois."
       ],
       "answer": 0,
       "explain": "The object pronoun goes before the verb."
      },
      {
       "q": "Listen. What does it mean?",
       "say": "Je t'aime.",
       "options": [
        "I love you.",
        "I like it.",
        "I'm calling you.",
        "You love me."
       ],
       "answer": 0
      },
      {
       "q": "Complete (me): C'est pour ___.",
       "options": [
        "me",
        "moi",
        "je",
        "m'"
       ],
       "answer": 1,
       "explain": "After a preposition like {{pour}}, use a stressed pronoun."
      },
      {
       "q": "Replace the noun: {{Il regarde les photos.}}",
       "options": [
        "Il les regarde.",
        "Il regarde les.",
        "Il leur regarde.",
        "Les il regarde."
       ],
       "answer": 0
      },
      {
       "q": "Make it negative: {{Je le vois.}}",
       "options": [
        "Je le ne vois pas.",
        "Je ne le vois pas.",
        "Je ne vois le pas.",
        "Ne je le vois pas."
       ],
       "answer": 1
      },
      {
       "q": "What does {{Moi aussi}} mean?",
       "options": [
        "Me neither",
        "Me too",
        "Not me",
        "Me first"
       ],
       "answer": 1
      }
     ]
    }
   ]
  },
  {
   "id": "u4-passe-avoir",
   "icon": "vu",
   "title": "The Past (1): Passé Composé with Avoir",
   "subtitle": "Say what you did",
   "minutes": 16,
   "goals": [
    "Form the passé composé with avoir",
    "Make past participles of regular verbs",
    "Use common irregular participles"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "To say what you **did**, French uses the **passé composé** (compound past). It has two parts: a helper verb, usually {{avoir}}, plus a past participle. You already know {{avoir}}!"
    },
    {
     "type": "rule",
     "name": "avoir + past participle",
     "color": "green",
     "desc": "Present of {{avoir}} + past participle = 'I did' or 'I have done'.",
     "examples": [
      {
       "t": "J'ai mangé.",
       "tr": "zhay mahn-ZHAY"
      },
      {
       "t": "Tu as fini ?",
       "tr": "tew ah fee-NEE"
      },
      {
       "t": "Nous avons vendu la voiture.",
       "tr": "noo-zah-vohn vahn-DEW lah vwah-TEWR"
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Infinitive ends in",
      "Participle ends in",
      "Example"
     ],
     "rows": [
      [
       "-er",
       "-é",
       "{{parler}} → {{parlé}}"
      ],
      [
       "-ir",
       "-i",
       "{{finir}} → {{fini}}"
      ],
      [
       "-re",
       "-u",
       "{{vendre}} → {{vendu}}"
      ]
     ],
     "title": "Making the past participle"
    },
    {
     "type": "table",
     "head": [
      "French",
      "Say it",
      "English"
     ],
     "rows": [
      [
       "{{j'ai mangé}}",
       "zhay mahn-ZHAY",
       "I ate / I have eaten"
      ],
      [
       "{{tu as mangé}}",
       "tew ah mahn-ZHAY",
       "you ate"
      ],
      [
       "{{il / elle a mangé}}",
       "eel ah mahn-ZHAY",
       "he / she ate"
      ],
      [
       "{{nous avons mangé}}",
       "noo-zah-vohn mahn-ZHAY",
       "we ate"
      ],
      [
       "{{vous avez mangé}}",
       "voo-zah-vay mahn-ZHAY",
       "you ate"
      ],
      [
       "{{ils / elles ont mangé}}",
       "eel-zohn mahn-ZHAY",
       "they ate"
      ]
     ],
     "title": "manger in the passé composé"
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "One French form = two English ones: {{J'ai mangé}} means 'I ate' **and** 'I have eaten'."
    },
    {
     "type": "vocab",
     "items": [
      {
       "t": "j'ai eu",
       "tr": "zhay EW",
       "mean": "I had (avoir)"
      },
      {
       "t": "j'ai été",
       "tr": "zhay ay-TAY",
       "mean": "I was / I have been (être)"
      },
      {
       "t": "j'ai fait",
       "tr": "zhay FEH",
       "mean": "I did / I made (faire)"
      },
      {
       "t": "j'ai pris",
       "tr": "zhay PREE",
       "mean": "I took (prendre)"
      },
      {
       "t": "j'ai vu",
       "tr": "zhay VEW",
       "mean": "I saw (voir)"
      },
      {
       "t": "j'ai bu",
       "tr": "zhay BEW",
       "mean": "I drank (boire)"
      },
      {
       "t": "j'ai lu",
       "tr": "zhay LEW",
       "mean": "I read (lire)"
      },
      {
       "t": "j'ai dit",
       "tr": "zhay DEE",
       "mean": "I said (dire)"
      },
      {
       "t": "j'ai écrit",
       "tr": "zhay ay-KREE",
       "mean": "I wrote (écrire)"
      },
      {
       "t": "j'ai voulu",
       "tr": "zhay voo-LEW",
       "mean": "I wanted (vouloir)"
      },
      {
       "t": "j'ai pu",
       "tr": "zhay PEW",
       "mean": "I was able to (pouvoir)"
      },
      {
       "t": "j'ai mis",
       "tr": "zhay MEE",
       "mean": "I put (mettre)"
      }
     ],
     "title": "Irregular participles"
    },
    {
     "type": "rule",
     "name": "Negative: wrap avoir",
     "color": "red",
     "desc": "{{ne... pas}} goes around {{avoir}} only. The participle stays outside.",
     "examples": [
      {
       "t": "Je n'ai pas mangé.",
       "tr": "zhuh neh pah mahn-ZHAY"
      },
      {
       "t": "Il n'a pas vu le film.",
       "tr": "eel nah pah vew luh FEELM"
      },
      {
       "t": "Nous n'avons rien fait.",
       "tr": "noo nah-vohn ryan FEH"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "Sandwich again: {{ne + ai + pas}}, then the participle sits outside the bread: {{Je n'ai pas fini}}."
    },
    {
     "type": "vocab",
     "items": [
      {
       "t": "hier",
       "tr": "ee-YEHR",
       "mean": "yesterday"
      },
      {
       "t": "hier soir",
       "tr": "ee-yehr SWAHR",
       "mean": "last night"
      },
      {
       "t": "ce matin",
       "tr": "suh mah-TAN",
       "mean": "this morning"
      },
      {
       "t": "la semaine dernière",
       "tr": "lah suh-men dehr-NYEHR",
       "mean": "last week"
      },
      {
       "t": "l'année dernière",
       "tr": "lah-nay dehr-NYEHR",
       "mean": "last year"
      },
      {
       "t": "il y a deux jours",
       "tr": "eel-yah duh ZHOOR",
       "mean": "two days ago"
      },
      {
       "t": "déjà",
       "tr": "day-ZHAH",
       "mean": "already"
      }
     ],
     "title": "Past time words"
    },
    {
     "type": "sentence",
     "t": "Hier soir, j'ai vu un film avec mes amis.",
     "tr": "ee-yehr SWAHR, zhay vew an FEELM ah-vek may-zah-MEE",
     "mean": "Last night, I saw a film with my friends.",
     "words": [
      {
       "t": "Hier",
       "mean": "yesterday"
      },
      {
       "t": "soir",
       "mean": "evening"
      },
      {
       "t": "j'ai",
       "mean": "I have"
      },
      {
       "t": "vu",
       "mean": "seen"
      },
      {
       "t": "un",
       "mean": "a"
      },
      {
       "t": "film",
       "mean": "film"
      },
      {
       "t": "avec",
       "mean": "with"
      },
      {
       "t": "mes",
       "mean": "my"
      },
      {
       "t": "amis",
       "mean": "friends"
      }
     ]
    },
    {
     "type": "dialogue",
     "lines": [
      {
       "who": "Clara",
       "t": "Tu as passé un bon week-end ?",
       "tr": "tew ah pah-SAY an bohn wee-KEND",
       "mean": "Did you have a good weekend?"
      },
      {
       "who": "Omar",
       "t": "Oui ! Samedi, j'ai joué au foot.",
       "tr": "WEE. sahm-DEE, zhay zhoo-AY oh FOOT",
       "mean": "Yes! On Saturday, I played football."
      },
      {
       "who": "Clara",
       "t": "Et dimanche ?",
       "tr": "ay dee-MAHNSH",
       "mean": "And on Sunday?"
      },
      {
       "who": "Omar",
       "t": "J'ai fait un gâteau et j'ai lu un livre.",
       "tr": "zhay feh an gah-TOH ay zhay lew an LEEVR",
       "mean": "I made a cake and I read a book."
      },
      {
       "who": "Clara",
       "t": "Tu as fini le livre ?",
       "tr": "tew ah fee-NEE luh LEEVR",
       "mean": "Did you finish the book?"
      },
      {
       "who": "Omar",
       "t": "Non, pas encore !",
       "tr": "NOHN, pah-zahn-KOR",
       "mean": "No, not yet!"
      }
     ],
     "title": "Monday morning"
    },
    {
     "type": "practice",
     "text": "Tell your last weekend aloud.",
     "lines": [
      "Samedi, j'ai regardé un film.",
      "Dimanche, j'ai fait du sport.",
      "J'ai mangé une pizza.",
      "Je n'ai pas travaillé.",
      "Hier soir, j'ai lu un livre."
     ]
    },
    {
     "type": "quiz",
     "title": "Quick quiz",
     "items": [
      {
       "q": "What is the past participle of {{finir}}?",
       "options": [
        "finé",
        "finu",
        "fini",
        "finit"
       ],
       "answer": 2
      },
      {
       "q": "How do you say 'I ate'?",
       "options": [
        "Je suis mangé.",
        "Je mangé.",
        "J'ai mangé.",
        "J'ai manger."
       ],
       "answer": 2
      },
      {
       "q": "What is the past participle of {{faire}}?",
       "options": [
        "faisé",
        "fait",
        "fairé",
        "fu"
       ],
       "answer": 1
      },
      {
       "q": "Listen. What did they do?",
       "say": "Nous avons vu la mer.",
       "options": [
        "We want the sea.",
        "We saw the sea.",
        "We'll see the sea.",
        "We love the sea."
       ],
       "answer": 1
      },
      {
       "q": "Make it negative: {{J'ai fini.}}",
       "options": [
        "Je n'ai fini pas.",
        "Je n'ai pas fini.",
        "Je ne pas ai fini.",
        "Je ai pas fini."
       ],
       "answer": 1
      },
      {
       "q": "What does {{J'ai pris le train}} mean?",
       "options": [
        "I take the train.",
        "I took the train.",
        "I'm going to take the train.",
        "I missed the train."
       ],
       "answer": 1
      },
      {
       "q": "Complete: Ils ___ bu du thé.",
       "options": [
        "ont",
        "sont",
        "avons",
        "a"
       ],
       "answer": 0
      }
     ]
    }
   ]
  },
  {
   "id": "u4-passe-etre",
   "icon": "né",
   "title": "The Past (2): Passé Composé with Être",
   "subtitle": "Movement verbs and agreement",
   "minutes": 16,
   "goals": [
    "Know which verbs use être",
    "Make the participle agree with the subject",
    "Tell a short story in the past"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "About twenty verbs use {{être}} instead of {{avoir}} in the passé composé. Most are about **movement** or **change**: going, coming, arriving, leaving, being born, dying..."
    },
    {
     "type": "table",
     "head": [
      "Verb",
      "Meaning",
      "Participle"
     ],
     "rows": [
      [
       "{{aller}}",
       "to go",
       "{{allé}}"
      ],
      [
       "{{venir}}",
       "to come",
       "{{venu}}"
      ],
      [
       "{{arriver}}",
       "to arrive",
       "{{arrivé}}"
      ],
      [
       "{{partir}}",
       "to leave",
       "{{parti}}"
      ],
      [
       "{{entrer}}",
       "to go in",
       "{{entré}}"
      ],
      [
       "{{sortir}}",
       "to go out",
       "{{sorti}}"
      ],
      [
       "{{monter}}",
       "to go up",
       "{{monté}}"
      ],
      [
       "{{descendre}}",
       "to go down",
       "{{descendu}}"
      ],
      [
       "{{naître}}",
       "to be born",
       "{{né}}"
      ],
      [
       "{{mourir}}",
       "to die",
       "{{mort}}"
      ],
      [
       "{{rester}}",
       "to stay",
       "{{resté}}"
      ],
      [
       "{{tomber}}",
       "to fall",
       "{{tombé}}"
      ],
      [
       "{{rentrer}}",
       "to come home",
       "{{rentré}}"
      ],
      [
       "{{revenir}}",
       "to come back",
       "{{revenu}}"
      ],
      [
       "{{devenir}}",
       "to become",
       "{{devenu}}"
      ],
      [
       "{{retourner}}",
       "to go back",
       "{{retourné}}"
      ]
     ],
     "title": "The être verbs"
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "Picture the **House of Être**: you arrive ({{arriver}}), go in ({{entrer}}), go up the stairs ({{monter}}), come down ({{descendre}}), go out ({{sortir}}) and leave ({{partir}}). People are born ({{naître}}) and die ({{mourir}}) in it too!"
    },
    {
     "type": "rule",
     "name": "Agreement with être",
     "color": "purple",
     "desc": "With {{être}}, the participle agrees with the subject, like an adjective: add **-e** for feminine and **-s** for plural.",
     "examples": [
      {
       "t": "Il est allé.",
       "tr": "eel eh-tah-LAY"
      },
      {
       "t": "Elle est allée.",
       "tr": "el eh-tah-LAY"
      },
      {
       "t": "Ils sont allés.",
       "tr": "eel sohn-tah-LAY"
      },
      {
       "t": "Elles sont allées.",
       "tr": "el sohn-tah-LAY"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "Good news: {{allé, allée, allés, allées}} all sound the same. The agreement usually shows only in writing."
    },
    {
     "type": "table",
     "head": [
      "French",
      "Say it",
      "English"
     ],
     "rows": [
      [
       "{{je suis allé(e)}}",
       "zhuh swee-zah-LAY",
       "I went"
      ],
      [
       "{{tu es allé(e)}}",
       "tew eh-zah-LAY",
       "you went"
      ],
      [
       "{{il est allé / elle est allée}}",
       "eel eh-tah-LAY",
       "he / she went"
      ],
      [
       "{{nous sommes allé(e)s}}",
       "noo som-zah-LAY",
       "we went"
      ],
      [
       "{{vous êtes allé(e)(s)}}",
       "voo-zet-zah-LAY",
       "you went"
      ],
      [
       "{{ils sont allés / elles sont allées}}",
       "eel sohn-tah-LAY",
       "they went"
      ]
     ],
     "title": "aller in the passé composé"
    },
    {
     "type": "compare",
     "items": [
      {
       "t": "J'ai mangé.",
       "label": "avoir: most verbs",
       "desc": "No agreement with the subject: {{elle a mangé}}."
      },
      {
       "t": "Je suis parti(e).",
       "label": "être: movement & change",
       "desc": "Agrees with the subject: {{elle est partie}}."
      }
     ],
     "title": "Avoir or être?"
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "Je suis né à Londres.",
       "tr": "zhuh swee NAY ah LOHNDR",
       "mean": "I was born in London."
      },
      {
       "t": "Elle est arrivée hier.",
       "tr": "el eh-tah-ree-VAY ee-YEHR",
       "mean": "She arrived yesterday."
      },
      {
       "t": "Nous sommes restés à la maison.",
       "tr": "noo som res-TAY ah lah meh-ZOHN",
       "mean": "We stayed at home."
      },
      {
       "t": "Tu es tombé ?",
       "tr": "tew eh tohm-BAY",
       "mean": "Did you fall?"
      },
      {
       "t": "Ils ne sont pas venus.",
       "tr": "eel nuh sohn pah vuh-NEW",
       "mean": "They didn't come."
      }
     ]
    },
    {
     "type": "sentence",
     "t": "Marie est partie en vacances lundi.",
     "tr": "mah-REE eh par-TEE ahn vah-KAHNS lun-DEE",
     "mean": "Marie went on holiday on Monday.",
     "words": [
      {
       "t": "Marie",
       "mean": "Marie"
      },
      {
       "t": "est",
       "mean": "is"
      },
      {
       "t": "partie",
       "mean": "left"
      },
      {
       "t": "en",
       "mean": "on"
      },
      {
       "t": "vacances",
       "mean": "holiday"
      },
      {
       "t": "lundi",
       "mean": "Monday"
      }
     ],
     "note": "{{partie}} has an extra -e because Marie is female."
    },
    {
     "type": "dialogue",
     "lines": [
      {
       "who": "Hugo",
       "t": "Qu'est-ce que tu as fait pendant les vacances ?",
       "tr": "kess-kuh tew ah FEH pahn-dahn lay vah-KAHNS",
       "mean": "What did you do during the holidays?"
      },
      {
       "who": "Lisa",
       "t": "Je suis allée en Espagne avec ma sœur.",
       "tr": "zhuh swee-zah-LAY ahn-nes-PANY ah-vek mah SUHR",
       "mean": "I went to Spain with my sister."
      },
      {
       "who": "Hugo",
       "t": "Super ! Vous êtes parties quand ?",
       "tr": "sew-PEHR. voo-zet par-TEE KAHN",
       "mean": "Great! When did you leave?"
      },
      {
       "who": "Lisa",
       "t": "Nous sommes parties le deux août et nous sommes rentrées hier.",
       "tr": "noo som par-TEE luh duh OOT ay noo som rahn-TRAY ee-YEHR",
       "mean": "We left on 2 August and we came home yesterday."
      },
      {
       "who": "Hugo",
       "t": "Et tu as aimé ?",
       "tr": "ay tew ah eh-MAY",
       "mean": "And did you like it?"
      },
      {
       "who": "Lisa",
       "t": "J'ai adoré ! Mais ma sœur est tombée malade...",
       "tr": "zhay ah-doh-RAY. meh mah suhr eh tohm-BAY mah-LAHD",
       "mean": "I loved it! But my sister got ill..."
      }
     ],
     "title": "Holiday story"
    },
    {
     "type": "practice",
     "text": "Read the story aloud. Spot the être verbs.",
     "lines": [
      "Je suis né en avril.",
      "Hier, je suis sorti avec mes amis.",
      "Nous sommes allés au cinéma.",
      "Ma sœur est arrivée en retard.",
      "Nous sommes rentrés à minuit."
     ]
    },
    {
     "type": "quiz",
     "title": "Quick quiz",
     "items": [
      {
       "q": "Which verb uses être in the passé composé?",
       "options": [
        "manger",
        "regarder",
        "finir",
        "partir"
       ],
       "answer": 3
      },
      {
       "q": "Complete: Elle est ___ (arriver).",
       "options": [
        "arrivé",
        "arrivés",
        "arriver",
        "arrivée"
       ],
       "answer": 3,
       "explain": "Feminine subject: add -e."
      },
      {
       "q": "Two men say 'We went to the cinema'. Which is correct?",
       "options": [
        "Nous sommes allés au cinéma.",
        "Nous avons allé au cinéma.",
        "Nous sommes allées au cinéma.",
        "Nous allons au cinéma."
       ],
       "answer": 0
      },
      {
       "q": "Listen. What does it mean?",
       "say": "Je suis né en avril.",
       "options": [
        "I was born in April.",
        "I'm going in April.",
        "I arrived in April.",
        "I'll be back in April."
       ],
       "answer": 0
      },
      {
       "q": "Which sentence is correct?",
       "options": [
        "Il a tombé.",
        "Il est tombée.",
        "Il est tombé.",
        "Il tombé."
       ],
       "answer": 2
      },
      {
       "q": "Make it negative: {{Ils sont venus.}}",
       "options": [
        "Ils ne sont pas venus.",
        "Ils ne sont venus pas.",
        "Ils sont ne pas venus.",
        "Ils n'ont pas venus."
       ],
       "answer": 0
      },
      {
       "q": "Why does {{elles sont sorties}} end in -ies?",
       "options": [
        "The subject is feminine plural.",
        "Sortir always ends like that.",
        "It is the future tense."
       ],
       "answer": 0
      }
     ]
    }
   ]
  },
  {
   "id": "u4-prepositions",
   "icon": "sur",
   "title": "Prepositions of Place",
   "subtitle": "Where things and places are",
   "minutes": 13,
   "goals": [
    "Say where things and people are",
    "Use du and des after près de, à côté de...",
    "Use à, en, au and aux with cities and countries"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Where's my phone? Where's the station? Prepositions of place answer the question {{Où ?}} (Where?)."
    },
    {
     "type": "vocab",
     "items": [
      {
       "t": "sur",
       "tr": "SEWR",
       "mean": "on",
       "example": {
        "t": "Le chat est sur le lit.",
        "tr": "luh shah eh sewr luh LEE",
        "mean": "The cat is on the bed."
       }
      },
      {
       "t": "sous",
       "tr": "SOO",
       "mean": "under"
      },
      {
       "t": "dans",
       "tr": "DAHN",
       "mean": "in, inside"
      },
      {
       "t": "devant",
       "tr": "duh-VAHN",
       "mean": "in front of"
      },
      {
       "t": "derrière",
       "tr": "deh-RYEHR",
       "mean": "behind"
      },
      {
       "t": "entre",
       "tr": "AHNTR",
       "mean": "between"
      },
      {
       "t": "à côté de",
       "tr": "ah koh-TAY duh",
       "mean": "next to"
      },
      {
       "t": "près de",
       "tr": "PREH duh",
       "mean": "near"
      },
      {
       "t": "loin de",
       "tr": "LWAN duh",
       "mean": "far from"
      },
      {
       "t": "en face de",
       "tr": "ahn FAHSS duh",
       "mean": "opposite"
      },
      {
       "t": "à gauche (de)",
       "tr": "ah GOHSH",
       "mean": "on the left (of)"
      },
      {
       "t": "à droite (de)",
       "tr": "ah DRWAHT",
       "mean": "on the right (of)"
      }
     ],
     "title": "Where is it?"
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "{{devant}} hides the word {{avant}} (before): in front of. {{derrière}} sounds a bit like 'derrière' in English, the thing behind you!"
    },
    {
     "type": "rule",
     "name": "de + le = du",
     "color": "orange",
     "desc": "Prepositions ending in {{de}} follow the same rule as {{à}}: {{de + le = du}}, {{de + les = des}}. {{de la}} and {{de l'}} don't change.",
     "examples": [
      {
       "t": "à côté du cinéma",
       "tr": "ah koh-TAY dew see-nay-MAH"
      },
      {
       "t": "près de la gare",
       "tr": "preh duh lah GAR"
      },
      {
       "t": "en face de l'hôtel",
       "tr": "ahn fahss duh loh-TEL"
      },
      {
       "t": "loin des magasins",
       "tr": "lwan day mah-gah-ZAN"
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Place",
      "Use",
      "Example"
     ],
     "rows": [
      [
       "a city",
       "{{à}}",
       "{{J'habite à Rome.}}"
      ],
      [
       "a feminine country (most end in -e)",
       "{{en}}",
       "{{Je vais en France.}}"
      ],
      [
       "a masculine country",
       "{{au}}",
       "{{Il travaille au Canada.}}"
      ],
      [
       "a plural country",
       "{{aux}}",
       "{{Elle vit aux États-Unis.}}"
      ]
     ],
     "title": "Cities and countries"
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "Most countries ending in -e are feminine ({{la France, l'Italie}}); most others are masculine ({{le Japon, le Brésil}}). Watch out for {{le Mexique}}: masculine, so {{au Mexique}}."
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "La banque est entre la poste et le café.",
       "tr": "lah bahnk eh ahntr lah POST ay luh kah-FAY",
       "mean": "The bank is between the post office and the café."
      },
      {
       "t": "La pharmacie est en face de l'école.",
       "tr": "lah far-mah-SEE eh-tahn fahss duh lay-KOL",
       "mean": "The pharmacy is opposite the school."
      },
      {
       "t": "Mon appartement est près du parc.",
       "tr": "moh-nah-par-tuh-MAHN eh preh dew PARK",
       "mean": "My flat is near the park."
      },
      {
       "t": "Le vélo est derrière la maison.",
       "tr": "luh vay-LOH eh deh-ryehr lah meh-ZOHN",
       "mean": "The bike is behind the house."
      }
     ],
     "title": "Around town"
    },
    {
     "type": "sentence",
     "t": "La boulangerie est à côté de la pharmacie.",
     "tr": "lah boo-lahn-ZHREE eh-tah koh-TAY duh lah far-mah-SEE",
     "mean": "The bakery is next to the pharmacy.",
     "words": [
      {
       "t": "La",
       "mean": "the"
      },
      {
       "t": "boulangerie",
       "mean": "bakery"
      },
      {
       "t": "est",
       "mean": "is"
      },
      {
       "t": "à",
       "mean": "at"
      },
      {
       "t": "côté",
       "mean": "side"
      },
      {
       "t": "de",
       "mean": "of"
      },
      {
       "t": "la",
       "mean": "the"
      },
      {
       "t": "pharmacie",
       "mean": "pharmacy"
      }
     ],
     "note": "{{à côté de}} is literally 'at the side of'."
    },
    {
     "type": "dialogue",
     "lines": [
      {
       "who": "Tourist",
       "t": "Pardon, madame, où est la gare ?",
       "tr": "par-DOHN, mah-DAHM, oo eh lah GAR",
       "mean": "Excuse me, madam, where is the station?"
      },
      {
       "who": "Lady",
       "t": "C'est tout droit, puis à gauche.",
       "tr": "seh too DRWAH, pwee ah GOHSH",
       "mean": "It's straight on, then left."
      },
      {
       "who": "Tourist",
       "t": "C'est loin d'ici ?",
       "tr": "seh lwan dee-SEE",
       "mean": "Is it far from here?"
      },
      {
       "who": "Lady",
       "t": "Non, c'est à cinq minutes. La gare est en face du musée.",
       "tr": "NOHN, seh-tah sank mee-NEWT. lah gar eh-tahn fahss dew mew-ZAY",
       "mean": "No, it's five minutes away. The station is opposite the museum."
      },
      {
       "who": "Tourist",
       "t": "Merci beaucoup !",
       "tr": "mehr-SEE boh-KOO",
       "mean": "Thank you very much!"
      },
      {
       "who": "Lady",
       "t": "Je vous en prie. Bonne journée !",
       "tr": "zhuh voo-zahn PREE. bun zhoor-NAY",
       "mean": "You're welcome. Have a good day!"
      }
     ],
     "title": "Asking the way"
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "{{tout droit}} (straight on, 'too DRWAH') and {{à droite}} (on the right, 'ah DRWAHT') sound close. Listen for the final T!"
    },
    {
     "type": "practice",
     "text": "Describe where things are, aloud.",
     "lines": [
      "Le livre est sur la table.",
      "Le chien est sous la chaise.",
      "La gare est près du centre.",
      "J'habite à Paris, en France.",
      "Mon frère travaille au Japon."
     ]
    },
    {
     "type": "quiz",
     "title": "Quick quiz",
     "items": [
      {
       "q": "What does {{sous}} mean?",
       "options": [
        "under",
        "on",
        "in",
        "next to"
       ],
       "answer": 0
      },
      {
       "q": "Complete: La poste est à côté ___ cinéma.",
       "options": [
        "de le",
        "de la",
        "des",
        "du"
       ],
       "answer": 3,
       "explain": "{{de + le = du}}."
      },
      {
       "q": "Listen. Where is it?",
       "say": "derrière la maison",
       "options": [
        "in front of the house",
        "behind the house",
        "next to the house",
        "inside the house"
       ],
       "answer": 1
      },
      {
       "q": "Complete: Je vais ___ Portugal.",
       "options": [
        "en",
        "à",
        "aux",
        "au"
       ],
       "answer": 3,
       "explain": "{{le Portugal}} is masculine: {{au}}."
      },
      {
       "q": "Complete: Elle habite ___ Londres.",
       "options": [
        "en",
        "à",
        "au"
       ],
       "answer": 1,
       "explain": "Use {{à}} with cities."
      },
      {
       "q": "What does {{tout droit}} mean?",
       "options": [
        "on the right",
        "all right",
        "turn back",
        "straight on"
       ],
       "answer": 3
      },
      {
       "q": "Complete: Nous allons ___ Italie.",
       "options": [
        "au",
        "à la",
        "aux",
        "en"
       ],
       "answer": 3,
       "explain": "{{l'Italie}} is feminine: {{en}}."
      }
     ]
    }
   ]
  }
 ]
});
