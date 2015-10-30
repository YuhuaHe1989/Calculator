$(document).ready(Calculator);

function Calculator(){

  $('.buttons').on('click',display);
  $('.functions').on('click',operators);
  $('.bt0').on('click',otherOperations)
}

function display(){

  var number = $(this).text();

  var inputs = $('#display').text() + number;
  stack = stack.concat(inputs);
  console.log(stack);
  console.log(inputs);
  $('#display').text(inputs);
}

function operators(){
  var operator = $(this).text();

  switch(operator) {
    case '+':add(a,b); break;
    case '-':substr(a,b); break;
    case '*':multiply; break;
    case '/':divide; break;
    case '=':equal; break;
  }
}

function add(a,b){
  return a + b;
}

function otherOperations(){
  var otherOperations = $(this).text();
  console.log(otherOperations);
}