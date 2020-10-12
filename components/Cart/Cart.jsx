import { useEffect, useState } from 'react';
import ItemCart from './ItemCart';

const Cart = ({cart,setUnitItem,deleteItem,emptyCart}) => {

    return (
        <div id="shopping-cart">
            <header className="name_cart">
                <div>Mi carrito</div>
                <div>
                    { cart.length > 1 ? 
                        <div className="text-right error pointer"><a onClick={ () => emptyCart() }>Vaciar cesta</a></div> : 
                        <div></div>
                    }
                </div>
                 
            </header>
            <hr className="margin-hr-top-cart"/>
            <div className="item-list scroll">
                {
                    cart.length === 0 ? 
                    <div className="text-center text-grey">El carrito está vacío</div> : 
                    cart.map( (e,i) => <ItemCart item={e} key={i} setUnitItem={setUnitItem} deleteItem={deleteItem}/> )
                }
            </div>
            <footer>
                <hr/>
                <div className="text-right" id="totalPrice"></div>
            </footer>
        </div>
    )
}

export default Cart;