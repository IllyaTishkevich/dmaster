import Card from "../Card/Card";
const CardList = ({cards, setActive, active}) => {
    const cardsElements = cards.map(
        (item, i) => <Card key={i} card={item}
                           style={i == active ? 'active' : ''}
                           setActive={() => setActive(i)}
        />
    )

    return (
        <>
            { cardsElements }
        </>
    );
}

export default CardList;