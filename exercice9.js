function factorielle(n) {
  if (n === 0) {        // cas de base
    return 1;
  } else {              // cas récursif
    return n * factorielle(n - 1);
  }
}

// Exemple d'utilisation :
console.log(factorielle(5)); // 120
