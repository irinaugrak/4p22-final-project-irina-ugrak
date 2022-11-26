import "./Counter.scss";

function Counter() {
    return (
        <div className="counter">
            <button className="counter__change counter__minus"></button>
            <input className="counter__num" type="text" />
            <button className="counter__change counter__plus"></button>
        </div>
    )
}

export default Counter;