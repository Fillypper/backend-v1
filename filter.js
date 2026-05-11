function nossoFilter (lista, fu(ncaoCondicao){
    const novaLista = new Array(lista.length)
    for (i = 0; i < lista.length; i++){
        let numero = lista[i]
        if(funcaoCondicao(numero) === true){
            novaLista.push(numero)
        }
    } return novaLista
}

console.log(nossoFilter([1, 2, 3, 4, 5], function(numero){
    return numero > 3
}))