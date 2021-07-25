// Classe
function Calculator() {  
    // Méthode  
    this.divide = function(a, b) {
        return a/b;
    }
    // Méthode  
    this.multiply = function(a, b) {
        return a * b;
    }
    // Méthode
    this.sub = function(a, b) {
        return a - b;
    }
    // Méthode
    this.add = function(a, b) {
        return a + b;
    }
}

// Créez un nom d'objet cal
var cal = new Calculator();
// Invoke, méthode add by cal
var result = cal.add(3, 5);
console.log(result);

result = cal.sub(3, 5);
console.log(result);

result = cal.multiply(3, 5);
console.log(result);

result = cal.divide(3, 5);
console.log(result);