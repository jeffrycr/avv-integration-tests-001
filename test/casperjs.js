var casper = require('casper').create();

casper.start('http://www.google.com/', function () {
    this.test.assertExists('form[action="/search"]', 'main form is found');
    this.fill('form[action="/search"]', {
        q: 'us news'
    }, true);
	   this.test.assertSelectorHasText('.f cite','news.yahoo.com/us/');
});

casper.then(function () {
  // this.test.assertSelectorHasText('.f cite','news.yahoo.com/us/');
	//  var links = document.querySelectorAll('.f cite');
	//     this.echo(this.fetchText('.f cite'));
	//  this.echo(links);
});

casper.run(function () {
    this.test.renderResults(true);
});