import Search from './Search';
import NavTools from './NavTools';

const Nav = () => {
    return (
        <nav>
            <div className="menu_logo">
                <div id="hamburger_menu" className="nav_hover">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" className="svg_menu">
                        <path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                    </svg>
                </div>
                <div className="logo nav_hover"></div>
            </div>
            <Search />
            <NavTools />
        </nav>
    )
}

export default Nav;