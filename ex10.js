let peso = 100
let altura = 1.78
let imc = peso / (altura) ** 2


if (imc < 18.5) {
    console.log("Abaixo do peso")

}else if (imc >= 18.5 && imc <= 25){
    console.log("Peso normal")
}else if (imc > 25 && imc <= 30){
    console.log("Acima do peso")
}else {
    console.log("Acima do peso")
}
