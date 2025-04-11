import {useEffect, useMemo, useState} from 'react';
import "./importForm.css";
import { useSelector } from "react-redux";
import Text from './text'
const ImportForm = ({ updateHandler }) => {
    const [ itemId, setItemId ] = useState(0);
    const [ filterText, setFilterText] = useState('');

    const error = useSelector(state => state.dataState.error);
    const loading = useSelector(state => state.dataState.loading);
    const spells = useSelector(state => state.dataState.data.allSpells);

    const changeHadler = e => {
        const value = e.target.value;
        setFilterText(value)
    }

    const filteredSpells = useMemo(() => {
        return spells.filter(spell => spell.ru.name.includes(filterText) || spell.en.name.includes(filterText))
    }, [filterText])

    const handleImport = () => {
        const spell = filteredSpells[itemId].ru;
        updateHandler('level', spell.level);
        updateHandler('nameUp', spell.name);
        updateHandler('nameDown', '');
        updateHandler('leadTime', spell.castingTime);
        updateHandler('duration', spell.duration.replace('конц-я, ', '').replace('Концентрация', ''));
        updateHandler('components', spell.materials);
        updateHandler('text', spell.text);
        updateHandler('textDown', '');
        updateHandler('K', spell.duration.includes('конц-я') || spell.duration.includes('Концентрация'));
        updateHandler('R', false);
        updateHandler('V', spell.components.includes('В'));
        updateHandler('S', spell.components.includes('С'));
        updateHandler('M', spell.components.includes('М'));
    };

    useEffect(() => console.log(filteredSpells[itemId]), [itemId])

    if (error || loading) {
        return <span> Loading...</span>
    }

    const options = filteredSpells.map((item, key) => <option
                                key={'spell-' + key}
                                value={key}
                                selected={key === itemId ?'selected' : ''}>{item.ru.name}</option> )

    return (
        <div className="import-form">
            <h3>Импорт данных</h3>

            <select name='spells-list'
                    onChange={e => setItemId(e.target.value)}
                    defaultValue={0} multiple={false}
            >{options}</select>
            <label htmlFor='search'>Search</label>
            <input name='search' value={filterText} onChange={changeHadler}/>

            <button
                onClick={handleImport}
                style={{
                    marginTop: '10px',
                    padding: '8px 16px',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}
            >
                Импортировать
            </button>
            {filteredSpells[itemId] ? <Text spell={filteredSpells[itemId].ru} /> : null}
        </div>
    );
};

export default ImportForm; 