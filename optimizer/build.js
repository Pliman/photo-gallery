({
	baseUrl: 'app',
	paths: {
		angular: 'lib/angular/angular',
		angularResource: 'lib/angular/angular-resource',
		jQuery: 'lib/jquery/jquery-1.10.1',
		bootstrap: 'lib/bootstrap/bootstrap',
		angularUiRouter: 'lib/angular/angular-ui-router',
		underscore: 'lib/underscore/underscore',
		popMsger: 'js/widgets/pop-msger'
	},
	shim: {
		bootstrap: {
			deps: ['jQuery']
		},
		underscore: {
			exports: "_"
		},
		jQuery: {
			exports: "jQuery"
		},
		angular: {
			exports: "angular"
		},
		angularUiRouter: {
			deps: ['angular']
		},
		angularResource: {
			deps: ['angular']
		},
		popMsger: {
			deps: ['jQuery', 'bootstrap']
		}
	}
})