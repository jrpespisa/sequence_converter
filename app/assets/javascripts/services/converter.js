converterApp.factory('converter', function() {
  converter = {};
  var sequenceIterator = function(input, output, map) {
    for (var i = 0; i < input.length; i++) {
      output.push( map[input[i]] || input[i])
    };
    return output;
  };
  var splitChars = function(input) {
    var output = [];
    for (var i = 0; i < input.length; i+=3) {
      output.push(input.substr(i, 3));
    };
    return output;
  };
  converter.getRNA = function(input) {
    var rnaSeq = [];
    var map = {
      t: 'a',
      a: 'u',
      c: 'g',
      g: 'c'
    };
    var rnaSeqRaw = sequenceIterator(input, rnaSeq, map);
    return rnaSeqRaw.join('');
  };
  converter.getAA = function(input) {
    var aaSeq = [];
    var rnaSeq = converter.getRNA(input);
    var rnaArray = splitChars(rnaSeq);
    var map = {
      aug: "M"
    };
    var aaSeqArray = sequenceIterator(rnaArray, aaSeq, map);
    return aaSeqArray.join('')
  };
  return converter;
});
