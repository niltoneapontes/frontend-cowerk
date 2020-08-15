import React from 'react';
import { Link } from 'react-router-dom';
import ReunionImg from '../../assets/reunion.svg'

// <ul>
//   <li className="item">
//     <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80" alt="Workstation" width="320"/>
//     <h2>Sala dos Designers</h2>
//     <p>Essa sala é voltada para os devs.</p>
//   </li>
//   <li className="item">
//     <img src="" alt="Workstation"/>
//     <h2>Sala dos Engenheiros</h2>
//     <p>Essa sala é voltada para os devs.</p>
//   </li>
// </ul>


export default function ListReunions() {
  return(
    <div className="App-list">
    <header>
    <Link className="button-link" to="/"><button type="submit">Logout</button></Link>
    </header>
      <img src={ReunionImg} alt="Workstations" width="320"/>
      <h1>Salas de reunião disponíveis:</h1>
      <span>Agende seu horário clicando no nome da sala desejada.</span>
      <div className="carousel-container">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active" data-interval="5000">
              <img src="https://images.unsplash.com/photo-1504042502815-3d3544395216?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" class="d-block w-100" alt="..."/>
              <div class="carousel-caption d-none d-md-block">
                <h1><Link className="carousel-link" to="/schedule">Sala #UI</Link></h1>
                <h3 className="carousel-link" >As melhores interfaces de usuário saem daqui.</h3>
              </div>
            </div>
            <div class="carousel-item" data-interval="5000">
              <img src="https://images.unsplash.com/photo-1523908511403-7fc7b25592f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" class="d-block w-100" alt="..."/>
              <div class="carousel-caption d-none d-md-block">
                <h1><Link className="carousel-link" to="/schedule">Sala #DEV</Link></h1>
                <h3 className="carousel-link" >Onde os melhores desenvolvedores criam as melhores aplicações!</h3>
              </div>
            </div>
            <div class="carousel-item" data-interval="5000">
              <img src="https://images.unsplash.com/photo-1520881363902-a0ff4e722963?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" class="d-block w-100" alt="..."/>
              <div class="carousel-caption d-none d-md-block">
                <h1><Link className="carousel-link" to="/schedule">Sala #SCRUM</Link></h1>
                <h3 className="carousel-link" >A sala ideal para cerimônias do SCRUM.</h3>
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <span>Não precisa de tanto espaço? Confira as workstations</span>
      <Link className="small-btn" to="/workstations"><button type="submit">Ver Workstations</button></Link>

    </div>
  )
}
