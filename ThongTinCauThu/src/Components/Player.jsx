import React, { useState, Component } from 'react'
import { playersData } from '../Data/DataPlayers'


export default function Player() {
  const [selectedPlayer, setSelectedPlayer] = useState([]);

  return (
    <div className='container'>
      <div className='row'>
        {playersData.map(player => (
          <div key={player.id} className='col-md-4 mb-3' padding="10px">
            <div className='card'>
              <img src={player.image} alt={player.name} className='card-img-top' />
              <div className='card-body'>
                <h5 className='card-title'>{player.name}</h5>
                <button className='btn btn-primary' onClick={() => setPlayer(player)}>
                  <a href='#popup1' id='openPopUp'> Detail</a></button>
              </div>
            </div>
          </div>
        ))}
        <div className='overlay' id='popup1'>
          <div className='popup'>
            <h2>{player.name}</h2>
            <a className='close' href='#'>&times;</a>
            <img src={player.image} alt={player.name} />
            <div className='content'>
              <p>{player.info}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

