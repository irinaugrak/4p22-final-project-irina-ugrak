import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addToBasket, deleteFromBasket } from "../../store/basket/basketSlice";
import "./Counter.scss";

function Counter({ id }) {
    const dispatch = useDispatch();
    const countInBasket = useSelector((state) => state.basket[id] ? state.basket[id] : 0);
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        if (countInBasket) {
            setCount(countInBasket);
        }
    }, [countInBasket]);
    
    const addToBasketOnClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setCount(count + 1);
        dispatch(addToBasket( { id: id, count: count + 1 }));
    };

    const deleteFromBasketOnClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if(count >= 1) {
            setCount(count - 1);
            dispatch(deleteFromBasket({ id: id, count: count - 1 }));
        }
    };
    return (
        <div className="counter">
            <button onClick={deleteFromBasketOnClick} className="counter__change counter__minus"></button>
            <input disabled onChange={(e) => setCount(+e.target.value)} value={count} className="counter__num" type="text" />
            <button onClick={addToBasketOnClick} className="counter__change counter__plus"></button>
        </div>
    );
}

export default Counter;