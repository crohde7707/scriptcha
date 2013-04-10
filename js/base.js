create.buttonTag{
	loc: "ans3",
	name: "First_Button",
	value: "Touch Me"
};

var a1 = document.getElementsByClassName("ans1")[0];
a1.innerHTML = evaluateIt(9, 3, "add");
var a2 = document.getElementsByClassName("ans2")[0];
a2.innerHTML = evaluateIt(9, 3, "divide");