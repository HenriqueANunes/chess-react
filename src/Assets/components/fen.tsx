import {Pieces, Team, Type} from "./pieces/pieces";

export function Fen(fen:string){
    const pieceTypeFromSymbol = {
        'k': Type.KING,
        'q': Type.QUEEN,
        'r': Type.ROOK,
        'b': Type.BISHOP,
        'K': Type.KNIGHT,
        'p': Type.PAWN,
    };

    const pieces: Pieces[] = [];
    const fenBoard: string = fen.split(' ')[0];
    let col = 0 ,row = 7;

    for(let char of fenBoard){
        if(char === '/'){
            col = 0;
            row--;
        }else{
            if(!isNaN(parseInt(char))){
                col += parseInt(char);
            }else{
                let pieceTeam = char === char.toUpperCase() ? Team.WHITE : Team.BLACK;
                let pieceType = pieceTypeFromSymbol['p'];
                char = char.toUpperCase();
                pieces.push({
                    image: "chess-react/images/" + (pieceTeam === 0   ? "b"+char : "w"+char) + ".png",
                    position:{row:row,col:col},
                    team:pieceTeam,
                    type:pieceType
                });
                col++;
            }
        }
    }

    return pieces;

}