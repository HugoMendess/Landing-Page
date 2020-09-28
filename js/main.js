// Script Javascript


function numRandom(){
    var num1 = parseInt(Math.random() * 10);
    var num2 = parseInt(Math.random() * 10);
  	document.getElementById("num1").innerHTML = num1;
  	document.getElementById("num2").innerHTML = num2;
  	soma = num1 + num2;
  	return soma;

}


function numEnviar(){
	alert("Formulário enviado");
	
}

