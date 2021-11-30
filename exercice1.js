let voiture = {
    Nom : "Eggo",
    imgUrl : "https://images.caradisiac.com/logos/9/9/8/2/159982/S7-Citroen-Eggo-concept-de-citadine-du-futur-73689.jpg",
    nombresRoues : 4,
    Couleur : "Marron",
    Constructeur : "Citroen",
    Carburant : "Solaire",
    nombrePortes : 3,
    Autonomie : "450km",
    vitesseMaxi : "120km/h"
};

// extracting the image
let img = document.createElement("img");
img.src = voiture.imgUrl;
document.body.appendChild(img)

// name of the car
let titre = document.getElementById('titre').innerHTML = voiture.Nom;

// Characteristic of the car
let text = document.createElement('div');
document.body.appendChild(text);
text.innerHTML = "Elle posséde " +voiture.nombresRoues + " roues <br> " +
    "Sa couleur est " +voiture.Couleur+ "<br>" +
    " Son constructeur est " +voiture.Constructeur+ "<br>" +
    " Son carburant est le " +voiture.Carburant+ "<br>" +
    "Elle possède " +voiture.nombrePortes+ " portes" + "<br>" +
    "Son autonomie s'élève à " +voiture.Autonomie+ "<br>" +
    "Sa vitesse maximale est de " +voiture.vitesseMaxi+ "";
