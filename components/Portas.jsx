import Porta from "../components/Porta";

import styles from '../styles/Portas.module.css'

export default function Portas(props) {
    const listaPorta = []

    // function renderPorta() {
    for (let i = 1; i <= props.qtd; i++){
        if(i === props.premiada)
            listaPorta.push(<Porta aberta="false" prem="sim" numPorta={i} />)
        else
            listaPorta.push(<Porta aberta="false" prem="nao" numPorta={i} />)
    }

        // return listaPorta
    // }
    
    return (
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <ul className={styles.lista}>
                    {listaPorta.map((p) => <div tabIndex={-1} className={styles.listas}>
                             {p}
                            </div>
                        )}
            </ul>
        </div>
    )

}