var morse = {
    '.-': 'a', '-...': 'b', '-.-.': 'c', '-..': 'd', '.': 'e',
    '..-.': 'f', '--.': 'g', '....': 'h', '..': 'i', '.---': 'j',
    '-.-': 'k', '.-..': 'l', '--': 'm', '-.': 'n', '---': 'o',
    '.--.': 'p', '--.-': 'q', '.-.': 'r', '...': 's', '-': 't',
    '..-': 'u', '...-': 'v', '.--': 'w', '-..-': 'x', '-.--': 'y',
    '--..': 'z', '.----': '1', '..---': '2', '...--': '3', 
    '....-': '4', '.....': '5', '-....': '6', '--...': '7',
    '---..': '8', '----.': '9', '-----': '0', '.-.-.-': '.',
    '--..--': ',', '..--..': '?', '-..-.': '/', '.--.-.': '@'
};
//var morse_code = {
//  a: "._",
//  b: "_...",
//  c: "_._.",
//  d: "_..",
//  e: ".",
//  f: ".._.",
//  g: "__.",
//  h: "....",
//  i: "..",
//  j: ".___",
//  k: "_._",
//  l: "._..",
//  m: "__",
//  n: "_.",
//  o: "___",
//  p: ".__.",
//  q: "__._",
//  r: "._.",
//  s: "...",
//  t: "_",
//  u: ".._",
//  v: "..._",
//  w: ".__",
//  x: "_.._",
// y: "_.__",
//  z: "__.."
//};
//var recount = function(str) {
  //var answer = "";
  //if (typeof(str) == "string") {
    //var lngthofstr = str.split('');
    //for (var i in lngthofstr) {
      //if (morse[lngthofstr[i]]) 
     //   answer += morse[lngthofstr[i]] + " ";
    //}
  //}
  //return answer.slice(0, -1);
//}
//console.log(recount(".- -. . -"));
function tipa_morse(text) {
    let arr=text.split(" "), result="";
    console.log(arr);
    for(var i in arr){
        if (morse[arr[i]])
            result += morse[arr[i]]+' '; 
    }
    return result.slice('');
}