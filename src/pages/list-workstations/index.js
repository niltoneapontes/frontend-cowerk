import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import ListImg from '../../assets/list.svg'

import api from '../../services/api';

export default function ListWorkstation() {

  const [workstations, setWorkstations] = useState([]);
  const history = useHistory();
  const isAdmin = localStorage.getItem('isAdmin');

  api.get('/workstations').then(res => setWorkstations(res.data)).catch(err => console.error(err))

  async function handleDelete(id){

    try{
        await api.delete(`/workstations/${id}`)
        alert(`Workstation deletada com sucesso!`);
    }
    catch(err){
        alert('Erro ao tentar deletar, tente novamente');
    }
  }

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
    <div className="App-list">
    <header>
      <button type="submit" onClick={handleLogout}>Logout</button>
    </header>
      <img src={ListImg} alt="Workstations" width="320"/>
      <h1>Workstations disponíveis:</h1>
      <span>Agende seu horário clicando no nome da Workstation desejada.</span>
      <div className="item-container">
        <ul>
        <div className="row">
        {workstations ? workstations.map(workstation => {
          return(
          <li className="col reunion-li">
            <h2><Link to="/schedule">{workstation.name}</Link></h2>
            <p>{workstation.description}</p>
            { isAdmin ? <button onClick={() => handleDelete(workstation._id)}>Excluir</button> : ''}
          </li>
        )})
        :
        (
        <div className="row">
          <li className="col reunion-li">
            <h2><Link to="/schedule">Workstation 03</Link></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut ex ut turpis accumsan lacinia sit amet sed ex. </p>
          </li>
          <li className="col reunion-li">
            <h2><Link to="/schedule">Workstation 04</Link></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut ex ut turpis accumsan lacinia sit amet sed ex. </p>
          </li>
          </div>
        )}
        </div>
        </ul>
      </div>
      <span>Precisa organizar uma reunião? Confira nossas salas.</span>
      <Link className="small-btn" to="/reunions"><button type="submit">Ver salas de reunião</button></Link>
    </div>
  )
}
