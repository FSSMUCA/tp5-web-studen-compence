function verifierMotDePasse(mdp) {
  // true si longueur ≥ 8 ET contient '@'
  if (mdp.length >= 8 && mdp.includes("@")) {
    return true;
  } else {
    return false;
  }
}

// Demander un mot de passe à l'utilisateur
let mdpUser = prompt("Entrez un mot de passe : ");

// Vérifier et afficher le résultat
if (verifierMotDePasse(mdpUser)) {
  console.log("Mot de passe valide");
} else {
  console.log("Mot de passe non valide");
}
