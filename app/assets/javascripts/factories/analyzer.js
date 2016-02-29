converterApp.factory('analyzer', function() {
  analyzer = {};
  var dnaCount = function(input) {
    var dnaCount = { a: 0, t: 0, c: 0, g: 0 };
    for (var i = 0; i < input.length; i++) {
      if (dnaCount[input[i]] != null ) {
        dnaCount[input[i]] += 1;
      };
    };
    return dnaCount;
  };

  analyzer.dnaPercentages = function(input) {
    var dnaPercentages = dnaCount(input);
    var dnaTotal = 0;
    for (var key in dnaPercentages) {
      dnaTotal += dnaPercentages[key];
    };
    return dnaPercentages;
  };

  return analyzer;
});
