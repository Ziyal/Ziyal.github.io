$(document).ready(function() {

    $(".email").hover(
        function () {
            $(this).attr("src", "Images/c_email.png");
        }, function () {
            $(this).attr("src", "Images/g_email.png");
    });

    $(".github").hover(
        function () {
            $(this).attr("src", "Images/c_github.png");
        }, function () {
            $(this).attr("src", "Images/g_github.png");
    });


    $(".linkedin").hover(
        function () {
            $(this).attr("src", "Images/c_linkedin.png");
        }, function () {
            $(this).attr("src", "Images/g_linkedin.png");
    });
    
    $(".resume").hover(
        function () {
            $(this).attr("src", "Images/c_resume.png");
        }, function () {
            $(this).attr("src", "Images/g_resume.png");
    });    

});