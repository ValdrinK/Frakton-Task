import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Album from '../components/Album'
import "./AlbumScreen.css"

const AlbumScreen = () => {

    const [albums,setAlbums]= useState([])
    const [loading,setLoading]= useState(true)

    useEffect(()=>{


        const fetchAlbums = async () => {
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/albums')
            setAlbums(data)
        }
        fetchAlbums()
        setLoading(false)

    },[])

    
    return (
        
        <div className="cont" >
            
            { loading ? <h1>Loading...</h1> : <div className="albums_container">


                {
                    albums.map((album) => (  
                    <Album key={album.id}  album={album}/>      
                    ))

                }
            </div>
                   
            }   
                     
        </div>
    )
}

export default AlbumScreen
