var yearInput = document.getElementById("yearInput");
var ageElement = document.getElementById("age");
var typeElement = document.getElementById("type");
var asteriskElement= document.getElementById("asterisk");

function calcAge() {
    asteriskElement.innerHTML =""
    var birthyear= yearInput.value
    var age =2021-yearInput.value
    ageElement.innerHTML= `your age is:<span> ${age}</span> `
    if (age>=18 && age<=50 ) {
        typeElement.innerHTML="You are young"
        
    }else if(age>=50) {
        typeElement.innerHTML="You are old"
    }else{
        typeElement.innerHTML="You are kid"

    }
    
   for ( i = 0;i  < age;i ++) {
    asteriskElement.innerHTML+="*"
       
   }
}
