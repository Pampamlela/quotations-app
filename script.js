
let formulaire = document.getElementById("formulaire"); // on récupère le formulaire
console.log(formulaire);
let quoteCount = 0 //compter le nombre de citations

// ajout d'un gestionnnaire d'évènement sur le formulaire
formulaire.addEventListener("submit", (event)=> {  
    event.preventDefault() //empeche le navigateur de rafraichir la page te permet de recuperer les deux valeurs !
    let author = document.getElementById("name").value; // récuperation de l'auteur
    let quote = document.getElementById("citation").value; // récupération de la citation

    console.log(author);
    console.log(quote);


    addQuote(quote, author)
})


function addQuote(quote, author) {
    let newDivText = document.createElement ("p", {class: "text"}); // nouveau <p> avec la class text
    console.log(newDivText);
    let newDivAuthor = document.createElement ("p", {class: "author"}); // nouveau <p> avec la class author
    console.log(newDivAuthor);

    newDivText.innerHTML= quote; //ajout de la citation dans le <p>
    newDivAuthor.innerHTML = author; //ajout du nom dans le <p>
   
    let newDivQuotes = document.createElement("div", {class:"quote"}); // nouvelle <div> avec la class quote
    console.log(newDivQuotes);
    newDivQuotes = quote + " " + author;
    console.log(newDivQuotes);

    document.getElementById("quote-list").appendChild(newDivQuotes); // récupération de l'élément avec id "quote-list" et ajout de la nouvelle citation

    //quoteCount += 1;
    //let nombreCitation = document.getElementById("count");
    //console.log(nombreCitation);
    //nombreCitation.i= "Vous avez enregistrez " +quoteCount+ " citations";
};

/*- Créez une fonction addQuote(quote, author) prenant deux paramètres (quote et author, du coup).
- Dans cette fonction :
    - Créez un élément <p> pour la citation et attribuez-lui la classe "text".
    - Créez un élément <p> pour l’auteur/autrice et attribuez-lui la classe "author".
    - Insérez les valeurs des paramètres quote et author dans ces éléments.
    - Créez une <div> avec la classe "quote", puis ajoutez-y les deux paragraphes.
    - Récupérez l’élément ayant l’id "quote-list" et ajoutez-y la nouvelle citation avec appendChild().
- Modifiez le gestionnaire d’événements du formulaire pour appeler addQuote() au lieu de simplement afficher les valeurs dans la console.
*/