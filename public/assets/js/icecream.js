$(document).ready(function () {

    $(".gif").on("click", function () {
        var state = $(this).attr("data-state");

        if (state === "animate") {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        } else {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        }
    });

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
                //console.log("changed devoured to", newDevoured);
                // Reload the page to get the updated list
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
        // Make sure to preventDefault on a submit event
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
                console.log("created new icecream");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});