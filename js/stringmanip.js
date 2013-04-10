function combineIt(str1, str2) {
	var str3 = str1 + str2;
	return str3;
}

function removeIt(str, targetstr) {
	if(str.indexOf(targetstr) >= 0) {
		str.substring(str.indexOf(targetstr), targetstr.length);
	}
	return str;
}