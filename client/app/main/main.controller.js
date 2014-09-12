'use strict';

angular.module('appTrackerApp')
  .controller('MainCtrl', function ($scope, $http, Applicant) {
    $scope.applicants = Applicant.query();

    $scope.acceptApplicant = function(applicant){
         applicant.status = 'Pending Deposit';
         applicant.$update();
    };

    $scope.acceptDeposit = function(applicant){
      applicant.status = 'Accepted';
      applicant.$update();
    };

  });
