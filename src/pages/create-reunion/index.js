import React from 'react';
import { TextField } from '@material-ui/core';
import homeimg from '../../assets/home.svg';
import { Link, useHistory } from 'react-router-dom';

export default function CreateReunion(){

  const isAdmin = localStorage.getItem('isAdmin');
  const history = useHistory();

  return(
  <div>
  { isAdmin ?
    (
    <div className="App">
      <div className="container">
        <h1>Crie uma nova Sala de Reuniões</h1>
        <h2>ATENÇÃO: Serviço temporariamente indisponível.</h2>
        <form action="" className="form-container">
          <TextField id="outlined-basic" className="inputs" label="Nome da Sala" variant="outlined" type="text" required/>
          <TextField
            id="outlined-multiline-static"
            label="Descrição"
            className="textarea-input"
            multiline
            rows={4}
            variant="outlined"
            required
          />          <Link className="button-link" to="/"><button type="submit">Cadastrar</button></Link>
          <Link to="/">Entrar</Link>
        </form>
      </div>
      <img src={homeimg} alt="CoWerk Logo" width="540"/>
    </div>
    )
    : (
      alert('Você não é administrador.'),
      history.push('/')
    )
  }
  </div>
  )
}
