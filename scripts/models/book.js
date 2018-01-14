'use strict';

var __API_URL__ = 'http://localhost:3004';
// var __API_URL__ = 'https://op-bb-rl-booklist.herokuapp.com';
var app = app || {};

(function (module) {

  function Book(bookId, title, author, imageURL) {
    this.bookId = bookId;
    this.title = title;
    this.author = author;
    this.imageURL = imageURL;
  }

  Book.all = [];

  Book.fetchAll = callback => {
    $.get(`${__API_URL__}/api/v1/books`)
      .then(books => {
        books.forEach(bookData => {
          $('#book-list').append(`<li>${bookData.title} : ${bookData.author}</li>`);
        });
        $('#book-count').html(books.length);
      })
      .catch(() => console.log('error has occurred'));
  };

  Book.fetchOne = (id) => {
    $.get(`${__API_URL__}/api/v1/books/${id}`)
      .then(results => console.log(results));
  };

  module.Book = Book;

})(app);

