import PropTypes from 'prop-types';
import './Main.scss';
import Catalog from '../Catalog/Catalog';
import Caption from '../Caption/Caption';

function Main({ products }) {
    return (
        <div className='main'>
            <Caption />
            <Catalog products={products}/>
        </div>
    )
}

Main.propTypes = {
    products: PropTypes.array
}

export default Main;