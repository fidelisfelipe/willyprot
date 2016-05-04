angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  .state('controles.localizar', {
    url: '/localizar',
    views: {
      'localizar': {
        templateUrl: 'templates/localizar.html',
        controller: 'localizarCtrl'
      }
    }
  })

  .state('controles', {
    url: '/controles',
    templateUrl: 'templates/controles.html',
    abstract:true
  })

  .state('controles.acoes', {
    url: '/acoes',
    templateUrl: 'templates/acoes.html',
    controller: 'acoesCtrl'
  })

  .state('funcoes', {
    url: '/funcoes',
    templateUrl: 'templates/funcoes.html',
    controller: 'funcoesCtrl'
  })

  .state('veiculo', {
    url: '/veiculoId',
    templateUrl: 'templates/veiculo.html',
    controller: 'veiculoCtrl'
  })

  .state('rastreador', {
    url: '/rastreador',
    templateUrl: 'templates/rastreador.html',
    controller: 'rastreadorCtrl'
  })

  .state('chip', {
    url: '/chip',
    templateUrl: 'templates/chip.html',
    controller: 'chipCtrl'
  })

  .state('seguradora', {
    url: '/seguradoraId',
    templateUrl: 'templates/seguradora.html',
    controller: 'seguradoraCtrl'
  })

  .state('monitoramento24hrs', {
    url: '/monitoramento',
    templateUrl: 'templates/monitoramento24hrs.html',
    controller: 'monitoramento24hrsCtrl'
  })

$urlRouterProvider.otherwise('/controles/localizar')

  

});