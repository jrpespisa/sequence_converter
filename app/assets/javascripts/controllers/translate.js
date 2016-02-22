var converterApp = angular.module("converterApp", []);
converterApp.controller("ConverterController", function($scope, $http, converter) {
  $scope.SendData = function() {
    var data = $.param({
      inputSeq: $scope.dna_seq
    });

    var input = $('input[name=dna_seq]').val();

    var config = {
      headers : {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
      }
    };

    $http.post("/translators", data, config)
    .success(function (data, status, headers, config) {
      $scope.responseData = converter.getRNA(input);
    })
  };
});
