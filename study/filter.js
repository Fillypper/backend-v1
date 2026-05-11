function nossoFilter (lista, funcaoCondicao){
    const novaLista = []
    for (let i = 0; i < lista.length; i++){
        let numero = lista[i]
        if(funcaoCondicao(numero)){ //nao perecisamos colocar === true pois o if ja verifica se seria true
            novaLista.push(numero)
        }
    } return novaLista
}

console.log(nossoFilter([1, 2, 3, 4, 5], function(numero){
    return numero > 3
}))