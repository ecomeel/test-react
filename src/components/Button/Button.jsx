import React from 'react';

function MyButton({ text, onClick }) {
    return (
        <button onClick={onClick}>{text}</button>
    )
}

export default MyButton