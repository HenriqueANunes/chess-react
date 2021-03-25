import "./tile.css"

interface Props{
    number: number
    image?: string
}

export default function Tile({number, image}: Props){
    if(number % 2 === 0){
        return <div className="dark-tile"><img src={image} alt="piece"/></div>;
    }else{
        return (
            <div className="light-tile">
                <img src={image} alt="piece"/>
            </div>
        );

    }
}