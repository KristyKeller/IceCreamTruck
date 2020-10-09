$(document).ready(function () {

    $(".devour-me").on("click", function (event) {
        var id = $(this).data("id");
        var currentDevouredState = $(this).data("devoured");

        console.log("Look here:" + currentDevouredState);

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

    $(".delete-me").on("click", function (event) {
        var id = $(this).data("id");

        $.ajax({
            method: "DELETE",
            url: "/api/icecream/" + id
        }).then(
            function () {
                location.reload();
            }
        )
    });

    $("#submitButton").on("click", function (event) {
        event.preventDefault();

        var newIcecream = {
            icecream_name: $("#ba").val().trim(),
            devoured: false
        };

        console.log(newIcecream);

        // Send the POST request
        $.ajax("/api/icecream/", {
            type: "POST",
            data: newIcecream
        }).then(
            function () {
                console.log("created new ice cream");
                location.reload();
            }
        );
    });
});