import React from 'react';

const Button = ({icon ,click,classStyle,styleColor}) => {
    return (
        <button  className={classStyle} onClick={click}> 
            {icon}
        </button>
    );
};

export default Button;