var idade = 66
if (idade < 16) {
    console.log('Não vota') // não se usa window.document porque não estamos no navegador
} else if (idade < 18 || idade > 65) { // semelhante ao elif do Python
    console.log('Voto opcional')
} else {
    console.log('Voto obrigatório')
}