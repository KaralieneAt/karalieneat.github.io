$(document).ready(function () {

    $("#enviarmensaje").click(function () {
        alert("El mensaje se envio correctamente");
    })

    
    $(".title").click(function () {
        $(this).css({
            "color": "#966BD5"
        })
    })

    $(".text").click(function () {
        $(this).css({
            "color": "#B454A8"
        })
    })

    $(".textimage").click(function () {
        $(this).css({
            "color": "#3E2365"
        })
    })

    $(".card-header").click(function () {
        $(".text").toggle();
    });



    $("#one").click(function () {
        $("#bodyone").toggle();
    });

    $("#two").click(function () {
        $("#bodytwo").toggle();
    });

    $("#three").click(function () {
        $("#bodythree").toggle();
    });

    $("#for").click(function () {
        $("#bodyfor").toggle();
    });


    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
})