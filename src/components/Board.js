import React from 'react';
import Square from './Square';
import {board} from "../style"
  
 
const Board=(props)=>{
    const squares = props.squares;
    return(
    <div style={board}>
        {squares.map((square,i) => (
            <Square key={props.i} square={square} onClick={() => props.onClick(i)} />
        ))}
    </div>)
}

export default Board;