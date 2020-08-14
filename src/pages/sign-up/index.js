import React from 'react';
import { TextField } from '@material-ui/core';
import homeimg from '../../assets/home.svg';
import { Link } from 'react-router-dom';

export default function Signup(){
  return(
    <div className="App">
      <div className="container">
        <h1>Cadastre-se</h1>
        <form action="" className="form-container">
          <TextField id="outlined-basic" className="inputs" label="Seu nome" variant="outlined" type="text"/>
          <TextField
              id="date"
              className="inputs"
              label="Data de nascimento"
              type="date"
              defaultValue="2017-05-24"
            />
          <TextField id="outlined-basic" className="inputs" label="E-mail" variant="outlined" type="email" required/>
          <TextField id="outlined-basic" className="inputs" label="Senha" variant="outlined" type="password" required/>
          <TextField id="outlined-basic" className="inputs" label="Confirme a senha" variant="outlined" type="password" required/>
          <Link className="button-link" to="/"><button type="submit">Cadastrar</button></Link>
          <Link to="/">Entrar</Link>
        </form>
      </div>
      <img src={homeimg} alt="CoWerk Logo" width="540"/>
    </div>
  )
}
