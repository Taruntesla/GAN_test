import React from 'react';
import ReactDOM from 'react-dom';
import pr from "./Products"
import Cart from "./Cart"
import { useCart } from "react-use-cart"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { CartProvider} from "react-use-cart"
function Bitem(props){
  const { addItem }=useCart();
 return <div className="item">
  <center>
  <img className="jt" src={props.imgUrl} alt="ater"/>
  <h1>{props.name}</h1>
  <p>₹ {props.price}</p>
  <button className='btn btn-warning ' onClick={()=>addItem(props.item)}>Add to cart</button>
  </center>
</div>
}

ReactDOM.render(<div>
<CartProvider>
   {pr.map((item,index)=>{
    return <Bitem name={item.itm}
    imgUrl={item.imgUrl}
    price={item.price}
    key={index}
    item={item}
    />
   })}
  <Cart/>
  </CartProvider>
</div>,document.querySelector("#root"));
