'use strict';

angular.module('appTrackerApp')
  .factory('Applicant', function($resource){
  	return $resource('/api/applicants/:id/:controller', {
  		id: '@_id'
  	},
  	{
  		'update': {method: 'PUT', params:{id: '@_id'}}
  	});
  });