// author.js

// You can add any JavaScript logic or functionality here

// Example: Display an alert when the user clicks on a book in the list
document.addEventListener('DOMContentLoaded', function () {
    var bookListItems = document.querySelectorAll('.list-group-item');

    bookListItems.forEach(function (item) {
        item.addEventListener('click', function () {
            var bookTitle = item.innerText;
            alert('Clicked on ' + bookTitle);
        });
    });
});
