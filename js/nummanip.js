function evaluateIt(arg1, arg2, op) {
	switch(op) {
		case "add":
		   return arg1 + arg2;
		   break;
		case "substract":
		   return arg1 - arg2;
		   break;
		case "multiply":
		   return arg1 * arg2;
		   break;
		case "divide":
		   if(arg2 == 0) {
		   	   console.log("Can't divide by zero");
		   } else {
		   	   return arg1 / arg2;
		   }
		   break;
		case "power":
		   return Math.pow(arg1, arg2);
		case "squareroot":
           return Math.pow(arg1, 1/arg2);
		   break;
		default:
		   console.log("evaluateIt Usage: 'evaluateIt(arg1, arg2, op)'<br /> - op:<br /> --- add<br /> --- substract<br /> --- multiply<br /> --- divide<br /> --- power<br /> --- squareroot");
	}
}