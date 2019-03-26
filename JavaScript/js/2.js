var x= [3, 2, 15 , 30, 35, 50, 60];
try{
	for (var i=0; i<x.length; i++){
		if (x[i]%2==0){
			x[i]="all";
		}
		else if (x[i]%15==0){
			x[i]="allлень";
		}
		else if (x[i]%3==0){
			x[i]="лень";
		}
	}
		console.log(x)
}
catch(err){
	if(x==null) throw "blin";
}