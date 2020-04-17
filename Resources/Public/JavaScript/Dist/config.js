// By default, Klaro will load the config from  a global "klaroConfig" variable.
// You can change this by specifying the "data-config" attribute on your
// script take, e.g. like this:
// <script src="klaro.js" data-config="myConfigVariableName" />
// You can also disable auto-loading of the consent notice by adding
// data-no-auto-load=true to the script tag.
var klaroConfig = {
    // You can customize the ID of the DIV element that Klaro will create
    // when starting up. If undefined, Klaro will use 'klaro'.
    elementID: 'klaro',

    // How Klaro should store the user's preferences. It can be either 'cookie'
    // (the default) or 'localStorage'.
    storageMethod: 'cookie',

    // You can customize the name of the cookie that Klaro uses for storing
    // user consent decisions. If undefined, Klaro will use 'klaro'.
    cookieName: 'klaro',

    // You can also set a custom expiration time for the Klaro cookie.
    // By default, it will expire after 120 days.
    cookieExpiresAfterDays: 365,

    // You can change to cookie domain for the consent manager itself.
    // Use this if you want to get consent once for multiple matching domains.
    // If undefined, Klaro will use the current domain.
    //cookieDomain: '.github.com',

    // Put a link to your privacy policy here (relative or absolute).
    privacyPolicy: '/datenschutzerklaerung',

    // Defines the default state for applications (true=enabled by default).
    default: false,

    // If "mustConsent" is set to true, Klaro will directly display the consent
    // manager modal and not allow the user to close it before having actively
    // consented or declines the use of third-party apps.
    mustConsent: false,

    // Show "accept all" to accept all apps instead of "ok" that only accepts
    // required and "default: true" apps
    acceptAll: true,

    // replace "decline" with cookie manager modal
    hideDeclineAll: false,

    // You can define the UI language directly here. If undefined, Klaro will
    // use the value given in the global "lang" variable. If that does
    // not exist, it will use the value given in the "lang" attribute of your
    // HTML tag. If that also doesn't exist, it will use 'en'.
    //lang: 'en',

    // You can overwrite existing translations and add translations for your
    // app descriptions and purposes. See `src/translations/` for a full
    // list of translations that can be overwritten:
    // https://github.com/KIProtect/klaro/tree/master/src/translations

    // Example config that shows how to overwrite translations:
    // https://github.com/KIProtect/klaro/blob/master/src/configs/i18n.js

    translations: {
        // If you erase the "consentModal" translations, Klaro will use the
        // bundled translations.
        de: {
            consentModal: {
                description:
                    'Hier können Sie einsehen und anpassen, welche Information wir über Sie sammeln und welche externe Dienste verwendet werden.',
            },
            youtube: {
                description: 'Eingebettete Videos anzeigen',
            },
            googlemaps: {
                description: 'Eingebettete Karten anzeigen',
            },
            googleanalytics: {
                description: 'Sammeln von Besucherstatistiken',
            },
            adsense: {
                description: 'Anzeigen von Werbeanzeigen',
            },
            language: {
                description:
                    'Speichern der Sprache-Einstellungen',
            },
            cookieconsent: {
                description: 'Speichern der Cookie-Einstellungen',
            },
            purposes: {
                content: 'Multimedia Inhalte',
                analytics: 'Besucher-Statistiken',
                security: 'Sicherheit',
                advertising: 'Anzeigen von Werbung',
                styling: 'Styling',
                functional: 'Funktional',
            },
        },
        en: {
            consentModal: {
                description:
                    'Here you can see and customize the information that we collect about you and which external services are used.',
            },
            youtube: {
                description: 'Embedded videos from YouTube',
            },
            googlemaps: {
                description: 'Embedded maps from Google Maps',
            },
            googleanalytics: {
                description: 'Collecting of visitor statistics',
            },
            adsense: {
                description: 'Displaying of advertisements',
            },
            language: {
                description:
                    'Selected language',
            },
            cookieconsent: {
                description: 'Saves your Cookie-Settings',
            },
            purposes: {
                content: 'Multimedia Content',
                analytics: 'Analytics',
                security: 'Security',
                advertising: 'Advertising',
                styling: 'Styling',
                functional: 'Functional',
            },
        },
    },

    // This is a list of third-party apps that Klaro will manage for you.
    // The apps will appear in the modal in the same order as defined here.
    apps: [
        {
            name: 'youtube',
            title: 'YouTube Videos',
            default: false,
            purposes: ['content'],
        },
        {
            name: 'googlemaps',
            title: 'Google Maps',
            default: false,
            purposes: ['content'],
        },
        {
            name: 'googleanalytics',
            default: false,
            title: 'Google Analytics',
            purposes: ['analytics'],
            cookies: [
                // you can also explicitly provide a path and a domain for
                // a given cookie. This is necessary if you have apps that
                // set cookies for a path that is not "/" or a domain that
                // is not the current domain. If you do not set these values
                // properly, the cookie can't be deleted by Klaro
                // (there is no way to access the path or domain of a cookie in JS)
                '_ga', '_gat', '_gid', 'IDE', 'id', 'FLC',
            ],
            callback: function(consent, app) {
                console.log(
                    'User consent for app ' + app.name + ': consent=' + consent
                );
            },
            required: false,
            optOut: false,
            onlyOnce: true,
        },
        {
            name: 'adsense',
            title: 'Google AdSense',
            default: false,
            purposes: ['advertising'],
        },
        {
            name: 'language',
            title: 'Sprach-Einstellungen',
            purposes: ['functional'],
            required: true,
        },
        {
            name: 'cookieconsent',
            title: 'Cookie-Einstellungen',
            purposes: ['functional'],
            required: true,
        },
    ],
};
