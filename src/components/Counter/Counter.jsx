import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "./Counter.scss";

function Counter({ id }) {
    const dispatch = useDispatch();
    const basket = useSelector((state) => state.basket[id]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if(basket) {
            setCount(basket);
        }
    }, [basket]);
    
    const addToBasket = () => {
        dispatch();
    };
    const deleteFromBasket = () => {
        dispatch();
    };
    return (
        <div className="counter">
            <button onClick={deleteFromBasket} className="counter__change counter__minus"></button>
            <input onChange={(e) => setCount(e.target.value)} value={count} className="counter__num" type="text" />
            <button onClick={addToBasket} className="counter__change counter__plus"></button>
        </div>
    );
}

export default Counter;