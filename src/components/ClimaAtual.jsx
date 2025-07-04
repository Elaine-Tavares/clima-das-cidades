import React from 'react'

export default function ClimaAtual({clima}) {
  return (
    <div className='climaAtual'>
      <h3>{clima.name}</h3>
      <img 
        src={`http://openweathermap.org/img/wn/${clima.weather[0].icon}.png`} 
        alt={clima.weather[0].description} 
      />
      <p className='temperatura'>{clima.main.temp}°C</p>
      <p className='descricao'>{clima.weather[0].description} </p>
    </div>
  )
}
