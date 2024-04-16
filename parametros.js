// parâmetros de função

               // 2      // 2
// function soma(numero1, numero2) {
//     return numero1 + numero2;
// }

// console.log(soma(2, 2))
// console.log(soma(4, 2))
// console.log(soma(10, 2))

// parâmetros x argumentos

// ordem dos parâmetros

function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

// console.log(nomeIdade(40, "Juliana"))

function soma(numero1, numero2) {
    return numero1 + numero2;
}

function multiplica(numero1 = 1, numero2 = 1) {
    return numero1 * numero2
}

                            //9
console.log(multiplica(soma(4, 5)))


function cumprimento() {
    console.log("oi, gente!")
}

cumprimento()

function cumprimentoPessoa(pessoa) {
    console.log(`oi, ${pessoa}`)
}

cumprimentoPessoa("Helena")

function operacaoMatematica(numero1, numero2, numero3 = 1) {
    return numero1 + numero2 + numero3
}

console.log(operacaoMatematica(15, 30))