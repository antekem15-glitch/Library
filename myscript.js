const dialog = document.getElementById("addBooks");
const container = document.querySelector('.main');
const wrapper = document.querySelector('.wrapper');


function showAddDialog() {
    dialog.showModal();
}

function closeAddDialog() {
    dialog.close();
}


dialog.addEventListener("click", (e) => {
    if (!wrapper.contains(e.target)) {
        dialog.close();
    }
});


class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    createBook() {
        // DOM-Elemente erstellen
        this.card = document.createElement("div");
        this.bookTitle = document.createElement("h2");
        this.bookAuthor = document.createElement("p");
        this.bookPages = document.createElement("p");
        this.statusReading = document.createElement("p");
        this.btnContainer = document.createElement("div");
        this.rmvBtn = document.createElement("button");
        this.checkbox = document.createElement("input");
        this.checkboxContainer = document.createElement("div");
        this.label = document.createElement("label");

        // Klassen und Attribute setzen
        this.card.className = "bookCard";
        this.rmvBtn.className = "rmvButton";
        this.btnContainer.className = "cardButtons";
        this.checkboxContainer.className = "check";
        this.checkbox.type = "checkbox";
        

        // Texte setzen
        this.bookTitle.textContent = `Title: ${this.title}`;
        this.bookAuthor.textContent = `Author: ${this.author}`;
        this.bookPages.textContent = `Pages: ${this.pages}`;
        this.statusReading.textContent = "Read";
        this.rmvBtn.textContent = "Remove";
        this.label.textContent = "Not Read";

        this.checkboxContainer.append(this.checkbox, this.label)
        this.btnContainer.append(this.checkboxContainer, this.rmvBtn);
        this.card.append(
            this.bookTitle,
            this.bookAuthor,
            this.bookPages,
            this.btnContainer,
            
        );

        
        this.rmvBtn.addEventListener('click', () => {
            this.card.remove();
        });

        this.checkbox.addEventListener('change', () => {
            this.label.textContent = this.checkbox.checked ? "Read" : "Not Read";
        });

        return this.card;
    }
}


document.getElementById("dialogButton").addEventListener('click', function() {
    event.preventDefault();

    const titleValue = document.getElementById("title").value.trim();
    const authorValue = document.getElementById("author").value.trim();
    const pagesValue = document.getElementById("pages").value.trim();

    if (titleValue === "" || authorValue === "" || pagesValue === "") {
        alert("Please enter all the data");
        return;
    }
    const book=new Book(titleValue, authorValue, pagesValue);
    const cardElement = book.createBook()
    container.appendChild(cardElement);

   
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    dialog.close();
});