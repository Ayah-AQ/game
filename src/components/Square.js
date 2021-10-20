import React from 'react';
import {square} from "../style"

const Square = (props) => (
    <button style={square} onClick={props.onClick}>
        {props.square}
    </button>
);

export default Square; 