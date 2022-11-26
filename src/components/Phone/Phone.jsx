import './Phone.scss';

function Phone( { type="header", className="" } ) {
    return (
        <a className={`phone phone-${type} ${className}`} href="tel:+74995555555">
            +7 (499) 555-55-55
        </a>
    );
}

export default Phone;
