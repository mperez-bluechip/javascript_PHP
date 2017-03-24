var myField = document.getElementById('mytelephone');
var myError = document.getElementById('formerror');

myField.addEventListener('change', function(){
  var myPattern = new RegExp("\\d{3}[\\-]\\d{3}[\\-]\\d{4}", "i");
  var isValid = this.value.search(myPattern) >= 0;

  if(!isValid){
    myError.innerHTML ="Input does not match expected patter of xxx-xxx-xxxx";
  } else {
    myError.innerHTML = "";
  }
},false);
