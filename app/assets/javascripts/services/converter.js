converterApp.factory('converter', function() {
  converter = {};
  converter.getRNA = function(input) {
    var rnaseq = [];
    var map = {
      t: 'a',
      a: 'u',
      c: 'g',
      g: 'c'
    };
    for (var i = 0; i < input.length; i++) {
      rnaseq.push( map[input[i]] || input[i])
    };
    return rnaseq.join('');
  };
  return converter;
});
