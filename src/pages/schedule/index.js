import React from 'react';
import { TextField, Input } from '@material-ui/core';
import scheduleImg from '../../assets/schedule.svg';
import { Link, useHistory } from 'react-router-dom';

export default function Signup() {

  const history = useHistory();

  async function handleLogout(){
    try{
      localStorage.clear();
      history.push('/')
    }
    catch(err){
      alert('Erro:' + err);
    }
  }

  return(
    <div className="App">
    <header>
      <button type="submit" onClick={handleLogout}>Logout</button>
    </header>
      <div className="container">
        <h1>Faça seu agendamento</h1>
        <form action="" className="form-container">
          <TextField
              id="date"
              className="inputs"
              type="datetime-local"
              defaultValue="2021-07-23"
            />
          <Input type="number" placeholder="Número de horas"></Input>
          <Link className="button-link" to="/"><button type="submit">Agendar</button></Link>
        </form>
      </div>
      <img src={scheduleImg} alt="CoWerk Logo" width="540"/>
    </div>
  )
}
