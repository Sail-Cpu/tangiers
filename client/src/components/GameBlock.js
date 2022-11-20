import React from "react";

const GameBlock = (props) => {
    return(
        <div className="game-block-container" style={{backgroundImage: `url(${props.img})`}}>
            <h1>{props.name}</h1>
        </div>
    )
}

export default GameBlock;