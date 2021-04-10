import "./chessboard.css";
import Tile from "../tile/tile";
import {Fen} from "../fen";

const col = ["a", "b", "c", "d", "e", "f", "g", "h"];
const row =  [1, 2, 3, 4, 5, 6, 7, 8];


export default function ChessBoard (){
    let board = [];
    const pieces = Fen("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1")

    for(let i = 0 ; i < col.length; i++){
        for(let j = 0; j < row.length; j++){
            let image = undefined;
            const number = i + j;

            for(let piece of pieces){
                if(i === piece.position.row && j === piece.position.col){
                    image = piece.image;
                    console.log(piece.position);
                }
            }

            board.push(<Tile number={number} image={image} row={j === 0 ? String(row[i]+1) : ""} col={i === 7 ? col[j] : ""}/>);
        }
    }


    return <div id="chessboard">{board}</div>
}