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
$(".textCard").click(function() {
    var id_card = $(this).attr("id");
    if ($("#clic" + id_card).text() === 'Voir le descriptif du projet') {
        $("#clic" + id_card).text('Masquer le descriptif');
    } else {
        $("#clic" + id_card).text('Voir le descriptif du projet');
    };
});

$(".textCard").click(function() {
    var id_card = $(this).attr("id");
    $("#project" + id_card).toggle("slow", function() {});
});