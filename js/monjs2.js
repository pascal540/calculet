/**
 * Calculatrice: Auteur Pascal Haas CDA
 * 20 Aout 2021
 * Nom du fichier 'monjs2.js'
 */

// on recupere tous les div de classe 'btn'
var mesboutons = document.querySelectorAll(".btn");
// l'endroit ou sera affiché les resulats des operations
var affichageCalculs = document.querySelector(".calculs");

var precision = 2;
var maPrecision = document.querySelector(".combo");
// ajout des evenements click pour chaque 'boutons' du document : ici ce sera nos petites div mais pourrait etre autre chose
mesboutons.forEach(function (btn) {
  btn.addEventListener("click", calculs);
});

maPrecision.addEventListener("click", calculPrecision);

// par leur ID on affichera les resultats dans le 'h4'
var affichageResultats = document.getElementById("resultats");

function calculs(event) {
  var valeurDuCLick = event.target.innerHTML;
  if (valeurDuCLick === "=") {
    if (affichageCalculs.innerHTML !== "") {
      affichageResultats.innerHTML = eval(affichageCalculs.innerHTML).toFixed(
        precision
      );
    }
  } else if (valeurDuCLick === "C") {
    affichageCalculs.innerHTML = "";
    affichageResultats.innerHTML = "";
  } else if (valeurDuCLick === "CE") {
    /* effacement de la derniere entrée ! util pour les longues entrées */
    var str = affichageCalculs.innerHTML;
    var newChaine = str.substring(0, str.length - 1);
    affichageCalculs.innerHTML = newChaine;
  } else if (valeurDuCLick === "+/-") {
    /* on ajoute un signe '-' et on entoure d parentheses l'expression trouvée*/
    var str = affichageCalculs.innerHTML;
    var newChaine = "-" + "(" + str + ")";
    affichageCalculs.innerHTML = newChaine;
  } else {
    affichageCalculs.innerHTML += valeurDuCLick;
  }
}

function calculPrecision(event) {
  maPrecision = document.getElementById("quantite").value;
  precision = maPrecision;
  affichageResultats.innerHTML = eval(affichageCalculs.innerHTML).toFixed(
    precision
  );
}
