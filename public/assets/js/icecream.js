$(document).ready(function () {
    $(".devour").on("click", function (event) {
        console.log("This is a test for devour btn");
        var id = $(this).data("icecreamid");
        var currentDevouredState = $(this).data("devoured");

        var newDevoured = $(this).data("devoured");
        console.log(newDevoured);

        var newDevouredState = {
            devoured: 1
        };

        // Send the PUT request.
        $.ajax("/api/icecream/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function () {
                location.reload();
            }
        );

    });
});