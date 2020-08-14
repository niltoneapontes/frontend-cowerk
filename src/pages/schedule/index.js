import React from 'react';
import { TextField, Input } from '@material-ui/core';
import scheduleImg from '../../assets/schedule.svg';
import { Link } from 'react-router-dom';

export default function Signup() {
  return(
    <div className="App">
    <header>
      <Link className="button-link" to="/admin"><button type="submit">Admin</button></Link>
      <Link className="button-link" to="/"><button type="submit">Logout</button></Link>
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
