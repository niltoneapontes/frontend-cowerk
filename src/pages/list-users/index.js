import React from 'react';
import { TextField, Input } from '@material-ui/core';
import userImg from '../../assets/users.svg';
import { Link } from 'react-router-dom';

export default function ListUsers() {
  return(
    <div className="App-list">
    <img src={userImg} alt="Workstations" width="320"/>
    <h1>Administrar usuários</h1>
    <span>Acesso excludivo do administrador.</span>
      <div className="item-container">
        <ul>
        <div className="row">
          <li className="col reunion-li">
            <h2><Link to="/schedule">Workstation 01</Link></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut ex ut turpis accumsan lacinia sit amet sed ex. </p>
          </li>
          <li className="col reunion-li">
            <h2><Link to="/schedule">Workstation 02</Link></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut ex ut turpis accumsan lacinia sit amet sed ex. </p>
          </li>
        </div>
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
        </ul>
      </div>
      <Link className="small-btn" to="/"><button type="submit">Retornar à página de login</button></Link>
    </div>
  )
}
