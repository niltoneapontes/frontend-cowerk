import React, {useState} from 'react';
import { TextField } from '@material-ui/core';
import homeimg from '../../assets/home.svg';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

export default function Signup(){

  const history = useHistory();

  const[username, setUsername] = useState('');
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[password2, setPassword2] = useState('');
  const[date, setDate] = useState(new Date());

  async function handleRegister(e){
          e.preventDefault();

          const data = {
              username,
              email,
              password,
              password2,
              date,
      };

      try{
          const response = await api.post('/users/', data);
          alert(`Usuário cadastrado com sucesso!`);
          history.push('/');

      }
      catch(err){
          alert('Erro no cadastro, tente novamente');
      }

}

  return(
    <div className="App">
      <div className="container">
        <h1>Cadastre-se</h1>
        <form onSubmit={handleRegister} className="form-container">
          <TextField id="outlined-basic" className="inputs" label="Seu nome" variant="outlined" type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}/>
          <h6>Data de Nascimento</h6>
          <TextField
              id="date"
              className="inputs"
              type="date"
              defaultValue="2017-05-24"
              value={date}
              onChange={e => setDate(e.target.value)}/>
          <TextField id="outlined-basic" className="inputs" label="E-mail" variant="outlined" type="email" required
          value={email}
          onChange={e => setEmail(e.target.value)}/>
          <TextField id="outlined-basic" className="inputs" label="Senha" variant="outlined" type="password" required
          value={password}
          onChange={e => setPassword(e.target.value)}/>
          <TextField id="outlined-basic" className="inputs" label="Confirme a senha" variant="outlined" type="password" required
          value={password2}
          onChange={e => setPassword2(e.target.value)}/>
          <button type="submit">Cadastrar</button>
          <Link to="/">Entrar</Link>
        </form>
      </div>
      <img src={homeimg} alt="CoWerk Logo" width="540"/>
    </div>
  )
}
