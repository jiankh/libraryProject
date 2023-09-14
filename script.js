//PAGE ELEMENTS

const addBookButton = document.querySelector('.btn-add-book')
const newBookForm = document.querySelector('.newBookForm')

let myLibrary = [
    {
      title: "A Game of Thrones",
      author: "George R. R. Martin",
      pages: 694,
      read: false
    }
];

addBookButton.addEventListener('click', ()=> {
    let newBookDialog = document.querySelector('#newBookDialog')
    newBookDialog.show()
} )

newBookForm.addEventListener('submit', (event) => {
    event.preventDefault()
    addBookToLibrary()
    newBookForm.reset()
    newBookDialog.close()
})


// FUNCTIONS

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary() {
    const title = document.querySelector('#book-title').value
    const author = document.querySelector('#author').value
    const pages = document.querySelector('#pages').value
    const isRead = document.querySelector('#read').checked

    let newBook = new Book(title, author, pages, isRead)
    myLibrary.push(newBook)
    renderCards(myLibrary)
    console.table(myLibrary)
}

function renderCards(library) {
    library.forEach((book) => {
        makeCard(book)
    })
}

function makeCard(book) {
    const title = book.title
    const author = book.author
    const pages = book.pages
    const read = book.read 

    let readText = 'Not Read'
    if (!read) { 
        readText = 'Read'
    }

    let cardEl = document.createElement("div")
    cardEl.classList.add('card')
    
    let cardTitle = document.createElement("div")
    cardTitle.classList.add('card-title')

    let cardAuthor = document.createElement("div")
    cardAuthor.classList.add('card-author')

    let cardPages = document.createElement("div")
    cardPages.classList.add('card-pages')

    let cardRead = document.createElement("div")
    cardRead.classList.add('card-read')

    contentContainer = document.querySelector(".content-container")
    contentContainer.appendChild(cardEl)

    cardEl.appendChild(cardTitle)
    cardEl.appendChild(cardAuthor)
    cardEl.appendChild(cardPages)
    cardEl.appendChild(cardRead)

    cardTitle.textContent = `${title}`
    cardAuthor.textContent = `by ${author}`
    cardPages.textContent = `Book Pages: ${pages} pages`
    cardRead.textContent = readText
}