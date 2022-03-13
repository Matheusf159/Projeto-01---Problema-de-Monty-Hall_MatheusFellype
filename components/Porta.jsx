import React, { useState } from 'react'
import Image from 'next/image';
import car from "../imgs/car.png"
import goat from "../imgs/goat.png"

export default function Porta(props) {
  const [estaAberta, setEstaAberta] = useState(props.aberta)
  const [selecionada, setSelecionada] = useState(false)

  function abrirPorta() {
    setEstaAberta("true")
  }

  function portaSelecionada(){
    if(selecionada === false) {
      setSelecionada(true)
    }

    else { 
      setSelecionada(false)
    }

  }

  return (
    <div style={{
      marginRight: 20,
      height: 150,
      width: 70,
    }}>

      <div style={{display: estaAberta === "false" ? "none" : ""}}>
        {
          props.prem === "sim" ?
            <Image src={car} alt="Landscape picture"width={700} height={500} /> :
            <Image src={goat} alt="Landscape picture"width={500} height={500} />
        }
      </div>
      
      
      

      <div className='portaSelecionata' style={{
        display: estaAberta == "false" ? "flex" : "none",
        backgroundColor: "rgb(27, 26, 26)",
      }}
      >

        <div className='btnPortaSelecionada' style={{
          backgroundColor: selecionada == false ? "brown" : "brown",
          height: 150,
          width: 70,
          border: "none",
        }}
  
        ></div>

      </div>

      <div className='macaneta' style={{
          display: estaAberta == "false" ? "" : "none",
          marginTop: -90,
          marginLeft: 5
      }}>

        <button className='btnMacaneta' style={{
              backgroundColor: "black",
              height: 20,
              width: 20,
              borderRadius: 10
        }}
        onClick={abrirPorta}
        ></button>

      
        <div style={{marginTop: -100, marginLeft: 20}}>
          <h4 style={{color: selecionada ?"black" : "white"}}>{props.numPorta}</h4>
        </div>
      
      </div>

    </div>
  )
}
