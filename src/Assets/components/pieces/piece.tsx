export interface Piece{
    nome: string;
    x: number;
    y: number;
    image: string;

    setX(x:number): void;
    setY(y:number): void;

    getX(): number;
    getY(): number;

}