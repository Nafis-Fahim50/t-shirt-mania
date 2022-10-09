import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Granpa';

const Special = () => {
    const [house,setHouse] = useContext(RingContext)
    return (
        <div>
            <p><small>Gift: {house} </small></p>
            <button onClick={()=> setHouse(house+1)}>Increase</button>
        </div>
    );
};

export default Special;