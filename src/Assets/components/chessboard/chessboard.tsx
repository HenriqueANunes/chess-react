
import "./chessboard.css";
import Tile from "../tile/tile";

const file = [1, 2, 3, 4, 5, 6, 7, 8];
const row =  [1, 2, 3, 4, 5, 6, 7, 8];
const types = ["k", "q", "r", "n", "b", "p"];

interface piece{
    type: string
    color: string
    x: number
    y: number
    image: string
}

const pieces: piece[] = [];


export default function ChessBoard (){
    let board = [];

    for(let j = file.length-1; j >= 0; j--){
        for(let i = 0; i < row.length; i++){
            let image = undefined;
            const number = i + j;

            board.push(<Tile number={number} image={image} />);
        }
    }


    return <div id="chessboard">{board}</div>
}