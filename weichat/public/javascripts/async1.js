var fs = require('fs');

var readFile = function (fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, function(error, data) {
      if (error) reject(error);
      resolve(data);
    });
  });
};
/*为什么没有执行*/
var gen = function* () {
  var f1 = yield readFile('../test/1.json');
  var f2 = yield readFile('../test/2.json');
  console.log(JSON.stringify(f1));	
  console.log(JSON.stringify(f1));
};

var result=gen()
result.next()


// var asyncReadFile = async function () {
//   var f1 = await readFile('../test/1.json');
//   var f2 = await readFile('../test/2.json');
//   console.log(f1.toString());
//   console.log(f2.toString());
// };
// var result = asyncReadFile();
