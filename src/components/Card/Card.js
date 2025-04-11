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
                <div className="card-title-top" style={{fontSize: card.nameSize + 'px'}}>{ card.nameUp }</div>
                <div className="card-title-bottom" style={{fontSize: card.nameSize + 'px'}}>{ card.nameDown }</div>
            </div>
            <div className="card-body">
                <div className="body-text" style={{fontSize: card.textSize + 'px'}}>
                    { card.text }
                </div>
                <div className="up-body" style={{fontSize: card.textDownSize + 'px'}}>
                    { card.textDown }
                </div>
            </div>
            <div className="card-footer">
                <div className="line"></div>
                <div className="components">
                    { card.leadTime !== '' ? <div className="one-string-block">{ card.leadTime }</div> : null }
                    { card.duration !== '' ? <div className="one-string-block">{ card.duration }</div> : null }
                </div>
                <div className="component-list" style={{fontSize: card.componentsSize + 'px'}}>
                    <span>{ card.components }</span>
                </div>
            </div>
        </div>
    );
}

export default Card;