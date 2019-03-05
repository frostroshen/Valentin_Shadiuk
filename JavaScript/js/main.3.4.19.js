function empty(chtoto_tam) {
 if (!chtoto_tam || chtoto_tam == '0') {
  return true;}
 if (typeof chtoto_tam == 'object') {
  for (var k in chtoto_tam) {
   return false;}
  return true;}
 return false;
}
