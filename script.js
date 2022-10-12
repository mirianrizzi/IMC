let altura = prompt("Digite sua altura");
let peso = prompt("Digite seu peso");
let imc = peso/(altura*altura); 


if (imc < 18.5) {
    alert(`Magreza - IMC: ${imc.toFixed(2)}`);
} else if (imc < 25) {
    alert(`Normal - IMC: ${imc.toFixed(2)}`);
} else if (imc < 30){
    alert(`Sobrepeso I - IMC: ${imc.toFixed(2)}`);
} else if (imc < 40) {
    alert(`Obesidade II - IMC: ${imc.toFixed(2)}`);
} else {
    alert(`Obesidade Grave III - IMC: ${imc.toFixed(2)}`);
}
