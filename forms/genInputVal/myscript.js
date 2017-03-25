
START OVER WITH INPUTS AS THE LISTENER

var inputFields = document.getElementsByTagName("input");
var myField = inputFields;
var myError = document.getElementById('formerror');

for(field in inputFields){

	myField.addEventListener('change', function(){

		console.log('listener');
	  var myPattern = this.pattern;
		var myPlaceholder = this.placeholder;
	  var isValid = this.value.search(myPattern) >= 0;

	  if(!isValid){
	    myError.innerHTML ="Input does not match expected pattern:" + myPlaceholder;
	  } else {
	    myError.innerHTML = "";
	  }
	},false);

}
