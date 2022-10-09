import React from 'react';
import Special from '../Special/Special';

const Myself = ({house}) => {
    return (
        <div>
            <h2>Myself</h2>
            <p><small> house: {house}</small></p>
            <Special></Special>
        </div>
    );
};

export default Myself;