import { useState } from 'react';
import './App.css';

function App() {
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [despesas, setDespesas] = useState([]);

  function adicionarDespesa() {
    if (nome.trim() === '' || valor.trim() === '') return;

    const novaDespesa = {
      nome,
      valor: Number(valor),
    };

    setDespesas([...despesas, novaDespesa]);

    setNome('');
    setValor('');
  }

  const total = despesas.reduce((acc, item) => acc + item.valor, 0);

  return (
    <div className="container">
      <header className="header">
        <h1>💰 Educador Financeiro Inteligente</h1>
        <p>Controle suas despesas de forma simples e rápida</p>
      </header>

      <section className="card">
        <h2>Adicionar Despesa</h2>

        <input
          type="text"
          placeholder="Nome da despesa (Ex: Mercado)"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          type="number"
          placeholder="Valor (Ex: 150)"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />

        <button onClick={adicionarDespesa}>
          Adicionar
        </button>
      </section>

      <section className="card">
        <h2>Minhas Despesas</h2>

        {despesas.length === 0 ? (
          <p>Nenhuma despesa adicionada ainda.</p>
        ) : (
          <ul>
            {despesas.map((item, index) => (
              <li key={index}>
                {item.nome} - R$ {item.valor.toFixed(2)}
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="card total">
        <h2>Total de Despesas</h2>
        <h3>R$ {total.toFixed(2)}</h3>
      </section>
    </div>
  );
}

export default App;