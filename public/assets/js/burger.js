// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(() => {

    $(() => {
        $(".devour").on("click", function (event)  {
            var id = $(this).data("id");

            var isEaten = {
                devoured: true
            };

            // Send the PUT request.
            $.ajax("/api/burgers/" + id, {
                type: "PUT",
                data: isEaten
            }).then(function () {
                location.reload();
            })
                });
        });

        $("#burgers").on("submit", function (event)  {
            // Make sure to preventDefault on a submit event.
            event.preventDefault();

            var newBurger = 
                 $("#name").val().trim()
            
            console.log(newBurger);

            // Send the POST request.
            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then( function ()  {
                    // Reload the page to get the updated list
                    location.reload();
                }
            );
        });

    });
