// Version 1 : avec boucle
function sommeIterative(n) {
  let s = 0;
  for (let i = 1; i <= n; i++) {
    s += i;
  }
  return s;
}

// Version 2 : avec récursion
function sommeRecursive(n) {
  if (n === 0) {          // cas de base
    return 0;
  } else {                // cas récursif
    return n + sommeRecursive(n - 1);
  }
}

// Exemple d'utilisation
console.log(sommeIterative(5));  // 15
console.log(sommeRecursive(5));  // 15
