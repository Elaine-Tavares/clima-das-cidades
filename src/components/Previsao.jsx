import styles from './Previsao.module.css'

export default function Previsao({previsoes}) {
  return (
    <div className={styles.previsao}>
      <h4>Previsão para as próximas horas</h4>
      <ul>
        {previsoes.map((previsao) => (
          <li key={previsao.dt} className={styles.previsaoItem}>
            <img src={`http://openweathermap.org/img/wn/${previsao.weather[0].icon}.png`} alt={previsao.weather[0].description} /> 
            <p className={styles.temperatura}>{Math.round(previsao.main.temp)}°C</p>
            <p className={styles.descricao}>{previsao.weather[0].description}</p>
          </li>
        ))} 
      </ul>
    </div>
  )
}
