// Create library array

const library = [];

// Create book constructor 

function Book(title, author, pages, read) {
    this.title = title; 
    this.author = author;
    this.pages = pages; 
    this.read = read;
    this.addBookToLibrary = function() {
        library.push(this);
    }
}

// Add in dummy book to test constructor

const dummyBook = Book("The Great Gatsby", "F Scott Fitzgerald", 346, "yes");

console.log(library);

// Select the table

let table = document.querySelector('.table');

// Create function that loops through the array and adds each row to table

function tableMaker() {
    for (books in library) {
        let row = table.insertRow(-1);

        let c1 = row.insertCell(0);
        let c2 = row.insertCell(1);
        let c3 = row.insertCell(2);
        let c4 = row.insertCell(3);

        c1.innerText = books.title; // I am not sure whether this should be "books"
        c2.innerText = books.author;
        c3.innerText = books.pages;
        c4.innerText = books.read;
    }
}

// Create modal dialog box

let modal = document.querySelector('.modal');

// Create onclick function to open up modal dialog box

let newBookBtn = document.querySelector('.new-book-btn');

newBookBtn.addEventListener('click', () => {
    modal.showModal()
})

// Create button to submit form

let submitBtn = document.querySelector('.submit-btn');

submitBtn.addEventListener('click', () => {
    Book() // Might need to add more here
    modal.close()
})

// Create onclick function to close modal dialog box

let closeBtn = document.querySelector('.close-btn');

closeBtn.addEventListener('click' () => {
    modal.close()
})