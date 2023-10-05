import '../styles/LocationInfo.css'

const LocationInfo = ({ location }) => {
  return (
   <article className="Location" >
    <h2 className="Location__name" >Name: {location?.name}</h2>
    <h2 className="Location__type" >Type: {location?.type}</h2>
    <h2 className="Location__dimension" >Dimension: {location?.dimension || 'unknown'}</h2>
    <h2 className="Location__residents" >Population: {location?.residents.length}</h2>
   </article>
  )
}

export default LocationInfo