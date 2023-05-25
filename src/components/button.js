import React from 'react';
function Button({text, useCase, buttonClass}) {
    const handleClick = () => {
        console.log(`Button "${text}" clicked`);
    };
    return (
        <button
            disabled={useCase}
            onClick={handleClick}
            className={buttonClass}
        >
            {text}
        </button>
    );
}

export default Button;