var morse_code = {
  "a": "._",
  "b": "_...",
  "c": "_._.",
  "d": "_..",
  "e": ".",
  "f": ".._.",
  "g": "__.",
  "h": "....",
  "i": "..",
  "j": ".___",
  "k": "_._",
  "l": "._..",
  "m": "__",
  "n": "_.",
  "o": "___",
  "p": ".__.",
  "q": "__._",
  "r": "._.",
  "s": "...",
  "t": "_",
  "u": ".._",
  "v": "..._",
  "w": ".__",
  "x": "_.._",
  "y": "_.__",
  "z": "__.."
};
input = document.getElementById('enter'),
output = document.getElementById('autput'),
upper;
function translate() {
	var str = '';
	for (var i = 0; i < input.value.length; i++) {
		var char = input.value.charAt(i),
		lower = char.toLowerCase();
		upper = char == char.toUpperCase();
		str += lower in morse_code ? morse_code[lower][upper ? 'toUpperCase' : 'toString']() : char;
	}
	output.value = str;
}
