import React, {useState} from 'react';

const Movies = () => {
    const [state, setState] = useState('');

    const event = () => {
        console.log('Clicked');
    };
    
    return (
        <button onClick={event}>Button</button>
    ); 
};

export default Movies; 