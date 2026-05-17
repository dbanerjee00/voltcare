var fs = require('fs');
var c = fs.readFileSync('D:\\clg\\anon-demo-master\\src\\pages\\Home.jsx', 'utf8');
var lines = c.split('\n');
lines.forEach(function(line, i) {
  var trimmed = line.trim();
  // Look for / that could be ambiguous in JS context
  // After: = ( [ , return => ! & | ; { ? :
  var ambigPatterns = /(?:[=(,\[!&|;{?:])\s*\/(?!\/|\*)/;
  if (ambigPatterns.test(trimmed)) {
    var match = trimmed.match(ambigPatterns);
    console.log((i+1) + ': ' + trimmed.substring(0, 120) + '  <-- MATCH: ' + match[0]);
  }
});
