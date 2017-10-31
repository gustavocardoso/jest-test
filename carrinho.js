function Carrinho() {
  this.items = []
}

Carrinho.prototype.totalDeItems = function() {
  return this.items.length
}

Carrinho.prototype.adicionar = function(produto) {
  return this.items.push(produto)
}

module.exports = Carrinho
