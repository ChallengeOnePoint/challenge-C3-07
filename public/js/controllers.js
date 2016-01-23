'use strict';

var cards = [
  {
    id: 1,
    content: 'Lorem ipsum dolor sit amet etc esornegnobr fnzoi cionec nzfoezinfioeznf ionezfi nezofneziofn ieoznf oiez fjfioez',
    background: 'bg-success',
    readOnly: true
  },
  {
    id: 2,
    content: 'Lorem ipsum dolor sit amet etc esornegnobr fnzoi Lorem ipsum dolor sit amet etc esornegnobr fnzoi cionec nzfoezinfioeznf ionezfi nezofneziofn ieoznf oiez fjfioez',
    background: 'bg-warning'
  },
  {
    id: 3,
    content: 'Lorem ipsum dolor sit amet etc esornegnob ionezfi nezofneziofn ieoznf oiez fjfioez',
    background: null
  },
  {
    id: 4,
    content: 'Lorem ipsum dolor sit amet etc esornegnobr fnzoifnzoi cionec nzfoezinfioeznf ionezfi nezofneziofn ieoznf oiez fjfioez',
    background: 'bg-danger'
  }
];


/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function ($scope, socket) {
    socket.on('send:name', function (data) {
      $scope.name = data.name;
    });
  }).
  controller('MyCtrl1', function ($scope, socket, ModalService) {
    
    $scope.cards = cards;
    
    socket.on('send:time', function (data) {
      $scope.time = data.time;
    });
    
    
    $scope.openPostitForm = function(postit) {
      ModalService.showModal({
        templateUrl: 'partials/postit-form.html',
        controller: 'PostitFormModal',
        inputs: {
          postit: postit
        }
      }).then(function(modal) {
        modal.element.modal();
        modal.close.then(function(newPostit) {
          postit.content = newPostit.content;
          postit.background = newPostit.background;
        });
      });

    };

  }).
  controller('MyCtrl2', function ($scope) {
    // write Ctrl here
  }).
  controller('PostitFormModal', function($scope, $element, postit) {
    $scope.postit = angular.copy(postit);
    
    $scope.backgroundOptions = [
      {
        class: '',
        text: 'Normal'
      },
      {
        class: 'bg-success',
        text: 'Success'
      },
      {
        class: 'bg-warning',
        text: 'Warning'
      },
      {
        class: 'bg-danger',
        text: 'Danger'
      }      
    ];
    
    $scope.close = function() {
      close($scope.postit, 500);
    };

    $scope.cancel = function() {
      $element.modal('hide');
      close(postit, 500);
    };
  });
