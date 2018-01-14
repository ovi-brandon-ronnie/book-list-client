page('/*', (ctx, next) => {
	$('.page').hide()
	next()
})

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
page('/book/new', () => {
	$('.page').hide()
	$('#book-new-view').show()
})
page('/error', () => {
	$('.page').hide()
	$('#error-page').show()
})
page.start()