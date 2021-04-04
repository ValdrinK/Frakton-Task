import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './Album.css'

const Album = ({album}) => {

    

    const [photos,setPhotos]= useState([])
    

    useEffect(()=>{
        const fetchPhotos = async () => {
            const {data} = await axios.get(`https://jsonplaceholder.typicode.com/photos`)

           
            setPhotos(data)
        }

        fetchPhotos()
        
       
    },[])   


    const albumPhoto = photos.filter(photo=>photo.albumId === album.id)[0]


  const albumNum = photos.filter(photo=>photo.albumId === album.id).length



    
    return (
        <div className="album_container">
            <Link to={`/photos/${album.id}`} className="to_photo-link">           
                {albumPhoto && albumPhoto.thumbnailUrl ? 
                <img src={albumPhoto.thumbnailUrl}/> : <p>no photo found</p> }

                <h4 className='album_title'>{album.title}</h4>
                {albumNum ? <p>{albumNum}</p> : 50}   
            </Link>           
        </div>
    )
}

export default Album
