import React, { useEffect } from 'react';
import CardBuilderContainer from "../components/CardBuilderContainer";
import { useDispatch } from 'react-redux';
import { loadData} from './../actions/data';
import { useData } from './../hooks/useData'

const CardBuilder = () => {
    const dispatch = useDispatch();
    const { loading, error } = useData();
    useEffect(() => {
        dispatch(loadData());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;
    return (
        <div>
            <CardBuilderContainer />
        </div>
    );
}

export default CardBuilder;