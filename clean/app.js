
window.addEventListener('load', () => {
  const alimentos = []
  const elForm = document.querySelector('#form-salvar-alimento')
  const elListaAlimentosContainer = document.querySelector('#lista-alimentos-container')
  const elListaAlimentos = document.querySelector('#lista-alimentos')
  const elSalvarAlimentos = document.querySelector('#botao-salvar')

  elForm.addEventListener('submit', event => {
    event.preventDefault()

    const form = new FormData(event.target)
    const nome = form.get('nome')
    const quantidade = form.get('quantidade')

    let alimento = {
      nome,
      quantidade
    };
    alimentos.push(alimento)

    adicionarAlimento(alimento)

    return false
  })

  function adicionarAlimento(alimento) {
    elListaAlimentosContainer.style.display = 'block'

    const elAlimento = document.createElement('div')
    elAlimento.style.display = 'flex'

    const elAlimentoNome = document.createElement('div')
    elAlimentoNome.innerText = alimento.nome

    const elAlimentoQuantidade = document.createElement('div')
    elAlimentoQuantidade.innerText = alimento.quantidade
    elAlimentoQuantidade.style.marginLeft = '20px'

    elAlimento.appendChild(elAlimentoNome)
    elAlimento.appendChild(elAlimentoQuantidade)

    elListaAlimentos.appendChild(elAlimento)
  }

  elSalvarAlimentos.addEventListener('click', () => {
    alert('alimentos salvos!')
  })
})