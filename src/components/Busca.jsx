export default function Busca({cidade, setCidade, buscarClima}) {
 
  return (
    <div className="busca">
      <input 
        type="text" 
        value={cidade} 
        onChange={(e) => setCidade(e.target.value)} 
        placeholder='Digite uma cidade...' 
      />
      <button onClick={buscarClima}>Buscar</button>
    </div>
  )
}
