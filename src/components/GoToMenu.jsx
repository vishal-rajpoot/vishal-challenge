import React from 'react'
import { Link } from 'react-router-dom'
import Products from './Products'

const GoToMenu = () => {
  // const{products}
  return (
    <div className='go-to-menu'>
      <h1>WELCOME TO FOOD'S KITCHEN</h1>
      <Link to="registeration/products"><button className='login-btn'>GO TO MENU</button></Link>
    </div>
  )
}

export default GoToMenu