import "./Search.scss";
import { useDispatch } from "react-redux"; 
import { setSearch } from "../../store/search/searchSlice";

function Search( { className } ) {
    const dispatch = useDispatch();
    const setSearchChange = (value) => {
        dispatch(setSearch(value));
    };
    
    return (
        <div className={`search ${className}`}>
            <input
                onChange={(event) => setSearchChange(event.target.value)}
                className="search__input"
                type="search"
                placeholder="Поиск по товарам"
                aria-label="Поиск по товарам"
            />
        </div>
    );
}

export default Search;
