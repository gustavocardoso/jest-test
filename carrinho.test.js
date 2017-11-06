const Carrinho = require('./carrinho')
const Produto = require('./produto')

let carrinho

beforeEach(() => {
  carrinho = new Carrinho()
})

test('deve verificar se um carrinho está vazio', () => {
  expect(carrinho.totalDeItems()).toBe(0)
})

test('deve adicionar um poduto ao carrinho', () => {
  let produto = new Produto('Convite Passaporte', 7.5, 5)
  
  carrinho.adicionar(produto)
  
  expect(carrinho.totalDeItems()).toBe(1)
})

test('deve adicionar dois podutos ao carrinho', () => {
  let produto1 = new Produto('Convite Passaporte', 7.5, 5)
  let produto2 = new Produto('Convite Passaporte', 7.5, 5)
  
  carrinho.adicionar(produto1)
  carrinho.adicionar(produto2)
  
  expect(carrinho.totalDeItems()).toBe(2)
})


test('deve retornar o subtotal de cada produto', () => {
  let produto1 = new Produto('Cerveja red ale', 10, 9.5)
  let produto2 = new Produto('Cerveja cream ale', 20, 6)
  let produto3 = new Produto('Cerveja stout', 5, 12)

  carrinho.adicionar(produto1)
  carrinho.adicionar(produto2)
  carrinho.adicionar(produto3)

  expect(carrinho.subTotalItems()).toEqual([95, 120, 60])
})


test('deve chamar o método subTotalItems quando calcular o valor total', () => {
  let produto1 = new Produto('Cerveja red ale', 10, 9.5)
  let produto2 = new Produto('Cerveja cream ale', 20, 6)
  let produto3 = new Produto('Cerveja stout', 5, 12)

  carrinho.adicionar(produto1)
  carrinho.adicionar(produto2)
  carrinho.adicionar(produto3)

  const spy = jest.spyOn(carrinho, 'subTotalItems')
  const total = carrinho.valorTotal()

  expect(spy).toHaveBeenCalledTimes(1)

  spy.mockReset();
  spy.mockRestore();
});

test('deve retornar o valor total do carrinho', () => {
  let produto1 = new Produto('Cerveja red ale', 10, 9.5)
  let produto2 = new Produto('Cerveja cream ale', 20, 6)
  let produto3 = new Produto('Cerveja stout', 5, 12)

  carrinho.adicionar(produto1)
  carrinho.adicionar(produto2)
  carrinho.adicionar(produto3)

  expect(carrinho.valorTotal()).toBe(275)
})

test('deve chamar o método valorTotal quando calcular o frete', () => {
  let produto1 = new Produto('Cerveja red ale', 10, 9.5)
  let frete = 40

  carrinho.adicionar(produto1)

  const spy = jest.spyOn(carrinho, 'valorTotal')
  const total = carrinho.valorTotalMaiFrete(frete)

  expect(spy).toHaveBeenCalledTimes(1)

  spy.mockReset();
  spy.mockRestore();
})

test('deve retornar o valor total do carrinho com o frete incluso', () => {
  let produto1 = new Produto('Cerveja red ale', 10, 9.5)
  let produto2 = new Produto('Cerveja cream ale', 20, 6)
  let produto3 = new Produto('Cerveja stout', 5, 12)
  let frete = 40

  carrinho.adicionar(produto1)
  carrinho.adicionar(produto2)
  carrinho.adicionar(produto3)

  expect(carrinho.valorTotalMaiFrete(frete)).toBe(315)
})
