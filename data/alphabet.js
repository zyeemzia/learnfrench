/* Learn French. Copyright © ZyeemZia */
window.LC = window.LC || { course: null, alphabet: null, units: [] };
LC.alphabet = {
 "groups": [
  {
   "id": "letters",
   "label": "The 26 letters",
   "note": "Same letters as English, French names. Tap to hear each name."
  },
  {
   "id": "accents",
   "label": "Accents & joined letters",
   "note": "Small marks that change the sound or the meaning."
  },
  {
   "id": "sounds",
   "label": "Sound spellings",
   "note": "Letter teams that make one French sound."
  }
 ],
 "items": [
  {
   "id": "a",
   "ch": "A a",
   "name": "a",
   "say": "a",
   "tr": "ah",
   "group": "letters",
   "sound": "Open your mouth wide and say a short, bright 'ah', as in 'father' but shorter.",
   "example": {
    "t": "ami",
    "tr": "ah-MEE",
    "mean": "friend"
   }
  },
  {
   "id": "b",
   "ch": "B b",
   "name": "bé",
   "say": "bé",
   "tr": "bay",
   "group": "letters",
   "sound": "Like English b. Say the name as a clean 'bay' with no 'ee' glide at the end.",
   "example": {
    "t": "bonjour",
    "tr": "bohn-ZHOOR",
    "mean": "hello"
   },
   "tip": "Final b is rare; when it is there, it is usually said: {{club}}."
  },
  {
   "id": "c",
   "ch": "C c",
   "name": "cé",
   "say": "cé",
   "tr": "say",
   "group": "letters",
   "sound": "Hard 'k' before a, o, u and consonants ({{café}}). Soft 's' before e, i, y ({{merci}}).",
   "example": {
    "t": "café",
    "tr": "kah-FAY",
    "mean": "coffee"
   },
   "tip": "C + e or i = 's'. C + a, o, u = 'k'. Same rule as in English 'city' and 'cat'."
  },
  {
   "id": "d",
   "ch": "D d",
   "name": "dé",
   "say": "dé",
   "tr": "day",
   "group": "letters",
   "sound": "Like English d, but touch your tongue tip on the back of your top teeth.",
   "example": {
    "t": "dimanche",
    "tr": "dee-MAHNSH",
    "mean": "Sunday"
   },
   "tip": "A d at the end of a word is usually silent: {{grand}}."
  },
  {
   "id": "e",
   "ch": "E e",
   "name": "e",
   "say": "e",
   "tr": "uh",
   "group": "letters",
   "sound": "Without an accent, e often sounds like a soft 'uh' with rounded lips. At the end of a word it is usually silent.",
   "example": {
    "t": "petit",
    "tr": "puh-TEE",
    "mean": "small"
   },
   "tip": "The letter E is called 'uh', not 'ee'. 'Ee' is the name of I!"
  },
  {
   "id": "f",
   "ch": "F f",
   "name": "effe",
   "say": "effe",
   "tr": "ef",
   "group": "letters",
   "sound": "Like English f. Usually said even at the end of a word.",
   "example": {
    "t": "fleur",
    "tr": "fluhr",
    "mean": "flower"
   }
  },
  {
   "id": "g",
   "ch": "G g",
   "name": "gé",
   "say": "gé",
   "tr": "zhay",
   "group": "letters",
   "sound": "Hard 'g' before a, o, u ({{gare}}). Soft 'zh' (the s in 'measure') before e, i, y ({{girafe}}).",
   "example": {
    "t": "gare",
    "tr": "gahr",
    "mean": "station"
   },
   "tip": "The name of G sounds like English 'J' backwards: G = 'zhay', J = 'zhee'."
  },
  {
   "id": "h",
   "ch": "H h",
   "name": "ache",
   "say": "ache",
   "tr": "ahsh",
   "group": "letters",
   "sound": "Always silent. Never breathe out an English 'h' sound.",
   "example": {
    "t": "homme",
    "tr": "om",
    "mean": "man"
   },
   "tip": "Think 'H is for Hush': it never makes a sound."
  },
  {
   "id": "i",
   "ch": "I i",
   "name": "i",
   "say": "i",
   "tr": "ee",
   "group": "letters",
   "sound": "A tight, bright 'ee' with smiling lips, shorter than English 'see'.",
   "example": {
    "t": "lit",
    "tr": "lee",
    "mean": "bed"
   }
  },
  {
   "id": "j",
   "ch": "J j",
   "name": "ji",
   "say": "ji",
   "tr": "zhee",
   "group": "letters",
   "sound": "Always 'zh', like the s in 'pleasure'. Never the English 'dj' of 'jam'.",
   "example": {
    "t": "jour",
    "tr": "zhoor",
    "mean": "day"
   }
  },
  {
   "id": "k",
   "ch": "K k",
   "name": "ka",
   "say": "ka",
   "tr": "kah",
   "group": "letters",
   "sound": "Like English k, without the puff of air. Found mostly in borrowed words.",
   "example": {
    "t": "kilo",
    "tr": "kee-LOH",
    "mean": "kilo"
   }
  },
  {
   "id": "l",
   "ch": "L l",
   "name": "elle",
   "say": "elle",
   "tr": "el",
   "group": "letters",
   "sound": "A light, clear l with the tongue tip behind the top teeth, even at the end of a word.",
   "example": {
    "t": "lune",
    "tr": "lewn",
    "mean": "moon"
   }
  },
  {
   "id": "m",
   "ch": "M m",
   "name": "emme",
   "say": "emme",
   "tr": "em",
   "group": "letters",
   "sound": "Like English m. After a vowel and before a consonant it can make the vowel nasal ({{jambon}}).",
   "example": {
    "t": "maman",
    "tr": "mah-MAHN",
    "mean": "mum"
   }
  },
  {
   "id": "n",
   "ch": "N n",
   "name": "enne",
   "say": "enne",
   "tr": "en",
   "group": "letters",
   "sound": "Like English n. After a vowel and before a consonant or at the end of a word, it usually makes the vowel nasal and is not said itself.",
   "example": {
    "t": "nuit",
    "tr": "nwee",
    "mean": "night"
   }
  },
  {
   "id": "o",
   "ch": "O o",
   "name": "o",
   "say": "o",
   "tr": "oh",
   "group": "letters",
   "sound": "A round, pure 'oh' without the English 'w' glide at the end.",
   "example": {
    "t": "orange",
    "tr": "oh-RAHNZH",
    "mean": "orange"
   }
  },
  {
   "id": "p",
   "ch": "P p",
   "name": "pé",
   "say": "pé",
   "tr": "pay",
   "group": "letters",
   "sound": "Like English p, but with no puff of air. Final p is usually silent ({{trop}}).",
   "example": {
    "t": "pomme",
    "tr": "pom",
    "mean": "apple"
   }
  },
  {
   "id": "q",
   "ch": "Q q",
   "name": "qu",
   "say": "qu",
   "tr": "kew",
   "group": "letters",
   "sound": "Almost always written {{qu}} and said 'k'. The u is silent.",
   "example": {
    "t": "quatre",
    "tr": "katr",
    "mean": "four"
   },
   "tip": "The name of Q uses the French u sound: round your lips as for 'oo' and say 'ee'."
  },
  {
   "id": "r",
   "ch": "R r",
   "name": "erre",
   "say": "erre",
   "tr": "ehr",
   "group": "letters",
   "sound": "Made at the back of the throat, a soft gargle, like a gentle 'h' with voice. Never rolled with the tongue tip.",
   "example": {
    "t": "rouge",
    "tr": "roozh",
    "mean": "red"
   },
   "tip": "Say 'k', feel where your tongue is, then breathe a soft, buzzing 'h' in that spot."
  },
  {
   "id": "s",
   "ch": "S s",
   "name": "esse",
   "say": "esse",
   "tr": "es",
   "group": "letters",
   "sound": "Usually 's'. Between two vowels it becomes 'z' ({{rose}}). Final s is usually silent.",
   "example": {
    "t": "soleil",
    "tr": "soh-LEY",
    "mean": "sun"
   }
  },
  {
   "id": "t",
   "ch": "T t",
   "name": "té",
   "say": "té",
   "tr": "tay",
   "group": "letters",
   "sound": "Like English t with the tongue on the back of the teeth and no puff of air. Final t is usually silent.",
   "example": {
    "t": "thé",
    "tr": "tay",
    "mean": "tea"
   },
   "tip": "{{th}} is just 't'. French has no English 'th' sound."
  },
  {
   "id": "u",
   "ch": "U u",
   "name": "u",
   "say": "u",
   "tr": "ew",
   "group": "letters",
   "sound": "Say 'ee', keep your tongue still, then push your lips into a small round kiss. It is NOT 'oo'.",
   "example": {
    "t": "une",
    "tr": "ewn",
    "mean": "one, a"
   },
   "tip": "In our respellings, 'ew' always means this French u sound."
  },
  {
   "id": "v",
   "ch": "V v",
   "name": "vé",
   "say": "vé",
   "tr": "vay",
   "group": "letters",
   "sound": "Like English v.",
   "example": {
    "t": "vélo",
    "tr": "vay-LOH",
    "mean": "bike"
   }
  },
  {
   "id": "w",
   "ch": "W w",
   "name": "double vé",
   "say": "double vé",
   "tr": "doo-bluh VAY",
   "group": "letters",
   "sound": "Usually 'w' in English loanwords ({{wifi}}), sometimes 'v' in older words ({{wagon}}).",
   "example": {
    "t": "wifi",
    "tr": "wee-FEE",
    "mean": "Wi-Fi"
   },
   "tip": "Its name means 'double V', not 'double U'."
  },
  {
   "id": "x",
   "ch": "X x",
   "name": "ixe",
   "say": "ixe",
   "tr": "eeks",
   "group": "letters",
   "sound": "Usually 'ks' ({{taxi}}). Final x is usually silent ({{deux}}).",
   "example": {
    "t": "taxi",
    "tr": "tak-SEE",
    "mean": "taxi"
   }
  },
  {
   "id": "y",
   "ch": "Y y",
   "name": "i grec",
   "say": "i grec",
   "tr": "ee GREK",
   "group": "letters",
   "sound": "Like French i ('ee') as a vowel, or like English y before a vowel ({{yaourt}}).",
   "example": {
    "t": "yaourt",
    "tr": "yah-OORT",
    "mean": "yogurt"
   },
   "tip": "Its name means 'Greek i'."
  },
  {
   "id": "z",
   "ch": "Z z",
   "name": "zède",
   "say": "zède",
   "tr": "zed",
   "group": "letters",
   "sound": "Like English z. Final z is usually silent ({{nez}}).",
   "example": {
    "t": "zéro",
    "tr": "zay-ROH",
    "mean": "zero"
   }
  },
  {
   "id": "e-acute",
   "ch": "É é",
   "name": "e accent aigu",
   "say": "e accent aigu",
   "tr": "ay",
   "group": "accents",
   "sound": "A crisp 'ay' with smiling lips and no glide: shorter than English 'day'.",
   "example": {
    "t": "café",
    "tr": "kah-FAY",
    "mean": "coffee"
   },
   "tip": "The aigu accent points up to the right, like your voice going up to a bright 'ay'."
  },
  {
   "id": "e-grave",
   "ch": "È è",
   "name": "e accent grave",
   "say": "e accent grave",
   "tr": "eh",
   "group": "accents",
   "sound": "An open 'eh', as in English 'bed'.",
   "example": {
    "t": "mère",
    "tr": "mehr",
    "mean": "mother"
   },
   "tip": "The grave accent slopes down, and the mouth opens wider: 'eh'."
  },
  {
   "id": "e-circ",
   "ch": "Ê ê",
   "name": "e accent circonflexe",
   "say": "e accent circonflexe",
   "tr": "eh",
   "group": "accents",
   "sound": "Same open 'eh' as è. The little hat often marks an old s that disappeared.",
   "example": {
    "t": "fête",
    "tr": "fet",
    "mean": "party"
   },
   "tip": "{{fête}} was once 'feste': think of English 'feast'."
  },
  {
   "id": "e-trema",
   "ch": "Ë ë",
   "name": "e tréma",
   "say": "e tréma",
   "tr": "eh",
   "group": "accents",
   "sound": "The two dots (tréma) tell you to say this vowel separately from the one before it.",
   "example": {
    "t": "Noël",
    "tr": "noh-EL",
    "mean": "Christmas"
   }
  },
  {
   "id": "a-grave",
   "ch": "À à",
   "name": "a accent grave",
   "say": "a accent grave",
   "tr": "ah",
   "group": "accents",
   "sound": "Same 'ah' sound as a. The accent only changes the meaning: {{a}} = has, {{à}} = to / at.",
   "example": {
    "t": "voilà",
    "tr": "vwah-LAH",
    "mean": "there it is"
   }
  },
  {
   "id": "a-circ",
   "ch": "Â â",
   "name": "a accent circonflexe",
   "say": "a accent circonflexe",
   "tr": "ah",
   "group": "accents",
   "sound": "An 'ah', sometimes a little deeper and longer. Most speakers say it like a plain a.",
   "example": {
    "t": "gâteau",
    "tr": "gah-TOH",
    "mean": "cake"
   }
  },
  {
   "id": "c-cedilla",
   "ch": "Ç ç",
   "name": "c cédille",
   "say": "c cédille",
   "tr": "s",
   "group": "accents",
   "sound": "The little tail makes c soft: always 's'. Only used before a, o, u.",
   "example": {
    "t": "garçon",
    "tr": "gar-SOHN",
    "mean": "boy"
   },
   "tip": "The cedilla is a tiny tail that says 'hiss!'"
  },
  {
   "id": "i-circ",
   "ch": "Î î",
   "name": "i accent circonflexe",
   "say": "i accent circonflexe",
   "tr": "ee",
   "group": "accents",
   "sound": "Same 'ee' as i. The hat is a spelling memory, not a new sound.",
   "example": {
    "t": "île",
    "tr": "eel",
    "mean": "island"
   },
   "tip": "{{île}} was once 'isle', like English 'isle'."
  },
  {
   "id": "i-trema",
   "ch": "Ï ï",
   "name": "i tréma",
   "say": "i tréma",
   "tr": "ee",
   "group": "accents",
   "sound": "Say this i separately from the vowel before it.",
   "example": {
    "t": "maïs",
    "tr": "mah-EES",
    "mean": "corn"
   },
   "tip": "Without the dots, {{mais}} would be 'meh' (= but)."
  },
  {
   "id": "o-circ",
   "ch": "Ô ô",
   "name": "o accent circonflexe",
   "say": "o accent circonflexe",
   "tr": "oh",
   "group": "accents",
   "sound": "A closed, round 'oh'.",
   "example": {
    "t": "hôtel",
    "tr": "oh-TEL",
    "mean": "hotel"
   },
   "tip": "{{hôtel}} was once 'hostel'."
  },
  {
   "id": "u-circ",
   "ch": "Û û",
   "name": "u accent circonflexe",
   "say": "u accent circonflexe",
   "tr": "ew",
   "group": "accents",
   "sound": "Same French u sound as u ('ee' with round lips).",
   "example": {
    "t": "sûr",
    "tr": "sewr",
    "mean": "sure"
   },
   "tip": "{{sur}} = on, {{sûr}} = sure. Same sound, different meaning."
  },
  {
   "id": "u-grave",
   "ch": "Ù ù",
   "name": "u accent grave",
   "say": "u accent grave",
   "tr": "oo",
   "group": "accents",
   "sound": "Used in just one word, {{où}} (where). There it is part of the 'oo' sound of ou.",
   "example": {
    "t": "où",
    "tr": "oo",
    "mean": "where"
   },
   "tip": "{{ou}} = or, {{où}} = where: the accent 'points' to a place."
  },
  {
   "id": "u-trema",
   "ch": "Ü ü",
   "name": "u tréma",
   "say": "u tréma",
   "tr": "ew",
   "group": "accents",
   "sound": "Very rare. It tells you to say the u separately.",
   "example": {
    "t": "capharnaüm",
    "tr": "kah-far-nah-OM",
    "mean": "a messy junk room"
   }
  },
  {
   "id": "y-trema",
   "ch": "Ÿ ÿ",
   "name": "y tréma",
   "say": "y tréma",
   "tr": "ee",
   "group": "accents",
   "sound": "Extremely rare: mostly in a few place names and family names.",
   "example": {
    "t": "L'Haÿ-les-Roses",
    "tr": "lah-ee lay ROHZ",
    "mean": "a town near Paris"
   }
  },
  {
   "id": "oe",
   "ch": "Œ œ",
   "name": "e dans l'o",
   "say": "e dans l'o",
   "tr": "uh",
   "group": "accents",
   "sound": "O and e joined together. Usually an 'uh' with round lips, as in {{cœur}}.",
   "example": {
    "t": "cœur",
    "tr": "kuhr",
    "mean": "heart"
   },
   "tip": "Its French name means 'e in the o'."
  },
  {
   "id": "ae",
   "ch": "Æ æ",
   "name": "e dans l'a",
   "say": "e dans l'a",
   "tr": "ay",
   "group": "accents",
   "sound": "A and e joined. Found in a few Latin words, said 'ay'.",
   "example": {
    "t": "et cætera",
    "tr": "et say-tay-RAH",
    "mean": "and so on"
   },
   "tip": "Its French name means 'e in the a'."
  },
  {
   "id": "ou",
   "ch": "ou",
   "name": "ou",
   "say": "ou",
   "tr": "oo",
   "group": "sounds",
   "sound": "A deep, round 'oo' as in 'food', with lips pushed forward.",
   "example": {
    "t": "nous",
    "tr": "noo",
    "mean": "we"
   },
   "tip": "If you see ou, think 'oo'. If you see u alone, it is the French u."
  },
  {
   "id": "oi",
   "ch": "oi",
   "name": "oi",
   "say": "moi",
   "tr": "wah",
   "group": "sounds",
   "sound": "Always 'wah', never 'oy'.",
   "example": {
    "t": "trois",
    "tr": "trwah",
    "mean": "three"
   },
   "tip": "{{moi}} rhymes with 'wah': the famous 'moi' of cartoons."
  },
  {
   "id": "eau",
   "ch": "eau · au",
   "name": "eau, au",
   "say": "eau",
   "tr": "oh",
   "group": "sounds",
   "sound": "Both spellings simply say 'oh'.",
   "example": {
    "t": "beau",
    "tr": "boh",
    "mean": "beautiful"
   },
   "tip": "Three letters, one sound: e-a-u = 'oh'. And {{eau}} itself means water."
  },
  {
   "id": "ai",
   "ch": "ai · ei",
   "name": "ai, ei",
   "say": "mai",
   "tr": "eh",
   "group": "sounds",
   "sound": "An open 'eh' as in 'bed'.",
   "example": {
    "t": "lait",
    "tr": "leh",
    "mean": "milk"
   }
  },
  {
   "id": "eu",
   "ch": "eu · œu",
   "name": "eu, œu",
   "say": "eux",
   "tr": "uh",
   "group": "sounds",
   "sound": "Round your lips as for 'oh', then say 'uh'. Like the 'u' in 'fur' without any r.",
   "example": {
    "t": "deux",
    "tr": "duh",
    "mean": "two"
   }
  },
  {
   "id": "er-ez",
   "ch": "-er · -ez",
   "name": "-er, -ez",
   "say": "parler",
   "tr": "ay",
   "group": "sounds",
   "sound": "At the end of a word, -er and -ez usually say 'ay', like é.",
   "example": {
    "t": "parler",
    "tr": "par-LAY",
    "mean": "to speak"
   },
   "tip": "{{-er}}, {{-ez}}, {{-é}}: three ways to write 'ay'."
  },
  {
   "id": "an-en",
   "ch": "an · en",
   "name": "an, en, am, em",
   "say": "an",
   "tr": "ahn",
   "group": "sounds",
   "sound": "A nasal 'ah': open wide and let air go through your nose. Do not say the n.",
   "example": {
    "t": "enfant",
    "tr": "ahn-FAHN",
    "mean": "child"
   },
   "tip": "Our respelling 'ahn' means: nasal 'ah', no real n."
  },
  {
   "id": "in",
   "ch": "in · ain",
   "name": "in, im, ain, ein",
   "say": "vin",
   "tr": "an",
   "group": "sounds",
   "sound": "A nasal 'eh/a', a bit like 'an' in 'bang' without the ng.",
   "example": {
    "t": "pain",
    "tr": "pan",
    "mean": "bread"
   }
  },
  {
   "id": "on",
   "ch": "on · om",
   "name": "on, om",
   "say": "on",
   "tr": "ohn",
   "group": "sounds",
   "sound": "A nasal 'oh' with very round lips. Do not say the n.",
   "example": {
    "t": "bonbon",
    "tr": "bohn-BOHN",
    "mean": "sweet, candy"
   }
  },
  {
   "id": "un",
   "ch": "un · um",
   "name": "un, um",
   "say": "un",
   "tr": "uhn",
   "group": "sounds",
   "sound": "A nasal 'uh'. Many French speakers say it just like in.",
   "example": {
    "t": "lundi",
    "tr": "luhn-DEE",
    "mean": "Monday"
   }
  },
  {
   "id": "gn",
   "ch": "gn",
   "name": "gn",
   "say": "agneau",
   "tr": "ny",
   "group": "sounds",
   "sound": "Like the 'ny' in 'canyon' or the 'ni' in 'onion'.",
   "example": {
    "t": "montagne",
    "tr": "mohn-TAHNY",
    "mean": "mountain"
   }
  },
  {
   "id": "ch",
   "ch": "ch",
   "name": "ch",
   "say": "chat",
   "tr": "sh",
   "group": "sounds",
   "sound": "Always 'sh' as in 'shop', never the 'tch' of 'church'.",
   "example": {
    "t": "chat",
    "tr": "shah",
    "mean": "cat"
   },
   "tip": "French chefs make {{chocolat}}: 'shoh-koh-LAH'."
  },
  {
   "id": "qu",
   "ch": "qu",
   "name": "qu",
   "say": "qui",
   "tr": "k",
   "group": "sounds",
   "sound": "Just 'k'. The u is silent, so no 'kw' sound.",
   "example": {
    "t": "qui",
    "tr": "kee",
    "mean": "who"
   }
  },
  {
   "id": "ph",
   "ch": "ph",
   "name": "ph",
   "say": "photo",
   "tr": "f",
   "group": "sounds",
   "sound": "Like f, just as in English.",
   "example": {
    "t": "photo",
    "tr": "foh-TOH",
    "mean": "photo"
   }
  },
  {
   "id": "tion",
   "ch": "-tion",
   "name": "-tion",
   "say": "nation",
   "tr": "syohn",
   "group": "sounds",
   "sound": "At the end of a word, -tion says 'syohn': the t sounds like s.",
   "example": {
    "t": "nation",
    "tr": "nah-SYOHN",
    "mean": "nation"
   },
   "tip": "Many English -tion words exist in French: just change the ending sound."
  },
  {
   "id": "ill",
   "ch": "ill",
   "name": "ill, -il",
   "say": "fille",
   "tr": "y",
   "group": "sounds",
   "sound": "After a vowel, ill (and often -il at the end) sounds like English y.",
   "example": {
    "t": "fille",
    "tr": "FEE-y",
    "mean": "girl, daughter"
   },
   "tip": "Exceptions to know: {{ville}} (veel), {{mille}} (meel)."
  },
  {
   "id": "ui",
   "ch": "ui",
   "name": "ui",
   "say": "huit",
   "tr": "wee",
   "group": "sounds",
   "sound": "A quick French u gliding into 'ee', close to 'wee'.",
   "example": {
    "t": "nuit",
    "tr": "nwee",
    "mean": "night"
   }
  }
 ]
};
