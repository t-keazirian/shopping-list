$(function() {

// DELETE button function

    $(".shopping-list").on("click", ".shopping-item-delete", function(event) {
        this.closest('li').remove();
    });

// CHECK button function - toggle class

    $(".shopping-list").on("click", ".shopping-item-toggle", function() {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });

// ADD:
// need to add an <li> into <ul class="shopping-list"
// <li> contains the <span class="shopping-item" and <div class="shopping-item-controls"
// Need to be able to add the whole <li> and all it contains
// run a function that will append the item to the list
// shopping-list-entry needs to go into shopping-list (the selector expression preceding the method is the container into which the content is inserted)


$("#js-shopping-list-form").submit(event => {
    event.preventDefault();
    let newEntry = $("#shopping-list-entry").val();
    $(".shopping-list").append(`<li>
    <span class="shopping-item">${newEntry}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`);
  $('#shopping-list-entry').val('');
});

});








