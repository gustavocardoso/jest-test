const Carrinho = require('./carrinho')
const Produto = require('./produto')

test('deve verificar se um carrinho está vazio', () => {
  const carrinho = new Carrinho()
  expect(carrinho.totalDeItems()).toBe(0)
})

test('deve adicionar um poduto ao carrinho', () => {
  let produto = new Produto('Convite Passaporte', 7.5, 5)
  let carrinho = new Carrinho()
  carrinho.adicionar(produto)
  expect(carrinho.totalDeItems()).toBe(1)
});
