var converterApp = angular.module("converterApp", []);
converterApp.controller("ConverterController", function($scope) {
  $scope.input = {
     sequence: "Input Here"
   };
  $scope.rna = {
    rnaSeq: $scope.input.sequence
  };
});
