import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './PhotoScreen.css'


const PhotoScreen = ({match}) => {

    const [photos,setPhotos]= useState([])
    const [loading,setLoading]= useState(true)

    useEffect(()=>{


        const fetchPhotos = async () => {
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/photos')
            setPhotos(data)
        }
      
        fetchPhotos()
        setLoading(false)
        

    },[])



    const id = match.params.id

    
    const singlePhoto = photos.filter(photo=>photo.id === Number(id))[0]
   



    return (
        <div className="single_photo_cont">

            {
                 singlePhoto ? <img src={singlePhoto.url} className="single-photo" />  : "wait till uploaded"
            }
             
        </div>
    )
}

export default PhotoScreen
