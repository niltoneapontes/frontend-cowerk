import React from 'react';
import { TextField } from '@material-ui/core';
import homeimg from '../../assets/home.svg';
import { Link } from 'react-router-dom';


export default function Signin(){
  return(
    <div className="App">
    <header>
      <Link className="button-link" to="/admin"><button type="submit">Admin</button></Link>
    </header>
      <div className="container">
        <h1>Bem vindx ao CoWerk 💎</h1>
        <span>O seu espaço de colaboração e produtividade!</span>
        <form action="" className="form-container">
          <TextField id="outlined-basic" className="inputs" label="E-mail" variant="outlined" type="email" required/>
          <TextField id="outlined-basic" className="inputs" label="Senha" variant="outlined" type="password" required/>
          <Link className="button-link" to="/reunions"><button type="submit">Entrar</button></Link>
          <Link to="/signup">Não tenho cadastro</Link>
        </form>
      </div>
      <img src={homeimg} alt="CoWerk Logo" width="540"/>
    </div>
  )
}
