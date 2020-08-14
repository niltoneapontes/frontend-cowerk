import React from 'react';
import { TextField } from '@material-ui/core';
import homeimg from '../../assets/home.svg';
import { Link } from 'react-router-dom';

export default function CreateWorkstation(){
  return(
    <div className="App">
      <div className="container">
        <h1>Crie uma nova Workstation</h1>
        <form action="" className="form-container">
          <TextField id="outlined-basic" className="inputs" label="Nome da workstation" variant="outlined" type="text" required/>
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
}
