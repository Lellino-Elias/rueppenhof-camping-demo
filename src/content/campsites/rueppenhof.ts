import type { CampsiteConfig } from "../types";

/**
 * Camping Rueppenhof — Thiersee, Tirol.
 * Inhalte zu 100 % aus der eigenen Quelle (raw/digest) abgeleitet. Bilder ausschließlich
 * aus dem hauseigenen Archiv (geschichte.php) — alle aktuellen Fotos der Quelle lagen unter
 * 800 px (tooSmall) und dürfen nicht ausgeliefert werden; daher ein bewusst ehrlicher,
 * heritage-getönter Build in Schwarz-Weiß. Design fix: keine theme-Palette, heroVariant center.
 */
const IMG = "/campsites/rueppenhof";

const rueppenhof: CampsiteConfig = {
  name: "Camping Rueppenhof",
  shortName: "Rueppenhof",
  slug: "rueppenhof",
  ort: "Thiersee",
  region: "Tirol",
  brandKind: "Camping am Thiersee",
  see: "Thiersee",
  regionLong: "Thiersee · Kufsteinerland · Tirol",

  heroVariant: "center",

  claim: "Dein Campingsommer direkt am Thiersee",
  claimEmphasis: "am Thiersee",
  emailDetail: "euer eigener Badestrand am Thiersee",
  intro:
    "Ein kleiner, familiengeführter Campingplatz direkt am Thiersee — mit eigenem Badestrand, ruhigen Stellplätzen nah am Wasser und den Tiroler Bergen ringsum. Hier zählt noch der persönliche Empfang.",

  statement: {
    text: "Vom Stellplatz sind es höchstens 100 Meter bis zum Wasser.",
    emphasis: "100 Meter",
  },

  pillars: [
    {
      title: "Mitten in der Natur",
      text: "Ruhig gelegen zwischen Wiese, Wald und den Tiroler Bergen — und doch nur rund 800 Meter vom Ortskern.",
      image: { src: `${IMG}/gallery-e162abba7e.webp`, alt: "Stellplatz am Bauernhaus des Camping Rueppenhof vor den Bergen" },
    },
    {
      title: "Ein echter Familienbetrieb",
      text: "Seit Jahrzehnten ein kleiner Familienbetrieb: Bei Familie Atzl bleibt Zeit für deine Fragen und Wünsche.",
      image: { src: `${IMG}/gallery-f7b0758178.webp`, alt: "Eingangsschild Campingplatz Rueppenhof in Thiersee" },
    },
    {
      title: "Sommer auf der Wiese",
      text: "Gemütliche Plätze auf der Wiese, Lagerfeuer am Abend und ein Sommer, der herrlich unkompliziert bleibt.",
      image: { src: `${IMG}/gallery-9634631a24.webp`, alt: "Gäste auf der Campingwiese am Rueppenhof" },
    },
  ],

  usps: [
    "Eigener Badestrand",
    "Direkt am Thiersee",
    "Gratis WLAN",
    "Hunde willkommen",
    "Bogenschießen inklusive",
    "Familienbetrieb",
  ],

  trust: {
    heading: "Klein, persönlich, direkt am See",
    headingEmphasis: "direkt am See",
    intro:
      "Ein überschaubarer Platz mit eigenem Badestrand, auf dem die Familie Atzl noch selbst anpackt — ruhige Stellplätze nah am Wasser, kurze Wege und ein ehrlicher Tiroler Empfang.",
  },

  awards: [],

  saison: { von: "April", bis: "Oktober" },

  hero: {
    aerial: { src: `${IMG}/gallery-b28abd86e5.webp`, alt: "Zelte auf der Wiese am Camping Rueppenhof mit Blick auf die Tiroler Berge" },
  },

  camping: {
    heading: "Dein Platz am Wasser",
    intro:
      "Ebene Wiesenstellplätze, ein eigener Badestrand und alles für unkomplizierte Campingtage — vom Lagerfeuer bis zum kostenlosen Autowaschplatz.",
    features: [
      {
        title: "Stellplätze mit Bergblick",
        text: "26 Dauer- und 38 Urlauberstellplätze mit Strom, sonnig oder halbschattig — und nie weiter als 100 Meter vom See.",
        image: { src: `${IMG}/gallery-0bd1135eb5.webp`, alt: "Luftaufnahme des Camping Rueppenhof direkt am Thiersee mit Stellplätzen und Tiroler Bergen" },
      },
      {
        title: "Echtes Campingleben",
        text: "Lagerfeuerstelle und Kohlegrillplatz gehören dazu, gegrillt wird auch mit Gas — Camping, wie es sein soll.",
        image: { src: `${IMG}/gallery-8a82e80ceb.webp`, alt: "Campingalltag am Zelt auf dem Rueppenhof" },
      },
      {
        title: "Zeit zum Ausspannen",
        text: "Ein überschaubarer Platz, auf dem sich die Familie Atzl noch persönlich Zeit für deine Wünsche nimmt.",
        image: { src: `${IMG}/gallery-255a41d70b.webp`, alt: "Entspannen in Liegestühlen am Camping Rueppenhof" },
      },
    ],
  },

  kinder: {
    heading: "Wo Kinder noch draußen sind",
    intro:
      "Als Familienbetrieb achten wir besonders auf die Sicherheit der Kinder — mit Spielplatz, dem Bach zum Stauen und Bogenschießen für Groß und Klein.",
    features: [
      {
        title: "Spielen mitten in der Natur",
        text: "In ruhiger, idyllischer Lage können sich die Kinder beim Spielen so richtig austoben und entfalten.",
        image: { src: `${IMG}/gallery-fbdc8728d9.webp`, alt: "Kind beim Spielen am Camping Rueppenhof" },
      },
      {
        title: "Immer etwas zu entdecken",
        text: "Vom Spielplatz bis zur Mündung des Tuftbaches, die von Klein und Groß immer wieder neu gestaltet wird.",
        image: { src: `${IMG}/gallery-5b7f347a03.webp`, alt: "Kind auf Entdeckungstour am Camping Rueppenhof" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg nach Thiersee",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die A12 bis Ausfahrt Kufstein-Nord (vignettenfrei), dann rund 7 km nach Thiersee — der Platz ist gut beschildert.",
      },
      {
        title: "Mit der Bahn",
        text: "Nächster Bahnhof ist Kufstein, rund 10 km entfernt; weiter mit Bus oder Taxi bis nach Thiersee.",
      },
      {
        title: "Lage am See",
        text: "Der Platz liegt direkt am Thiersee, etwa 800 Meter vom Ortszentrum entfernt.",
      },
    ],
  },

  galerie: {
    heading: "Aus dem Archiv",
    headingEmphasis: "Archiv",
    intro: "Eindrücke vom Platz — aktuelle Fotos folgen vom Betrieb.",
    tag: "Thiersee",
    images: [],
  },

  booking: {
    heading: "Sichere dir deinen Platz am Thiersee",
    headingEmphasis: "am Thiersee",
    intro: "Wähle Zeitraum und Personen — Familie Atzl meldet sich persönlich mit deiner Verfügbarkeit zurück.",
    pricesArePlaceholder: false,
    priceNote:
      "Unverbindliche Richtwerte (Vor- und Nachsaison) · zzgl. Ortstaxe € 3,50 und Umweltbeitrag € 2,00 pro Person/Nacht, Strom nach Verbrauch.",
    highlight: {
      title: "Eigener Badestrand",
      text: "Die Badegebühr am platzeigenen Strand ist bei uns immer inklusive.",
    },
    categories: [
      { id: "stellplatz", label: "Stellplatz", perNight: 23, perExtraGuest: 8 },
      { id: "schlaffass", label: "Schlaffass", perNight: 40, perExtraGuest: 8 },
      { id: "fewo", label: "Ferienwohnung", perNight: 88, perExtraGuest: 15 },
    ],
  },

  kontakt: {
    tel: "+43 664 99049137",
    telHref: "tel:+4366499049137",
    mail: "email@rueppenhof.com",
    adresse: "Seebauern 8 · 6335 Thiersee · Tirol",
    coords: { lat: 47.587706, lng: 12.1169544 },
  },

  languages: ["DE", "NL"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Stellplätze", href: "#camping" },
        { label: "Am See", href: "#camping" },
      ],
    },
    { label: "Familie", href: "#kinder" },
    { label: "Anreise", href: "#anreise" },
    { label: "Preise", href: "#booking" },
  ],
};

export default rueppenhof;
