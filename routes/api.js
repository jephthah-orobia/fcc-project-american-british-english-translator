'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {

  const translator = new Translator();

  const locales = ['american-to-british', 'british-to-american'];
  app.route('/api/translate')
    .post((req, res) => {
      let text = req.body?.text;
      let locale = req.body?.locale;
      if (text == undefined || locale == undefined)
        return res.json({ error: 'Required field(s) missing' });
      if (text == '' || text == null)
        return res.json({ error: 'No text to translate' });
      if (!locales.includes(locale))
        return res.json({ error: 'Invalid value for locale field' });
      return res.json({ text: text, translation: locales[0] == locale ? translator.toBritish(text) : translator.toAmerican(text) });
    });
};
