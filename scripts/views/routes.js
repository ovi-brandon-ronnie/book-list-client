page('/*', (ctx, next) => {
  $('.page').hide();
  next();
});

// home / fetch all books
page('/', () => {
  $('.page').hide();
  app.Book.fetchAll( books => {
    console.log(books);
  });
  $('#container').show();
});

// add a new book
page('/books/new', () => {
  $('.page').hide();
  $('#book-new-view').show();
});

// fetch 1 book
page('/books/:id', (ctx) => {
  $('.page').hide();
  app.Book.fetchOne(ctx.params.id).then(book => {
    app.bookDetailsPage.init(book);
  });
});

// error page
page('/error', () => {
  $('.page').hide();
  $('#error-page').show();
});

page.start();
