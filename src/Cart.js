import React from "react";
import { useCart } from "react-use-cart";

const Cart =()=>{
    const {
        isEmpty,
        totalItems,
        items,
        totalUniqueItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
    } =useCart();
   if(isEmpty) return <h1 className="text-center">Cart is empty! Add items.</h1>
  return (
    <section className="py-4 container">
    <div className="row justifycontent-center">
       <h5>Cart({totalUniqueItems}) total Items({totalItems})</h5>
       <table className="table table-light able-hover m-0">
       <tbody>
        {items.map((item,index)=>{
            return(
            <tr key={index}>
                <td>
                    <img src={item.imgUrl} style={{height:"6rem"}}/>
                </td>
                <td>{item.itm}</td>
                <td>{item.price}</td>
                <td>Quantity({item.quantity})</td>
                <td>
                    <button className="btn btn-outline-dark ms-2 "
                    onClick={()=> updateItemQuantity(item.id,item.quantity-1)}
                    >-</button>
                    <button className="btn btn-outline-dark ms-2 "
                    onClick={()=> updateItemQuantity(item.id,item.quantity+1)}
                    >+</button>
                    <button className="btn btn-danger ms-2 "
                    onClick={()=> removeItem(item.id)}
                    >Remove Item</button>
                </td>
            </tr>
            )
        })}
        </tbody>
       </table>
       <div className="col-auto ms-auto">
          <h2>Total Price : ₹ {cartTotal}</h2>
         </div>
         <div className="col-auto">
            <button className="btn btn-danger m-2" onClick={()=>emptyCart()}>
             Clear Cart
            </button>
            <button className="btn btn-secondary m-2" onClick={()=>{console.log(cartTotal);emptyCart()}}>
             Checkout
            </button>

         </div>
    </div>
    </section>
  )
}
export default Cart;
