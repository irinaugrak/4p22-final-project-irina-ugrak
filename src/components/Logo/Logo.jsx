import './Logo.scss';

function Logo({type, className=''}) {
    return (
        <div className={`logo logo-${type} ${className}`}>
            <span className={`logo__title logo-${type}__title`}>Модерн</span>
            <span className={`logo__slogan logo-${type}__slogan`}>Уют вашего дома</span>
        </div>
    );
}

export default Logo;