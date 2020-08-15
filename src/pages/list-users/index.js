import React, {useState, useEffect} from 'react';
import { TextField, Input } from '@material-ui/core';
import userImg from '../../assets/users.svg';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api'

export default function ListUsers() {

  const [users, setUsers] = useState([]);
  const history = useHistory();

  const isAdmin = localStorage.getItem('isAdmin');
  console.log(isAdmin);
  api.get('/users/').then(res => setUsers(res.data)).catch(err => console.error(err))

  async function handleDelete(id){
    try{
        await api.delete(`/users/${id}`)
        alert(`Usuário deletado com sucesso!`);
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
    <div>
      { isAdmin ?
        (
          <div className="App-list">
          <header className="header-admin">
            <div style={{display: "flex"}}>
              <Link className="button-link" to="/reunions"><button type="submit">Ver salas de reunião</button></Link>
              <Link className="button-link" to="/workstations"><button type="submit">Ver Workstations</button></Link>
            </div>
            <div style={{display: "flex"}}>
              <Link className="button-link" to="/workstation/create"><button type="submit">Criar Workstation</button></Link>
              <Link className="button-link" to="/reunion/create"><button type="submit">Criar Sala de Reuniões</button></Link>
              <Link className="button-link" to="/signup"><button type="submit">Criar Usuário</button></Link>
            <button type="submit" onClick={handleLogout}>Logout</button>
            </div>
          </header>
          <img src={userImg} alt="Workstations" width="320"/>
          <h1>Administrar usuários</h1>
          <span>Acesso exclusivo do administrador.</span>
            <div className="item-container">
              <ul>
              <div className="row">
              {users ? users.map(user => {
                return(
                <li className="col reunion-li">
                  <h2><Link to="/admin">{user.name}</Link></h2>
                  <h2><Link to="/admin">{user.email}</Link></h2>
                  <p>{user.birthdate}</p>
                  <button onClick={() => handleDelete(user._id)}>Deletar usuário</button>
                </li>
              )
              })

              :
              (<>
              <div className="row">
                <li className="col reunion-li">
                  <h2><Link to="/admin">Nilton Pontes</Link></h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut ex ut turpis accumsan lacinia sit amet sed ex. </p>
                </li>
                <li className="col reunion-li">
                  <h2><Link to="/admin">Tairine Ellen</Link></h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut ex ut turpis accumsan lacinia sit amet sed ex. </p>
                </li>
              </div>
              <div className="row">
                <li className="col reunion-li">
                  <h2><Link to="/admin">João Felipe</Link></h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut ex ut turpis accumsan lacinia sit amet sed ex. </p>
                </li>
                <li className="col reunion-li">
                  <h2><Link to="/admin">Raquel Santos</Link></h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut ex ut turpis accumsan lacinia sit amet sed ex. </p>
                </li>
              </div>
                </>
              )}
                </div>
              </ul>
            </div>
            <Link className="small-btn" to="/"><button type="submit">Retornar à página de login</button></Link>
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
