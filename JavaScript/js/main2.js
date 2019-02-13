var arr1 = [];
var t =' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, at.';
for (var i = 0; i <= t.length-1; i++ ){
        var b = arr1.push(t.indexOf('a',i));
}
function doSmth(arr1) {
  for (var q=1, j=1; q<arr1.length; ++q) {
    if (arr1[q] !== arr1[q-1]) {
      arr1[j++] = arr1[q];
    }
  }

  arr1.length = j;
  return arr1;
}
console.log(doSmth(arr1))