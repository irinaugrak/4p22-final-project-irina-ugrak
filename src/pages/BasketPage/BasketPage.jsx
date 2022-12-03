import './BasketPage.scss';
import Basket from '../../components/Basket/Basket';
import Order from "../../components/Order/Order";

function BasketPage() {
    return (
        <div className="BasketPage">
            <Basket />
            <Order />
        </div>
    );
}

export default BasketPage;