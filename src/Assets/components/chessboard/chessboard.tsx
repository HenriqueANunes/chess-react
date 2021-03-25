
import "./chessboard.css";
import Tile from "../tile/tile";


const file = [1, 2, 3, 4, 5, 6, 7, 8];
const row =  [1, 2, 3, 4, 5, 6, 7, 8];

export default function ChessBoard (){
    let board = [];

    for(let j = file.length-1; j >= 0; j--){
        for(let i = 0; i < row.length; i++){
            const number = i + j;
            board.push(<Tile number={number} image="Assets/images/bP.png" />);

        }
    }


    return <div id="chessboard">{board}</div>
}