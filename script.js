$(document).ready(function(){
    
    $("#message1").hide()
    $("#message2").hide()
    $("#message3").hide()
    $("#message4").hide()
    $("#message5").hide()
    $("#message6").hide()
    $("#message7").hide()
    $("#message8").hide()

    var timer = setTimeout(message1, 1000);

});

function message1() {
    $("#message1").show().addClass("top bottom animate");
    var timer = setTimeout(message2, 1500);
}

function message2() {
    $("#message2").show().addClass("bottom animate");
    $("#message1").animate({borderBottomLeftRadius: 0}, 500).removeClass("bottom");
    var timer = setTimeout(message3, 3000);
}

function message3() {
    $("#message3").show().addClass("bottom animate");
    $("#message2").animate({borderBottomLeftRadius: 0}, 500).removeClass("bottom");
    var timer = setTimeout(message4, 4000);
}

function message4() {
    $("#message4").show().addClass("bottom animate");
    $("#message3").animate({borderBottomLeftRadius: 0}, 500).removeClass("bottom");
    var timer = setTimeout(message5, 5000);
}

function message5() {
    $("#message5").show().addClass("bottom animate");
    $("#message4").animate({borderBottomLeftRadius: 0}, 500).removeClass("bottom");
    var timer = setTimeout(message6, 2000);
}

function message6() {
    $("#message6").show().addClass("bottom animate");
    $("#message5").animate({borderBottomLeftRadius: 0}, 500).removeClass("bottom");
    var timer = setTimeout(message7, 2000);
}

function message7() {
    $("#message7").show().addClass("bottom animate");
    $("#message6").animate({borderBottomLeftRadius: 0}, 500).removeClass("bottom");
    var timer = setTimeout(message8, 2000);
}

function message8() {
    $("#message8").show().addClass("bottom animate");
    $("#message7").animate({borderBottomLeftRadius: 0}, 500).removeClass("bottom");
}