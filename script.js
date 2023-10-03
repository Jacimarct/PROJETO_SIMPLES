// Método Simples
document.getElementById("titulo").innerText = "Site de Produtos Incríveis";

// Método Complexo
const produtoContainer = document.getElementById("produto-container");

const produto = document.createElement("div");
produto.className = "produto";

const nome = document.createElement("h2");
nome.innerText = "Produto Exemplo";

const descricao = document.createElement("p");
descricao.innerText = "Esta é a descrição do nosso produto incrível.";

const preco = document.createElement("p");
preco.innerText = "Preço: R$ 99,99";

produto.appendChild(nome);
produto.appendChild(descricao);
produto.appendChild(preco);

produtoContainer.appendChild(produto);
