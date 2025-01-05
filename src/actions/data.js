export const loadData = () => async (dispatch) => {
    dispatch({ type: 'LOAD_DATA_REQUEST' });

    try {
        const response = await fetch('/data.json'); // Читаем JSON-файл из папки public
        const data = await response.json();
        dispatch({ type: 'LOAD_DATA_SUCCESS', payload: data });
    } catch (error) {
        dispatch({ type: 'LOAD_DATA_FAILURE', payload: error.message });
    }
};

export const findById = (id) => {
    return { type: 'FIND_BY_ID', payload: id };
};

export const getAllData = () => {
    return { type: 'GET_ALL_DATA' };
};