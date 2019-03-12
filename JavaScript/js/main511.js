var morse_code = {
  a: "._",
  b: "_...",
  c: "_._.",
  d: "_..",
  e: ".",
  f: ".._.",
  g: "__.",
  h: "....",
  i: "..",
  j: ".___",
  k: "_._",
  l: "._..",
  m: "__",
  n: "_.",
  o: "___",
  p: ".__.",
  q: "__._",
  r: "._.",
  s: "...",
  t: "_",
  u: ".._",
  v: "..._",
  w: ".__",
  x: "_.._",
  y: "_.__",
  z: "__.."
};
var recount = function(str) {
  var answer = "";
  if (typeof(str) == "string") {
    var lngthofstr = str.split('');
    for (var i in lngthofstr) {
      if (morse_code[lngthofstr[i]])
        answer += morse_code[lngthofstr[i]] + " ";
    }
  }
  return answer.slice(0, -1);
}
console.log(recount("abc"));