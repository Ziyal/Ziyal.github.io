$(document).ready(function() {

    $(".email").hover(
        function () {
            $(this).hide();
            $(".email-overlay").show();
        }, function () {
            $(this).show();
            $(".email-overlay").hide();
    });

    $(".github").hover(
        function () {
            $(this).hide();
            $(".github-overlay").show();
        }, function () {
            $(this).show();
            $(".github-overlay").hide();
    });

    $(".linkedin").hover(
        function () {
            $(this).hide();
            $(".linkedin-overlay").show();
        }, function () {
            $(this).show();
            $(".linkedin-overlay").hide();
    });  

    $(".resume").hover(
        function () {
            $(this).hide();
            $(".resume-overlay").show();
        }, function () {
            $(this).show();
            $(".resume-overlay").hide();
    });    

});


    // $(".email")
    // .mouseenter(function() {
    //     $(this).hide();
    //     $(".email-overlay").show();
    // })
    // .mouseleave(function() {
    //     $(this).show();
    //     $(".email-overlay").hide();
    // })