$('#newBookForm').on('submit', (e) => {
  e.preventDefault();
  var title = $('#title').val();
  var author = $('#author').val();
  var isbn = $('#isbn').val();
  var imgUrl = $('#imageUrl').val();
  var description = $('#description').val();

  let book = new app.Book (title, author, isbn, imgUrl, description);
  app.Book.create(book)
    .then( () => {
      clearFields();
    });
});

function clearFields() {
  $('#title').val("");
  $('#author').val("");
  $('#isbn').val("");
  $('#imgUrl').val("");
  $('#description').val("");
}