


// DELETE:
// remove.() the whole <li> and all the contents
// when delete button is clicked, trigger event to .remove() the <li>

// $(function() {
//     $('.shopping-item-delete').on("click", "ul", function(event) {
//         this.remove();
//     });
// });
// */

$(function() {
    $("button[class='shopping-item-delete']").on("click", function(event) {
        $('.shopping-item').closest('li').remove();
    });
});

console.log("YOUR NAME");

/*
$( "button[class='shopping-item-delete']").click(function(event) {
    this.$( ".shopping-item" ).remove();
  });
  -- closest() ??
  -- event.which ??




// CHECK:
// toggle button to use class "shopping-item_checked"
// target shopping item 


$(function() {
    $(".shopping-item-toggle").click(() => {
        $(".shopping-item").toggleClass(".shopping-item_checked"); 
    });
});

$(function() {
    $(".shopping-item-toggle").click(function(event) {
        $(".shopping-item").toggleClass(".shopping-item_checked");
    });
});

$(function() {
    $("button").on('click', '.shopping-item-toggle', function(event) {
        this.toggleClass(".shopping-item_checked");
    });
});

// ADD:
// need to add an <li> into <ul class="shopping-list"
// <li> contains the <span class="shopping-item" and <div class="shopping-item-controls"
// Need to be able to add the whole <li> and all it contains
// run a function that will append the item to the list
// shopping-list-entry needs to go into shopping-list (the selector expression preceding the method is the container into which the content is inserted)

$(function() {
    $("#js-shopping-list-form").submit(event => {
        event.preventDefault();
        let newEntry = $("#shopping-list-entry").val();
        $("#shopping-list").append($('<li>').append(newEntry, ".shopping-item-controls"));
        $('#shopping-list-entry').val('');
    });
});

*/




