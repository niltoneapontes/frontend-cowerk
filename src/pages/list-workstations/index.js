import React from 'react';
import { Link } from 'react-router-dom';
import ListImg from '../../assets/list.svg'

export default function ListWorkstation() {
  return(
    <div className="App-list">
      <img src={ListImg} alt="Workstations" width="320"/>
      <h1>Workstations disponíveis:</h1>
      <span>Agende seu horário clicando no nome da Workstation desejada.</span>
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
      <span>Precisa organizar uma reunião? Confira nossas salas.</span>
      <Link className="small-btn" to="/reunions"><button type="submit">Ver salas de reunião</button></Link>
    </div>
  )
}
