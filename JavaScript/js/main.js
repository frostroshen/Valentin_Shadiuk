var x = 9;
var y = 'aaasasas';
var y1 = "aaaaaa";
var arr = [9];
var obj = {
	"asd":"fsfsfs",
	"asd1":"fsfsfs1"
};
var arr1 = new Array('dasafaq', 333);
var obj1 = new Object({'dasafaq':'333'});
var obj2 = new Object();

obj2.asd='qwe';
obj2.asd1='qwer';

console.log(x);
console.log(y);
console.log(y1);
console.log(obj);
console.log(obj1);
console.log(arr);
console.log(arr1);     
console.log(obj2);

var pro = + prompt(" how old are you?", "18+");

console.log(pro);
console.log(typeof(pro));

//3 > 4 ? console.log('asd') : console.log('asf');
//if (3 > 4) {
//	console.log('asd')
//}
//else{
//	console.log('asf')
//}

switch(pro) {
	case 3:
		console.log("pro = " + 3)
		break;
	case 4:
		console.log("pro = " + 4)
		break;
	default:
		console.log('GG');
break;
}

alert('ну блииииин')

var timeSeconds = 234245645335;
var hours =timeSeconds/3600
var ost = timeSeconds%3600
var minutes = (ost%3600)/60
var s = (minutes - parseInt(minutes))*60

var t = 'asaafsfqfqfq'
t.indexOf('f')
for (var i = 0; i <= t.length-1; i++ ){
    console.log(t.indexOf('f',i));

var arr5 = [[[1,2,3], [4,5,6], [7,8,9]],[[10,11,12], [13,14,15], [16,17,18]],[[19,20,21], [22,23,24], [25,26,27]]]

for (var i = 0; i < arr.length; i++){
    for (var k = 0; k < arr[i].length; k++){
        for (var j = 0; j < arr[i][k].length; j++){
            console.log(arr[i][k][j]);
        }
    }
}
arr5[0][1][2]
var arr6=[];
for (var i = arr.length; i>-1; i--){
    arr6.push(arr[i]);
}
arr5.reverse