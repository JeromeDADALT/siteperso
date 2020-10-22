/* animation menu */
var header = $('nav');
$(window).on('scroll', function() {
    var scrollTop = $(this).scrollTop(),
        height = header.outerHeight(),
        offset = height / 2,
        calc = 0 + (scrollTop - offset);
    header.css({ 'opacity': calc });
    if (calc > '1') {
        header.css({ 'opacity': 1 });
    } else if (calc < '0') {
        header.css({ 'opacity': 0.7 });
    }
});

// menu responsive
$("#burger").click(function() {
    $("body").toggleClass("display_menuResp");
});

$("#overlay").click(function() {
    $("body").toggleClass("display_menuResp");
});

$(".navresp ul li a").click(function() {
    $("body").toggleClass("display_menuResp");
});

/* animation étapes du projet */
$(document).ready(function() {
    $(".honeycomb-cell").mouseenter(function() {
        var title_name = $(this).attr("data-title");
        $("#avant").addClass('d-none');
        $("#" + title_name).removeClass('d-none');
    }).mouseleave(function() {
        var title_name = $(this).attr("data-title");
        $("#" + title_name).addClass('d-none');
        $("#avant").removeClass('d-none');
    });
});

/* animation réalisations */
$("#padelZone").click(function() {
    if ($("#padelClic").text() === 'Voir le descriptif du projet') {
        $("#padelClic").text('Masquer le descriptif');
    } else {
        $("#padelClic").text('Voir le descriptif du projet');
    };
});

$("#padelZone").click(function() {
    $("#padelProject").toggle("slow", function() {});
});

$("#mahlerZone").click(function() {
    if ($("#mahlerClic").text() === 'Voir le descriptif du projet') {
        $("#mahlerClic").text('Masquer le descriptif');
    } else {
        $("#mahlerClic").text('Voir le descriptif du projet');
    };
});

$("#mahlerZone").click(function() {
    $("#mahlerProject").toggle("slow", function() {});
});

$("#jeromeZone").click(function() {
    if ($("#jeromeClic").text() === 'Voir le descriptif du projet') {
        $("#jeromeClic").text('Masquer le descriptif');
    } else {
        $("#jeromeClic").text('Voir le descriptif du projet');
    };
});

$("#jeromeZone").click(function() {
    $("#jeromeProject").toggle("slow", function() {});
});