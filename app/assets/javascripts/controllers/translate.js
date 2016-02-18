var converterApp = angular.module("converterApp", []);
converterApp.controller("ConverterController", function($scope, $http) {
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
      $scope.responseData = input;
    })
    .error(function (data, status, header, config) {
      $scope.ResponseDetails = "Data: " + data +
      "<hr />status: " + status +
      "<hr />headers: " + header +
      "<hr />config: " + config;
    });
  };
});
