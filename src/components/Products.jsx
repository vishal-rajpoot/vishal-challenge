import React, { createContext, useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import data from '../data/feeds.json'

const Items = createContext();

const Products = ({ handleAddProduct, productItems, handleRemoveProduct}) => {
    // const[data, setData] = useState([]);
    // var myInit = {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json'
    //     },
    //     mode: 'cors',
    //     cache: 'default'
    // }
    // let myRequest = new Request('../data/feeds.json', myInit)
    // var responseClone;
    //     fetch(myRequest)
    //     .then( (data) => {
    //         console.log(data)
    //         responseClone = data.clone();
    //         return data.json();
    //     }).then( (res) => {
    //         console.log(res);
    //         setData(res)
    //     }).catch( (error) => {
    //         console.log(error);
    //     })

    // const [cartItems, setCartitems] = useState([])
    // const handleAddProduct = (product) => {
    //     const Productlist = cartItems.find( (item) => item.id === product.id);
    //     console.log(product, Productlist);
    //     if(Productlist){
    //         setCartitems(cartItems.map( (item) => item.id === product.id ?
    //             {...Productlist, quantity: Productlist.quantity + 1}: item
    //         ))
    //     }
    //     else{
    //         setCartitems([...cartItems, {...product, quantity: 1}])
    //     }
    // }

  return (
    <div className='products'>
        {/* <Items.Provider value={cartItems}> */}
            {data && data.map( (index, product) => {
                // console.log(index);
                return (
                    <div className='card' key={index.id}>
                        <img src={index.image} alt={index.name} className='product-image'/>
                        <h3 className='product-name'>{index.name}</h3>
                        <h2 className='product-price'>{index.price}</h2>
                        <div>
                            {/* <button className='login-btn' onClick={() => handleAddProduct(index)}>Add to Cart</button> */}
                            <button className='add' onClick={() =>{
                                toast.success('Item has been added into cart')
                                 handleAddProduct(index)}}>+</button>
                            <button className='remove' onClick={ () => {
                                toast.success('Item has been removed from cart')
                                handleRemoveProduct(index)}}>-</button>
                        </div>
                        <ToastContainer position="top-left" autoClose={500}/>

                    </div>
                )
            })}
        {/* </Items.Provider> */}
    </div>
  )
}
export default Products
export { Items } 