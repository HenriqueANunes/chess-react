import React from "react";

import "./chessboard.css";

const vertical = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontal =  ["a", "b", "c", "d", "e", "f", "g", "h"];

export default function ChessBoard (){
    let board = [];

    for(let j = vertical.length-1; j >= 0; j--){
        for(let i = 0; i < horizontal.length; i++){
            const number = i + j;

            if(number % 2 === 0){
                board.push(
                    <div className="dark-tile">
                        {horizontal[i]}{vertical[j]}
                    </div>
                )
            }else{
                board.push(
                    <div className="light-tile">
                        {horizontal[i]}{vertical[j]}
                    </div>
                )
            }

        }
    }


    return <div id="chessboard">{board}</div>
}