
page('/', () => {
	$('.page').hide()
	app.Book.fetchAll().then(books => {
		app.bookListPage.initIndexView(books)
	})
})
page('/books/:id', (ctx) => {
	$('.page').hide()
	app.Book.fetchOne(ctx.params.id).then(book => {
		app.bookDetailsPage.init(book)	
})
page('/book/create', () => {
	$('.page').hide()
	$('#book-create-view').show()
})
page.start()