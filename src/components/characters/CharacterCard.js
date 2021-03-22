import React from 'react'

const CharacterCard = ({item}) => {
    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                    <img src={item.image} alt ='' />
                </div>
                <div className="card-back">
                    <h1>{item.name}</h1>
                    <ul>
                        <li>
                            <span>Home Planet:</span> {item.origin.name}
                        </li>
                        <li>
                            <span>Status:</span> {item.status}
                        </li>
                        <li>
                            <span>Species:</span> {item.species}
                        </li>
                    </ul>
                   
                </div>
            </div>
          
        </div>
    )
}

export default CharacterCard
