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
    console.table(myLibrary)
}

function renderCards(library) {
    library.forEach((book) => {
        
    })
}

function makeCard() {
    
}