import React from "react";

function MyButton({ text, isDisabled, onClick }) {
    return (
        <button onClick={onClick} disabled={isDisabled}>
            {text}
        </button>
    );
}

export default MyButton;
