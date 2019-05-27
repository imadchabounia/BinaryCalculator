window.onload = function() {

var res = document.getElementById('res');

var one = document.getElementById('btn1');
var zero = document.getElementById('btn0');
var cls = document.getElementById('btnClr');
var sum = document.getElementById('btnSum');
var mul = document.getElementById('btnMul');
var div = document.getElementById('btnDiv');
var sub = document.getElementById('btnSub');
var equal = document.getElementById('btnEql');


function do_op(a, b, opcode){
  //operands are binary strings
  switch (opcode) {
    case "+":
      return (parseInt(a, 2)+parseInt(b, 2));
      break;

    case "-":
      return (parseInt(a, 2)-parseInt(b, 2));
      break;

    case "*":
      return (parseInt(a, 2)*parseInt(b, 2));
      break;

    case "/":
      return (Math.floor(parseInt(a, 2)/parseInt(b, 2)));
      break;

    default:
  }

}

//this part for introducing inputs
one.onclick = function(){
  res.innerHTML += "1";
}

zero.onclick = function(){
  res.innerHTML += "0";
}

cls.onclick = function() {
  res.innerHTML = "";
}
//Calculatorpart
sum.onclick = function() {

  res.innerHTML += "+";

}

sub.onclick = function(){

  res.innerHTML += "-";
}

mul.onclick = function(){

  res.innerHTML += "*";
}

div.onclick = function(){

  res.innerHTML += "/";
}

equal.onclick = function() {

  var regex = /([01])+([+*-/])([01])+$/g;
  var result = regex.exec(res.innerHTML);

    if(result != null){
    var opcode = result[2];
    var data = res.innerHTML.split(opcode);
    var a = data[0];
    var b = data[1];
    res.innerHTML = do_op(a, b, opcode);

  }else{
    res.innerHTML = 'Invalid Expression !';
  }

}

};
