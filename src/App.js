import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import CharacterGrid from './components/characters/CharacterGrid';
import Header from './components/ui/Header'
import Search from './components/ui/Search'

function App() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async() => {
      setIsLoading(true)
      const result = await axios(`https://rickandmortyapi.com/api/character/?name=${query}`)
   
      setItems(result.data.results)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])





  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
