/**
 * Ce script intercepte les appels à `console.log`, `console.error` et les exceptions non gérées
 * pour afficher leurs messages dans des popups d'alerte. 
 * 
 * Fonctionnalités :
 * - Redéfinit `console.log` pour afficher les messages dans une alerte tout en conservant le comportement natif.
 * - Redéfinit `console.error` pour afficher les erreurs dans une alerte tout en les journalisant comme à l'origine.
 * - Capture les exceptions non gérées (`window.onerror`) et les affiche dans une alerte.
 * 
 * Utilisation :
 * - Décommentez le code pour activer ces fonctionnalités.
 * 
 * Limites :
 * - L'utilisation fréquente d'alertes peut interrompre l'expérience utilisateur.
 * - Ce code est à utiliser principalement pour le débogage et non en production.
 * 
 * Avertissement :
 * - En cas de grand nombre de logs ou d'erreurs, les popups peuvent devenir envahissantes.
 */


// Intercepter les appels à console.log
/*
(function() {
    const originalConsoleLog = console.log;
    console.log = function(...args) {
      // Créer un message à partir des arguments passés à console.log
      const message = args.map(arg => typeof arg === 'object' ? JSON.stringify(arg) : arg).join(' ');
      alert('Console Log: ' + message);  // Afficher une alerte avec le message
      originalConsoleLog.apply(console, args);  // Appeler la fonction console.log originale
    };
  })();
  
  // Intercepter les erreurs (console.error)
  (function() {
    const originalConsoleError = console.error;
    console.error = function(...args) {
      // Créer un message à partir des erreurs
      const message = args.map(arg => typeof arg === 'object' ? JSON.stringify(arg) : arg).join(' ');
      alert('Console Error: ' + message);  // Afficher une alerte avec l'erreur
      originalConsoleError.apply(console, args);  // Appeler la fonction console.error originale
    };
  })();
  
  // Intercepter les exceptions non gérées (erreurs globales)
  window.onerror = function(message, source, lineno, colno, error) {
    const errorMessage = `Error: ${message} at ${source}:${lineno}:${colno}`;
    alert(errorMessage);  // Afficher une alerte avec l'erreur globale
    return true;  // Empêche la propagation de l'erreur dans la console
  };
  */