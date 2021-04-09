import "./chessboard.css";
import Tile from "../tile/tile";
import {Fen} from "../fen";

const col = ["a", "b", "c", "d", "e", "f", "g", "h"];
const row =  [1, 2, 3, 4, 5, 6, 7, 8];


export default function ChessBoard (){
    let board = [];
    const pieces = Fen("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1")

    for(let j = col.length-1; j >= 0; j--){
        for(let i = 0; i < row.length; i++){
            let image = undefined;
            const number = i + j;

            for(let p of pieces){
                if(j === p.position.row && i === p.position.col){
                    image = p.image;
                }
            }

            board.push(<Tile number={number} image={image} row={i === 0 ? String(row[j]+1) : ""} col={j === 0 ? col[i] : ""}/>);
        }
    }


    return <div id="chessboard">{board}</div>
}