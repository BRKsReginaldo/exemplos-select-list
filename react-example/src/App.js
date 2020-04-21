import React, {useCallback, useState} from 'react';

function App(props) {
  const [alimentos, setAlimentos] = useState([])

  const adicionarAlimento = useCallback(ev => {
    ev.preventDefault()

    const form = new FormData(ev.target)
    const nome = form.get('nome')
    const quantidade = form.get('quantidade')

    setAlimentos(alimentosAntigos => ([
      ...alimentosAntigos,
      {
        nome,
        quantidade
      }
    ]))

    return false
  }, [setAlimentos])

  const salvarAlimentos = useCallback(() => {
    alert('alimentos salvos!')
  }, [])

  return (
    <div>
      <form onSubmit={adicionarAlimento} style={{
        display: 'flex'
      }}>
        <div>
          <p>Nome</p>
          <input type="text" name="nome"/>
        </div>
        <div>
          <p>Quantidade</p>
          <input type="text" name="quantidade"/>
        </div>
        <button style={{
          marginTop: '50px'
        }}>Salvar</button>
      </form>

      {alimentos.length > 0 && (
        <div>
          <h1>Lista</h1>
          <div>
            {alimentos.map(alimento => (
              <div style={{
                display: 'flex'
              }} key={alimento.nome}>
                <div>{alimento.nome}</div>
                <div style={{marginLeft: '20px'}}>{alimento.quantidade}</div>
              </div>
            ))}
          </div>
          <div>
            <button style={{
              marginTop: '30px'
            }} onClick={salvarAlimentos}>Salvar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;