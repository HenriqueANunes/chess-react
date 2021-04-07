import {Piece} from "./piece";

export class Pawn {

    nome: string;
    private _x: number;
    private _y: number;
    image = "caminho da imagem";

    constructor(nome: string, x: number, y: number) {
        this.nome = nome;
        this._x = x;
        this._y = y;
    }


    get getX(): number {
        return this._x;
    }

    set x(value: number) {
        this.x = value;
    }

    get y(): number {
        return this.y;
    }

    set y(value: number) {
        this.y = value;
    }

    movement(): any{

    }

}
