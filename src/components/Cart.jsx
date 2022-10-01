import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
// import { Items } from './Products'

const Cart = ({cartItems, handleAddProduct ,handleRemoveProduct }) => {

    // const items = useContext([Items])
    // const [data, setData] = useState([items])
    const totalPrice = cartItems.reduce( (price, item) => 
        price + item.quantity * item.price, 0
    )

  return (
        <div className='cart-items'>
            <div className="cart-items-header">Cart Items</div>

            {cartItems.length === 0 && (
                <div className="cart-items-empty">No items are added</div>
            )}

            <div>
                {cartItems.map( (item) => {
                    // console.log(cartItems);
                   return <div key={item.id} className="cart-items-list">
                        <img src={item.image} alt={item.name} className='cart-items-image' />
                        <h3 className='cart-item.name'>{item.name}</h3>
                        <div className='cart-item-price'>
                           {item.quantity} * {item.price}
                        </div>
                        <div className="cart-item-function">
                            <button className=' add' onClick={() => handleAddProduct(item)}>+</button>
                            <button className=' remove-cart' onClick={ () => handleRemoveProduct(item)}>-</button>
                        </div>
            
                    </div>
                })}
            </div>
            <div className="cart-items-total-price-name">
                    Total Price
                    <div className="cart-items-total-price">${totalPrice}</div>
            </div>
           <Link to="thankyou"> <button className='login-btn checkout'>Checkout</button></Link>

        </div>
  )
}

export default Cart