//Escopo é o lugar no código que nos declaramos funcoes e variavis (ordem que declaramos as coisas)

//hoisting (ler o arquivo estaticamente e joga pra cima, prepara o escopo)

// Contexto tudo que aquela função tem acesso this globalThis, 

// Função dentro de objeto se chama metodo

// 2 fases principais Compilacao -> Interpretacao

//compilacao le o arquivo inteiro mas nao executa e monta os escopos

// interpretacao vai executando os escopos

// Na compilacao gera o escopo, na interpretacao/execucao gera o contexto

console.log("Contexto depende de quem chamou");

console.log("O Escopo é tudo que está pra cima");

function java(a,b) {
    c = a ** b
    return console.log(c);
    
}

java(15,2)

