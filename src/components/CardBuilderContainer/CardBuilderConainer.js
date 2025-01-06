import { useState } from 'react';

import CardList from "../CardList";
import CardForm from "../CardForm";
import PrintButton from "../PrintButton";
import testData from '../../testData'
const CardBuilderContainer = () => {
    const [ cards, setCards ] = useState(testData);
    const [ activeIndex, setActive ] = useState(null);

    const updateHandler = (name, value) => {
        const copy = [...cards];
        const activeCard = copy[activeIndex];
        activeCard[name] = value;
        copy[activeIndex] = activeCard;

        setCards(copy);
    }
    return (
        <div className='container'>
            <div id='printable' >
                <CardList cards={cards} setActive={setActive} active={activeIndex}/>
            </div>
            <div className='non-printable'>
                <CardForm data={activeIndex !== null ? cards[activeIndex] : null}
                          updateHandler={updateHandler}
                          setActive={setActive}
                />
                <PrintButton />
            </div>
        </div>
    );
}

export default CardBuilderContainer;