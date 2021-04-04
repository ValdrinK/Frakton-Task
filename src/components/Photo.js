import React from 'react'
import {Link} from 'react-router-dom'
import './Photo.css'

const Photo = ({photo}) => {
    console.log(photo)
    return (
    
       <div className="photo_container">
        
       <Link to={`/photo/${photo.id}`} className="to_photo-link">

        <img src={photo.thumbnailUrl} />
        <h4>{photo.title}</h4>

        </Link>
       </div>
    )
}

export default Photo
