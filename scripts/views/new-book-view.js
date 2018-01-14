$('#newBookForm').on('submit', (e) => {
    e.preventDefault();
    var title = $('#title').val();
    var author = $('#author').val();
    var isbn = $('#isbn').val();
    var imgUrl = $('#imageUrl').val();
    var description = $('#description').val();

    let book = new app.Book (title, author, isbn, imgUrl, description);
    app.Book.create(book);
});

// function Book(bookId, title, author, imageURL, description) {
//     this.bookId = bookId;
//     this.title = title;
//     this.author = author;
//     this.imageURL = imageURL;
//     this.description = description;
//   }
