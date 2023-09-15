//PAGE ELEMENTS

const addBookButton = document.querySelector('.btn-add-book')
const newBookForm = document.querySelector('.newBookForm')
const contentContainer = document.querySelector(".content-container")
const closeWindowBtn = document.querySelector(".close-window")
const newBookDialog = document.querySelector('#newBookDialog')
const totalBooks = document.querySelector(".total-books")
const booksRead = document.querySelector(".books-read")
const booksUnread = document.querySelector(".books-unread")

let myLibrary = [
    {
      title: "Game of Thrones",
      author: "George R. R. Martin",
      pages: 694,
      read: false
    },
    {
        title: "Harry Potter",
        author: "J.J. Rowlings",
        pages: 6224,
        read: true
      }
];
renderCards(myLibrary)

closeWindowBtn.addEventListener('click', (e) => {
    // e.preventDefault()
    newBookDialog.close()
})

addBookButton.addEventListener('click', ()=> {  
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

function updateStats() {
    let totalBooksNum = myLibrary.length

    let totalRead = 0
    myLibrary.forEach((book) => {
        if (book.read === true) {totalRead++}
    })

    totalUnreadNum = totalBooksNum - totalRead

    totalBooks.textContent = `Total books: ${totalBooksNum}`
    booksRead.textContent = `Total books read: ${totalRead}`
    booksUnread.textContent = `Total books not read: ${totalUnreadNum}`
}

function toggleRead(book) {
    let idx = myLibrary.indexOf(book)
    myLibrary[idx].read = !myLibrary[idx].read
    renderCards(myLibrary)
}

function removeBook(book) {
    let idx = myLibrary.indexOf(book)
    myLibrary.splice(idx,1)
    renderCards(myLibrary)
}


function addBookToLibrary() {
    const title = document.querySelector('#book-title').value
    const author = document.querySelector('#author').value
    const pages = document.querySelector('#pages').value
    const isRead = document.querySelector('#read').checked

    let newBook = new Book(title, author, pages, isRead)
    myLibrary.push(newBook)
    renderCards(myLibrary)
}

function renderCards(library) {
    contentContainer.innerHTML = ""
    library.forEach((book) => {
        makeCard(book)
    })
    updateStats()
}

function makeCard(book) {
    const title = book.title
    const author = book.author
    const pages = book.pages
    const read = book.read 

    let readText = '🔴Not Read '
    if (read) { 
        readText = '🟢Read '
    }

    let cardEl = document.createElement("div")
    cardEl.classList.add('card')
    
    let cardTitle = document.createElement("div")
    cardTitle.classList.add('card-title')

    let cardAuthor = document.createElement("div")
    cardAuthor.classList.add('card-author')

    let cardPages = document.createElement("div")
    cardPages.classList.add('card-pages')

    let cardBottom = document.createElement("div")
    cardBottom.classList.add('card-bottom')

    let cardRead = document.createElement("div")
    cardRead.classList.add("card-read")
    cardRead.onclick = () => toggleRead(book)

    let deleteCard = document.createElement("div")
    deleteCard.classList.add('delete-button-container')

    //Making a button inside a DIV
    let deleteCardButton = document.createElement("button")
    deleteCardButton.classList.add('delete-card-button')
    deleteCard.appendChild(deleteCardButton)
    deleteCardButton.textContent = "🗑"
    deleteCardButton.onclick = () => removeBook(book)

    //Adding the Card to the main Container
    contentContainer.appendChild(cardEl)

    cardEl.appendChild(cardTitle)
    cardEl.appendChild(cardAuthor)
    cardEl.appendChild(cardPages)
    cardEl.appendChild(cardBottom)

    cardBottom.appendChild(cardRead)
    cardBottom.appendChild(deleteCard)

    cardTitle.textContent = `${title}`
    
    if (!author) {
        cardAuthor.textContent = `by unknown`
    } else {
        cardAuthor.textContent = `by ${author}`
    }

    if (!pages) {
        cardPages.textContent = `Book Pages: unknown pages`
    } else {
        cardPages.textContent = `Book Pages: ${pages} pages`
    }

    cardRead.textContent = readText
    
}



