
import "./chessboard.css";
import Tile from "../tile/tile";

const col = ["a", "b", "c", "d", "e", "f", "g", "h"];
const row =  [1, 2, 3, 4, 5, 6, 7, 8];



export default function ChessBoard (){
    let board = [];

    for(let j = col.length-1; j >= 0; j--){
        for(let i = 0; i < row.length; i++){
            let image = undefined;
            const number = i + j;

            board.push(<Tile number={number} image={image} row={i === 0 ? String(j+1) : ""} col={j === 0 ? col[i] : ""}/>);
        }
    }


    return <div id="chessboard">{board}</div>
}