import React from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.scss'

export function Header() {
  return (
    <header className={styles.header_style}>
      <Link to="/">Home</Link>
      <Link to="/contato">Contato</Link>
      <label htmlFor="my-drawer-4" className="md:hidden border">
        Open drawer
      </label>
    </header>
  )
}
