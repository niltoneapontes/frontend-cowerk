import React, {useState} from 'react';
import { TextField } from '@material-ui/core';
import homeimg from '../../assets/home.svg';
import { Link } from 'react-router-dom';

import api from '../../services/api';

export default function CreateWorkstation(){

  const[name, setName] = useState('');
  const[description, setDescription] = useState('');

  async function handleRegister(e){
        e.preventDefault();

          const data = {
              name,
              description,
      };

      try{

          const response = await api.post('/workstations', data);
          alert(`Workstation cadastrada com sucesso!`);
      }
      catch(err){
          alert('Erro no cadastro, tente novamente');
      }

}

  return(
    <div className="App">
      <div className="container">
        <h1>Crie uma nova Workstation</h1>
        <form action="" onSubmit={handleRegister} className="form-container">
          <TextField id="outlined-basic" className="inputs" label="Nome da workstation" variant="outlined" type="text" required
          value={name}
          onChange={e => setName(e.target.value)}/>
          <TextField
            id="outlined-multiline-static"
            label="Descrição"
            className="textarea-input"
            multiline
            rows={4}
            variant="outlined"
            required
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <button type="submit">Cadastrar</button>
          <Link to="/">Entrar</Link>
        </form>
      </div>
      <img src={homeimg} alt="CoWerk Logo" width="540"/>
    </div>
  )
}
