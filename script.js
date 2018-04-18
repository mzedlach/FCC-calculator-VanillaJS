$(document).ready(function() {
    
    
//    YOU ARE HERE
//    You ahve to take into consideration: 
//    enter TWO numbers and calcualte. So if equation.length ==3 then calcualte
    
    
    var equationArr = [];
    
    
    //To hold number values until operation or equals is hit
    var numberHolder = []; 
    //To hold operation. Can be changed if others are clicked
    var operationHolder = [];
    
    var lockedValues = [];
    
    var result;
    
//AC CLICKED
    $('#allClear').click(function() {
        numberHolder = [];
        equationArr = [];
        $('#answer').text('0');
        $('#calc-preview').text('');
    });
//CE CLICKED
    $('#clearEntry').click(function() {
        numberHolder = [];
        $('#answer').text('0');
    });
    
//EQUALS SIGN CLICKED 
    $('#equals').click(function() {
        
    })
                      
                      
//NUMBER CLICKED
    $('.num').click(function() {
        if (operationHolder.length>0) {
            equationArr.push(operationHolder[0]);
            operationHolder = [];
        }
//        If decimal button is clicked and value has a decimal
        if ( $(this).text() == '.' && numberHolder.indexOf('.') > -1) {
            console.log('Your number already has a decimal!')
//        If decimal button is clicked and no previous numbers have been clicked
        } else if ($(this).text() == '.' && numberHolder.length == 0) {
            numberHolder.push('0','.');
//            numberHolder.push('.');
            console.log(numberHolder);
        } else {
//        take number input and add it to the numberHolder Array Array
//        this.text takes the actual <p> value of what you cicked on 
            numberHolder.push($(this).text());
            console.log(numberHolder);
        };
    });
    
//OPERATION CLICKED
    $('.op').click(function() {
        lockedValues.push(numberHolder.join('')); 
        operationHolder = [];
        
        if (lockedValues.length = 3) {
            
        }
    
        switch ( $(this).attr('id')) {
            case "dividedBy":
                operationHolder.push('/');
                break;
            case "times":
                operationHolder.push('*');
                break;
            case "minus":
                operationHolder.push('-');
                break;
            case "plus":
                operationHolder.push('+');
                break;
            }
        
    });
  
});


//From before
//    var value = document.getElementsByClassName('num');
//    
//    value.onclick = function() {
//        console.log('The button was clicked');
//    };
 
//    var one = document.getElementById('one');
//    console.log('one');
//
//    one.onclick = function() {
//        console.log('clicked');
//    };
    

//
//
//var equationArr = []; 
//var numberHoldArr = [];
//var equationDisplay = document.getElementById***** ; 
//
//var result = ''; 
//
//
//If AC clicked
//    equationArr = [];
//    Clear previewscreen
//
//If equals clicked
//	Calculate answer
//    return answer (I think this will take you out of this whole function and set all variables to initial values. I THINK.)
//	Push to answer area
//    



//If number clicked
//	Add number to numberHold()
//
//If decimal is clicked and (numberHoldArr.indexOf('.') === -1) {
//        numberHoldArr.push('.');
//    }
//
//If pos/neg is clicked
//    var intCheck = integerCheck(equationArr[-1]);
//    If intCheck === true ; 
//        var lastInt = equationArr[-1];
//        equationArr.push(lastInt*(-1));    
//
//If operation clicked (x, div, +, -);
//
//    var intCheck = integerCheck(equationArr[-1]);
//    //If values have already been in put AND last value is an number 
//    If (equationArr.length > 0 && intCheck === true) {
//        equationArr.push(numberHoldArr); 
//        equationArr.push(operation that was clicked);
//        numberHoldArr = [];
//    };
//
//function numberHold(input) {
//    
//    //If the Holding array for number input is EMPTY and teh input is zero
//    if (numberHoldArr.length === 0 && input === 0 ){
//        display is ZERO
//    //Otherwise Add the input number to the array
//    } else {
//        numberHoldArr.push(this.input);
//    }
////    return numberHoldArr;    <--I don't think I have to actually return this. 
//}
//
//function integerCheck() {
//    return x % 1 === 0;
//}
//
