/* Learn French. Copyright © ZyeemZia */
window.LC = window.LC || { course: null, alphabet: null, units: [] };
LC.units.push({
 "id": "sounds",
 "order": 1,
 "icon": "Aa",
 "color": "teal",
 "title": "Sounds & Letters",
 "subtitle": "Hear, say and read French with confidence",
 "lessons": [
  {
   "id": "u1-how-french-sounds",
   "icon": "♪",
   "title": "How French Sounds",
   "subtitle": "Rhythm, stress and pure vowels",
   "minutes": 10,
   "goals": [
    "Hear the smooth, even rhythm of French",
    "Put the stress at the end of a word group",
    "Read our easy respellings"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Bienvenue! Welcome! Before learning words, let's tune your ears. French sounds smooth and flowing, like a gentle stream. Once you hear its rhythm, everything else gets easier."
    },
    {
     "type": "steps",
     "items": [
      {
       "title": "Even beats",
       "desc": "Give every syllable about the same time: {{ca-fé}}, {{cho-co-lat}}. No syllable is swallowed."
      },
      {
       "title": "Lean on the end",
       "desc": "The last syllable of a word or a word group is a little longer. That's the French 'stress'."
      },
      {
       "title": "Pure vowels",
       "desc": "Keep each vowel clean and steady. {{café}} ends on a crisp 'ay', not 'ay-ee'."
      },
      {
       "title": "Busy lips",
       "desc": "French lips work hard: they smile for 'ee', round tightly for 'oo' and 'ew'."
      }
     ],
     "title": "Four golden rules"
    },
    {
     "type": "compare",
     "items": [
      {
       "t": "chocolat",
       "label": "French: shoh-koh-LAH",
       "desc": "Three even beats, the last one a little longer."
      },
      {
       "t": "chocolate",
       "label": "English: CHOK-lit",
       "desc": "Strong first beat, the middle disappears."
      }
     ],
     "title": "Same word, different music"
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "hôtel",
       "tr": "oh-TEL",
       "mean": "hotel"
      },
      {
       "t": "animal",
       "tr": "ah-nee-MAHL",
       "mean": "animal"
      },
      {
       "t": "important",
       "tr": "an-por-TAHN",
       "mean": "important"
      },
      {
       "t": "restaurant",
       "tr": "res-toh-RAHN",
       "mean": "restaurant"
      },
      {
       "t": "Paris",
       "tr": "pah-REE",
       "mean": "Paris"
      },
      {
       "t": "téléphone",
       "tr": "tay-lay-FON",
       "mean": "telephone"
      }
     ],
     "title": "Words you already know"
    },
    {
     "type": "text",
     "text": "In a sentence, French stresses only the **end of each word group**, not every word. Listen to how this flows as one long word:"
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "Bonjour, je m'appelle Léa.",
       "tr": "bohn-ZHOOR, zhuh mah-pel lay-AH",
       "mean": "Hello, my name is Léa.",
       "note": "Two groups, two stresses: ZHOOR and AH."
      },
      {
       "t": "Un café, s'il vous plaît.",
       "tr": "uhn kah-FAY, seel voo PLEH",
       "mean": "A coffee, please."
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Respelling",
      "Means",
      "Example"
     ],
     "rows": [
      [
       "CAPITALS",
       "the stressed (slightly longer) syllable",
       "{{merci}} = mehr-SEE"
      ],
      [
       "ew",
       "French u: say 'ee' with round lips",
       "{{tu}} = tew"
      ],
      [
       "uh",
       "soft 'uh' with rounded lips",
       "{{le}} = luh"
      ],
      [
       "zh",
       "the s in 'measure'",
       "{{jour}} = zhoor"
      ],
      [
       "ahn, ohn, an, uhn",
       "nasal vowels: the n is NOT said",
       "{{bon}} = bohn"
      ],
      [
       "r",
       "French r, made in the throat",
       "{{rouge}} = roozh"
      ]
     ],
     "title": "How to read our respellings"
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "Imagine French as a wave that rises and lands at the end of each group: je voudrais un ca-FÉ. Ride the wave, land on the last beat!"
    },
    {
     "type": "tip",
     "kind": "fun",
     "text": "French is spoken on five continents, by more than 300 million people, from Paris to Montréal, Dakar and Tahiti."
    },
    {
     "type": "practice",
     "text": "Tap each word, listen, then say it with even beats and a longer last syllable.",
     "lines": [
      "merci",
      "bonjour",
      "chocolat",
      "important",
      "un café",
      "s'il vous plaît"
     ]
    },
    {
     "type": "quiz",
     "title": "Quick quiz",
     "items": [
      {
       "q": "Where does French usually put the stress?",
       "options": [
        "On the last syllable of a word group",
        "On the first syllable of every word",
        "On the longest word",
        "On every second syllable"
       ],
       "answer": 0
      },
      {
       "q": "How should you say the vowel at the end of {{café}}?",
       "options": [
        "'ay' sliding into 'ee'",
        "A clean, steady 'ay'",
        "A long 'ee'",
        "Silent"
       ],
       "answer": 1
      },
      {
       "q": "Which respelling fits {{chocolat}}?",
       "options": [
        "CHOK-lit",
        "shoh-koh-LAH",
        "SHOH-koh-lah",
        "choh-KOH-lat"
       ],
       "answer": 1
      },
      {
       "q": "In our respellings, what does 'ohn' mean?",
       "options": [
        "'oh' then a clear n",
        "A long 'oo'",
        "'own' as in English",
        "A nasal 'oh', with no real n"
       ],
       "answer": 3
      },
      {
       "q": "Listen. Which phrase do you hear?",
       "say": "s'il vous plaît",
       "options": [
        "merci beaucoup",
        "bonjour madame",
        "s'il vous plaît",
        "à bientôt"
       ],
       "answer": 2
      },
      {
       "q": "In {{Bonjour, je m'appelle Léa}}, which syllables carry the stress?",
       "options": [
        "-jour and -a",
        "bon- and je",
        "je and -pelle",
        "Every syllable equally"
       ],
       "answer": 0
      }
     ]
    }
   ]
  },
  {
   "id": "u1-alphabet",
   "icon": "A",
   "title": "The French Alphabet",
   "subtitle": "26 familiar letters with French names",
   "minutes": 12,
   "goals": [
    "Say the names of the 26 letters",
    "Avoid the classic E/I and G/J traps",
    "Spell a word aloud in French"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Good news: French uses the same 26 letters as English. Only the names are different. Tap each letter to hear its French name."
    },
    {
     "type": "letters",
     "items": [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z"
     ],
     "title": "A to Z"
    },
    {
     "type": "table",
     "head": [
      "Letter",
      "French name",
      "Sounds like"
     ],
     "rows": [
      [
       "E",
       "{{e}}",
       "uh"
      ],
      [
       "I",
       "{{i}}",
       "ee"
      ],
      [
       "G",
       "{{gé}}",
       "zhay"
      ],
      [
       "J",
       "{{ji}}",
       "zhee"
      ],
      [
       "H",
       "{{ache}}",
       "ahsh"
      ],
      [
       "R",
       "{{erre}}",
       "ehr"
      ],
      [
       "U",
       "{{u}}",
       "ew"
      ],
      [
       "W",
       "{{double vé}}",
       "doo-bluh VAY"
      ],
      [
       "Y",
       "{{i grec}}",
       "ee GREK"
      ]
     ],
     "title": "The tricky ones"
    },
    {
     "type": "compare",
     "items": [
      {
       "t": "e",
       "label": "E = 'uh'",
       "desc": "Soft, round lips. Not 'ee'!"
      },
      {
       "t": "i",
       "label": "I = 'ee'",
       "desc": "Smiling lips. This is the English 'E' sound."
      }
     ],
     "title": "E and I swap"
    },
    {
     "type": "compare",
     "items": [
      {
       "t": "g",
       "label": "G = 'zhay'",
       "desc": "Rhymes with 'day'."
      },
      {
       "t": "j",
       "label": "J = 'zhee'",
       "desc": "Rhymes with 'see'."
      }
     ],
     "title": "G and J swap"
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "English speakers swap these pairs. Remember: **G**ay → 'zhay' (G rhymes with dAY), **J**ee → 'zhee'. And the French E is the shy 'uh', while I is the happy 'ee'."
    },
    {
     "type": "text",
     "text": "Most letter names follow a pattern: vowel-like letters ending in 'ay' ({{bé, cé, dé, gé, pé, té, vé}}) and letters starting with 'e' ({{effe, elle, emme, enne, erre, esse}})."
    },
    {
     "type": "text",
     "text": "People often ask {{Ça s'écrit comment ?}} (How is that spelled?). Then you spell letter by letter:",
     "title": "Spelling aloud"
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "Léa : L, E accent aigu, A",
       "tr": "el, uh ak-SAHN tay-GEW, ah",
       "mean": "Léa: L, É, A"
      },
      {
       "t": "Paris : P, A, R, I, S",
       "tr": "pay, ah, ehr, ee, es",
       "mean": "Paris"
      },
      {
       "t": "deux L",
       "tr": "duh el",
       "mean": "double L (as in 'elle')"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "For double letters, French says {{deux}} (two): {{deux L}}, {{deux S}}, {{deux M}}."
    },
    {
     "type": "practice",
     "text": "Spell these words aloud, letter by letter, using the French names.",
     "lines": [
      "ami",
      "chat",
      "jour",
      "girafe",
      "Québec",
      "wifi"
     ]
    },
    {
     "type": "quiz",
     "title": "Quick quiz",
     "items": [
      {
       "q": "What is the French name of the letter I?",
       "options": [
        "eye",
        "uh",
        "ee",
        "ay"
       ],
       "answer": 2
      },
      {
       "q": "Listen. Which letter is this?",
       "say": "gé",
       "options": [
        "G",
        "J",
        "E",
        "Z"
       ],
       "answer": 0
      },
      {
       "q": "Listen. Which letter is this?",
       "say": "ji",
       "options": [
        "G",
        "I",
        "Y",
        "J"
       ],
       "answer": 3
      },
      {
       "q": "What does the letter H sound like in a French word?",
       "options": [
        "A breathy 'h'",
        "Nothing: it is silent",
        "Like 'sh'",
        "Like a French r"
       ],
       "answer": 1
      },
      {
       "q": "How do you say 'double S' when spelling?",
       "options": [
        "deux S",
        "double esse",
        "S S",
        "deux double S"
       ],
       "answer": 0
      },
      {
       "q": "The French name of Y means…",
       "options": [
        "Double i",
        "Long u",
        "Greek i",
        "Why"
       ],
       "answer": 2
      },
      {
       "q": "Listen. Which letter is this?",
       "say": "e",
       "options": [
        "I",
        "E",
        "A",
        "U"
       ],
       "answer": 1
      }
     ]
    }
   ]
  },
  {
   "id": "u1-vowels-accents",
   "icon": "é",
   "title": "Vowels & Accents",
   "subtitle": "Small marks with big jobs",
   "minutes": 12,
   "goals": [
    "Say the pure French vowels",
    "Tell é from è and ê",
    "Know what ç and the tréma do"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "French vowels are short, pure and steady. Accents are little helpers: some change the sound, some only change the meaning. Let's meet them."
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "a",
       "tr": "ah",
       "mean": "as in {{papa}}"
      },
      {
       "t": "é",
       "tr": "ay",
       "mean": "as in {{été}} (summer)"
      },
      {
       "t": "è",
       "tr": "eh",
       "mean": "as in {{mère}} (mother)"
      },
      {
       "t": "i",
       "tr": "ee",
       "mean": "as in {{midi}} (noon)"
      },
      {
       "t": "o",
       "tr": "oh",
       "mean": "as in {{vélo}} (bike)"
      },
      {
       "t": "u",
       "tr": "ew",
       "mean": "as in {{tu}} (you)"
      }
     ],
     "title": "Six key vowels"
    },
    {
     "type": "letters",
     "items": [
      "e-acute",
      "e-grave",
      "e-circ",
      "e-trema",
      "a-grave",
      "a-circ",
      "c-cedilla",
      "i-circ",
      "i-trema",
      "o-circ",
      "u-circ",
      "u-grave",
      "oe"
     ],
     "title": "The accents"
    },
    {
     "type": "table",
     "head": [
      "Mark",
      "Name",
      "What it does"
     ],
     "rows": [
      [
       "{{é}}",
       "accent aigu",
       "only on e: says 'ay'"
      ],
      [
       "{{è à ù}}",
       "accent grave",
       "on e: says 'eh'; on a and u: changes the meaning only"
      ],
      [
       "{{ê â î ô û}}",
       "accent circonflexe",
       "on e: says 'eh'; often marks a lost s"
      ],
      [
       "{{ë ï}}",
       "tréma",
       "say this vowel separately"
      ],
      [
       "{{ç}}",
       "cédille",
       "makes c say 's' before a, o, u"
      ]
     ]
    },
    {
     "type": "compare",
     "items": [
      {
       "t": "é",
       "label": "'ay' (closed)",
       "desc": "Smile, mouth almost closed: {{été}}, {{café}}."
      },
      {
       "t": "è",
       "label": "'eh' (open)",
       "desc": "Drop your jaw a little: {{mère}}, {{très}}."
      },
      {
       "t": "ê",
       "label": "'eh' (open)",
       "desc": "Same as è: {{fête}}, {{forêt}}."
      }
     ],
     "title": "é vs è / ê"
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "Draw it in the air! The aigu accent (´) climbs up: your voice is high and tight, 'ay'. The grave accent (`) slides down: your jaw drops, 'eh'. The circonflexe (^) is a little hat that hides a lost s: {{forêt}} = forest, {{hôpital}} = hospital."
    },
    {
     "type": "rule",
     "name": "Accents can change meaning",
     "color": "purple",
     "desc": "Some words sound the same but the accent tells them apart.",
     "examples": [
      {
       "t": "a / à",
       "tr": "ah",
       "hl": "à"
      },
      {
       "t": "ou / où",
       "tr": "oo",
       "hl": "où"
      },
      {
       "t": "la / là",
       "tr": "lah",
       "hl": "là"
      },
      {
       "t": "sur / sûr",
       "tr": "sewr",
       "hl": "sûr"
      }
     ],
     "how": "{{a}} = has, {{à}} = to. {{ou}} = or, {{où}} = where. {{la}} = the, {{là}} = there. {{sur}} = on, {{sûr}} = sure."
    },
    {
     "type": "rule",
     "name": "The cédille",
     "color": "green",
     "desc": "C before a, o, u is hard 'k'. Add a tail (ç) to make it a soft 's'.",
     "examples": [
      {
       "t": "ça",
       "tr": "sah",
       "hl": "ç"
      },
      {
       "t": "garçon",
       "tr": "gar-SOHN",
       "hl": "ç"
      },
      {
       "t": "reçu",
       "tr": "ruh-SEW",
       "hl": "ç"
      }
     ]
    },
    {
     "type": "rule",
     "name": "The tréma",
     "color": "orange",
     "desc": "Two dots say: pronounce me on my own.",
     "examples": [
      {
       "t": "Noël",
       "tr": "noh-EL",
       "hl": "ë"
      },
      {
       "t": "maïs",
       "tr": "mah-EES",
       "hl": "ï"
      }
     ],
     "how": "Compare {{mais}} ('meh', but) with {{maïs}} ('mah-EES', corn)."
    },
    {
     "type": "practice",
     "text": "Read each word. Watch the accent and adjust your mouth.",
     "lines": [
      "été",
      "mère",
      "fête",
      "très",
      "voilà",
      "ça",
      "Noël",
      "hôtel"
     ]
    },
    {
     "type": "quiz",
     "title": "Quick quiz",
     "items": [
      {
       "q": "Which accent makes e say 'ay'?",
       "options": [
        "é (aigu)",
        "è (grave)",
        "ê (circonflexe)",
        "ë (tréma)"
       ],
       "answer": 0
      },
      {
       "q": "Listen. Which word do you hear?",
       "say": "mère",
       "options": [
        "mari",
        "mère",
        "marée",
        "mûre"
       ],
       "answer": 1,
       "explain": "{{mère}} (mother) has an open 'eh'."
      },
      {
       "q": "What does the cédille in {{garçon}} do?",
       "options": [
        "Makes c say 's'",
        "Makes c say 'k'",
        "Makes c silent",
        "Makes the o nasal"
       ],
       "answer": 0
      },
      {
       "q": "{{où}} means…",
       "options": [
        "or",
        "yes",
        "where",
        "who"
       ],
       "answer": 2
      },
      {
       "q": "Why does {{maïs}} have two dots on the i?",
       "options": [
        "The i is silent",
        "The i is long",
        "It is a plural",
        "Say a and i separately"
       ],
       "answer": 3
      },
      {
       "q": "The circumflex in {{forêt}} often reminds us of…",
       "options": [
        "a silent t",
        "a lost letter s",
        "a long 'ee'",
        "a capital letter"
       ],
       "answer": 1,
       "explain": "{{forêt}} = forest."
      },
      {
       "q": "Listen. Which word do you hear?",
       "say": "été",
       "options": [
        "été",
        "étape",
        "tête",
        "thé"
       ],
       "answer": 0
      }
     ]
    }
   ]
  },
  {
   "id": "u1-silent-letters",
   "icon": "s̶",
   "title": "Silent Final Letters",
   "subtitle": "Many last letters stay quiet",
   "minutes": 10,
   "goals": [
    "Know which final letters are usually silent",
    "Use the CaReFuL trick",
    "Hear the change in petit / petite"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "French spelling keeps letters that people stopped saying centuries ago. Relax: there are clear patterns, and you'll soon read them without thinking."
    },
    {
     "type": "rule",
     "name": "Final consonants are usually silent",
     "color": "gray",
     "desc": "Most consonants at the very end of a word are not said.",
     "examples": [
      {
       "t": "petit",
       "tr": "puh-TEE",
       "hl": "t"
      },
      {
       "t": "grand",
       "tr": "grahn",
       "hl": "d"
      },
      {
       "t": "Paris",
       "tr": "pah-REE",
       "hl": "s"
      },
      {
       "t": "beaucoup",
       "tr": "boh-KOO",
       "hl": "p"
      },
      {
       "t": "deux",
       "tr": "duh",
       "hl": "x"
      },
      {
       "t": "nez",
       "tr": "nay",
       "hl": "z"
      }
     ]
    },
    {
     "type": "rule",
     "name": "Final e is usually silent",
     "color": "gray",
     "desc": "An e at the end of a word is not said, but it makes the consonant before it heard.",
     "examples": [
      {
       "t": "petite",
       "tr": "puh-TEET",
       "hl": "e"
      },
      {
       "t": "grande",
       "tr": "grahnd",
       "hl": "e"
      },
      {
       "t": "rose",
       "tr": "rohz",
       "hl": "e"
      }
     ]
    },
    {
     "type": "compare",
     "items": [
      {
       "t": "petit",
       "label": "puh-TEE",
       "desc": "Final t silent: small (masculine)."
      },
      {
       "t": "petite",
       "label": "puh-TEET",
       "desc": "Final e silent, but now you hear the t: small (feminine)."
      }
     ],
     "title": "One letter, a new sound"
    },
    {
     "type": "rule",
     "name": "CaReFuL letters are often said",
     "color": "green",
     "desc": "Final C, R, F and L are usually pronounced.",
     "examples": [
      {
       "t": "avec",
       "tr": "ah-VEK",
       "hl": "c"
      },
      {
       "t": "bonjour",
       "tr": "bohn-ZHOOR",
       "hl": "r"
      },
      {
       "t": "neuf",
       "tr": "nuhf",
       "hl": "f"
      },
      {
       "t": "avril",
       "tr": "ah-VREEL",
       "hl": "l"
      }
     ],
     "how": "Big exception: verbs ending in -er ({{parler}}, {{manger}}) say 'ay', with a silent r."
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "Be CaReFuL! The consonants in C-a-R-e-F-u-L (c, r, f, l) are the ones French usually says at the end of a word."
    },
    {
     "type": "rule",
     "name": "Plural -s and verb -ent are silent",
     "color": "gray",
     "desc": "Plural s/x and the verb ending -ent make no sound.",
     "examples": [
      {
       "t": "les chats",
       "tr": "lay SHAH",
       "hl": "s"
      },
      {
       "t": "ils parlent",
       "tr": "eel PARL",
       "hl": "ent"
      },
      {
       "t": "des gâteaux",
       "tr": "day gah-TOH",
       "hl": "x"
      }
     ],
     "how": "So {{il parle}} and {{ils parlent}} sound exactly the same."
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "One-syllable little words keep their e as a soft 'uh': {{le}}, {{de}}, {{je}}, {{me}}, {{que}}."
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "le chocolat chaud",
       "tr": "luh shoh-koh-lah SHOH",
       "mean": "hot chocolate"
      },
      {
       "t": "un grand lit",
       "tr": "uhn grahn LEE",
       "mean": "a big bed"
      },
      {
       "t": "trois petits chats",
       "tr": "trwah puh-tee SHAH",
       "mean": "three little cats"
      }
     ],
     "title": "Spot the silent letters"
    },
    {
     "type": "practice",
     "text": "Read aloud. Cover the last letter with your finger if it helps!",
     "lines": [
      "petit",
      "petite",
      "Paris",
      "avec",
      "parler",
      "les chats",
      "ils parlent",
      "beaucoup"
     ]
    },
    {
     "type": "quiz",
     "title": "Quick quiz",
     "items": [
      {
       "q": "How do you say {{petit}}?",
       "options": [
        "puh-TEE",
        "puh-TEET",
        "PET-it",
        "puh-TEES"
       ],
       "answer": 0
      },
      {
       "q": "Which final letters does the CaReFuL trick say are usually pronounced?",
       "options": [
        "s, t, d, x",
        "a, e, i, o",
        "c, r, f, l",
        "p, t, k, s"
       ],
       "answer": 2
      },
      {
       "q": "In {{parler}}, the final r is…",
       "options": [
        "a strong French r",
        "silent: the ending says 'ay'",
        "said like English r",
        "doubled"
       ],
       "answer": 1
      },
      {
       "q": "Listen. Which word do you hear?",
       "say": "petite",
       "options": [
        "petit",
        "petite",
        "petits",
        "peut-être"
       ],
       "answer": 1
      },
      {
       "q": "{{il parle}} and {{ils parlent}}…",
       "options": [
        "sound different",
        "have a nasal ending",
        "end in a 't' sound",
        "sound the same"
       ],
       "answer": 3
      },
      {
       "q": "Which word ends with a pronounced consonant?",
       "options": [
        "avec",
        "grand",
        "trois",
        "beaucoup"
       ],
       "answer": 0
      }
     ]
    }
   ]
  },
  {
   "id": "u1-nasal-vowels",
   "icon": "on",
   "title": "Nasal Vowels",
   "subtitle": "The famous French hum",
   "minutes": 12,
   "goals": [
    "Make the four nasal vowels",
    "Spot when a vowel goes nasal",
    "Hear vent, vont and vin"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Nasal vowels are the 'hum' that makes French sound French. The secret: let air flow through your nose and your mouth at the same time, and do NOT say the n."
    },
    {
     "type": "steps",
     "items": [
      {
       "title": "Hold your nose",
       "desc": "Say 'ah'. It sounds normal: that's an oral vowel."
      },
      {
       "title": "Let go and hum",
       "desc": "Now say 'ah' while letting some air out of your nose. Your tongue stays down."
      },
      {
       "title": "Stop before the n",
       "desc": "Never touch the roof of your mouth with your tongue. {{an}} = 'ahn' with no real n."
      }
     ],
     "title": "Make a nasal vowel"
    },
    {
     "type": "table",
     "head": [
      "Sound",
      "Spellings",
      "Example"
     ],
     "rows": [
      [
       "ahn",
       "{{an}}, {{en}}, {{am}}, {{em}}",
       "{{enfant}} (child)"
      ],
      [
       "ohn",
       "{{on}}, {{om}}",
       "{{bonbon}} (sweet)"
      ],
      [
       "an",
       "{{in}}, {{im}}, {{ain}}, {{ein}}",
       "{{pain}} (bread)"
      ],
      [
       "uhn",
       "{{un}}, {{um}}",
       "{{lundi}} (Monday)"
      ]
     ],
     "title": "The four nasals"
    },
    {
     "type": "letters",
     "items": [
      "an-en",
      "on",
      "in",
      "un"
     ]
    },
    {
     "type": "compare",
     "items": [
      {
       "t": "vent",
       "label": "ahn: vahn",
       "desc": "wind: mouth open wide."
      },
      {
       "t": "vont",
       "label": "ohn: vohn",
       "desc": "(they) go: lips very round."
      },
      {
       "t": "vin",
       "label": "an: van",
       "desc": "wine: lips spread, smile."
      }
     ],
     "title": "Three words, three nasals"
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "One sentence holds all the nasals: {{un bon vin blanc}} (a good white wine) = uhn bohn van BLAHN. Say it like a little song!"
    },
    {
     "type": "rule",
     "name": "When is it NOT nasal?",
     "color": "red",
     "desc": "If the n or m is followed by a vowel, or doubled, the vowel is normal and you DO say the n.",
     "examples": [
      {
       "t": "bon / bonne",
       "tr": "bohn / bon",
       "hl": "nne"
      },
      {
       "t": "un / une",
       "tr": "uhn / ewn",
       "hl": "ne"
      },
      {
       "t": "fin / fine",
       "tr": "fan / feen",
       "hl": "ne"
      }
     ]
    },
    {
     "type": "compare",
     "items": [
      {
       "t": "américain",
       "label": "ah-may-ree-KAN",
       "desc": "Nasal ending: American (man)."
      },
      {
       "t": "américaine",
       "label": "ah-may-ree-KEN",
       "desc": "n followed by e: no nasal (woman)."
      }
     ]
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "M before b or p works the same way: {{jambon}} (ham), {{temps}} (time), {{simple}}."
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "maman",
       "tr": "mah-MAHN",
       "mean": "mum"
      },
      {
       "t": "jambon",
       "tr": "zhahn-BOHN",
       "mean": "ham"
      },
      {
       "t": "le temps",
       "tr": "luh TAHN",
       "mean": "time, weather"
      },
      {
       "t": "important",
       "tr": "an-por-TAHN",
       "mean": "important"
      },
      {
       "t": "un parfum",
       "tr": "uhn par-FUHN",
       "mean": "a perfume"
      }
     ]
    },
    {
     "type": "practice",
     "text": "Hum the nasal vowels. Never touch your tongue to the roof of your mouth.",
     "lines": [
      "an",
      "on",
      "vin",
      "un",
      "vent, vont, vin",
      "un bon vin blanc",
      "bon, bonne",
      "une maman"
     ]
    },
    {
     "type": "quiz",
     "title": "Quick quiz",
     "items": [
      {
       "q": "To make a nasal vowel, you…",
       "options": [
        "say a strong n at the end",
        "let air out through the nose and skip the n",
        "close your lips",
        "add a 'g' sound"
       ],
       "answer": 1
      },
      {
       "q": "Listen. Which word do you hear?",
       "say": "vin",
       "options": [
        "vin",
        "vent",
        "vont",
        "vingt-deux"
       ],
       "answer": 0
      },
      {
       "q": "Listen. Which word do you hear?",
       "say": "vont",
       "options": [
        "vin",
        "vent",
        "vont",
        "vous"
       ],
       "answer": 2
      },
      {
       "q": "Which word has NO nasal vowel?",
       "options": [
        "bon",
        "pont",
        "nom",
        "bonne"
       ],
       "answer": 3
      },
      {
       "q": "Which spelling does NOT usually make the 'ahn' sound?",
       "options": [
        "in",
        "an",
        "en",
        "em"
       ],
       "answer": 0
      },
      {
       "q": "How many nasal vowels are in {{un bon vin blanc}}?",
       "options": [
        "Two",
        "Four",
        "None",
        "One"
       ],
       "answer": 1
      },
      {
       "q": "Why is the e in {{une}} needed for the sound?",
       "options": [
        "It makes a nasal 'uhn'",
        "It is said 'ay'",
        "It stops the nasal, so you hear 'n'",
        "It makes the u silent"
       ],
       "answer": 2
      }
     ]
    }
   ]
  },
  {
   "id": "u1-r-and-u",
   "icon": "r",
   "title": "The French R, U and OU",
   "subtitle": "Two sounds English doesn't have",
   "minutes": 12,
   "goals": [
    "Make a soft throat r",
    "Say the French u",
    "Hear tu vs tout"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Two sounds give English speakers the most fun: the French r and the French u. With a few tricks and a little practice, you'll have both."
    },
    {
     "type": "steps",
     "items": [
      {
       "title": "Find the spot",
       "desc": "Say 'k' or 'g'. Feel the back of your tongue touch the back of your mouth."
      },
      {
       "title": "Breathe there",
       "desc": "Leave a tiny gap at that same spot and breathe out a soft, buzzing 'h'."
      },
      {
       "title": "Keep the tip down",
       "desc": "Your tongue tip rests behind your bottom teeth. No rolling, no curling."
      }
     ],
     "title": "The French r in 3 steps"
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "Think of a light gargle, or a cat's soft purr. Too strong? Make it gentler. French people say it softly."
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "rouge",
       "tr": "roozh",
       "mean": "red"
      },
      {
       "t": "Paris",
       "tr": "pah-REE",
       "mean": "Paris"
      },
      {
       "t": "merci",
       "tr": "mehr-SEE",
       "mean": "thank you"
      },
      {
       "t": "très",
       "tr": "treh",
       "mean": "very"
      },
      {
       "t": "frère",
       "tr": "frehr",
       "mean": "brother"
      }
     ],
     "title": "Practise the r"
    },
    {
     "type": "steps",
     "items": [
      {
       "title": "Smile",
       "desc": "Say a long 'ee'."
      },
      {
       "title": "Freeze",
       "desc": "Keep your tongue exactly where it is."
      },
      {
       "title": "Kiss",
       "desc": "Push your lips into a small round circle. Out comes the French u: 'ew'."
      }
     ],
     "title": "The French u in 3 steps"
    },
    {
     "type": "compare",
     "items": [
      {
       "t": "tu",
       "label": "u = 'ew'",
       "desc": "you: tongue forward, lips round."
      },
      {
       "t": "tout",
       "label": "ou = 'oo'",
       "desc": "all: tongue back, like English 'too'."
      }
     ],
     "title": "u vs ou"
    },
    {
     "type": "compare",
     "items": [
      {
       "t": "rue",
       "label": "rew",
       "desc": "street"
      },
      {
       "t": "roue",
       "label": "roo",
       "desc": "wheel"
      }
     ]
    },
    {
     "type": "compare",
     "items": [
      {
       "t": "dessus",
       "label": "duh-SEW",
       "desc": "on top"
      },
      {
       "t": "dessous",
       "label": "duh-SOO",
       "desc": "underneath"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "Mixing u and ou can change the meaning. {{Tu}} is 'you', {{tout}} is 'all'. {{Vu}} is 'seen', {{vous}} is 'you'."
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "une rue",
       "tr": "ewn REW",
       "mean": "a street"
      },
      {
       "t": "la lune",
       "tr": "lah LEWN",
       "mean": "the moon"
      },
      {
       "t": "tu as vu ?",
       "tr": "tew ah VEW",
       "mean": "did you see?"
      },
      {
       "t": "nous trouvons",
       "tr": "noo troo-VOHN",
       "mean": "we find"
      }
     ]
    },
    {
     "type": "practice",
     "text": "Slowly, then faster. Feel your lips move.",
     "lines": [
      "tu, tout",
      "rue, roue",
      "vu, vous",
      "dessus, dessous",
      "une rue rouge",
      "Tu trouves tout ?"
     ]
    },
    {
     "type": "quiz",
     "title": "Quick quiz",
     "items": [
      {
       "q": "Where is the French r made?",
       "options": [
        "With the tongue tip rolled",
        "With curled tongue, like English",
        "At the back of the mouth, near the throat",
        "With the lips"
       ],
       "answer": 2
      },
      {
       "q": "To make the French u, you…",
       "options": [
        "say 'ee' and round your lips",
        "say 'oo' with a smile",
        "say 'uh' with your mouth open",
        "say 'you' quickly"
       ],
       "answer": 0
      },
      {
       "q": "Listen. Which word do you hear?",
       "say": "tu",
       "options": [
        "tout",
        "tu",
        "toi",
        "thé"
       ],
       "answer": 1
      },
      {
       "q": "Listen. Which word do you hear?",
       "say": "roue",
       "options": [
        "rue",
        "rêve",
        "rude",
        "roue"
       ],
       "answer": 3
      },
      {
       "q": "{{dessous}} means…",
       "options": [
        "underneath",
        "on top",
        "inside",
        "behind"
       ],
       "answer": 0
      },
      {
       "q": "Which word has the French u sound ('ew')?",
       "options": [
        "loup",
        "nous",
        "lune",
        "rouge"
       ],
       "answer": 2
      },
      {
       "q": "Listen. Which word do you hear?",
       "say": "vous",
       "options": [
        "vu",
        "vous",
        "veut",
        "vos"
       ],
       "answer": 1
      }
     ]
    }
   ]
  },
  {
   "id": "u1-sound-spellings",
   "icon": "eau",
   "title": "Sound Spellings",
   "subtitle": "Letter teams that make one sound",
   "minutes": 14,
   "goals": [
    "Read the most common letter teams",
    "Know soft and hard c and g",
    "Read new words with confidence"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "French often uses two or three letters for one sound. Learn these teams once, and you can read almost any French word aloud, even ones you've never seen."
    },
    {
     "type": "letters",
     "items": [
      "ou",
      "oi",
      "eau",
      "ai",
      "eu",
      "er-ez",
      "gn",
      "ch",
      "qu",
      "ph",
      "tion",
      "ill",
      "ui"
     ],
     "title": "The teams"
    },
    {
     "type": "table",
     "head": [
      "Sound",
      "Spellings",
      "Examples"
     ],
     "rows": [
      [
       "oh",
       "{{o}}, {{au}}, {{eau}}",
       "{{vélo}}, {{chaud}}, {{beau}}"
      ],
      [
       "eh",
       "{{è}}, {{ê}}, {{ai}}, {{ei}}",
       "{{mère}}, {{fête}}, {{lait}}, {{neige}}"
      ],
      [
       "ay",
       "{{é}}, {{-er}}, {{-ez}}",
       "{{été}}, {{parler}}, {{nez}}"
      ],
      [
       "wah",
       "{{oi}}",
       "{{moi}}, {{trois}}"
      ],
      [
       "oo",
       "{{ou}}",
       "{{nous}}, {{soupe}}"
      ],
      [
       "uh",
       "{{eu}}, {{œu}}",
       "{{deux}}, {{sœur}}"
      ],
      [
       "sh",
       "{{ch}}",
       "{{chat}}, {{chien}}"
      ],
      [
       "ny",
       "{{gn}}",
       "{{montagne}}"
      ],
      [
       "k",
       "{{c}}, {{qu}}, {{k}}",
       "{{café}}, {{qui}}, {{kilo}}"
      ],
      [
       "y",
       "{{ill}}, {{y}}",
       "{{fille}}, {{yaourt}}"
      ]
     ],
     "title": "One sound, many spellings"
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "E-A-U looks scary, but it's just 'oh'! Picture a bottle of water: {{eau}} = 'oh'. And a {{bateau}} (boat) floats on it: bah-TOH."
    },
    {
     "type": "compare",
     "items": [
      {
       "t": "oi",
       "label": "wah",
       "desc": "{{moi}}: me. Never 'oy'."
      },
      {
       "t": "ou",
       "label": "oo",
       "desc": "{{nous}}: we."
      },
      {
       "t": "eu",
       "label": "uh",
       "desc": "{{deux}}: two."
      }
     ],
     "title": "Don't read them the English way"
    },
    {
     "type": "rule",
     "name": "Soft c and g",
     "color": "blue",
     "desc": "Before e, i, y: c = 's' and g = 'zh'. Before a, o, u: c = 'k' and g = 'g'.",
     "examples": [
      {
       "t": "cinéma",
       "tr": "see-nay-MAH",
       "hl": "c"
      },
      {
       "t": "café",
       "tr": "kah-FAY",
       "hl": "c"
      },
      {
       "t": "girafe",
       "tr": "zhee-RAHF",
       "hl": "g"
      },
      {
       "t": "gare",
       "tr": "gahr",
       "hl": "g"
      }
     ]
    },
    {
     "type": "rule",
     "name": "Keeping g soft",
     "color": "blue",
     "desc": "To keep g soft before a or o, French adds an e: {{ge}}.",
     "examples": [
      {
       "t": "mangeons",
       "tr": "mahn-ZHOHN",
       "hl": "ge"
      },
      {
       "t": "Georges",
       "tr": "zhorzh",
       "hl": "ge"
      }
     ],
     "how": "And to make g hard before e or i, add a u: {{guitare}} (ghee-TAR)."
    },
    {
     "type": "rule",
     "name": "-tion = 'syohn'",
     "color": "green",
     "desc": "At the end of a word, -tion says 'syohn'.",
     "examples": [
      {
       "t": "nation",
       "tr": "nah-SYOHN",
       "hl": "tion"
      },
      {
       "t": "attention",
       "tr": "ah-tahn-SYOHN",
       "hl": "tion"
      },
      {
       "t": "information",
       "tr": "an-for-mah-SYOHN",
       "hl": "tion"
      }
     ]
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "le château",
       "tr": "luh shah-TOH",
       "mean": "the castle"
      },
      {
       "t": "un oiseau",
       "tr": "uhn-nwah-ZOH",
       "mean": "a bird"
      },
      {
       "t": "la neige",
       "tr": "lah NEZH",
       "mean": "snow"
      },
      {
       "t": "la campagne",
       "tr": "lah kahn-PAHNY",
       "mean": "the countryside"
      },
      {
       "t": "la feuille",
       "tr": "lah FUHY",
       "mean": "the leaf"
      },
      {
       "t": "huit",
       "tr": "weet",
       "mean": "eight"
      }
     ],
     "title": "Decode these"
    },
    {
     "type": "practice",
     "text": "Find the teams first, then read the whole word.",
     "lines": [
      "beau",
      "moi",
      "soupe",
      "lait",
      "deux",
      "chat",
      "montagne",
      "nation",
      "fille",
      "oiseau"
     ]
    },
    {
     "type": "quiz",
     "title": "Quick quiz",
     "items": [
      {
       "q": "How do you say {{eau}}?",
       "options": [
        "ee-ah-oo",
        "oh",
        "yoo",
        "ay-oh"
       ],
       "answer": 1
      },
      {
       "q": "How do you say {{oi}} in {{moi}}?",
       "options": [
        "wah",
        "oy",
        "oh-ee",
        "wee"
       ],
       "answer": 0
      },
      {
       "q": "Listen. Which word do you hear?",
       "say": "chat",
       "options": [
        "chaud",
        "chou",
        "chez",
        "chat"
       ],
       "answer": 3
      },
      {
       "q": "In {{cinéma}}, the c sounds like…",
       "options": [
        "k",
        "sh",
        "s",
        "ch"
       ],
       "answer": 2
      },
      {
       "q": "{{gn}} in {{montagne}} sounds like…",
       "options": [
        "the 'ny' in 'canyon'",
        "a hard g then n",
        "the 'gn' in 'sign'",
        "the 'ng' in 'sing'"
       ],
       "answer": 0
      },
      {
       "q": "Which word has the 'ay' sound at the end?",
       "options": [
        "lait",
        "mère",
        "fête",
        "parler"
       ],
       "answer": 3,
       "explain": "-er at the end of a verb says 'ay'. The others end in 'eh'."
      },
      {
       "q": "Listen. Which word do you hear?",
       "say": "deux",
       "options": [
        "doux",
        "deux",
        "de l'eau",
        "des"
       ],
       "answer": 1
      },
      {
       "q": "{{attention}} ends with the sound…",
       "options": [
        "shun",
        "tee-on",
        "syohn",
        "tyohn"
       ],
       "answer": 2
      }
     ]
    }
   ]
  },
  {
   "id": "u1-liaison-elision",
   "icon": "‿",
   "title": "Liaison & Elision",
   "subtitle": "How French words link together",
   "minutes": 12,
   "goals": [
    "Link words with liaison",
    "Drop a vowel with elision",
    "Know where linking is not allowed"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "French loves smooth sound. When one word ends and the next begins with a vowel, French links them, so speech flows without bumps. Two tools do this: **liaison** and **elision**."
    },
    {
     "type": "rule",
     "name": "Liaison",
     "color": "blue",
     "desc": "A silent final consonant wakes up when the next word starts with a vowel or a silent h.",
     "examples": [
      {
       "t": "les amis",
       "tr": "lay-zah-MEE",
       "hl": "s a"
      },
      {
       "t": "vous avez",
       "tr": "voo-zah-VAY",
       "hl": "s a"
      },
      {
       "t": "un ami",
       "tr": "uhn-nah-MEE",
       "hl": "n a"
      },
      {
       "t": "deux enfants",
       "tr": "duh-zahn-FAHN",
       "hl": "x e"
      }
     ],
     "how": "s and x link with a 'z' sound; d links with a 't' sound ({{un grand homme}} = uhn grahn-TOM)."
    },
    {
     "type": "compare",
     "items": [
      {
       "t": "les chats",
       "label": "lay SHAH",
       "desc": "Consonant next: s stays silent."
      },
      {
       "t": "les amis",
       "label": "lay-zah-MEE",
       "desc": "Vowel next: s wakes up as 'z'."
      }
     ],
     "title": "Silent or awake?"
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "Imagine the silent letter is asleep. A vowel next door knocks and wakes it up: 'les… ZAMIS!'"
    },
    {
     "type": "rule",
     "name": "Elision",
     "color": "purple",
     "desc": "Small words drop their last vowel before a vowel or silent h, and an apostrophe takes its place.",
     "examples": [
      {
       "t": "l'ami",
       "tr": "lah-MEE",
       "hl": "l'"
      },
      {
       "t": "j'aime",
       "tr": "zhem",
       "hl": "j'"
      },
      {
       "t": "c'est",
       "tr": "seh",
       "hl": "c'"
      },
      {
       "t": "d'accord",
       "tr": "dah-KOR",
       "hl": "d'"
      },
      {
       "t": "l'hôtel",
       "tr": "loh-TEL",
       "hl": "l'"
      }
     ],
     "how": "le, la, je, me, te, se, de, ne, que, ce → l', j', m', t', s', d', n', qu', c'."
    },
    {
     "type": "compare",
     "items": [
      {
       "t": "le chat",
       "label": "luh SHAH",
       "desc": "Consonant next: le stays whole."
      },
      {
       "t": "l'ami",
       "label": "lah-MEE",
       "desc": "Vowel next: le becomes l'."
      }
     ]
    },
    {
     "type": "rule",
     "name": "No linking here!",
     "color": "red",
     "desc": "Never link after {{et}} (and), and never before an 'aspirated' h (marked * in dictionaries).",
     "examples": [
      {
       "t": "et un",
       "tr": "ay UHN",
       "hl": "et"
      },
      {
       "t": "les haricots",
       "tr": "lay ah-ree-KOH",
       "hl": "les h"
      },
      {
       "t": "le héros",
       "tr": "luh ay-ROH",
       "hl": "le h"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "Most h words are 'silent h' ({{l'homme}}, {{l'hôtel}}, {{les hommes}} = lay-ZOM). A few block linking: {{le héros}}, {{les haricots}}, {{la Hollande}}. Learn them as you meet them."
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "Ils ont un ami.",
       "tr": "eel-zohn-tuhn-nah-MEE",
       "mean": "They have a friend."
      },
      {
       "t": "C'est un hôtel.",
       "tr": "seh-tuhn-noh-TEL",
       "mean": "It's a hotel."
      },
      {
       "t": "J'habite à Lyon.",
       "tr": "zhah-beet ah lee-OHN",
       "mean": "I live in Lyon."
      }
     ],
     "title": "Smooth sentences"
    },
    {
     "type": "practice",
     "text": "Link the words smoothly, like one long word.",
     "lines": [
      "les amis",
      "vous avez",
      "un ami",
      "deux enfants",
      "l'ami",
      "j'aime",
      "c'est un hôtel",
      "les haricots"
     ]
    },
    {
     "type": "quiz",
     "title": "Quick quiz",
     "items": [
      {
       "q": "How do you say {{les amis}}?",
       "options": [
        "lay ah-MEE",
        "les-ah-MEES",
        "lay-zah-MEE",
        "lay-sah-MEE"
       ],
       "answer": 2
      },
      {
       "q": "Before a vowel, {{je}} becomes…",
       "options": [
        "j'",
        "je'",
        "jé",
        "j"
       ],
       "answer": 0
      },
      {
       "q": "In liaison, a final s sounds like…",
       "options": [
        "s",
        "sh",
        "t",
        "z"
       ],
       "answer": 3
      },
      {
       "q": "Which phrase has NO liaison?",
       "options": [
        "les amis",
        "et un",
        "vous avez",
        "deux enfants"
       ],
       "answer": 1
      },
      {
       "q": "Listen. Which do you hear?",
       "say": "l'ami",
       "options": [
        "l'ami",
        "les amis",
        "le mime",
        "la nuit"
       ],
       "answer": 0
      },
      {
       "q": "Why is it {{le héros}} and not {{l'héros}}?",
       "options": [
        "Héros is plural",
        "The é is silent",
        "Its h blocks linking",
        "It's an English word"
       ],
       "answer": 2
      },
      {
       "q": "Listen. Which phrase do you hear?",
       "say": "vous avez",
       "options": [
        "vous savez",
        "vous allez",
        "nous avons",
        "vous avez"
       ],
       "answer": 3
      }
     ]
    }
   ]
  },
  {
   "id": "u1-reading-lab",
   "icon": "Abc",
   "title": "Reading Lab",
   "subtitle": "From syllables to real sentences",
   "minutes": 15,
   "goals": [
    "Read syllables, words and phrases",
    "Use everything from this unit together",
    "Read a short dialogue aloud"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Time to put it all together! Read each level aloud, tap to check, and only move on when it feels easy. Slow and smooth beats fast and bumpy."
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "la",
       "tr": "lah"
      },
      {
       "t": "le",
       "tr": "luh"
      },
      {
       "t": "li",
       "tr": "lee"
      },
      {
       "t": "lo",
       "tr": "loh"
      },
      {
       "t": "lu",
       "tr": "lew"
      },
      {
       "t": "lou",
       "tr": "loo"
      },
      {
       "t": "loi",
       "tr": "lwah"
      }
     ],
     "title": "Level 1: syllables"
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "papa",
       "tr": "pah-PAH",
       "mean": "dad"
      },
      {
       "t": "ami",
       "tr": "ah-MEE",
       "mean": "friend"
      },
      {
       "t": "vélo",
       "tr": "vay-LOH",
       "mean": "bike"
      },
      {
       "t": "merci",
       "tr": "mehr-SEE",
       "mean": "thank you"
      },
      {
       "t": "maison",
       "tr": "meh-ZOHN",
       "mean": "house"
      },
      {
       "t": "bonjour",
       "tr": "bohn-ZHOOR",
       "mean": "hello"
      }
     ],
     "title": "Level 2: words"
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "In {{maison}}, the s is between two vowels, so it says 'z': meh-ZOHN."
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "un café",
       "tr": "uhn kah-FAY",
       "mean": "a coffee"
      },
      {
       "t": "le chat",
       "tr": "luh SHAH",
       "mean": "the cat"
      },
      {
       "t": "la maison",
       "tr": "lah meh-ZOHN",
       "mean": "the house"
      },
      {
       "t": "les amis",
       "tr": "lay-zah-MEE",
       "mean": "the friends"
      },
      {
       "t": "mon ami",
       "tr": "mohn-nah-MEE",
       "mean": "my friend"
      },
      {
       "t": "l'école",
       "tr": "lay-KOL",
       "mean": "the school"
      }
     ],
     "title": "Level 3: little groups"
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "Bonjour, madame !",
       "tr": "bohn-ZHOOR, mah-DAHM",
       "mean": "Hello, madam!"
      },
      {
       "t": "Merci beaucoup !",
       "tr": "mehr-SEE boh-KOO",
       "mean": "Thank you very much!"
      },
      {
       "t": "Je m'appelle Léa.",
       "tr": "zhuh mah-pel lay-AH",
       "mean": "My name is Léa."
      },
      {
       "t": "C'est un bon vin blanc.",
       "tr": "seh-tuhn bohn van BLAHN",
       "mean": "It's a good white wine."
      },
      {
       "t": "Les enfants sont à l'école.",
       "tr": "lay-zahn-FAHN sohn-tah lay-KOL",
       "mean": "The children are at school."
      }
     ],
     "title": "Level 4: phrases"
    },
    {
     "type": "dialogue",
     "lines": [
      {
       "who": "Léa",
       "t": "Bonjour ! Ça va ?",
       "tr": "bohn-ZHOOR! sah VAH?",
       "mean": "Hello! How are you?"
      },
      {
       "who": "Hugo",
       "t": "Très bien, merci. Et toi ?",
       "tr": "treh BYAN, mehr-SEE. ay TWAH?",
       "mean": "Very well, thanks. And you?"
      },
      {
       "who": "Léa",
       "t": "Ça va bien. Un café ?",
       "tr": "sah vah BYAN. uhn kah-FAY?",
       "mean": "I'm fine. A coffee?"
      },
      {
       "who": "Hugo",
       "t": "Oui, avec plaisir !",
       "tr": "wee, ah-vek pleh-ZEER!",
       "mean": "Yes, with pleasure!"
      }
     ],
     "title": "Level 5: a mini dialogue"
    },
    {
     "type": "practice",
     "text": "Read the whole dialogue aloud twice: once slowly, once at a natural speed.",
     "lines": [
      "Bonjour ! Ça va ?",
      "Très bien, merci. Et toi ?",
      "Ça va bien. Un café ?",
      "Oui, avec plaisir !"
     ]
    },
    {
     "type": "selfcheck",
     "title": "Can you…?",
     "items": [
      "I keep my vowels short and pure.",
      "I stress the end of each word group.",
      "I don't say most final consonants.",
      "I make nasal vowels without a real n.",
      "I link words with liaison and elision."
     ]
    },
    {
     "type": "quiz",
     "title": "Quick quiz",
     "items": [
      {
       "q": "How do you read {{maison}}?",
       "options": [
        "MAY-son",
        "meh-ZOHN",
        "may-SOHN",
        "mah-ee-SON"
       ],
       "answer": 1
      },
      {
       "q": "Listen. Which phrase do you hear?",
       "say": "mon ami",
       "options": [
        "mon ami",
        "mon avis",
        "mes amis",
        "un ami"
       ],
       "answer": 0
      },
      {
       "q": "In {{Très bien}}, the s of {{très}} is…",
       "options": [
        "said 's'",
        "said 'z'",
        "silent",
        "said 'sh'"
       ],
       "answer": 2
      },
      {
       "q": "{{Ça va ?}} means…",
       "options": [
        "Thank you",
        "Goodbye",
        "Let's go to school",
        "How are you?"
       ],
       "answer": 3
      },
      {
       "q": "Listen. Which sentence do you hear?",
       "say": "Merci beaucoup !",
       "options": [
        "Bonjour, madame !",
        "Merci beaucoup !",
        "Avec plaisir !",
        "Très bien, merci."
       ],
       "answer": 1
      },
      {
       "q": "How many syllables are in {{l'école}}?",
       "options": [
        "Two (lay-KOL)",
        "Three (luh-ay-KOL)",
        "One",
        "Four"
       ],
       "answer": 0
      }
     ]
    }
   ]
  }
 ]
});
