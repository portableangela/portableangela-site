/*
  content.js
  All site copy lives here, in one language object per locale.
  To add Spanish later: duplicate the "en" object below as "es",
  translate the strings, and the toggle in main.js will pick it up
  automatically — no page templates need to change.
*/

const SITE = {
  en: {
    meta: {
      siteName: "Angela Lang",
      tagline: "Literary artist & narrative strategist"
    },

    nav: {
      about: "About",
      projects: "Projects",
      literary: "Literary",
      series: "Visual",
      collaborations: "Collaborative",
      contact: "Contact"
    },

    home: {
      eyebrow: "",
      headline: "",
      sub: "Investigating trust, enthusiasm, and predictions, through writing, photography, and generative experiences.",
      featured: [
        { slug: "dreams-belong-to-the-future", category: "literary", label: "Literary" },
        { slug: "coffee-and", category: "series", label: "Visual" },
        { slug: "moon-letters-lab", category: "collaborations", label: "Collaborative" }
      ]
    },

    about: {
      name: "Angela Lang",
      bio: "Angela is a bilingual writer and artist. Her work explores synchronicity, triggers of trust, familiarity among strangers, and the language of prediction and adventure. She has been awarded residencies in India, New Zealand, and Spain. Her speculative journalism projects on long-distance walks and coffee pairings have been shown in Bulgaria and Japan. In a previous chapter, she was an editor for Spanish-language digital projects at The New York Times, and later edited travel and wellness sections at Meredith Corp. and Hola! USA. She was the US travel correspondent of Revista Diners, the Colombian Vanity Fair, and contributed to The Brooklyn Rail, Guernica Magazine, Fodor's, and Metro. She was born in Bogot\u00e1, Colombia. Half-nomad, half-fl\u00e2neuse, she has lived on four continents and in six countries. When she is not on the road, New York City is home.",
      education: [
        { degree: "MA in Literary Creation", school: "Pompeu Fabra University, Barcelona, Spain", year: "2023" },
        { degree: "BA in Creative Writing, Minor in Fiction", school: "Eugene Lang College, The New School, New York, NY", year: "2005" },
        { degree: "BA in Political Science, Honors Degree", school: "University of Los Andes, Bogot\u00e1, Colombia", year: "2004" }
      ],
      exhibitions: [
        { title: "Right here, right now", venue: "Arts Itoya, Takeo, Saga, Japan", date: "July 2024" },
        { title: "Take me where I need to go", venue: "Studio Kura, Itoshima, Fukuoka, Japan", date: "May 2024" },
        { title: "Com/partir", venue: "World of Co, Sofia, Bulgaria", date: "August 2019" }
      ],
      residencies: [
        { title: "Casa Tagumerche", venue: "Alojera, Gomera, Canary Islands, Spain", date: "May\u2013July 2023" },
        { title: "Mother Divine Program", venue: "\u014arewa Beach, New Zealand", date: "October\u2013December 2020" },
        { title: "Artist Residency", venue: "Kriti Gallery, Varanasi, India", date: "August 2018" }
      ],
      fellowships: [
        { title: "Guaranteed Income for Artists", venue: "Creatives Rebuilt New York", date: "July 2022\u2013November 2023" },
        { title: "Practical Utopias: An Exploration of the Possible", venue: "Margaret Atwood Workshop, Disco", date: "September\u2013November 2022" },
        { title: "Narrative Journalism", venue: "Mariana Enr\u00edquez and Leila Guerriero Workshop, TEM Foundation, Buenos Aires, Argentina", date: "August\u2013November 2017" },
        { title: "POC Travel Writing", venue: "Faith Adiele Workshop, VONA, University of Pennsylvania, Philadelphia, PA", date: "June 2017" }
      ]
    },

    projectCategories: {
      literary: { label: "Literary", intro: "Long-form fiction and speculative projects exploring trust, prediction, and portable identity." },
      series: { label: "Visual", intro: "As a syncretic, spiritually curious, internationally educated, bilingual mestiza, I am fascinated by the steps between overcoming perceptions to get to feeling like we belong. Those moments when the foreign becomes intimate, the small rituals transform unfamiliar spaces into temporary homes, and repeated gestures silently help us to transcend linguistic and cultural boundaries.\n\nInspired by Dayanita Singh\u2019s personal museums and Sophie Calle\u2019s long-haul installations, I have compiled a media archive of cellphone photos and mementos from 40 countries and four continents for almost two decades.\n\nThese works tend to be serial and fluid. According to the space and the community where I am sharing, I expand, curate, and shuffle the material to create narrative experiences that include sequential collages and mixed-media, often incorporating multilingual text. I am interested in circularity, repurposed materials, and low-tech portable methods that can be easily replicated." },
      collaborations: { label: "Collaborative", intro: "Workshops, walks, and collective projects built with other artists and communities." }
    },

    projects: [
      {
        slug: "dreams-belong-to-the-future",
        category: "literary",
        tag: "Literary",
        year: "2023\u2013in progress",
        title: "Dreams Belong to the Future",
        description: "If the future is written, but there is no longer a fear-based, catastrophe-ridden read, who can write and edit those versions? Why do all cultures throughout history have or need predictions? What can we learn from the language of prophecy, divination, fortune-telling, predestination, and the role of intuition and words? What is the absolute best that could happen to the planet?\n\nI am writing a speculative protopian fiction. I want to explore plausibility and horizons of possibility with what we already have, so I have been researching the history of visual and textual narratives that anticipate the future.",
        body: "So far, the story goes like this:\n\nIn the future, on a day, the planet became enlightened. Little is known about why and how, but as a consequence, the world was divided into two and a half: those who sleep, those who are always awake, and a few who still have dreams.\n\nTo celebrate the centenary of the Enlightenment, two friends, one daydreamer and one nightdreamer, are tasked to travel in time to cross-interview legendary \u201coracles\u201d and get their version of how the past anticipated this amazing future. Night and stars, sounds and dance, fortune and prophecy, mountain and walking, silence and presence, algorithms and drugs get to tell their story.",
        links: []
      },
      {
        slug: "paper-in-the-wind",
        category: "literary",
        tag: "Literary",
        year: "2018\u20132022",
        title: "Paper in the Wind",
        description: "Why are we more open to strangers when traveling if we are much more vulnerable? Why are we attracted to certain people, objects or corners in unknown environments? Is there something of a magical order in these encounters, of an unavoidable trajectory, of an inevitable point of arrival?",
        body: "This started as a non-fiction book about spontaneous traveling companions exploring the moments when we quickly decide between curiosity and danger, the road from unfamiliar to trustworthy.\n\nI also wrote a novelized version to weave the 11 stories in four continents with poetic observations on temporary belonging, the mutation of ideas of foreignness, and our choice of portable identities.",
        links: []
      },
      {
        slug: "bookworm-comelibros",
        category: "literary",
        tag: "Literary",
        year: "2010",
        title: "Bookworm / Comelibros",
        description: "My idea was to write a bilingual novel with two parts that mirror each other: the first part had a male narrator and was written in English; the second one had a female narrator and was written in Spanish. In both, the story and settings are the same. I wanted to explore what the change in the gender of the characters would do.",
        body: "The novel is about a Psychology PhD who stumbles onto a secret society that eats books. The student researches book ownership habits. While helping a book hoarder organize their collection, a book that the society considers a delicacy falls into the student\u2019s hands \u2014 and they are telling the story to ask the reader for help deciding if they should give it to them or not.",
        links: [
          { label: "Read a mock interview where I talked about the intentions versus the results", url: "https://angela-lang.com/writer/fiction/blog/" }
        ]
      },
      {
        slug: "selected-publications",
        category: "literary",
        tag: "Literary",
        year: "2014\u20132023",
        title: "Selected Publications",
        hideImage: true,
        description: "",
        body: "",
        links: [
          { label: "Incelandia \u2014 Short Story \u2014 Revista Mercurio", url: "https://www.revistamercurio.es/2023/09/17/incelandia/" },
          { label: "Dar papaya: on traveling while Colombian \u2014 Essay \u2014 Panorama Journal War Issue", url: "http://www.panoramajournal.org/war-peace-dar-papaya-on-traveling-while-colombian/" },
          { label: "Lost in Buenos Aires \u2014 Essay \u2014 Panorama Journal Lost Issue", url: "http://www.panoramajournal.org/lost-buenos-aires-argentina/" },
          { label: "Food paradise in Michoac\u00e1n \u2014 Interview \u2014 Organic Spa Magazine", url: "https://www.organicspamagazine.com/food-paradise/" },
          { label: "Tel Aviv's vegan scene \u2014 Feature \u2014 Food and Wine", url: "https://dhewxdsd0qahx.cloudfront.net/3458550/FWTelAviv.pdf?1591990203" },
          { label: "Elena Ferrante \u2014 Profile \u2014 Revista Diners", url: "https://revistadiners.com.co/cultura/quien-es-elena-ferrante-autora-de-la-hija-oscura-netflix/" },
          { label: "Places For Your Soul \u2014 Cover Feature \u2014 Revista Diners", url: "https://revistadiners.com.co/estilo-de-vida/destinos-espirituales/" },
          { label: "The 10 Strangest Things to Try in Chile \u2014 Listicle \u2014 Fodor\u2019s Travel", url: "https://www.fodors.com/news/photos/the-10-strangest-things-to-try-in-chile" },
          { label: "A Kinship with Gabriel Garc\u00eda M\u00e1rquez \u2014 Tribute \u2014 Guernica Magazine", url: "https://www.guernicamag.com/angela-lang-a-kinship-with-gabriel-garcia-marquez/" },
          { label: "Isabel and Ruben Toledo New York's \u2014 Profile \u2014 Hola! USA", url: "https://dhewxdsd0qahx.cloudfront.net/2436672/Pasaporte.ToledoNYCEN.pdf?1497127767" },
          { label: "More at \u2014 Portfolio", url: "https://angelalang.contently.com/" }
        ]
      },

      {
        slug: "coffee-and",
        category: "series",
        tag: "Visual",
        year: "2014\u2013now",
        title: "Coffee &",
        description: "iPhone photos with repetitive frame. Half a showcase about what you can drink coffee with, half a visual diary of my way to get back home instantly: finding and drinking the perfect Americano.",
        body: "",
        hideImage: true,
        contentBlocks: [
          { type: "carousel", count: 2, caption: "Coffee & Japan, 45 iPhone photos 7-Eleven-printed with hand-made paper frames (150 \u00d7 350 mm), coffee in the islands of Kyushu and Honshu. Arts Itoya, Takeo, Japan (July 2024)" },
          { type: "carousel", count: 2, caption: "Coffee & The world (or how many coffees I drank to get from Bogota to Itoshima), 30 iPhone photos 7-Eleven-printed (89 \u00d7 127 mm), coffee in 18 countries. Studio Kura, Itoshima, Japan (May 2024)" }
        ],
        links: []
      },
      {
        slug: "faraway-so-close",
        category: "series",
        tag: "Visual",
        year: "2014\u2013now",
        title: "Faraway So Close",
        description: "Snapshots of drying clothes in 40 countries. I hate doing laundry. It comforts me that we all have to do it. There is something about the clothes that keeps me guessing about the owners and our shared humanity.",
        body: "",
        hideImage: true,
        contentBlocks: [
          { type: "carousel", count: 4, captions: [
            "\u201cColors or Whites?\u201d Diorama, digital snapshots printed on photo paper, thread. Studio Kura, Itoshima, Japan (May 2024)",
            "Process",
            "\u201cColors or Whites?\u201d Diorama, digital snapshots printed on photo paper, thread, handwritten note, black cardboard handmade background. Arts Itoya, Takeo, Japan (July 2024)",
            "Process"
          ] }
        ],
        links: []
      },
      {
        slug: "destino",
        category: "series",
        tag: "Visual",
        year: "2024\u2013now",
        title: "Destino",
        description: "Mixed-media collages and printed postcards. In Spanish, we use the same word for destiny and destination: destino. I created these postcards from collages of photos and things I found on the way to promote the exhibitions. Eventually, I\u2019d like to turn them into a sort of portable altar deck.",
        body: "",
        hideImage: true,
        contentBlocks: [
          { type: "carousel", count: 3, captions: [
            "\u201cTake me where I need to go.\u201d Mixed media, digital and print. Right foot X-ray, bag tags, QR codes from business cards from the flights from Pondicherry, India to Fukuoka, Japan. Printed postcards (148 \u00d7 105 mm), 20 copies each, given away. Fukuoka and Itoshima, Japan (May 2024)",
            "\u201cRight here, right now.\u201d Mixed media, digital and print. Photo collage. Printed postcards (148 \u00d7 105 mm), 20 copies each, given away. Saga and Takeo, Japan (July 2024)",
            "\u201cPaper in the wind.\u201d Collage, mixed media. Pondicherry government ad, Bombay Dairy candy wrappers, museum stickers, 2024. Studio Kura, Itoshima, Japan (May 2024)"
          ] }
        ],
        links: []
      },

      {
        slug: "moon-letters-lab",
        category: "collaborations",
        tag: "Collaborative",
        year: "2025",
        title: "Moon Letters Lab",
        galleryCount: 3,
        description: "During new moons and full moons, I write letters addressed to the moon. Sometimes in my journals, sometimes in postcards. Sometimes with friends or by myself. Mostly in Spanglish. I like to read them later and see if my predictions, desires, instructions and claims ring true.",
        imageCaption: "\u201cLaboratorio de la Luna\u201d, Happy Yoga, Bogot\u00e1, Colombia (August 2025)",
        body: "Based on those experiences, for the collaboration with Happy Yoga Medita, we designed an experience to create a playground for collective speculation using meditation, storytelling, and the language of prediction in writing. We created foretelling exercises and a simulation of a trip to the Moon for 28 multigenerational participants. They got a postcard from my personal collection to write a letter to the New Moon.",
        links: []
      },
      {
        slug: "round-the-block",
        category: "collaborations",
        tag: "Collaborative",
        year: "2025",
        title: "Round the Block",
        galleryCount: 3,
        description: "The Theaterlab crew invited me to be a contributing guide to their Round the Block hour-long walks. We took small groups around 36th Street in Midtown Manhattan to visit performance spaces, embroidery and pleating artisans, freight elevators turned into restaurants, and artist lofts for about 1.5 hours.",
        imageCaption: "Round the Block, Guided Theaterlab Artistic Walk in the Garment District, New York, USA (Fall 2025)",
        body: "I lived in a repurposed space on that block from 2006\u20132010. I shared my personal experience to celebrate the fascinating history, the architecture, and the changing laws all coming together in an unassuming block where theater and garment industries constantly interact.",
        links: []
      },
      {
        slug: "el-poder-de-los-sures",
        category: "collaborations",
        tag: "Collaborative",
        year: "2022",
        title: "El Poder de los Sures",
        galleryCount: 3,
        description: "The Grandparents Lab, led by Democracy Now! Spanish editor, Clara Ibarra, invited a mighty crew of 40 Latinx elderly residents of Williamsburg to be part of The JR Inside Out project, Brooklyn edition. The Lab took their portraits and recorded some of their stories of years in the neighborhood. I edited their collaborative poem, coordinated volunteers and Reboot silent disco presence, and documented the street installation.",
        imageCaption: "\u201cThe Power of Los Sures,\u201d JR Inside-Out Installation at the Domino Factory, Brooklyn, New York (June 2022)",
        body: "",
        links: []
      },
      {
        slug: "com-partir",
        category: "collaborations",
        tag: "Collaborative",
        year: "2019",
        title: "Com-partir",
        topGalleryCount: 3,
        topImageCaption: "\u201cCom-partir,\u201d World of Co., Sofia, Bulgaria (August 2019)",
        imagePosition: "bottom",
        galleryCount: 3,
        imageCaptions: [
          "\u201cMother/Father Tongue.\u201d Collage. Photo, recycled printing paper, reclaimed frame. (2019)",
          "\u201cLuck in Installments.\u201d Collage. Photo, cyanotype, repurposed frame. (2019)",
          "\u201cChoiceless or Led.\u201d Collage. Photo, recycled receipts from Sofia, Bulgaria, and recycled mirror paper. (2019)"
        ],
        description: "As a travel writer, the way I documented and shared my work often involved describing places within a timeline and with a set purpose. World of Co., an artists\u2019 residency in Sofia, Bulgaria, invited me to create a different narrative for a collective exhibition in an old movie theater.",
        body: "A few months before the residency, I took a month-and-a-half-long journey on foot with my dad. The French Camino retraces the pathway of the apostle Saint James from Saint Jean du Piet de Port in the French Pyrenees to Santiago de Compostela in Galicia, Spain.\n\nThe pace of organic human speed, the signs and the circularity of time on the road, and the random human and non-human traveling companions inspired me to share \u201cthe pilgrimage\u201d from the perspective of spontaneous encounters.\n\nCompartir, the word for sharing in Spanish, comes from partire; this Latin root is also part of the word partir, which means both departing and splitting.\n\nI translated this travel serendipity into visual narratives, experimenting with material findings in Sofia like folded paper, recycled Bulgarian receipts, and cyanotype.",
        links: []
      }
    ],

    contact: {
      heading: "Get in touch",
      sub: "",
      formEndpoint: "https://formspree.io/f/REPLACE_ME",
      newsletterHeading: "Moon Letters",
      newsletterSub: "Occasional dispatches on trust, synchronicity, and works in progress.",
      newsletterEndpoint: "https://buttondown.email/api/emails/embed-subscribe/REPLACE_ME",
      instagram: "@portableangela",
      instagramUrl: "https://www.instagram.com/portableangela/"
    },

    footer: {
      copyright: "\u00a9 2026 Angela Lang"
    }
  }
};

// Active locale. Swap to "es" once a Spanish object exists above.
const CURRENT_LOCALE = "en";
