import { useState, useEffect } from "react";
import axios from "axios";

import Busca from "./components/Busca";
import ClimaAtual from "./components/ClimaAtual";
import Footer from "./components/Footer";
import Previsao from "./components/Previsao";

function App() {
 const [cidade, setCidade] = useState("");
 const [clima, setClima] = useState(null);
 const [previsao, setPrevisao] = useState([]);

 const apiKey = import.meta.env.VITE_API_KEY || null;
  console.log("API_KEY", apiKey)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      console.log("POSITION: ", position);

      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

     const respostaGeoLocalizacao = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt_br`
    );

      console.log(`LAT=${lat}&LON=${lon}`)

      setCidade(respostaGeoLocalizacao.data.name)
      setClima(respostaGeoLocalizacao.data)
    });
  }, [apiKey]);

const buscarClima = async () => {
  try {
    console.log("CIDADE: ", cidade)
    // 1. Buscar a cidade e obter latitude e longitude
    const respostaClima = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`
    );
    setClima(respostaClima.data)
    console.log("CLIMA: ", clima)

     const respostaPrevisao = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`
    );
    setPrevisao(respostaPrevisao.data.list.slice(0, 5))
    console.log("PREVISÃO: ", previsao)

    
  } catch (error) {
    console.error("Erro ao buscar clima:", error);
  }
};

  return (
    <div className="app">
        <h1>Condições Climáticas</h1>
        <Busca cidade={cidade} setCidade={setCidade} buscarClima={buscarClima}/>
        {clima && <ClimaAtual clima={clima}/>}
        {previsao.length > 0 && <Previsao previsoes={previsao}/>}
        <Footer/>
    </div>
  )
}

export default App
