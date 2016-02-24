var converterApp = angular.module("converterApp", []);
converterApp.controller("ConverterController", function($scope, $http, converter) {
  $scope.SendData = function(isValid) {
    if (isValid) {
      var data = $.param({
        inputSeq: $scope.dna_seq
      });

      var rnaMessage = "RNA Sequence: "
      var aaMessage = "Amino Acid Sequence: "
      var input = $('input[name=dna_seq]').val();

      var config = {
        headers : {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
        }
      };

      $http.post("/translators", data, config)
      .success(function (data, status, headers, config) {
        $scope.rnaSeq = rnaMessage + converter.getRNA(input);
        $scope.aaSeq = aaMessage + converter.getAA(input)
      });
    } else {
      alert('Please make sure the sequence is at least 3 characters long.')
    };
  };
});
