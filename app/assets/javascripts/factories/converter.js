converterApp.factory('converter', function() {
  converter = {};
  var sequenceIterator = function(input, output, map) {
    for (var i = 0; i < input.length; i++) {
      output.push( map[input[i]])
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
      aug: "M", acu: "T", aau: "N", agu: "S", guu: "V",
      auc: "I", acc: "T", aac: "N", agc: "S", guc: "V",
      auu: "I", aca: "T", aaa: "K", aga: "R", gua: "V",
      aua: "I", acg: "T", aag: "K", agg: "R", gug: "V",
      gcu: "A", gau: "D", ggu: "G", uuu: "F", ucu: "S",
      gcc: "A", gac: "D", ggc: "G", uuc: "F", ucc: "S",
      gca: "A", gaa: "E", gga: "G", uua: "L", uca: "S",
      gcg: "A", gag: "E", ggg: "G", uug: "L", ucg: "S",
      uau: "Y", ugg: "W", cug: "L", ccg: "P", cag: "Q",
      uac: "Y", cuu: "L", ccu: "P", cau: "H", cgu: "R",
      ugu: "C", cuc: "L", ccc: "P", cac: "H", cgc: "R",
      ugc: "C", cua: "L", cca: "P", caa: "Q", cga: "R",
      cgg: "R", uga: "*", uaa: "*", uag: "*"
    };
    var aaSeqArray = sequenceIterator(rnaArray, aaSeq, map);
    return aaSeqArray.join('')
  };
  return converter;
});
