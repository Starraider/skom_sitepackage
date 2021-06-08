var klaroConfig = {
  version: 1,
  elementID: "klaro",

  // You can override CSS style variables here. For IE11, Klaro will
  // dynamically inject the variables into the CSS. If you still consider
  // supporting IE9-10 (which you probably shouldn't) you need to use Klaro
  // with an external stylesheet as the dynamic replacement won't work there.
  styling: {
    theme: ["dark", "top", "wide"],
  },
  noAutoLoad: false,
  htmlTexts: true,

  // Setting 'embedded' to true will render the Klaro modal and notice without
  // the modal background, allowing you to e.g. embed them into a specific element
  // of your website, such as your privacy notice.
  embedded: false,

  // You can group services by their purpose in the modal. This is advisable
  // if you have a large number of services. Users can then enable or disable
  // entire groups of services instead of having to enable or disable every service.
  groupByPurpose: true,

  storageMethod: "cookie",
  cookieName: "klaro",
  cookieExpiresAfterDays: 365,

  // You can change to cookie domain for the consent manager itself.
  // Use this if you want to get consent once for multiple matching domains.
  // If undefined, Klaro will use the current domain.
  //cookieDomain: '.github.com',

  // You can change to cookie path for the consent manager itself.
  // Use this to restrict the cookie visibility to a specific path.
  // If undefined, Klaro will use '/' as cookie path.
  //cookiePath: '/',

  // Defines the default state for services (true=enabled by default).
  default: false,

  // If "mustConsent" is set to true, Klaro will directly display the consent
  // manager modal and not allow the user to close it before having actively
  // consented or declines the use of third-party services.
  mustConsent: true,

  // Show "accept all" to accept all services instead of "ok" that only accepts
  // required and "default: true" services
  acceptAll: true,

  // replace "decline" with cookie manager modal
  hideDeclineAll: false,

  // hide "learnMore" link
  hideLearnMore: false,

  // show cookie notice as modal
  noticeAsModal: false,

  //disablePoweredBy: true,

  translations: {
    zz: {
      privacyPolicyUrl: "/special-pages/datenschutzerklaerung/",
    },
    de: {
      privacyPolicyUrl: "/special-pages/datenschutzerklaerung/",
      consentModal: {
        title: "<h4 class='text-primary'>Verwendung von Cookies</h4>",
        description:
          "Wir verwenden Cookies um Ihnen einen best möglichen Service bieten zu können. Hier können Sie einsehen und anpassen, welche Information wir über Sie sammeln.",
      },
      adsense: {
        description: "Anzeigen von Werbeanzeigen",
        title: "Google AdSense Werbung",
      },
      googleanalytics: {
        description:
          "Sammeln von anonymisierten Besucherstatistiken, um den Inhalt dieser Website zu verbessern.",
      },
      googlemaps: {
        description: "Anzeigen von Karten",
      },
      youtube: {
        description: "Anzeigen von YouTube-Videos",
      },
      googleFonts: {
        description: "Web-Schriftarten von Google gehostet",
      },
      mylanguage: {
        description: "Gewählte Sprache",
        title: "Sprach-Cookie",
      },
      cookieconsent: {
        description: "Ihre Cookie Auswahl",
        title: "Cookie-Zustimmung",
      },
      purposes: {
        analytics: "Besucher-Statistiken",
        externalmedia: "Externe Medien",
        functional: "Funktionale Cookies",
        advertising: "Anzeigen von Werbung",
        styling: "Styling",
      },
    },
    en: {
      consentModal: {
        title: "<h4 class='text-primary'>Use of Cookies</h4>",
        description:
          "We use cookies to offer you the best possible service. Here you can see and customize the information that we collect about you.",
      },
      adsense: {
        description: "Displaying of advertisements (just an example)",
        title: "Google Adsense Advertisement",
      },
      googleanalytics: {
        description:
          "Collecting anonymous usage data to improve the content served on this website.",
      },
      googlemaps: {
        description: "Show maps",
      },
      youtube: {
        description: "Show YouTube-Videos",
      },
      googleFonts: {
        description: "Web fonts hosted by Google",
      },
      mylanguage: {
        description: "Your language",
        title: "Language-Cookie",
      },
      cookieconsent: {
        description: "Your Cookie Consent",
        title: "Cookie-Consent",
      },
      purposes: {
        analytics: "Analytics",
        externalmedia: "External Media",
        functional: "Functional cookies",
        advertising: "Advertising",
        styling: "Styling",
      },
    },
  },

  services: [
    {
      name: "googlemaps",
      title: "Google Maps",
      purposes: ["externalmedia"],
    },
    {
      name: "youtube",
      title: "YouTube Videos",
      purposes: ["externalmedia"],
    },
    {
      name: "googleanalytics",
      default: false,
      title: "Google-Analytics",
      purposes: ["analytics"],
      cookies: [
        [/^_ga.*$/i, "/", ".binder-foerdertechnik.de"],
        [/^_gid.*$/i, "/", ".binder-foerdertechnik.de"],
        [/^_dc_gtm.*$/i, "/", ".binder-foerdertechnik.de"],
      ],
      required: false,
    },
    {
      name: "mylanguage",
      purposes: ["functional"],
      required: true,
    },
    {
      name: "cookieconsent",
      purposes: ["functional"],
      required: true,
    },

    /*
    {
      name: "adsense",
      // if you omit the title here Klaro will try to look it up in the
      // translations
      //title: 'Google AdSense',
      purposes: ["advertising"],
    },
    {
      name: "googleFonts",
      title: "Google Fonts",
      purposes: ["styling"],
    },
    */
  ],
};
