var converterApp = angular.module("converterApp", []);
converterApp.controller("ConverterController", ['$scope', '$http', '$window', 'converter', 'analyzer', function($scope, $http, $window, converter, analyzer) {
  $scope.button = "Submit"
  $scope.SendData = function(isValid) {
    if (isValid) {
      if ($scope.button == "Submit") {
        var data = $.param({
          inputSeq: $scope.dna_seq
        });

        var dnaDataMessage = "DNA breakdown: ";
        var rnaMessage = "RNA Sequence: ";
        var aaMessage = "Amino Acid Sequence: ";
        var input = $('textarea[name=dna_seq]').val().toLowerCase();

        var config = {
          headers : {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
          }
        };

        $scope.button = "Reset";
        $http.post("/translators", data, config)
        .success(function (data, status, headers, config) {
          $scope.rnaSeq = rnaMessage + converter.getRNA(input);
          $scope.aaSeq = aaMessage + converter.getAA(input);
          $scope.dnaMessage = dnaDataMessage;
          $scope.dnaData = analyzer.run(input);
        });
      } else {
        $window.location.reload()
        $scope.button = "Submit";
      };
    } else {
      alert('Please make sure the sequence is at least 3 characters long.');
    };
  };
}]);
