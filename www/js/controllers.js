angular.module('app.controllers', ['ionic'])
  
.controller('localizarCtrl', function($scope, $ionicPopup) {
	$scope.localizarPainel = function() {
	   var alertPopup = $ionicPopup.confirm({
		 title: 'Painel',
		 template: '<center><b>Ativar visão do Painel?</b></center>'
	   });

	   alertPopup.then(function(res) {
		 console.log('info painel car');
	   });
	};

	$scope.localizarPower = function() {
	   var alertPopup = $ionicPopup.alert({
		 title: 'Ignição',
		 template: '<center><b>Desligada</b></center>'
	   });

	   alertPopup.then(function(res) {
		 console.log('info power car');
	   });
	};
	
	$scope.localizarAlarm = function() {
	   var alertPopup = $ionicPopup.alert({
		 title: 'Alarme',
		 template: '<center><b>Ativado</b></center>'
	   });

	   alertPopup.then(function(res) {
		 console.log('info alarm car');
	   });
	};
	
	$scope.localizarCorrente = function() {
	   var alertPopup = $ionicPopup.alert({
		 title: 'Corte de Corrente',
		 template: '<center><b>Ativado</b></center>'
	   });

	   alertPopup.then(function(res) {
		 console.log('info alarm car');
	   });
	};
	
	$scope.localizarSeguir = function() {
	   var alertPopup = $ionicPopup.confirm({
		 title: 'Seguir ',
		 template: '<center><b>Deseja seguir o Veículo?</b></center>'
	   });

	   alertPopup.then(function(res) {
		 console.log('info alarm car');
	   });
	};
	
	$scope.localizarGravador = function() {
	   var alertPopup = $ionicPopup.confirm({
		 title: 'Gravar Áudio',
		 template: '<center><b>Deseja iniciar gravação de áudio?</b></center>'
	   });

	   alertPopup.then(function(res) {
		 console.log('info alarm car');
	   });
	};
	
	$scope.localizarCompartilhar = function() {
	   var alertPopup = $ionicPopup.confirm({
		 title: 'Compartilhar',
		 template: '<center><b>Deseja compartilhar a posição do veículo?</b></center>'
	   });

	   alertPopup.then(function(res) {
		 console.log('info alarm car');
	   });
	};
	
	$scope.localizarAlertas = function() {
	   var alertPopup = $ionicPopup.alert({
		 title: 'Alertas',
		 template: '<center><b>Você não possui alertas neste momento!</b></center>'
	   });

	   alertPopup.then(function(res) {
		 console.log('info alarm car');
	   });
	};
	

})
         
.controller('acoesCtrl', function($scope) {

})
   
.controller('funcoesCtrl', function($scope) {

})
   
.controller('veiculoCtrl', function($scope) {

})
   
.controller('rastreadorCtrl', function($scope) {

})
   
.controller('chipCtrl', function($scope) {

})
   
.controller('seguradoraCtrl', function($scope) {

})
   
.controller('monitoramento24hrsCtrl', function($scope) {

})
 