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
        
        priceCart.innerHTML = `Total a pagar: ${totalPrice}€`;
    });

    const setUnitItem = (id,ud) => {
        shoppingCart.filter( e => e.id == id )[0].ud = ud;
        setShoppingCart( shoppingCart );
        setTotalPrice( shoppingCart.length == 0 ? 0 : shoppingCart.map( e => e.price*e.ud ).reduce( (e,acc) => e+acc ).toFixed(2) );
    }

    const deleteItem = id => { 
        const ITEM = ITEMS_DB.filter( e => e.id == id )[0];
        setShoppingCart( shoppingCart.filter( e => e.id !== id ) );
        setTotalPrice( (totalPrice - shoppingCart.filter( e => e.id == id ).map( e => e.price*e.ud )).toFixed(2) );
        ITEM.ud       = 1;
        ITEM.intoCart = false;
    }

    const emptyCart = () => {
        console.log(shoppingCart);
        for (let i = shoppingCart.length-1; i > -1; i--) 
            deleteItem( shoppingCart[i].id );
        setShoppingCart([]);
        setTotalPrice("0.00");
    }

    const addItem = item => {
        ITEMS_DB.filter( e => e.id == item.id )[0].intoCart = true;
        shoppingCart.push( ITEMS_DB.filter( e => e.id == item.id )[0] ); //No sé la razón, pero si no hago este push el array no se actualiza a tiempo y el precio no cambia, porqué ocurre esto???
        setShoppingCart( shoppingCart );
        setTotalPrice( shoppingCart.map( e => e.price*e.ud ).reduce( (e,acc) => e+acc ).toFixed(2) );
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
                        ITEMS_DB.map( (e,i) => <ItemList db={ITEMS_DB} item={e} key={e.id} id={e.id} addItem={addItem} /> )
                    }
                </div>
            </div>
        </div>
        
    )
}

export default Index;