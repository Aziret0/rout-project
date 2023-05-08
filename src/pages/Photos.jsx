import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom'



const Albums = () => {
  const params = useParams();
  const [albums, setAlbums] = useState(null);

  useEffect(() =>{
    fetch(`https://jsonplaceholder.typicode.com/albums/${params.id}/photos`)
    .then(res => res.json())
    .then(data => setAlbums(data))
  },[params.id])
   
    return (
      <div className='grid-container'>
        {albums && (
          <>
          {albums.map(el => (
            <img src={el.url} alt="" className='image' />
          ))}
          </>
        )}
    </div>
    )
}

export default Albums