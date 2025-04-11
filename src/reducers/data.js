import testData from '../testData'

const initialState = {
    data: [],
    loading: false,
    error: null,
    searchResult: null,
    currentList: testData,
};

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_DATA_REQUEST':
            return { ...state, loading: true, error: null };
        case 'LOAD_DATA_SUCCESS':
            return { ...state, loading: false, data: action.payload };
        case 'LOAD_DATA_FAILURE':
            return { ...state, loading: false, error: action.payload };

        case 'FIND_BY_ID':
            return {
                ...state,
                searchResult: state.data.find((item) => item.id === action.payload),
            };

        case 'GET_ALL_DATA':
            return { ...state, searchResult: state.data };

        case 'UPDATE_CURRENT_LIST':
            return { ...state, currentList: action.payload };

        default:
            return state;
    }
};