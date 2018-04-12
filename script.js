document.addEventListener('DOMContentLoaded', function() {
  
//    var value = document.getElementsByClassName('num');
//    
//    value.onclick = function() {
//        console.log('The button was clicked');
//    };
    
  
    
    
    var one = document.getElementById('one');

    one.onclick = function() {
        console.log('clicked');
    };
    
    
    
    
});

var equationArr = []; 
var numberHoldArr = [];
var equationDisplay = document.getElementById***** ; 

var result = ''; 


If AC clicked
    equationArr = [];
    Clear previewscreen

If equals clicked
	Calculate answer
    return answer (I think this will take you out of this whole function and set all variables to initial values. I THINK.)
	Push to answer area
    
If number clicked
	Add number to numberHold()

If decimal is clicked and (numberHoldArr.indexOf('.') === -1) {
        numberHoldArr.push('.');
    }

If pos/neg is clicked
    var intCheck = integerCheck(equationArr[-1]);
    If intCheck === true ; 
        var lastInt = equationArr[-1];
        equationArr.push(lastInt*(-1));    

If operation clicked (x, div, +, -);

    var intCheck = integerCheck(equationArr[-1]);
    //If values have already been in put AND last value is an number 
    If (equationArr.length > 0 && intCheck === true) {
        equationArr.push(numberHoldArr); 
        equationArr.push(operation that was clicked);
        numberHoldArr = [];
    };

function numberHold(input) {
    
    //If the Holding array for number input is EMPTY and teh input is zero
    if (numberHoldArr.length === 0 && input === 0 ){
        display is ZERO
    //Otherwise Add the input number to the array
    } else {
        numberHoldArr.push(this.input);
    }
//    return numberHoldArr;    <--I don't think I have to actually return this. 
}

function integerCheck() {
    return x % 1 === 0;
}

