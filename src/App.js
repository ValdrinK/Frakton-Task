
import AlbumScreen from './pages/AlbumScreen'
import PhotosScreen from './pages/PhotosScreen'
import PhotoScreen from './pages/PhotoScreen'
import {BrowserRouter as Router, Route} from 'react-router-dom'

const App=()=> {
  return (
    <Router>      
        <Route path='/' component={AlbumScreen} exact />
        <Route path='/photos/:id' component={PhotosScreen}  />  
        <Route path='/photo/:id' component={PhotoScreen} />    
    </Router>
   
  );
}

export default App;
