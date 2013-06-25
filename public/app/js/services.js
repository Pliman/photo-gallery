'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
define(['angular'], function (angular) {
	angular.module('photo-gallery.services', [])
		.value('version', '0.1')
		.value('photo', '0.1');
});
