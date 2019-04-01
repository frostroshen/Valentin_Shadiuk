try{
    for(var i =1; i>0; i++){
        console.log(i);
        if (i>9999){
			throw Error("StuckOverflow")
    	}
    }
} 
catch(e){
       console.log(e.message)
}