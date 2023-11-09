mostranome()                                            /* Função 1 */
mostraOperações("Alisson", "6", "9")                    /* Função 2 */
maioridade("19")                                        /* Função 3 */
imprimir()                                              /* Função 4 */
soma("19", "15")                                        /* Função 5 */
imprimirFrutas()                                        /* Função 6 */
imprimirLivro()                                         /* Função 7 */
/* Alerta(), esta função deve ser executada em html. */ /* Função 8 */
imprimirMaiuscula("este texto vai ser alterado")        /* Função 9 */
/* consultarCEP(), deve ser executada em html. */       /* Função 10*/


/* Exercício 1 */
function mostranome() {
    let nome = "Alisson"
    let idade = "18"

    console.log('Olá, meu nome é', nome, 'e eu tenho', idade, 'anos');
}

/* Exercício 2 */
function mostraOperações(nome, n1, n2) {
    var n1 = parseFloat(n1);
    var n2 = parseFloat(n2);

    let result1 = n1 + n2;
    let result2 = n1 - n2;
    let result3 = n1 * n2;
    let result4 = n1 / n2;

    console.log('A soma, subtração, multiplicação e divisão de ', n1, ' e ', n2, 'é, respectivamente:')
    console.log("soma: ", result1)
    console.log("subtração: ", result2)
    console.log("multiplicação: ", result3)
    console.log("Divisião: ", result4)
}

/* Exercício 3 */
function maioridade(idade) {
    if (idade < 18) {
        console.log('Você é menor de idade')
    }
    else {
        console.log('Você é maior de idade')
    }
}

/* Exercício 4 */
function imprimir() {
    i = 0;
    while (i <= 100) {
        console.log(i);
        i++
    }
}

/* Exercício 5 */
function soma(num1, num2) {
    return num1 + num2;
}

/* Exercício 6 */
function imprimirFrutas() {
    const frutasFavoritas = ["Maçã", "Banana", "Morango", "Pêssego", "Uva"];

    for (let i = 0; i < frutasFavoritas.length; i++) {
        console.log(frutasFavoritas[i]);
    }
}

/* Exercício 7 */
function imprimirLivro() {
    const livro = {
        titulo: "O Senhor dos Anéis",
        autor: "J.R.R. Tolkien",
        numeroDePaginas: 1178
    };

    console.log("Título: " + livro.titulo);
    console.log("Autor: " + livro.autor);
    console.log("Número de Páginas: " + livro.numeroDePaginas);
}

/* Exercício 8 */
function alerta() {
    const aviso = document.getElementById("aviso")
    aviso.innerHTML = "Você clicou no botão!"
}

/* Exercício 9 */
function letraMaiuscula(str) {
    const palavras = str.split(' ');
    const palavrasCapitalizadas = palavras.map(function (palavra) {
        return palavra.charAt(0).toUpperCase() + palavra.slice(1);
    });
    return palavrasCapitalizadas.join(' ');
}

function imprimirMaiuscula(texto) {
    const textoOriginal = texto;
    const textoCapitalizado = letraMaiuscula(textoOriginal);
    console.log(textoCapitalizado);
}

/* Exercício 10 */
function consultarCEP() {
    const cep = document.querySelector("#cep").value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    // Realiza uma solicitação fetch para obter os dados do CEP
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Não foi possível consultar o CEP.");
            }
            return response.json();
        })
        .then(data => {
            if (data.erro) {
                alert("CEP não encontrado.");
            } else {
                document.getElementById("logradouro").value = data.logradouro;
                document.getElementById("bairro").value = data.bairro;
                document.getElementById("localidade").value = data.localidade;
                document.getElementById("uf").value = data.uf;
            }
        })
        .catch(error => {
            console.error("Ocorreu um erro ao consultar o CEP:", error);
        });
}