import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import homeimg from '../../assets/home.svg';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';


export default function Signin(){

  localStorage.clear();

  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  api.get('/users/').then(res => setUsers(res.data)).catch(err => console.error(err))

  async function handleLogin(e) {
    e.preventDefault();

    const data = {
      email,
      password
    }

    try{
        await api.post('/', data).then(res =>
          res.data.isAdmin ?
          (
            localStorage.setItem('isAdmin', res.data.isAdmin),
            history.push('/admin')
          )
          : history.push('/reunions'));
    }
    catch(err){
        alert('Usuário e/ou senha incorretos. 😐');
    }
  }

  return(
    <div className="App">

      <div className="container">
        <h1>Bem vindx ao CoWerk 💎</h1>
        <span>O seu espaço de colaboração e produtividade!</span>
        <form action="" onSubmit={handleLogin} className="form-container">
          <TextField id="outlined-basic" className="inputs" label="E-mail" variant="outlined" type="email" required
          value={email}
          onChange={e => setEmail(e.target.value)}/>
          <TextField id="outlined-basic" className="inputs" label="Senha" variant="outlined" type="password" required
          value={password}
          onChange={e => setPassword(e.target.value)}/>
          <button type="submit">Entrar</button>
          <Link to="/signup">Não tenho cadastro</Link>
        </form>
      </div>
      <img src={homeimg} alt="CoWerk Logo" width="540"/>
    </div>
  )
}
