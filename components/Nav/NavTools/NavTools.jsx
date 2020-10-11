
const NavTools = () => {
    return (
        <div className="nav-tools">
            <div className="nav_hover">
                <span className="span_line1">Hola, identifícate</span><br/><span className="span_line2">Cuenta y listas</span>
            </div>
            <div className="nav_hover">
                <span className="span_line1">Devoluciones </span><br/><span className="span_line2">y Pedidos</span>
            </div>
            <div className="nav_hover">
                <span className="span_line1">Suscríbete a </span><br/><span className="span_line2">Prime</span>
            </div>
            <div className="nav_hover shopping_basket" onClick={ () => {
                const CART_LIST = document.getElementById("shopping-cart");
                
                CART_LIST.setAttribute("class", 
                    ( CART_LIST.getAttribute("class") === "close_cart" || CART_LIST.getAttribute("class") === null ) ? 
                    "open_cart" : "close_cart" );
            }}>
                <span id="cart-count"></span>
            </div>
        </div>
    )
}

export default NavTools;