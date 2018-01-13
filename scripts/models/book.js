'use strict';

var __API_URL__ = 'https://op-bb-rl-booklist.herokuapp.com';
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
      .then(callback)
      .catch(() => console.log('error has occurred'));
  };

  $.getJSON(`${__API_URL__}/api/v1/books`).then(books => {
    books.forEach(bookData => {
      $('#book-list').append(`<li>${bookData.title} : ${bookData.author}</li>`);
    });
    $('#book-count').html(books.length);
  
  });

  // Book.fetchOne = (id) => $.getJSON(__API_URL__ + '/' + id)

  module.Book = Book;

})(app);

