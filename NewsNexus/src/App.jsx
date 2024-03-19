import './App.css'
import Navbar from './components/NavBar'
import TopStories from './pages/TopStories';
import Favorites from './pages/Favorites';
import Search from './pages/Search';
import NotFound from './pages/NotFound';
import {
  Routes,
  Route,
} from "react-router-dom";

const  App = () => {
  return (
    <>
       <Navbar />
       <Routes>
        <Route path= "/" element={<TopStories />}/>
        <Route path= "/search" element={<Search />}/>
        <Route path= "/favorites" element={<Favorites />}/>
        <Route path= "*" element={<NotFound />}/>
       </Routes>
    </>
  )
}

export default App
