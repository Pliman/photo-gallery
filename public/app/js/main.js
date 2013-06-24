'use strict';

define(['./app'], function () {
	'use strict';

	$(document).ready(function () {
		var $html = $('html');
		angular.bootstrap($html, ['photo-gallery']);
		$html.addClass('ng-app');
	});
});
