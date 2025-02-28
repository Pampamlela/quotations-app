
let formulaire = document.getElementById("formulaire"); // on récupère le formulaire



// ajout d'un gestionnnaire d'évènement sur le formulaire
formulaire.addEventListener("submit", ()=> {   

    let author = document.getElementById("name").value // récuperation de l'auteur
    let quote = document.getElementById("citation").value // récupération de la citation
   
    console.log(author)
    console.log(quote)

    addQuote()
}); 

function addQuote(quote, author) {
    let newDivQuote = document.createElement ("p", {class: "text"}) // nouveau <p> avec la class text
    let newDivAuthor = document.createElement ("p", {class: "author"}) // nouveau <p> avec la class author
    quote = newDivQuote.value 
    author = newDivAuthor.value

    let newDiv = document.createElement("div", {class:"quote"}) // nouvelle <div> avec la class quote
    newDiv = quote + author

    let paragraphe = document.getElementById("quote-list").appendChild(newDiv) // récupération de l'élément avec l'id quote-list et ajout de la nouvelle citation
}