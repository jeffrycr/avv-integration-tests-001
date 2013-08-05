var casper = require('casper').create();


casper.start('http://www.google.com/', function () {
    this.test.assertExists('form[action="/search"]', 'main form is found');
    this.fill('form[action="/search"]', {
        q: 'us news'
    }, true);
});

casper.then(function () {
     this.test.assertSelectorHasText('.f cite','news.yahoo.com/us/');
    this.echo(links);
});

casper.run(function () {
    this.test.renderResults(true);
});