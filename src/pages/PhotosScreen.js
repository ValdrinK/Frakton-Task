import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Photo from '../components/Photo'
import "./PhotosScreen.css"

const PhotosScreen = React.memo(({match}) => {

    
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
    


    
   
    const photosId = photos.filter(photo=>photo.albumId === Number(id))
   
    



   
 console.log(photosId)
   
    return (
        <div className="cont">

            { loading ? <h1>Loading...</h1> : <div className="photos_container">


                {    photosId ?
                       photosId.map(photo=>(
                        <Photo key={photo.id} photo={photo} />
                    )) : "no fotos found"

                }
                </div>               
            }
            
        </div>
    )
})

export default PhotosScreen
