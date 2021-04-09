/*
export interface Piece{
    nome: string;
    x: number;
    y: number;
    image: string;

    setX(x:number): void;
    setY(y:number): void;

    getX(): number;
    getY(): number;

}*/

export interface Position{
    row: number;
    col: number;
}

export enum Type{
    KING,
    QUEEN,
    ROOK,
    BISHOP,
    KNIGHT,
    PAWN,
}

export enum Team{
    WHITE,
    BLACK,
}

export interface Pieces{
    image: string;
    position: Position;
    type: Type;
    team: Team;
}
