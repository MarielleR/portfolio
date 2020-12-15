
$(document).ready(function () {

    // Switch to Light Mode
    $("header input:checked").on("click", function () {
        $("body").toggleClass("light-mode-test");
        console.log('clickedddd')
    });

    $("#read-one").on("click", function () {
        $("#project-one-text").toggleClass("hidden");
        console.log('click on read one')
    });

    $("#read-two").on("click", function () {
        $("#project-two-text").toggleClass("hidden");
        console.log('click on read two')
    });

    $("#read-three").on("click", function () {
        $("#project-three-text").toggleClass("hidden");
        console.log('click on read three')
    });

});



// AOS.init();