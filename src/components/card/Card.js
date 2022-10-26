import React from 'react'
import styles from './Card.module.scss'

const Card = ({ children, cardClass }) => {
  // console.log(children)
  // console.log(cardClass)

  return (
    <div className={`${styles.card} ${cardClass}`}>
      {children}
    </div >
  )
}

export default Card