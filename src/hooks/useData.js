import { useSelector } from 'react-redux';

export const useData = () => {
    const { data, loading, error } = useSelector((state) => state.dataState);

    const findById = (id) => {
        return data.find((item) => item.id === id) || null;
    };

    const findByName = (name) => {
        return data.filter((item) =>
            item.name.toLowerCase().includes(name.toLowerCase())
        );
    };

    const getAllData = () => {
        return data;
    };

    return {
        data,
        loading,
        error,
        findById,
        findByName,
        getAllData,
    };
};
