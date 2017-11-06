function Carrinho() {
  this.items = []
}

Carrinho.prototype.totalDeItems = function() {
  return this.items.length
}

Carrinho.prototype.adicionar = function(produto) {
  return this.items.push(produto)
}

Carrinho.prototype.subTotalItems = function() {
  return this.items.map(produto => produto.preco * produto.qtd)
}

Carrinho.prototype.valorTotal = function() {
  return this.subTotalItems().reduce((sum, value) => {
    return sum + value
  }, 0)
}

Carrinho.prototype.valorTotalMaiFrete = function(frete) {
  return this.valorTotal() + frete
}

module.exports = Carrinho
