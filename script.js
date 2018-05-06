var buttonController = (function() {
    
    //Code to dispaly elements on bmo display (preview of equation, answer, bmo faces(later))
    
})();

var screenController = (function() {
    
    //Code to deal with buttons being clicked
    
})();



var controller = (function(btnCtrl, scrnCtrl) {    
    

//        var bns = document.getElementsByClassName("num");
//        for (i = 0; i < bns.length; i++) {
//            bns[i].addEventListener("click", function() {
//                console.log("you clicked " + this.innerHTML); });
//        }

    
    
    
    
    var numbers = document.querySelectorAll(".num");

    for (var i = 0 ; i < numbers.length ; i++) {
        if (document.addEventListener) {
            numbers[i].addEventListener("click", function() {
                console.log('first if statement went throug')
                // use keyword this to target clicked button
            });
        } else {
            numbers[i].attachEvent("onclick", function() {
                console.log('second else statement went throug')
                // use buttons[i] to target clicked button
            });
        };
    };
    
    
    
    
    
})(buttonController, screenController);