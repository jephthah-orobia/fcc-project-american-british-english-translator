const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
    highlight(str) {
        return "<span class=\"highlight\">" + str + "</span>"
    }

    replaceAccordingTo(propName = true, toTranslate, dictionary, ignoreCase = true) {
        const toReplace = [];
        for (let key in dictionary) {
            let rx;
            if (propName) {
                if (key.includes('.'))
                    rx = new RegExp('\\b' + key.replace(/\./, '\\.'), ignoreCase ? "ig" : "g");
                else
                    rx = new RegExp('\\b' + key + '\\b', ignoreCase ? "ig" : "g");
                if (rx.test(toTranslate))
                    toReplace.push([rx, dictionary[key]]);
            } else {
                let val = dictionary[key];
                if (val.includes('.'))
                    rx = new RegExp('\\b' + val.replace(/\./, '\\.'), ignoreCase ? "ig" : "g");
                else
                    rx = new RegExp('\\b' + val + '\\b', ignoreCase ? "ig" : "g");
                if (rx.test(toTranslate))
                    toReplace.push([rx, key]);
            }
        }

        return toReplace.reduce(
            (preV, val) => preV.replace(val[0], this.highlight(val[1])),
            toTranslate);
    }

    toBritish(brit) {
        let toReturn = this.replaceAccordingTo(true, brit, americanOnly);
        toReturn = this.replaceAccordingTo(true, toReturn, americanToBritishTitles, false)
        toReturn = this.replaceAccordingTo(true, toReturn, americanToBritishSpelling)
        toReturn = toReturn.replace(/(\d{1,2}):(\d{2})/g, this.highlight("$1.$2"));
        if (brit === toReturn)
            return "Everything looks good to me!";
        else
            return toReturn;
    }

    toAmerican(amer) {
        let toReturn = this.replaceAccordingTo(true, amer, britishOnly);
        toReturn = this.replaceAccordingTo(false, toReturn, americanToBritishTitles, false);
        toReturn = this.replaceAccordingTo(false, toReturn, americanToBritishSpelling);
        toReturn = toReturn.replace(/(\d{1,2}).(\d{2})/g, this.highlight("$1:$2"));
        if (amer === toReturn)
            return "Everything looks good to me!";
        else
            return toReturn;
    }
}

module.exports = Translator;