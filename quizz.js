// Obtenez les éléments HTML pour chaque question et réponse
const question1 = document.getElementById("q1");
const question2 = document.getElementById("q2");
const question3 = document.getElementById("q3");
const response1 = document.getElementsByName("r1");
const response2 = document.getElementsByName("r2");
const response3 = document.getElementsByName("r3");

// Obtenez le bouton "Calculer le pourcentage de compatibilité"
const calculateButton = document.getElementById("calculateButton");

// Ajoutez un écouteur d'événements au bouton pour déclencher le calcul du pourcentage de compatibilité
calculateButton.addEventListener("click", calculateCompatibility);

// Fonction pour calculer le pourcentage de compatibilité
function calculateCompatibility() {
  let compatibilityScore = 0;

  // Parcourez les réponses à la première question et ajoutez des points au score de compatibilité en fonction de la réponse sélectionnée
  for (let i = 0; i < response1.length; i++) {
    if (response1[i].checked && response1[i].value === "R1") {
      compatibilityScore += 10;
    } else if (response1[i].checked && response1[i].value === "R2") {
      compatibilityScore += 5;
    } else if (response1[i].checked && response1[i].value === "R3") {
      compatibilityScore += 3;
    }
  }

  // Parcourez les réponses à la deuxième question et ajoutez des points au score de compatibilité en fonction de la réponse sélectionnée
  for (let i = 0; i < response2.length; i++) {
    if (response2[i].checked && response2[i].value === "R1") {
      compatibilityScore += 10;
    } else if (response2[i].checked && response2[i].value === "R2") {
      compatibilityScore += 5;
    } else if (response2[i].checked && response2[i].value === "R3") {
      compatibilityScore += 3;
    }
  }

  // Parcourez les réponses à la troisième question et ajoutez des points au score de compatibilité en fonction de la réponse sélectionnée
  for (let i = 0; i < response3.length; i++) {
    if (response3[i].checked && response3[i].value === "R1") {
      compatibilityScore += 10;
    } else if (response3[i].checked && response3[i].value === "R2") {
      compatibilityScore += 5;
    } else if (response3[i].checked && response3[i].value === "R3") {
      compatibilityScore += 3;
    }
  }

  // Calculez le pourcentage de compatibilité
  const compatibilityPercentage = Math.round((compatibilityScore / 90) * 100);

  // Afficher le résultat du pourcentage de compatibilité
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `Votre pourcentage de compatibilité est de ${compatibilityPercentage}% !`;
}