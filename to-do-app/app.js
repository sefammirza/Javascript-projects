// Book Class: Respresents a Book  

class Book {
    constructor(title, author, isbn){
        this.title = this;
        this.author = author;
        this.isbn = isbn;
    }
}


// UI Class: Handle UI Tasks

class UI {
    static displayBooks (){
        const StoredBooks = [
            {
                title:'Book One',
                author:'John Doe',
                isbn:'3434434'
            },
            {
                title:'Book Two',
                author: 'Jane Doe',
                isbn:'45545'
            }
        ];




        const books = StoredBooks;

        books.forEach((book) => UI.addBookToList(book));

    }

    static addBookToList(book){

    }
}

// Store Class : Handles Storage


// Event: Display Books

// Event : Add a Book 

// Event: Remove a Book