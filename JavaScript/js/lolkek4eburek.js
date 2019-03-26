var input_aga = new Object();
var Input = document.getElementsByTagName("input");
document.getElementsByTagName("button")[0].addEventListener("click", function() {
	for (var i in Input){
		try{
			console.log(Input[i]);
			input_aga[Input[i].getAttribute("id")]=Input[i].value;
		}
		catch(e){
			break;
		}
	};
	console.log(input_aga)	
})