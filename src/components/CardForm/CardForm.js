import './cardForm.css';
import Card from '../Card'
import ImportForm from "../ImportForm";
const CardForm = ({data, updateHandler, setActive}) => {
        if (data === null) {
                return null;
        }
        const changeHadler = (e) => {
                const value = e.target.value;
                const index = e.target.getAttribute('name');
                updateHandler(index, value);
        }

        const checkHandler = (e) => {
                const index = e.target.getAttribute('name');
                const value = e.target.checked;
                updateHandler(index, value);
        }
    return (
        <div className='centered-overlay'>
                <div className='centered-content'>
                        <div className='close-modal'>
                                <button onClick={() => setActive(null)}>Close</button>
                        </div>
                        <div className='card-simple'>
                                <Card card={data} style='' setActive={()=>{return;}} />
                        </div>
                        <div className='form'>
                                <label htmlFor='level'>Уровень</label>
                                <input name='level' value={data.level ?? ''} maxLength={'1'} onChange={changeHadler}/>
                                <label htmlFor='nameUp'>Название(над линией)</label>
                                <input name='nameUp' value={data.nameUp ?? ''} onChange={changeHadler}/>
                                <label htmlFor='nameDown'>Название(под линией)</label>
                                <input name='nameDown' value={data.nameDown ?? ''} onChange={changeHadler}/>
                                <label htmlFor='nameSize'>Размер Шрифта(Название)</label>
                                <input name='nameSize' value={data.nameSize ?? 16} onChange={changeHadler}/>
                                <label htmlFor='leadTime'>Время накладывания</label>
                                <input name='leadTime' value={data.leadTime ?? ''} onChange={changeHadler}/>
                                <label htmlFor='duration'>Продолжительность</label>
                                <input name='duration' value={data.duration ?? ''} onChange={changeHadler}/>
                                <label htmlFor='components'>Компоненты заклинания</label>
                                <input name='components' value={data.components ?? ''} onChange={changeHadler}/>
                                <label htmlFor='componentsSize'>Размер Шрифта(Компоненты)</label>
                                <input name='componentsSize' value={data.componentsSize ?? 10} onChange={changeHadler}/>
                                <label htmlFor='text'>Текст заклинания</label>
                                <textarea style={{height: '160px'}} name='text' value={data.text ?? ''}
                                          onChange={changeHadler}/>
                                <label htmlFor='textSize'>Размер Шрифта(Текст)</label>
                                <input name='textSize' value={data.textSize ?? 10} onChange={changeHadler}/>
                                <label htmlFor='textDown'>Текст заклинания(доп внизу карты)</label>
                                <textarea style={{height: '140px'}} name='textDown' value={data.textDown ?? ''}
                                          onChange={changeHadler}/>
                                <label htmlFor='textDownSize'>Размер Шрифта(Текст)</label>
                                <input name='textDownSize' value={data.textDownSize ?? 10} onChange={changeHadler}/>
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
                        <ImportForm updateHandler={updateHandler}/>
                </div>
        </div>
    );
}

export default CardForm;