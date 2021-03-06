import React from 'react';

import classes from './CrossIcon.css';
import Cross from './../../../assets/icons/Cross.png';

const CrossIcon = props => {
    return (
        <div onClick={props.onClick}>
            <img
                style={{...props.style}}
                src={Cross} 
                alt="..." 
                className={classes.CrossIcon}
            />
        </div>
    );
}

export default CrossIcon;