
const ItemList = ({db,item,id,addItem}) => {

    return (
        <div id={`itemList-${id}`} className="item-list-main">
            <div className="image-list">
                <img src={`/products/${item.img}`} alt="Imagen del producto" />
            </div>
            <div className="product-info">
                <hr/>
                <div className="text-center bold product-name">{item.name}</div>
                <hr/>
                <div className="container-info">
                    <h2>{item.price}€</h2>
                    <p>{item.description}</p>
                    { item.intoCart ? 
                    <div className="text-center text-orange bold height-32 grid align-center">Ya en la cesta</div> : 
                    <button type="button" className="button-cart"
                    onClick={ () => addItem( db.filter( e => e.id == item.id )[0] ) } >
                        Añadir a la cesta
                    </button>}
                </div>
            </div>
        </div>
    )
}

export default ItemList;