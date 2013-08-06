var casper = require('casper').create();

casper.start('http://www.google.com/', function () {
    this.test.assertExists('form[action="/search"]', 'main form is found');
    this.fill('form[action="/search"]', {
        q: 'us news'
    }, true);
	var a=document.querySelectorAll('.f cite').textContent;
	var i=0;
	while(i< a.length){
	   this.test.assertEquals(a[i],'news.yahoo.com/us/');
	    i += 1;
	}   
	   
});

casper.then(function () {
  // this.test.assertSelectorHasText('.f cite','news.yahoo.com/us/');
	//  var links = document.querySelectorAll('.f cite');
	   this.echo(this.fetchText('.f cite'));
	//  this.echo(links);
});

casper.run(function () {
    this.test.renderResults(true);
});