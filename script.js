
let numero1 = prompt('Insira o primeiro numero')

let operação = prompt('Insira uma das quatro operações')

while(operação != '+' && operação != '-' && operação != '*' && operação != '/'){
    alert('Insira a operação corretamente')
    operação = prompt('Insira uma das quatro operações')
}

let numero2 = prompt('Insira o segundo número')

let valor = 0

numero1 = parseInt(numero1)
numero2 = parseInt(numero2)

if(operação == '+'){
 valor = numero1 + numero2
  
}else if(operação == '-'){
    valor = numero1 - numero2
    
}else if(operação == '/'){
    valor = numero1 / numero2

}else if(operação == '*'){
    valor = numero1 * numero2
  
}

alert('o resultado é:' +valor)

