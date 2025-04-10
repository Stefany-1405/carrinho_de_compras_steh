let totalGeral = 0, produtosCarrinho = {};

function atualizarCarrinho() {
    const carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = Object.entries(produtosCarrinho).map(([nome, { quantidade, preco }]) =>
        `<section class="carrinho__produtos__produto">
            <span class="texto-azul">${quantidade}x</span> ${nome} <span class="texto-azul">R$ ${preco.toFixed(2)}</span>
        </section>`
    ).join('');
    document.getElementById('valor-total').textContent = `R$ ${totalGeral.toFixed(2)}`;
}

function adicionar() {
    const [nomeProduto, valorUnitario] = document.getElementById('produto').value.split('-').map(v => v.trim());
    const quantidade = parseInt(document.getElementById('quantidade').value), preco = quantidade * parseFloat(valorUnitario.split('R$')[1]);
    produtosCarrinho[nomeProduto] = produtosCarrinho[nomeProduto] ? { quantidade: produtosCarrinho[nomeProduto].quantidade + quantidade, preco: produtosCarrinho[nomeProduto].preco + preco } : { quantidade, preco };
    totalGeral += preco;
    atualizarCarrinho();
    document.getElementById('quantidade').value = 1;
}

function limpar() {
    totalGeral = 0; produtosCarrinho = {}; atualizarCarrinho();
    document.getElementById('quantidade').value = 1;
}
