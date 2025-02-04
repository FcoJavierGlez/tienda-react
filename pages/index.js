import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import Cart from '../components/Cart';
import ItemList from '../components/ItemList';
import ITEMS_DB from '../js/constants';

const Index = () => {
    const [shoppingCart,setShoppingCart] = useState([]);
    const [totalPrice,setTotalPrice] = useState( shoppingCart.length == 0 ? "0.00" : shoppingCart.map( e => e.price*e.ud ).reduce( (e,acc) => e+acc ).toFixed(2) );

    useEffect( () => {
        const totalItems = document.getElementById("cart-count");
        const priceCart  = document.getElementById("totalPrice");
        document.title   = "Amazon.fake";

        totalItems.innerHTML = shoppingCart.length;
        totalItems.style.left = (shoppingCart.length > 9 ? `21px` : `25px`);

        setTotalPrice( shoppingCart.length == 0 ? "0.00" : shoppingCart.map( e => e.price*e.ud ).reduce( (e,acc) => e+acc ).toFixed(2) );
        
        priceCart.innerHTML = `Total a pagar: ${totalPrice}€`;
    });

    const setUnitItem = (id,ud) => {
        const NEW_CART = [...shoppingCart];
        NEW_CART.find( e => e.id == id ).ud = ud;
        setShoppingCart( NEW_CART );
    }

    const deleteItem = id => { 
        const ITEM = ITEMS_DB.find( e => e.id == id );
        setShoppingCart( shoppingCart.filter( e => e.id !== id ) );
        ITEM.ud       = 1;
        ITEM.intoCart = false;
    }

    const emptyCart = () => {
        shoppingCart.map( e => deleteItem(e.id) );
        setShoppingCart([]);
    }

    const addItem = item => {
        const NEW_CART = [...shoppingCart];
        NEW_CART.push( ITEMS_DB.find( e => e.id == item.id) );
        ITEMS_DB.find( e => e.id == item.id ).intoCart = true;
        setShoppingCart( NEW_CART );
    }

    return (
        <div>
            <div>
                <Nav />
                <Cart cart={shoppingCart} deleteItem={deleteItem} setUnitItem={setUnitItem} emptyCart={emptyCart} />
            </div>
            <div className="main-container scroll">
                <div className="container-list">
                    {
                        ITEMS_DB.map( e => <ItemList db={ITEMS_DB} item={e} key={e.id} id={e.id} addItem={addItem} /> )
                    }
                </div>
            </div>
        </div>
        
    )
}

export default Index;