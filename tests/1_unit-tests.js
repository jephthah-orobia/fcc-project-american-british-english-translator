const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

suite('Unit Tests', () => {
    const translator = new Translator();
    suite('Translate to British English:', function () {
        test("Mangoes are my favorite fruit.",
            function (done) {
                let brit;
                assert.doesNotThrow(() => brit = translator.toBritish("Mangoes are my favorite fruit."));
                assert.equal(brit, "Mangoes are my <span class=\"highlight\">favourite</span> fruit.");
                done();
            });

        test("I ate yogurt for breakfast.",
            function (done) {
                let brit;
                assert.doesNotThrow(() => brit = translator.toBritish("I ate yogurt for breakfast."));
                assert.equal(brit, "I ate <span class=\"highlight\">yoghurt</span> for breakfast.");
                done();
            });

        test("We had a party at my friend's condo.",
            function (done) {
                let brit;
                assert.doesNotThrow(() => brit = translator.toBritish("We had a party at my friend's condo."));
                assert.equal(brit, "We had a party at my friend's <span class=\"highlight\">flat</span>.");
                done();
            });

        test("Can you toss this in the trashcan for me?",
            function (done) {
                let brit;
                assert.doesNotThrow(() => brit = translator.toBritish("Can you toss this in the trashcan for me?"));
                assert.equal(brit, "Can you toss this in the <span class=\"highlight\">bin</span> for me?");
                done();
            });

        test("The parking lot was full.",
            function (done) {
                let brit;
                assert.doesNotThrow(() => brit = translator.toBritish("The parking lot was full."));
                assert.equal(brit, "The <span class=\"highlight\">car park</span> was full.");
                done();
            });

        test("Like a high tech Rube Goldberg machine.",
            function (done) {
                let brit;
                assert.doesNotThrow(() => brit = translator.toBritish("Like a high tech Rube Goldberg machine."));
                assert.equal(brit, "Like a high tech <span class=\"highlight\">Heath Robinson device</span>.");
                done();
            });

        test("To play hooky means to skip class or work.",
            function (done) {
                let brit;
                assert.doesNotThrow(() => brit = translator.toBritish("To play hooky means to skip class or work."));
                assert.equal(brit, "To <span class=\"highlight\">bunk off</span> means to skip class or work.");
                done();
            });

        test("No Mr. Bond, I expect you to die.",
            function (done) {
                let brit;
                assert.doesNotThrow(() => brit = translator.toBritish("No Mr. Bond, I expect you to die."));
                assert.equal(brit, "No <span class=\"highlight\">Mr</span> Bond, I expect you to die.");
                done();
            });

        test("Dr. Grosh will see you now.",
            function (done) {
                let brit;
                assert.doesNotThrow(() => brit = translator.toBritish("Dr. Grosh will see you now."));
                assert.equal(brit, "<span class=\"highlight\">Dr</span> Grosh will see you now.");
                done();
            });

        test("Lunch is at 12:15 today.",
            function (done) {
                let brit;
                assert.doesNotThrow(() => brit = translator.toBritish("Lunch is at 12:15 today."));
                assert.equal(brit, "Lunch is at <span class=\"highlight\">12.15</span> today.");
                done();
            });
    });

    suite('Translate to Americal English:', function () {

        test("We watched the footie match for a while.",
            function (done) {
                let amer;
                assert.doesNotThrow(() => amer = translator.toAmerican("We watched the footie match for a while."));
                assert.equal(amer, "We watched the <span class=\"highlight\">soccer</span> match for a while.");
                done();
            });

        test("Paracetamol takes up to an hour to work.",
            function (done) {
                let amer;
                assert.doesNotThrow(() => amer = translator.toAmerican("Paracetamol takes up to an hour to work."));
                assert.equal(amer, "<span class=\"highlight\">Tylenol</span> takes up to an hour to work.");
                done();
            });

        test("First, caramelise the onions.",
            function (done) {
                let amer;
                assert.doesNotThrow(() => amer = translator.toAmerican("First, caramelise the onions."));
                assert.equal(amer, "First, <span class=\"highlight\">caramelize</span> the onions.");
                done();
            });

        test("I spent the bank holiday at the funfair.",
            function (done) {
                let amer;
                assert.doesNotThrow(() => amer = translator.toAmerican("I spent the bank holiday at the funfair."));
                assert.equal(amer, "I spent the <span class=\"highlight\">public holiday</span> at the <span class=\"highlight\">carnival</span>.");
                done();
            });

        test("I had a bicky then went to the chippy.",
            function (done) {
                let amer;
                assert.doesNotThrow(() => amer = translator.toAmerican("I had a bicky then went to the chippy."));
                assert.equal(amer, "I had a <span class=\"highlight\">cookie</span> then went to the <span class=\"highlight\">fish-and-chip shop</span>.");
                done();
            });

        test("I've just got bits and bobs in my bum bag.",
            function (done) {
                let amer;
                assert.doesNotThrow(() => amer = translator.toAmerican("I've just got bits and bobs in my bum bag."));
                assert.equal(amer, "I've just got <span class=\"highlight\">odds and ends</span> in my <span class=\"highlight\">fanny pack</span>.");
                done();
            });

        test("The car boot sale at Boxted Airfield was called off.",
            function (done) {
                let amer;
                assert.doesNotThrow(() => amer = translator.toAmerican("The car boot sale at Boxted Airfield was called off."));
                assert.equal(amer, "The <span class=\"highlight\">swap meet</span> at Boxted Airfield was called off.");
                done();
            });

        test("Have you met Mrs Kalyani?",
            function (done) {
                let amer;
                assert.doesNotThrow(() => amer = translator.toAmerican("Have you met Mrs Kalyani?"));
                assert.equal(amer, "Have you met <span class=\"highlight\">Mrs.</span> Kalyani?");
                done();
            });

        test("Prof Joyner of King's College, London.",
            function (done) {
                let amer;
                assert.doesNotThrow(() => amer = translator.toAmerican("Prof Joyner of King's College, London."));
                assert.equal(amer, "<span class=\"highlight\">Prof.</span> Joyner of King's College, London.");
                done();
            });

        test("Tea time is usually around 4 or 4.30.",
            function (done) {
                let amer;
                assert.doesNotThrow(() => amer = translator.toAmerican("Tea time is usually around 4 or 4.30."));
                assert.equal(amer, "Tea time is usually around 4 or <span class=\"highlight\">4:30</span>.");
                done();
            });
    });

    suite('Highlight translation in:', function () {

        test("Mangoes are my favorite fruit.",
            function (done) {
                let translation;
                assert.doesNotThrow(() => translation = translator.toBritish("Mangoes are my favorite fruit."));
                assert.equal(translation, "Mangoes are my <span class=\"highlight\">favourite</span> fruit.")
                done();
            });

        test("I ate yogurt for breakfast.",
            function (done) {
                let translation;
                assert.doesNotThrow(() => translation = translator.toBritish("I ate yogurt for breakfast."));
                assert.equal(translation, "I ate <span class=\"highlight\">yoghurt</span> for breakfast.")
                done();
            });

        test("We watched the footie match for a while.",
            function (done) {
                let translation;
                assert.doesNotThrow(() => translation = translator.toAmerican("We watched the footie match for a while."));
                assert.equal(translation, "We watched the <span class=\"highlight\">soccer</span> match for a while.");
                done();
            });

        test("Paracetamol takes up to an hour to work.",
            function (done) {
                let translation;
                assert.doesNotThrow(() => translation = translator.toAmerican("Paracetamol takes up to an hour to work."));
                assert.equal(translation, "<span class=\"highlight\">Tylenol</span> takes up to an hour to work.")
                done();
            });

    });

});
