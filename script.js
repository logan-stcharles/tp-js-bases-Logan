let age = 17;


if (age < 13) {
    console.log("Accès interdit aux moins de 13 ans.");
} else if (age < 18) {
    console.log("Vous pouvez accéder à la section ado.");
} else {
    console.log("Bienvenue dans l'espace adulte.");
}



for (let produit_table_de_7 = 1; produit_table_de_7 < 11; produit_table_de_7++) {
    
    let resultat = produit_table_de_7 * 7; 
    console.log("Calcul de " + produit_table_de_7 + " fois 7.")
    console.log(resultat);  
}

function saluer(prenom)  {
    return ("Bonjour " + prenom + ", Comment vas-tu?"); 
    
}

console.log(saluer("Logan"));