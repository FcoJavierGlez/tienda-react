import { useEffect, useState } from 'react';
import ItemCart from './ItemCart'

//cart.map( e => e.price*e.ud ).reduce( (e,acc) => e + acc);

let CART = [
    {
        id: 1,
        name: "Paleta Ibérica de Bellota de 4,5 kg Covap", //Paleta 100 % Ibérica de Bellota Alta Expresion Plata de Covap de 4,5 kg
        description: "ñdjabvndmnbñnbéñkah jerodbklja´ñ´ldkfbmnñdklfhjj n",
        img: "jamon.png",
        price: 300,
        ud: 1
    },
    {
        id: 2,
        name: "Teclado Logitech",
        description: "ñdjabvndmnbñnbéñkah jerodbklja´ñ´ldkfbmnñdklfhjj n",
        img: "nd.png",
        price: 19.95,
        ud: 1
    },
];

//const setUnitItem = (id,unit) => CART[ CART.indexOf( CART.filter( e => e.id == id )[0] ) ].ud = unit;

const Cart = ({onNewItem,cart,changeUnit}) => {
    const [shoppingCart,setShoppingCart] = useState(CART);
    const [totalPrice,setTotalPrice] = useState( shoppingCart.length == 0 ? 0 : shoppingCart.map( e => e.price*e.ud ).reduce( (e,acc) => e+acc ) );

    /* const totalPrice = {
        price: shoppingCart.length == 0 ? 0 : shoppingCart.map( e => e.price*e.ud ).reduce( (e,acc) => e + acc).toFixed(2)
    }; */

    useEffect( () => {
        const totalItems = document.getElementById("cart-count");
        totalItems.innerHTML = shoppingCart.length;
        totalItems.style.left = (shoppingCart.length > 9 ? `21px` : `25px`);
    });

    const setUnitItem = (id,ud) => {
        shoppingCart.filter( e => e.id == id )[0].ud = ud;
        setShoppingCart( shoppingCart );
        setTotalPrice( shoppingCart.length == 0 ? 0 : shoppingCart.map( e => e.price*e.ud ).reduce( (e,acc) => e+acc ) );
    }

    const deleteItem = id => { 
        setTotalPrice( (totalPrice - shoppingCart.filter( e => e.id == id ).map( e => e.price*e.ud )).toFixed(2) );
        setShoppingCart( shoppingCart.filter( e => e.id !== id ) );
    }

    const addItem = item => {
        setShoppingCart( [...shoppingCart, item]);
    }

    //const setPriceCart = () => totalPrice.price = shoppingCart.length == 0 ? 0 : shoppingCart.map( e => e.price*e.ud ).reduce( (e,acc) => e + acc).toFixed(2);

    return (
        <div id="shopping-cart">
            <header className="name_cart">Mi carrito<hr/></header>
            <div className="item-list scroll">
                {
                    shoppingCart.length === 0 ? 
                    <div className="text-center text-grey">El carrito está vacío</div> : 
                    shoppingCart.map( (e,i) => <ItemCart item={e} key={i} changeUnit={setUnitItem} deleteItem={deleteItem}/> )
                }
            </div>
            <footer>
                <hr/>
                <div className="text-right" id="totalPrice">Total a pagar: { totalPrice }€</div>
            </footer>
        </div>
    )
}

export default Cart;