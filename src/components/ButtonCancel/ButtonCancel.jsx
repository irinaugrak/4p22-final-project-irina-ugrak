import "./ButtonCancel.scss";
import { deleteElFromBasket } from "../../store/basket/basketSlice";
import { useDispatch } from "react-redux";

function ButtonCancel({ className="", id }) {
    const dispatch = useDispatch();
    const deleteElFromBasketOnClick = () => {
        dispatch(deleteElFromBasket({ id: id }));
    };
    return <button onClick={deleteElFromBasketOnClick}  className={`btn-cancel ${className}`}></button>;
}

export default ButtonCancel;