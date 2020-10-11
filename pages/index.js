import React from 'react';
import Nav from '../components/Nav';
import Cart from '../components/Cart';
import ItemList from '../components/ItemList';

const ITEMS_DB = [
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
    {
        id: 3,
        name: "Piano de cola",
        description: "ñdjabvndmnbñnbéñkah jerodbklja´ñ´ldkfbmnñdklfhjj n",
        img: "nd.png",
        price: 1800,
        ud: 1
    },
];

const addItemToCart = id => {ITEMS_DB.filter( e => e.id == id )[0]; console.log("Añadido")}

const prueba = item => {
    onNewItem = item;
}

const Index = () => {

    return (
        <div>
            <div>
                <Nav /* cart={CART} */ />
                <Cart onNewItem={addItemToCart} /* cart={CART} changeUnit={setUnitItem} *//>
                {/* {
                    //console.log(ITEMS_DB.map( e => e ))
                    ITEMS_DB.map( e => <div>
                        <div>{e.name}</div>
                        <button type="button" onClick={ () => {
                            //onNewItem(e.id);
                            console.log( ITEMS_DB.filter( el => el.id == e.id )[0] );
                            prueba( ITEMS_DB.filter( el => el.id == e.id )[0] );
                        }}>Agregar al carrito</button>
                    </div> )
                } */}
            </div>
            <div>
                {/* {
                    //console.log(ITEMS_DB.map( e => e ))
                    ITEMS_DB.map( e => <div>
                        <div>{e.name}</div>
                        <button type="button" onClick={ () => {
                            onNewItem(e.id);
                        }}>Agregar al carrito</button>
                    </div> )
                } */}
                {/* <ItemList /> */}
            </div>
        </div>
        
    )
}

export default Index;