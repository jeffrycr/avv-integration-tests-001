var casper = require('casper').create();

casper.test.begin('Verify Yahoo! News in Google results for "us news"', function suite(test) {
    casper.start('http://www.google.com/', function () {
    	test.assertExists('form[action="/search"]', 'main form is found');
    	this.fill('form[action="/search"]', {
            q: 'us news'
    	}, true);
    });
    casper.then(function () {
    	test.assertExists('ol#rso');
    });
    casper.run(function () {
    	test.done();
    });
});

    
/*
});
casper.then(function() {
var cites = document.querySelectorAll('.f cite'),
		found = false,
		i;
	this.echo(cites[7].textContent);
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
});*/
