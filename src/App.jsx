import { useEffect, useRef, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import getRandomNumber from './utils/getRandomNumber'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'

function App() {

  const [inputValue, setInputValue] = useState(getRandomNumber(126))

  // const numberRandom = getRandomNumber(126)
  const url = `https://rickandmortyapi.com/api/location/${inputValue || 'Hola' }`
  const [location, getLocation, hasError] = useFetch(url)

  useEffect(() => {
    getLocation()
  }, [inputValue])

  const inputSearch = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim())
  }

  return (
    
    <div className='like__header'>
      <img className='Image__app' src='/images/RyM.png' alt="" />
      <h1 className='Title__app' >You are in The Rick and Morty App</h1>
      
      <form className='Form__app' onSubmit={handleSubmit}>
        <input className='Forminput__app' ref={inputSearch} type="text" />
        <button className='Formbutton__app' >Search</button>
      </form>
      {
        hasError
        ? <h2 className='Formerror__app' >❌Eyy!! You must provide an id from 1 to 126 please 😭</h2>
        : (
        <>
        
      
      <LocationInfo
        location={location}
      />
      <div>
        {

          location?.residents.map(residentUrl => (
            <ResidentCard
              key={residentUrl}
              residentUrl={residentUrl}
            />
          ))
        }
      </div>
      </>
       ) }     
    </div>

  )
}

export default App
