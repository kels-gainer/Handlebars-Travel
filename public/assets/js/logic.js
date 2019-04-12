
$(function() {
    $(".btn-add").on("click", function(event) {

        event.preventDefault();

        var id = $(this).data("id");
        var status = $(this).data("visited");
        if (status === 0) {
            status = 1
        } else {
            status = 0
        };

        // var visitedState = {
        //     visited: status
        // };
        console.log(id);
        
        $.ajax({
            url: "/api/places/" + id,
            method: "PUT"
            // data: visitedState
        }).then(
            function() {
                console.log("New visited Status: ");
                location.reload();
            }
        )
    });

    $(".create-place").on("submit", function(event) {
        event.preventDefault();

        var newPlace = {
            place_name: $("#newPlace").val().trim(),
            visited: 0
        };

        console.log(newPlace);

        $.ajax("/api/places/", {
            method: "POST",
            data: newPlace
        }).then(
            function() {
                console.log("place added!");
                location.reload();
                
            }
        )
        
    });
});