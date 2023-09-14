function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = () => {
        let isRead = "not read yet"
        if (read == true) {
            isRead = "read"
        }
        return `${title} by ${author}, ${pages} pages, ${isRead}.`
    }
}