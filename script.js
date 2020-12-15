
$(document).ready(function () {

    // Switch to Light Mode
    $("input:checked").on("click", function () {
        $("body").toggleClass("light-mode-test");
        console.log('clickedddd')
    });


});



// AOS.init();