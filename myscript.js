



const dialog= document.getElementById("addBooks") 


function showAddDialog(){
    dialog.showModal()
}
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const container = document.querySelector('.main');
const wrapper = document.querySelector('.wrapper');


document.getElementById("dialogButton").addEventListener('click', function() {
    event.preventDefault()
    
    const card=document.createElement("div");
    const bookTitle=document.createElement("h2");
    const bookAuthor=document.createElement("p");
    const bookPages=document.createElement("p");
    const statusReading=document.createElement("p");
    const btnContainer=document.createElement("div");
    
    const rmvBtn=document.createElement("button");
    const checkbox = document.createElement("input");
    const checkboxContainer = document.createElement("div");
    

    const label = document.createElement("label");
    label.className = "status-label";
    label.textContent = "Not Read";
    checkbox.type = "checkbox";
    checkbox.className = "statusCheckbox";


    
    
    const titleInput = document.getElementById("title");
    const titleValue = document.getElementById("title").value.trim();
    const authorValue = document.getElementById("author").value.trim();
    const authorInput = document.getElementById("author");
    const pagesValue = document.getElementById("pages").value.trim();
    const pagesInput = document.getElementById("pages");
    const readDiv = document.getElementById("check");
    
    
    
    
    
    if (titleValue === "" || authorValue === "" || pagesValue === "") {
        alert ("Please enter all the data");
        return;
    } 
    
    event.preventDefault()
    
    card.className ="bookCard";
    rmvBtn.className = "rmvButton";
    btnContainer.className = "cardButtons";
    statusReading.textContent = "Read";
    checkboxContainer.className = "check";
    
    
    bookTitle.textContent = `Title: ${titleValue}`;
    bookAuthor.textContent = `Author: ${authorValue}`;
    bookPages.textContent = `Pages: ${pagesValue}`;

    rmvBtn.textContent = "Remove";
    
    card.append(bookTitle, bookAuthor, bookPages, checkbox, label, btnContainer);
    label.className = "status-label";
    label.textContent = "Not Read";
    btnContainer.append(checkboxContainer, rmvBtn  );
    container.appendChild(card);
    checkboxContainer.append(checkbox,label)
    

   
    titleInput.value = ""
    authorInput.value = ""
    pagesInput.value = ""
    dialog.close();


    rmvBtn.addEventListener('click', function(){
        card.remove();
    })
checkbox.addEventListener('change', function() {
    label.textContent = checkbox.checked ? "Read" : "Not Read";
});
})


function closeAddDialog(){
    dialog.close()
}
dialog.addEventListener("click", (e) => {
    if (!wrapper.contains(e.target)){
        dialog.close()
    }
})

const checkbox = document.getElementById('status');
const label = document.getElementById('statusText');

checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
        label.textContent = "Read";
    } else {
        label.textContent = "Not Read";
    }
});






