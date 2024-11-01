const CardForm = ({data, updateHandler}) => {
        const changeHadler = (e) => {
                const value = e.target.value;
                const index = e.target.getAttribute('name');
                updateHandler(index, value);
        }

        const checkHandler = (e) => {
                const index = e.target.getAttribute('name');
                const value = e.target.checked;
                console.log(value)
                updateHandler(index, value);
        }
    return (
        <div className='form'>
            <label htmlFor='level'>Уровень</label>
            <input name='level' value={data.level ?? ''} maxLength={'1'} onChange={changeHadler}/>
            <label htmlFor='nameUp'>Название(над линией)</label>
            <input name='nameUp' value={data.nameUp ?? ''} onChange={changeHadler}/>
            <label htmlFor='nameDown'>Название(под линией)</label>
            <input name='nameDown' value={data.nameDown ?? ''} onChange={changeHadler}/>
            <label htmlFor='leadTime'>Время накладывания</label>
            <input name='leadTime' value={data.leadTime ?? ''} onChange={changeHadler}/>
            <label htmlFor='duration'>Продолжительность</label>
            <input name='duration' value={data.duration ?? ''} onChange={changeHadler}/>
            <label htmlFor='components'>Компоненты заклинания</label>
            <input name='components' value={data.components ?? ''} onChange={changeHadler}/>
            <label htmlFor='text'>Текст заклинания</label>
            <textarea style={{height: '160px'}} name='text' value={data.text ?? ''} onChange={changeHadler}/>
            <label htmlFor='textDown'>Текст заклинания(доп внизу карты)</label>
            <textarea style={{height: '140px'}} name='textDown' value={data.textDown ?? ''} onChange={changeHadler}/>
            <input name='K' type='checkbox' checked={data.K ?? false} onChange={checkHandler}/>
            <label htmlFor='K'>Концентрация</label>
            <input name='R' type='checkbox' checked={data.R ?? false} onChange={checkHandler}/>
            <label htmlFor='R'>Ритуал</label>
            <input name='V' type='checkbox' checked={data.V ?? false} onChange={checkHandler}/>
            <label htmlFor='V'>Вербальный</label>
            <input name='S' type='checkbox' checked={data.S ?? false} onChange={checkHandler}/>
            <label htmlFor='S'>Самотический</label>
            <input name='M' type='checkbox' checked={data.M ?? false} onChange={checkHandler}/>
            <label htmlFor='M'>Материалы</label>


        </div>
    );
}

export default CardForm;