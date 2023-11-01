import logo from "./logo.png"
import lupa from "./search.png"
import styles from './Cabecalho.module.scss'

export default function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <img src={logo} alt="Logo Alura Space"/>
            <div className={styles.cabecalho__container}>
                <input className={styles.cabecalho__input} type="text" placeholder="O que voce procura?"/>
                <img src={lupa} alt="Icone Lupa"/>

            </div>
        </header>
    )
}