import React, { useEffect } from 'react';
import CardBuilderContainer from "../components/CardBuilderContainer";
import { useDispatch } from 'react-redux';
import { loadData} from './../actions/data';
import { useData } from './../hooks/useData'

const CardBuilder = () => {
    const dispatch = useDispatch();
    const { loading, error, getAllData } = useData();
    useEffect(() => {
        dispatch(loadData());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;
    console.log(getAllData())
    return (
        <div>
            <CardBuilderContainer />
        </div>
    );
}

export default CardBuilder;