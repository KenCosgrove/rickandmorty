import React from 'react'
import CharacterCard from './CharacterCard'
import Spinner from '../ui/Spinner'

const CharacterGrid = ({ items, isLoading }) => {
    return isLoading ? (
        <Spinner />
    ) : (
        <section className= "cards">
            {items.map((item) => (
                <CharacterCard key={item.id} item={item} />
            ))}
        </section>
    )
}

export default CharacterGrid
