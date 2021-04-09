import "./chessboard.css";
import Tile from "../tile/tile";
import {Fen} from "../fen";

const col = ["a", "b", "c", "d", "e", "f", "g", "h"];
const row =  [1, 2, 3, 4, 5, 6, 7, 8];


export default function ChessBoard (){
    let board = [];
    const pieces = Fen("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1")

    for(let i = col.length-1; i >= 0; i--){
        for(let j = 0; j < row.length; j++){
            let image = undefined;
            const number = i + j;

            for(let p of pieces){
                if(i === p.position.row && j === p.position.col){
                    image = p.image;
                }
            }

            board.push(<Tile number={number} image={image} row={j === 0 ? String(row[i]+1) : ""} col={i === 0 ? col[j] : ""}/>);
        }
    }


    return <div id="chessboard">{board}</div>
}