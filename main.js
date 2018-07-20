function calc(){
	var a = parseFloat(document.querySelector("#value1").value);
	var b = parseFloat(document.querySelector("#value2").value);
	var unit1 = document.querySelector("#unit1").value;
	var unit2 = document.querySelector("#unit2").value;
	var calculate;
	/* 
		BMI = Weight in Kilograms/((Height in Meter)^2)
	*/
	
	if(unit1== "Centemeters" && unit2=="Kilograms"){
		a = a / 100;	//Convert centemeter to meter
		
		calculate = b/(a*a) 
		
	}else if(unit1=="Centemeters" && unit2=="lbs/Pounds"){
		a = a/100; 	//Convert centemeter to meter
		b = b/2.2;		//Convert lbs to kilograms
		
		calculate = b/(a*a) 
		
	} else if(unit1=="Inchs" && unit2=="lbs/Pounds"){
		a = a*2.54;	//Convert centemeter to Inchs
		a = a/100;		//Convert centemeter to meter
		b = b/2.2;		//Convert lbs to kilograms
		
		calculate = b/(a*a)
		
	}else{				//unit1 = inchs and unit2 = kilograms
		a = a*2.54;	//Convert inch to centemeter
		a = a/100;		//Convert centemeter to meter
		
		calculate = b/(a*a) 
	}
	
	document.querySelector("#result").innerHTML = calculate
	/*
	BMI<18.5 == Low BMI
	18.5=<BMI=<25 == Healthy BMI
	BMI> 25 == High BMI
	BMI> 30 == Obese
	*/
	if (calculate<18.5){
		document.querySelector("#message").innerHTML = "LOW BMI"
	}else if(calculate>=18.5 && calculate<=25){
		document.querySelector("#message").innerHTML = "Healthy BMI"
	}else if(calculate>25 && calculate<=30){
		document.querySelector("#message").innerHTML = "High BMI"
	}else if(calculate>30){
		document.querySelector("#message").innerHTML = "Obese"
	}else{
		document.querySelector("#message").innerHTML = "Invalid Inputs"
	}
	if(unit2=="Kilograms"){
	document.querySelector("#ideal").innerHTML = "Your ideal weight should be around " + 18.5*a*a +" kilograms to "+ 25*a*a +" kilograms"
	}else{
		document.querySelector("#ideal").innerHTML = "Your ideal weight should be around " + 18.5*a*a*2.2 +" lbs/Pounds to "+ 25*a*a*2.2 +" lbs/Pounds"
	}
}