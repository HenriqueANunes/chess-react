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
                {/*<img src={image}/>*/}
                <div className="row light">{row}</div>
                <div className="col light">{col}</div>
            </div>
        )
    }else{
        return (
            <div className="tile light-tile">
                {/*<img src={image}/>*/}
                <div className="row dark">{row}</div>
                <div className="col dark">{col}</div>
            </div>
        );
    }
}