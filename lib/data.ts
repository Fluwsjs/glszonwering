// CMS-ready data structure for GLS Zonwering & Rolluiken
// Replace with actual CMS integration when needed

export interface Product {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  features: string[];
  benefits: string[];
  image: string;
  gallery: string[];
  category: "rolluiken" | "screens" | "zonneschermen" | "solar";
}

export interface Project {
  id: string;
  title: string;
  location: string;
  description: string;
  image: string;
  category: "rolluiken" | "screens" | "zonneschermen" | "solar";
  featured: boolean;
}

export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
  product: string;
}

export interface Step {
  id: number;
  title: string;
  description: string;
  icon: string;
}

// Products Data
export const products: Product[] = [
  {
    id: "1",
    slug: "rolluiken",
    title: "Rolluiken",
    shortDescription:
      "Maximale beveiliging en isolatie voor uw woning. Elektrisch of met de hand bedienbaar.",
    description:
      "Onze rolluiken bieden de perfecte combinatie van veiligheid, isolatie en gemak. Of u nu kiest voor elektrische bediening of een handbediende variant, onze rolluiken zijn duurzaam, stijlvol en op maat gemaakt voor uw woning. Met een breed scala aan kleuren en lamellen breedtes vindt u altijd een oplossing die past bij uw gevel.",
    features: [
      "Extra beveiliging & privacy",
      "Warmte- & geluidsisolatie",
      "Smart bediening mogelijk",
      "Duurzame aluminium lamellen",
      "Keuze uit vele RAL-kleuren",
    ],
    benefits: [
      "Tot 50% minder warmteverlies",
      "Inbraakwerend tot RC2 niveau",
      "Verlaagt geluidsoverlast aanzienlijk",
      "Verhoogt de waarde van uw woning",
    ],
    image: "/rolluiken.jpg",
    gallery: [
      "/placeholders/rolluiken-1.jpg",
      "/placeholders/rolluiken-2.jpg",
      "/placeholders/rolluiken-3.jpg",
    ],
    category: "rolluiken",
  },
  {
    id: "2",
    slug: "screens",
    title: "Screens",
    shortDescription:
      "Discrete zonwering die naadloos in uw gevel past. Windvast en weerbestendig.",
    description:
      "Screens zijn de ideale oplossing voor moderne woningen. Ze bieden effectieve zonwering terwijl u naar buiten kunt blijven kijken. Onze screens zijn windvast tot windkracht 6 en verkrijgbaar in diverse transparanties. Van lichtdoorlatend tot volledig verduisterend - wij hebben de perfecte screen voor uw situatie.",
    features: [
      "Discreet aan gevel",
      "Weerbestendig tot windkracht 6",
      "Ook als solar screen verkrijgbaar",
      "Diverse transparanties",
      "ZIP-geleiding voor strakke afwerking",
    ],
    benefits: [
      "Behoudt uw uitzicht",
      "Voorkomt opwarming van uw woning",
      "Beschermt meubels tegen UV-straling",
      "Minimalistische uitstraling",
    ],
    image: "/screens.jpg",
    gallery: [
      "/placeholders/screens-1.jpg",
      "/placeholders/screens-2.jpg",
      "/placeholders/screens-3.jpg",
    ],
    category: "screens",
  },
  {
    id: "3",
    slug: "zonneschermen",
    title: "Zonneschermen",
    shortDescription:
      "Geniet van uw terras met stijlvolle bescherming tegen zon en lichte regen.",
    description:
      "Een zonnescherm transformeert uw terras of balkon in een comfortabele buitenruimte. Onze zonneschermen zijn vervaardigd uit hoogwaardige, UV-bestendige doeken en zijn verkrijgbaar in honderden kleuren en patronen. Kies voor handbediening, elektrisch of zelfs solar - wij leveren maatwerk dat perfect past bij uw woning.",
    features: [
      "UV-bestendige doeken",
      "Maatwerk kleuren en patronen",
      "Elektrisch of solar bediening",
      "Cassette of open model",
      "LED-verlichting optioneel",
    ],
    benefits: [
      "Vergroot uw leefruimte",
      "Beschermt tegen UV-straling",
      "Koelt uw woning af",
      "Verhoogt wooncomfort",
    ],
    image: "/zonnescherm.jpg",
    gallery: [
      "/placeholders/zonneschermen-1.jpg",
      "/placeholders/zonneschermen-2.jpg",
      "/placeholders/zonneschermen-3.jpg",
    ],
    category: "zonneschermen",
  },
  {
    id: "4",
    slug: "solar-motoren",
    title: "Solar Motoren",
    shortDescription:
      "Draadloos gemak met zonne-energie. Geen bekabeling nodig, eenvoudige montage.",
    description:
      "Solar motoren maken elektrische bediening van uw zonwering mogelijk zonder dat er bekabeling nodig is. Het zonnepaneel laadt een ingebouwde accu op, waardoor uw rolluik of screen volledig autonoom werkt. Ideaal voor renovatie of situaties waar bekabeling lastig is. Bedien met afstandsbediening of koppel aan uw smart home systeem.",
    features: [
      "Geen bekabeling nodig",
      "Snelle, schone montage",
      "Bediening met afstandsbediening",
      "Smart home compatible",
      "Ingebouwde accu met reserve",
    ],
    benefits: [
      "Geen hak- of breekwerk",
      "Energiezuinig en duurzaam",
      "Onderhoudsarm",
      "Blijft werken bij stroomuitval",
    ],
    image: "/placeholders/solar-motor.jpg",
    gallery: [
      "/placeholders/solar-1.jpg",
      "/placeholders/solar-2.jpg",
      "/placeholders/solar-3.jpg",
    ],
    category: "solar",
  },
];

// Projects Data
export const projects: Project[] = [
  {
    id: "1",
    title: "Villa met elektrische rolluiken",
    location: "Nijmegen",
    description:
      "Complete installatie van 12 elektrische rolluiken met centrale bediening. Uitgevoerd in antraciet grijs, passend bij de moderne architectuur.",
    image: "/placeholders/project-1.jpg",
    category: "rolluiken",
    featured: true,
  },
  {
    id: "2",
    title: "Appartementencomplex screens",
    location: "Arnhem",
    description:
      "ZIP-screens voor 24 appartementen. Uniforme uitstraling met individuele bediening per unit.",
    image: "/placeholders/project-2.jpg",
    category: "screens",
    featured: true,
  },
  {
    id: "3",
    title: "Terras overkapping met zonnescherm",
    location: "Eindhoven",
    description:
      "Groot elektrisch zonnescherm van 6x4 meter met LED-verlichting en windautomaat.",
    image: "/placeholders/project-3.jpg",
    category: "zonneschermen",
    featured: true,
  },
  {
    id: "4",
    title: "Renovatie met solar motoren",
    location: "Den Bosch",
    description:
      "Bestaande handbediende rolluiken omgebouwd naar solar. Geen breekwerk, binnen één dag klaar.",
    image: "/placeholders/project-4.jpg",
    category: "solar",
    featured: true,
  },
  {
    id: "5",
    title: "Nieuwbouwwoning complete zonwering",
    location: "Oss",
    description:
      "Combinatie van screens aan de zuidgevel en zonnescherm op het terras. Alles elektrisch bedienbaar.",
    image: "/placeholders/project-5.jpg",
    category: "screens",
    featured: false,
  },
  {
    id: "6",
    title: "Monumentaal pand met rolluiken",
    location: "Zutphen",
    description:
      "Maatwerk rolluiken voor een monumentaal pand. Speciale kleur en montage in overleg met gemeente.",
    image: "/placeholders/project-6.jpg",
    category: "rolluiken",
    featured: true,
  },
  {
    id: "7",
    title: "Moderne woning met ZIP-screens",
    location: "Veenendaal",
    description:
      "Strakke ZIP-screens voor een moderne nieuwbouwwoning. Volledig geïntegreerd in de gevel.",
    image: "/placeholders/project-7.jpg",
    category: "screens",
    featured: false,
  },
  {
    id: "8",
    title: "Horeca terras zonwering",
    location: "Tilburg",
    description:
      "Groot knikarmscherm voor een horecaterras. Windvast en voorzien van volant.",
    image: "/placeholders/project-8.jpg",
    category: "zonneschermen",
    featured: false,
  },
];

// Reviews Data
export const reviews: Review[] = [
  {
    id: "1",
    name: "Peter van den Berg",
    location: "Nijmegen",
    rating: 5,
    text: "Uitstekende service van A tot Z. De monteurs waren vakkundig en netjes. Onze rolluiken werken perfect en de woning is veel stiller geworden. Absolute aanrader!",
    date: "2024-02-15",
    product: "Rolluiken",
  },
  {
    id: "2",
    name: "Marieke Jansen",
    location: "Arnhem",
    rating: 5,
    text: "Hele fijne ervaring. Goed advies gekregen over welke screens het beste bij onze situatie passen. De montage was snel en netjes. We zijn erg blij met het resultaat.",
    date: "2024-01-28",
    product: "Screens",
  },
  {
    id: "3",
    name: "Hans de Vries",
    location: "Eindhoven",
    rating: 5,
    text: "Top bedrijf! Ons zonnescherm is prachtig geworden. De prijs-kwaliteit verhouding is uitstekend. De communicatie was helder en de levertijd kort.",
    date: "2024-03-02",
    product: "Zonneschermen",
  },
  {
    id: "4",
    name: "Sandra Bakker",
    location: "Den Bosch",
    rating: 4,
    text: "Goede ervaring met de ombouw naar solar motoren. Geen rommel in huis en alles werkt naar behoren. Kleine vertraging in levering, maar verder top!",
    date: "2024-02-20",
    product: "Solar Motoren",
  },
  {
    id: "5",
    name: "Willem Hendriks",
    location: "Apeldoorn",
    rating: 5,
    text: "Vakwerk! De rolluiken passen perfect en de elektrische bediening werkt probleemloos. Het team van GLS is professioneel en denkt mee met de klant.",
    date: "2024-01-10",
    product: "Rolluiken",
  },
];

// Werkwijze Steps
export const steps: Step[] = [
  {
    id: 1,
    title: "Inmeten",
    description:
      "Wij komen vrijblijvend bij u langs om nauwkeurig op te meten en uw wensen te bespreken.",
    icon: "Ruler",
  },
  {
    id: 2,
    title: "Advies op maat",
    description:
      "Op basis van de inmeting ontvangt u een persoonlijk advies en een heldere offerte.",
    icon: "FileText",
  },
  {
    id: 3,
    title: "Montage",
    description:
      "Onze ervaren monteurs installeren uw zonwering vakkundig en netjes.",
    icon: "Wrench",
  },
  {
    id: 4,
    title: "Nazorg & garantie",
    description:
      "U krijgt uitleg over de bediening en wij staan klaar voor service en garantie.",
    icon: "ShieldCheck",
  },
];

// Company Info
export const companyInfo = {
  name: "GLS Zonwering & Rolluiken",
  slogan: "U vraagt, wij plaatsen",
  phone: "06 29062094",
  email: "info@gls-zonwering.nl",
  region: "Gelderland / Brabant",
  address: {
    street: "De Huurinck 2",
    postalCode: "6603 LZ",
    city: "Wijchen",
  },
  socialMedia: {
    facebook: "https://facebook.com/glszonwering",
    instagram: "https://instagram.com/glszonwering",
  },
  openingHours: {
    weekdays: "08:00 - 18:00",
    saturday: "09:00 - 14:00",
    sunday: "Gesloten",
  },
};

// Navigation
export const navigation = [
  { name: "Producten", href: "/producten" },
  { name: "Projecten", href: "/projecten" },
  { name: "Werkwijze", href: "/#werkwijze" },
  { name: "Reviews", href: "/#reviews" },
  { name: "Contact", href: "/contact" },
];

// Average rating calculation
export const averageRating =
  reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
