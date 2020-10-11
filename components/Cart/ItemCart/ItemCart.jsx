import { useEffect, useState } from "react";


const ItemCart = ({item,id,changeUnit,onAddUnitItem,deleteItem}) => {
    const [units,setUnits] = useState(1);

    /* useEffect( () => {
        document.getElementById("totalPrice").innerHTML = `Total a pagar: ${ onAddUnitItem() }€`;
    }); */

    return (
        <div className="item-cart" key={id}>
            <div className="name-item">{item.name}</div>
            <hr/>
            <div className="target-item">
                <div className="img-item">
                    <img src={`/products/${item.img}`} alt="Imagen del producto" />
                </div>
                <div className="info-item">
                    <div className="row">
                        <div className="bold">Precio/unidad: </div><div>{`${parseFloat(item.price)}€`}</div>
                    </div>
                    <div className="unit-buttons-item">
                        <button type="button" onClick={ () => {
                            if ( units == 1 ) return;
                            setUnits( units - 1 );
                            changeUnit(item.id,item.ud - 1);
                        }}>-</button>
                        <div className="text-center">{`x${item.ud}`}</div>
                        <button type="button" onClick={ () => {
                            setUnits( units + 1 );
                            changeUnit(item.id,item.ud + 1);
                        }}>+</button>
                    </div>
                    <div className="foot-item">
                        <a className="likeLink error" type="button" onClick={ () => deleteItem(item.id) }>Eliminar</a>
                        <div className="text-right bold">{`Precio: ${parseFloat(item.price*item.ud).toFixed(2)}€`}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCart;