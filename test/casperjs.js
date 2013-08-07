var casper = require('casper').create();

casper.start('http://www.google.com/', function () {
    this.test.assertExists('form[action="/search"]', 'main form is found');
    this.fill('form[action="/search"]', {
        q: 'us news'
    }, true);
});
casper.then(function() {
var cites = document.querySelectorAll('.f cite'),
		found = false,
		i;
	
	for (i = 0; i < cites.length && !found; i += 1) {
	this.echo(cites[i].textContent);
	  if (cites[i].textContent === "news.yahoo.com/us/") {
		found = true;
	  }
	}
	this.echo(found);
	this.test.assert(found, 'Found Yahoo News');  
});
casper.run(function () {
    this.test.renderResults(true);
});