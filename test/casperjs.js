var casper = require('casper').create();

function getLinks() {
    var links = document.querySelectorAll('.f cite');
	require('utils').dump(this.getElementsInfo('.f cite'));
    return Array.prototype.map.call(links, function(e) {
        return e.getElementsInfo();
    });
}

casper.start('http://www.google.com/', function () {
    this.test.assertExists('form[action="/search"]', 'main form is found');
    this.fill('form[action="/search"]', {
        q: 'news yahoo'
    }, true);
});

casper.then(function () {
     this.test.assertSelectorHasText('.f cite','news.yahoo.com/');
    this.echo(links);
});

casper.run(function () {
    this.test.renderResults(true);
});