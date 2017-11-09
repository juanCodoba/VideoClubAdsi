'use strict';

angular.module('videoClubApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('vehiculos-list', {
        url: '/vehiculos-list/:id',
        template: '<vehiculos-list></vehiculos-list>'
      });
  });
