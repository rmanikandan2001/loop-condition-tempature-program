
 temp= prompt("enter a number");
 
	if(temp<0){
		console.log("freezeing weather");
	}
	
	else if(temp<10){
		console.log("very cold weather");
	}
	
	else if(temp>10 & temp<=20){
		console.log("cold  weather ");
	}
	
	else if(temp>20 & temp<=30){
		console.log("normal weather");
	}
	
	 else if(temp>30 & temp<=40){
		console.log(" HOt weather");
	}
	
	else if(temp<=40){
		console.log("very HOt weather");
	}