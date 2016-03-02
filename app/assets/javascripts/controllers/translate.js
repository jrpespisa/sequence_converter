var converterApp = angular.module("converterApp", []);
converterApp.controller("ConverterController", ['$scope', '$http', 'converter', 'analyzer', function($scope, $http, converter, analyzer) {
  $scope.button = "Submit"
  $scope.SendData = function(isValid) {
    if (isValid) {
      var data = $.param({
        inputSeq: $scope.dna_seq
      });

      var dnaDataMessage = "DNA breakdown: "
      var rnaMessage = "RNA Sequence: "
      var aaMessage = "Amino Acid Sequence: "
      var input = $('textarea[name=dna_seq]').val().toLowerCase();

      var config = {
        headers : {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
        }
      };

      $http.post("/translators", data, config)
      .success(function (data, status, headers, config) {
        $scope.button = "Reset"
        $scope.rnaSeq = rnaMessage + converter.getRNA(input);
        $scope.aaSeq = aaMessage + converter.getAA(input)
        $scope.dnaMessage = dnaDataMessage
        $scope.dnaData = analyzer.run(input);
      });
    } else {
      alert('Please make sure the sequence is at least 3 characters long.')
    };
  };
}]);
