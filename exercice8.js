function totalAvecRemise(total, remise) {
  let totalFinal = total - (total * remise / 100);
  return totalFinal;
}

// Demander les valeurs à l'utilisateur
let totalHT = Number(prompt("Entrez le total HT : "));
let remise = Number(prompt("Entrez la remise en % : "));

// Calcul du total final
let resultat = totalAvecRemise(totalHT, remise);

// Affichage du résultat
console.log("Le total final après remise est : " + resultat);
