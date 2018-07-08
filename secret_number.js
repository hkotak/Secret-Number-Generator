'use strict';
module.exports = function() {
    var num = Math.floor(Math.random() * Math.floor(1000001));
    function secretNumber() {
        // console.log(num);
        return num;
    }
    return secretNumber;
    };

        
    

