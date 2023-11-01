import React from 'react'
import home from '../../assets/icones/home-ativo.png'
import curtidas from '../../assets/icones/mais-curtidas-inativo.png'
import maisVistas from '../../assets/icones/mais-vistas-inativo.png'
import novas from '../../assets/icones/novas-inativo.png'
import surpreenda from '../../assets/icones/surpreenda-me-inativo.png'
import styles from "./Menu.module.scss"

export default function Menu() {
  return (
    <nav className={styles.menu}>
        <ul className={styles.menu__lista}>
            <li className={styles.menu__item} >
                <img src={home} alt='' />
                <a>Inicio</a>
            </li >
            <li className={styles.menu__item} >
                <img src={curtidas} alt='' />
                <a>Mais Curtidas</a>
            </li>
            <li className={styles.menu__item} >
                <img src={maisVistas} alt='' />
                <a>Mais Vistas</a>
            </li>
            <li className={styles.menu__item} >
                <img src={novas} alt='' />
                <a>Novas</a>
            </li>
            <li className={styles.menu__item} >
                <img src={surpreenda} alt='' />
                <a>Surpreenda-me</a>
            </li>
        </ul>
    </nav>
  )
}
