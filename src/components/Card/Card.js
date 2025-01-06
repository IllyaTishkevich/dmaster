import './card.css';

const Card = ({card, style, setActive}) => {
    return (
        <div className={"card " + style} onClick={setActive}>
            <div className="card-header">
                <div className="line"></div>
                <div className="level">
                    <span>{card.level}</span>
                    { card.R ? <div className="ritual">Р</div> : null }
                    { card.K ? <div className="compo">К</div> : null }
                </div>
                <div className="components">
                    { card.V ? <div className="component">B</div> : null }
                    { card.S ? <div className="component">C</div> : null }
                    { card.M ? <div className="component">M</div> : null }
                </div>
                <div className="card-title-top">{ card.nameUp }</div>
                <div className="card-title-bottom">{ card.nameDown }</div>
            </div>
            <div className="card-body">
                <div className="body-text">
                    { card.text }
                </div>
                <div className="up-body">
                    { card.textDown }
                </div>
            </div>
            <div className="card-footer">
                <div className="line"></div>
                <div className="components">
                    { card.leadTime !== '' ? <div className="one-string-block">{ card.leadTime }</div> : null }
                    { card.duration !== '' ? <div className="one-string-block">{ card.duration }</div> : null }
                </div>
                <div className="component-list">
                    <span>{ card.components }</span>
                </div>
            </div>
        </div>
    );
}

export default Card;