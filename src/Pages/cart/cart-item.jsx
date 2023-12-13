import React, {useContext} from 'react'
import {ShopContext} from '../../context/shop-context'
import {XCircle} from 'phosphor-react'

export const CartItem = (props) => {
    const {id, productName, price, productImage} = props.data
    const {addToCart,cartItems,removeFromCart,updateCartItemCount,remove} = useContext(ShopContext)
    
 

  return (
    <div className='rem'>
    <button onClick={() => remove(id)}><XCircle size={25} color="#8c0808" /></button>
    <div className='cartItem'>
        <img src={productImage}/>
         <div className='description'>
            <p>{productName}</p> 
            <p>₱{price}</p>
            </div>
            <div className='countHandler'>
                <button onClick={() => removeFromCart(id)}> - </button>
                <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value),id)}/>
                <button onClick={() => addToCart(id)}> + </button> 
          
            </div>
            </div>
            </div>
      
      
    
  )
}

