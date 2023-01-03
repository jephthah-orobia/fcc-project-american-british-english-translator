const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
    toBritish(brit) {
        return brit;
    }

    toAmerican(amer) {
        return amer;
    }

    highlightTranslatable(str) {
        return str;
    }
}

module.exports = Translator;