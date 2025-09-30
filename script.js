let age = 17;


if (age < 13) {
    console.log("Accès interdit aux moins de 13 ans.");
} else if (age < 18) {
    console.log("Vous pouvez accéder à la section ado.");
} else {
    console.log("Bienvenue dans l'espace adulte.");
}

let produit_table_de_7 = 0;

for (let produit_table_de_7 = 0; produit_table_de_7 < 10;) {
    
    let resultat = produit_table_de_7 * 7; 
    console.log("Calcul de " + produit_table_de_7 + " fois 7.")
    console.log(resultat);  
    produit_table_de_7 = produit_table_de_7 + 1;
}

