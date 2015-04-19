Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function () {
	this.route('home', {
		path: '/',
	    onAfterAction: function() {
	    	document.title = "Santos Jiménez Linares | Home";
	    }
	});
	this.route('contact', {
		path: '/contact',
		onAfterAction: function() {
			document.title = "Santos Jiménez Linares | Contact";
		}
	});
});