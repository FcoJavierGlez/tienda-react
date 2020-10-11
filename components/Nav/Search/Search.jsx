import { useEffect } from 'react';

const Search = () => {
    return (
            <div id="buscador">
                <select name="" id="">
                    <option value="">Todos los departamentos &#x25BC;</option>
                </select>
                <input type="text" name="" id="" 
                onClick={ 
                    () => {
                        const SEARCH = document.getElementById("buscador");
                        SEARCH.style.border = "3px solid orange";
                        SEARCH.style.borderRadius = "9px";
                        SEARCH.style.boxShadow = "orange 0px 0px 4px 1px";
                    }
                } 
                onBlur={
                    () => {
                        const SEARCH = document.getElementById("buscador");
                        SEARCH.style.border = "3px solid #111111";
                        SEARCH.style.borderRadius = "9px";
                        SEARCH.style.boxShadow = "0px 0px #111111";
                    }
                }/>
                <button className="search_button">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg_search">
                        <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                    </svg>
                </button>
            </div>
    )
}

export default Search;