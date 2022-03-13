import { useState } from 'react'
import Portas from '../components/Portas'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [quantPorta, setQuantPorta] = useState(0)
  const [portaPremiada, setPortaPremiada] = useState(0)
  const [visivel, setVisivel] = useState(true)

  function incrementarPorta() {
    setQuantPorta(++quantPorta)
    
  }

  function decrementarPorta() {
    if(quantPorta > 0)
      setQuantPorta(--quantPorta)
    if(quantPorta < portaPremiada) {
      setPortaPremiada(0)
    }
  }

  function incrementar() {
    if(portaPremiada < quantPorta)
      setPortaPremiada(++portaPremiada)
  }

  function decrementar() {
    if(portaPremiada > 0)
      setPortaPremiada(--portaPremiada)
  }

  function esconder() {
    if(portaPremiada !== 0 && quantPorta !== 0)
      setVisivel(false)
  }


  return (
      <div className={styles.container}>
        <div style={{marginRight: 5, display: visivel === true ? "" : "none"}}>
          <div className={styles.monttyHall}>
            <h1 style={{color: "white"}}>
              Monty Hall
            </h1>
          </div>

          <div className={styles.portaPresente}>
            <h3 style={{color: "black"}}>Porta com Presente?</h3>
            
            <h1>{portaPremiada}</h1>  

            <div>
              <button className={styles.btns} onClick={decrementar}>-</button>
              <button className={styles.btns} onClick={incrementar}>+</button>
            </div>
          </div>
        </div>

        <div style={{display: visivel === true ? "" : "none"}}>
          <div className={styles.qtdPorta}>
            <h3 style={{color: "black"}}>Qtde Portas?</h3>
            <h1>{quantPorta}</h1>  

            <div>
              <button className={styles.btns} onClick={decrementarPorta}>-</button>
              <button className={styles.btns} onClick={incrementarPorta}>+</button>
            </div>
          </div>

          <div>
            <button style={{
                  backgroundColor: "green", 
                  height: 200, 
                  width: 200, 
                  border: "none", 
                  marginTop: 5
                }}

                onClick={esconder}
            >
              <h1 style={{color: "white"}}>Iniciar</h1>
            </button>
          </div>
        </div>

        <div style={{display: visivel === true ? "none" : "flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
          <h1 style={{color:"white"}}> Monty Hall</h1>
          <Portas qtd={quantPorta} premiada={portaPremiada} />

          <div style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  backgroundColor: "red", 
                  height: 70, 
                  width: 200, 
                  marginTop: 20,
                  color: "white"
            }}
            >
            <a href='http://localhost:3000/'>
              Reiniciar
            </a>
          </div>
        </div>
      </div>

    
  )
}
