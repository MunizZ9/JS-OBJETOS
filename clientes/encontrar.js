const clientes = require("./clientes.json")

function encontrar(lista, chave, valor){
    return lista.find((item) => item[chave].includes(valor)); 
}

const encontrado = encontrar(clientes, "email", "kcoard8@squidoo.com");

const encontrado2 = encontrar(clientes, "telefone", "1918820860");

console.log(encontrado);