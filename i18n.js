const i18n = {
  "locales": ["uz", "ru"],
  "defaultLocale": "uz",
  "pages": {
    "*": ["common"]
  },
  "defaultNS": "common",
  "loadLocaleFrom": (lang, ns) =>
    // You can use a dynamic import, fetch, whatever. You should
    // return a Promise with the JSON file.
    import(`./public/locales/${lang}/${ns}.json`).then((m) => m.default),
}

module.exports = i18n;
