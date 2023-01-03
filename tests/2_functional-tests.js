const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
    suite("Translation with text and locale fields: POST request to /api/translate", function () {
        test("american-to-british", function (done) {
            chai.request(server)
                .post('/api/translate')
                .send({ text: 'Mangoes are my favorite fruit.', locale: 'american-to-british' })
                .end((err, res) => {
                    assert.equal(res.status, 200);
                    assert.isObject(res.body);
                    assert.hasAllKeys(res.body, ['text', 'translation']);
                    assert.equal(res.body.text, 'Mangoes are my favorite fruit.');
                    assert.equal(res.body.translation, 'Mangoes are my <span class="highlight">favourite</span> fruit.');
                    done();
                });
        });
        test("british-to-american", function (done) {
            chai.request(server)
                .post('/api/translate')
                .send({ text: 'We watched the footie match for a while.', locale: 'british-to-american' })
                .end((err, res) => {
                    assert.equal(res.status, 200);
                    assert.isObject(res.body);
                    assert.hasAllKeys(res.body, ['text', 'translation']);
                    assert.equal(res.body.text, 'We watched the footie match for a while.');
                    assert.equal(res.body.translation, "We watched the <span class=\"highlight\">soccer</span> match for a while.");
                    done();
                });
        });
    });

    test("Translation with text and invalid locale field: POST request to /api/translate", function (done) {
        chai.request(server)
            .post('/api/translate')
            .send({ text: 'Mangoes are my favorite fruit.', locale: 'something-else' })
            .end((err, res) => {
                assert.equal(res.status, 200);
                assert.isObject(res.body);
                assert.hasAllKeys(res.body, ['error']);
                assert.equal(res.body.error, 'Invalid value for locale field');
                done();
            });
    });

    test("Translation with missing text field: POST request to /api/translate", function (done) {
        chai.request(server)
            .post('/api/translate')
            .send({ locale: 'american-to-british' })
            .end((err, res) => {
                assert.equal(res.status, 200);
                assert.isObject(res.body);
                assert.hasAllKeys(res.body, ['error']);
                assert.equal(res.body.error, 'Required field(s) missing');
                done();
            });
    });

    test("Translation with missing locale field: POST request to /api/translate", function (done) {
        chai.request(server)
            .post('/api/translate')
            .send({ text: 'We watched the footie match for a while.' })
            .end((err, res) => {
                assert.equal(res.status, 200);
                assert.isObject(res.body);
                assert.hasAllKeys(res.body, ['error']);
                assert.equal(res.body.error, 'Required field(s) missing');
                done();
            });
    });

    test("Translation with empty text: POST request to /api/translate", function (done) {
        chai.request(server)
            .post('/api/translate')
            .send({ text: '', locale: 'american-to-british' })
            .end((err, res) => {
                assert.equal(res.status, 200);
                assert.isObject(res.body);
                assert.hasAllKeys(res.body, ['error']);
                assert.equal(res.body.error, 'No text to translate');
                done();
            });
    });

    test("Translation with text that needs no translation: POST request to /api/translate", function (done) {
        chai.request(server)
            .post('/api/translate')
            .send({ text: 'Mangoes are my favorite fruit.', locale: 'british-to-american' })
            .end((err, res) => {
                assert.equal(res.status, 200);
                assert.isObject(res.body);
                assert.hasAllKeys(res.body, ['text', 'translation']);
                assert.equal(res.body.text, 'Mangoes are my favorite fruit.');
                assert.equal(res.body.translation, "Everything looks good to me!");
                done();
            });
    });

});
