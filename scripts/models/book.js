'use strict';

//var __API_URL__ = 'http://localhost:3000';
var __API_URL__ = 'https://op-bb-rl-booklist.herokuapp.com';
var app = app || {};

(function (module) {

  // function errorCallback(err) {
  //   console.error(err);
  //   module.errorView.initErrorPage(err);
  // }

  function Book(title, author, isbn, imageURL, description) {
    this.title = title,
    this.author = author,
    this.isbn = isbn,
    this.imageURL = imageURL,
    this.description = description;
  }

  Book.all = [];

  Book.fetchAll = callback => {
    $.get(`${__API_URL__}/api/v1/books`)
      .then(books => {
        books.forEach(bookData => {
          $('#book-list').empty();
          $('#book-list').append(`<li>${bookData.title} : ${bookData.author}</li>`);
        });
        $('#book-count').html(books.length);
        return books;
      })
      .then(data => {
        callback(data);
      })
      .catch(() => console.log('error has occurred fetching all the books'));
  };

  Book.fetchOne = id => {
    $.get(`${__API_URL__}/api/v1/books/${id}`)
      .then(results => console.log(results));
  };


  Book.create = book => {
    return $.post(`${__API_URL__}/api/v1/books`, book).catch(() => console.log('An error has occurred'));
  };



  module.Book = Book;

})(app);

