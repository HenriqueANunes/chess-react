import "./tile.css"

interface Props{
    image?: string
    number: number
    row: string
    col: string
}

export default function Tile({number, image, row, col}: Props){
    if(number % 2 === 0){
        return (
            <div className="tile dark-tile">
                <div className="row light">{row}</div>
                {image && <div className="piece" style={{backgroundImage: `url(${image})`}}/>}
                <div className="col light">{col}</div>
            </div>
        );
    }else{
        return (
            <div className="tile light-tile">
                <div className="row dark">{row}</div>
                {image && <div className="piece" style={{backgroundImage: `url(${image})`}}/>}
                <div className="col dark">{col}</div>
            </div>
        );
    }
}