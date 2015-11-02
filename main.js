'use strict';
(function(){

var userInput = false;
var dotClicked = false;

var conductOperation;

var display;
var numberStack = [];
var operatorStack = [];

$(document).ready(init);

function init(){
	$('.digit').click(numberClick);
  $('.dot').click(dotClick);
  $('.operator').click(operation);
  $('.plusOrMinus').click(valueSwitch);
  $('.percentage').click(percentage);
  $('.clear').click(clear);
}

function numberClick(){

  if(userInput){
    display = $('.display').text() + $(this).text();
  }else{
    display = $(this).text();
    userInput = true;
  }

	$('.display').text(display);
}

function dotClick(){

  if(dotClicked){
    display = $('.display').text();
  }else{
    display = $('.display').text() + $(this).text();
    dotClicked = true;
    userInput = true;
  }

  $('.display').text(display);
}

function clear(){

  display = $('.display').text('0');
  userInput = false;
  dotClicked = false;
  conductOperation = false;
  numberStack = [];
  operatorStack = [];

}

function operation(){

  var operator = $(this).text();
  var number = $('.display').text();

  numberStack.push(number);
  operatorStack.push(operator); 

  switch(operatorStack[0]) {
    
    case '+': add();break;
    case '-': subtraction();break;
    case '*': multiply();break;
    case '=': equal();break;
  }
}
      
function equal(){
  
  switch(operatorStack[0]) {
    case '+': $('.display').text(parseFloat(numberStack[0]) + parseFloat(numberStack[1]));break;
    case '-': $('.display').text(parseFloat(numberStack[0]) - parseFloat(numberStack[1]));break;
    case '*': $('.display').text(parseFloat(numberStack[0]) * parseFloat(numberStack[1]));break;
  }
}

function valueSwitch(){
  var value = $('.display').text();
  if(value !== '0'){
    $('.display').text(parseFloat(value) * (-1));
  }
}

function percentage(){
  var value = $('.display').text();
  $('.display').text(parseFloat(value)/100);
  userInput = false;
  dotClicked = false; 
}
//Need to revise the operation part 
function add(){

  if(conductOperation){
    var res = numberStack.reduce(function(a,b){
      return parseFloat(a) + parseFloat(b);
    });
    $('.display').text(res);
    numberStack = [];
    operatorStack.shift();
    numberStack.push(res);
  }else{
     $('.display').text('+');
    conductOperation = true;
  }

   userInput = false;
   dotClicked = false; 
}

function subtraction(){
 
 console.log(numberStack);
 console.log(operatorStack);

  if(conductOperation){
    var res = numberStack.reduce(function(a,b){
      return parseFloat(a) - parseFloat(b);
    });
    $('.display').text(res);
    numberStack = [];
    operatorStack.shift();
    numberStack.push(res);
  }else{
     $('.display').text('-');
    conductOperation = true;
  }

   userInput = false;
   dotClicked = false; 
}

function multiply(){
  if(conductOperation){
    var res = numberStack.reduce(function(a,b){
      return parseFloat(a) * parseFloat(b);
    });
    $('.display').text(res);
    numberStack = [];
    operatorStack.shift();
    numberStack.push(res);
  }else{
     $('.display').text('*');
    conductOperation = true;
  }

   userInput = false;
   dotClicked = false; 
}

})();