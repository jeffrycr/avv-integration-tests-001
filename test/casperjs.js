casper.test.begin('Verify Yahoo! News in Google results for "us news"', function (test) {
    casper.start('http://www.google.com/', function () {
        test.assertExists('form[action="/search"]', 'main form is found');
        this.fill('form[action="/search"]', {
            q: 'us news'
        }, true);
    });
    casper.then(function () {
        test.assertExist('div#search');
        test.assertSelectorHasText('div#search cite', 'news.yahoo.com');
    });
    casper.run(function () {
        test.done();
    });
});