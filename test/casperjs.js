var casper = require('casper').create();

function getLinks() {
    var links = document.querySelectorAll('.f cite');
    return Array.prototype.map.call(links, function(e) {
	   echo(require('utils').dump(e.getElementsInfo()));
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
    links = this.evaluate(getLinks);
    //this.test.assertUrlMatch(/news.yahoo.com/, 'search term has been submitted');
    this.echo(links);
});

casper.run(function () {
    this.test.renderResults(true);
});