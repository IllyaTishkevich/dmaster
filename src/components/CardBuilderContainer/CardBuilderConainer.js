import { useState } from 'react';

import CardList from "../CardList";
import CardForm from "../CardForm";
import PrintButton from "../PrintButton";
import testData from '../../testData'
const CardBuilderContainer = () => {
    const [ cards, setCards ] = useState(testData);
    const [ activeIndex, setActive ] = useState(0);

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
                <CardForm data={cards[activeIndex]} updateHandler={updateHandler}/>
                <PrintButton />
            </div>
        </div>
    );
}

export default CardBuilderContainer;