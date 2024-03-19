import NewsCard from "../components/NewsCard";
import './pages.css'
import '../components/components.css'

const Favorites = () => {
   // const set = new Set()
  //  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    // const favoritesArray = Array.from(favorites); // Convert Set to Array
    // const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    // console.log(favorites)

    const favoritesString = localStorage.getItem('favorites');
    const favorites = favoritesString ? JSON.parse(favoritesString) : [];
    console.log(favorites)
    return (
        <div>
        <h2 className="page-header">Favorites</h2>
        <div className="ui-centered-cards">
        {favorites.map((article, index) => (
            <NewsCard key={index} article={article}/>
        ))}
        </div>
        </div>
    );
};

export default Favorites 

