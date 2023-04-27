
function hourGreeting(hour){ 
	if(hour <= 10){ 
		console.log("GOOD MORNING");
	}else if(hour < 17){
		console.log("GOOD AFTERNOON");
	}else{ 
		console.log("GOOD EVENING");
	}
}

hourGreeting(10); //MORNING
hourGreeting(13); //AFTERNOON
hourGreeting(18); //EVENING