"use strict";

//on load
$(document).ready(function(){
    
    // hide all messages
    for (let index = 1; index <= 8; index++) {
        $("#message" + index).hide();
    }
    
    // begin sending messages
    sendMessages(messages, delay);
    
});

// hard coded number of messages to send
var totalMessages = 8;

// hard coded array of delays for each message's animation
var delay = [
    1000,
    3000,
    6000,
    10000,
    15000,
    17000,
    19000,
    21000
];

// create an array of message animation functions
var messages = createMessages(totalMessages);

// pair each message with a delay and animate
function sendMessages(messages, delay) {
    
    for (let index = 0; index < messages.length; index++) {
        setTimeout(messages[index], delay[index]);
    }

}

// create an array of message animation functions
function createMessages(total) {
    var messages = [];

    // for each message
    for (let id = 1; id <= total; id++) {

        // return this function
        function message() {

            // choose correct animation depending on the message position
            switch (id) {
    
                case 1:
                    $("#message1").show().addClass("top bottom animate");
                    break;
    
                default:
                    $("#message" + id).show().addClass("bottom animate");
                    $("#message" + (id -1)).animate({borderBottomLeftRadius: 0}, 500).removeClass("bottom");
                    break;
            }
            
        }

        // add message animation function to array
        messages.push(message);
        
    }

    // return the array
    return messages;
}