import "./chessboard.css";
import Tile from "../tile/tile";
import {Fen} from "../fen";

const col = ["a", "b", "c", "d", "e", "f", "g", "h"];
const row =  [1, 2, 3, 4, 5, 6, 7, 8];

let selectedPice: HTMLElement | null = null;


function grabPiece(event: React.MouseEvent){
    const element = event.target as HTMLElement;

    if(element.classList.contains("piece")){
        console.log(event)

        let x = event.clientX - 50;
        let y = event.clientY - 50;

        element.style.position = "absolute";
        element.style.left = `${x}px`;
        element.style.top = `${y}px`;

        selectedPice = element;

    }
}

function movePiece(event: React.MouseEvent){

    if(selectedPice){

        let x = event.clientX - 50;
        let y = event.clientY - 50;

        selectedPice.style.position = "absolute";
        selectedPice.style.left = `${x}px`;
        selectedPice.style.top = `${y}px`;
    }
}

function dropPiece(event: React.MouseEvent){
    if(selectedPice){
        selectedPice = null;
    }
}

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

            board.push(<Tile number={number} image={image} row={j === 0 ? String(row[row.length - 1 - i] ) : ""} col={i === 7 ? col[j] : ""}/>);
        }
    }


    return (
        <div
            onMouseDown={event => grabPiece(event)}
            onMouseMove={event => movePiece(event)}
            onMouseUp={event => dropPiece(event)}
            id="chessboard" >
            {board}
        </div>
    );
}