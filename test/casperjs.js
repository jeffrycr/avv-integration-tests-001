var casper = require('casper').create();

casper.test.begin('assertSelectorHasText() tests', 1, function(test) {
    casper.start('http://google.com/', function() {
        test.assertSelectorHasText('.f cite', 'news.yahoo.com/us/');
    }).run(function() {
        test.done();
    });
});
/*
casper.start('http://www.google.com/', function () {
    this.test.assertExists('form[action="/search"]', 'main form is found');
    this.fill('form[action="/search"]', {
        q: 'us news'
    }, true);
});

casper.then(function () {
      test.assertSelectorHasText('.f cite','news.yahoo.com/us/');
	  var links = document.querySelectorAll('.f cite');
	     this.echo(this.fetchText('.f cite'));
	  this.echo(links);
});

casper.run(function () {
    this.test.renderResults(true);
});*/