import { useState } from 'react';
import './style.css';
import api from './api'

function App() {
  const [input, setInput] = useState('')
  const [cep, setCep] = useState({});

  async function handleSearch(){



    if (input === ''){
      alert("INSIRA UM CEP VALIDO!")
      return;     
    }

    try{
      const response = await api.get(`${input}/json`);
      console.log(response.data);
      setInput(" ");
      setCep(response.data);

    }catch{
      alert('erro');
      setInput(" ");

    }
  }
   return (
      <div className="container">
        <h1 className="title text-white text-shadow"> Buscar Cep</h1>
        <div className="containerInput"> <input
        type="text" placeholder="Digite um cep válido"
          value ={input}
          onChange={(e) => setInput(e.target.value)} />

        <button className="button" onClick={handleSearch}> <i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
          {Object.keys(cep).length > 0 && (
              <main className="main">
                <h2>Cep: {cep.cep}</h2>
                  <span>Rua: {cep.logradouro}</span>
                    <span>Bairro:{cep.bairro} </span>
                    <span>Cidade: {cep.localidade}</span> 
                    <span>Estado: {cep.uf} </span>
              </main>)}
    </div>
  );
}

export default App;
