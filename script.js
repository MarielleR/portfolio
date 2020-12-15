
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

});



// AOS.init();