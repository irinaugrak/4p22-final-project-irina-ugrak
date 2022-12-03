import './Caption.scss';

function Caption( { title } ) {
    const captionList = {
        "sofas-and-armchairs": "Диваны и кресла",
        "tables-and-chairs": "Столы и стулья",
        "cabinets-and-shelving": "Шкафы и стеллажи",
        "beds-and-mattresses": "Кровати и матрасы",
        "chests-of-drawers-and-cabinets": "Комоды и тумбы"
    }
    return (
        <section className="caption">
            <div className="container">
                <div className="caption__wrapper">
                    <h1 className="caption__title">{captionList[title]}</h1>
                </div>
            </div>
        </section>
    );
}

export default Caption;