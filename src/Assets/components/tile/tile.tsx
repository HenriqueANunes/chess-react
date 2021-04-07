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
            <div className="dark-tile">
                {/*<img src={image}/>*/}
                <div className="row">{row}</div>
                <div className="col">{col}</div>
            </div>
        )
    }else{
        return (
            <div className="light-tile">
                {/*<img src={image}/>*/}
                <div className="row">{row}</div>
                <div className="col">{col}</div>
            </div>
        );
    }
}