import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCurrentList } from '../../actions/cards';

import CardList from "../CardList";
import CardForm from "../CardForm";
import PrintButton from "../PrintButton";

const CardBuilderContainer = () => {
    const dispatch = useDispatch();
    const currentList = useSelector(state => state.dataState.currentList);
    const [ cards, setCards ] = useState(currentList);
    const [ activeIndex, setActive ] = useState(null);

    useEffect(() => {
        dispatch(updateCurrentList(cards));
    }, [cards, dispatch]);

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