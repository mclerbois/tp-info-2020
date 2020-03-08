/*
base de données et fonctions javascript
*/

/* 
  la base de données ci-dessous est simulée via une variable (objet) en javascript

  Elle contient un enregistrement contenant 6 champs de valeurs

  1) la désignation.
  2) Des informations sur le produit.
  3) Le chemin (path) de l'image à utiliser.
  4) La quantité de produit dans la machine. 
  5) Le prix. 
  6) Le symbole monaitaire utilisé.

  Chaque champ est désignée par un mot suivi de : et d'un valeur au format texte ou nombre. 

*/

var db = {
  designation: "Lotus Mini Gaufre Suzy 28.5gr",
  info: `Farine de blé, sucre 21%, huiles végétales (palme*, colza), sirop de
    glucose-fructose, oeufs de poules élevées au sol, levure, émulsifiants
    (mono- et diglycérides d'acides gras, stéaroyl-2-lactylate de sodium,
    lécithine de soja), sel, arôme, *Huile de palme issue de plantations
    durables et certifiées`,
  img: "../images/img1.jpg",
  quantity: 25,
  price: 1,
  currency: "€"
};

/*
  Fonction setup() appelée automatiquement après la lecture de tous les élements de la page.

  Elle devra utiliser les 7 champs de la base de données pour modifier l'affichage de la page.
  
*/

function setup() {
  //document.getElementById("productDesignation").innerHTML = db.designation;
  //$("#productDesignation").html(db.designation);
  //$("#productInfo").html(db.info);
  //$("#productImg").attr("src", db.img);
  /*

  */
  // modifier le fichier index.html et compléter la fonction setup
  // pour afficher la quantité, le prix et le symbole monaitaire.
  // ajouter le code javascript nécessaire pour ne pas afficher les boutons
  // des produits précédents et suivants. (Ne pas supprimer les lignes dans le code HTML)
}

/*
  Cette fonction devra simuler l'achat d'un produit et modifier l'affichage.
*/

function acheter() {
  // fonction de gestion d'un achat
}

/* Les deux fonctions ci-dessous seront créées dans le tp4 lorsque le tp3 sera terminé */

function selectPreviousProduct() {
  alert("Pas encore fonctionnelle");
}

function selectNextProduct() {
  alert("Pas encore fonctionnelle");
}

/*

  Lorsque le tp3 est terminé, créez une copie du tp3 et renommer cette copie sous le nom de tp4

  Pour le tp4 ajouter dans le dossier images, les images de 2 nouveaux produits, attention à la taille des images
  
  modifier la tailles des images afin d'obtenir une taille équivalente à celle de img1.jpg.


  Modifier la base de données comme proposé ci-dessous


  var db = {
  index: 0, // index de l'image sélectionnée
  products: [
    // tableau de produits
    {
      // premier produit
      designation: "Lotus Mini Gaufre Suzy 28.5gr",
      info: `Farine de blé, sucre 21%, huiles végétales (palme*, colza), sirop de
      glucose-fructose, oeufs de poules élevées au sol, levure, émulsifiants
      (mono- et diglycérides d'acides gras, stéaroyl-2-lactylate de sodium,
      lécithine de soja), sel, arôme, *Huile de palme issue de plantations
      durables et certifiées`,
      img: "../images/img1.jpg",
      quantity: 25,
      price: 1,
      currency: "€"
    },
    {
      // deuxième produit, compléter les valeurs
      designation: "",
      info: ``,
      img: "../images/",
      quantity: 0,
      price: 0,
      currency: ""
    },
    {
      // troisième produit, compléter les valeurs
      designation: "",
      info: ``,
      img: "../images/",
      quantity: 0,
      price: 0,
      currency: ""
    }
  ]
};


modifier les codes des fonctions selectPreviousProduct() et selectNextProduct() pour changer le produit sélectionné
corriger également la fonction d'achat

Lorsque le tp4 est terminé, créez une copie du tp3 et renommer cette copie sous le nom de tp5

Dans le tp5 nous ajouterons les éléments permettant de mémoriser les opérations dans votre navigateur.

Dans le tp6 nous ajouterons un enregistreur d'achats. (enregistre l'heure, le nom du produit, la quantité, le prix)

Dans le tp7 nous créerons un page permettant d'afficher les informations sur les ventes par jour, semaines, mois ...

Dans le tp8 nous créerons un base de données mysql sur un raspberry pi

Dans le tp9 nous ajouterons aux pages des tp6 et tp7 l'utilisation de la base de donnée du raspberry

...

*/
