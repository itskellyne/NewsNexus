import './components.css'
import { useState } from 'react';
const NewsCard = ({article}) => {

  const handleFavorite = () => {
    // // Add article to local storage

    let favorites = [];
    const storedFavorites = localStorage.getItem('favorites');
    
    try {
      if (storedFavorites) {
        favorites = JSON.parse(storedFavorites);
      }
      const favoritesSet = new Set(favorites.map(fav => fav.title));

      if (!favoritesSet.has(article.title)) {
        favorites.push(article);
        localStorage.setItem('favorites', JSON.stringify(favorites));
      } else {
        console.log('Article already exists in favorites.');
      }
    } catch (error) {
      console.error('Error parsing or processing favorites from local storage:', error);
      // Handle the error gracefully, e.g., log the error and don't modify favorites
    }

  };
  
    return (
      <>
      <div className="news-card">
        <div className="img">
          <img src={article.multimedia?.[0]?.url ?? ''} alt={article.multimedia?.[0]?.caption ?? 'Main Article Image'} />
        </div>
        <div className="content">
          <p className="title">{article.title}</p>
          <button className="button">
            <a className="linktext" href={article.url} target="_blank">Visit article</a>
          </button>
          <button className="button" onClick={handleFavorite} > Favorite </button>
        </div>
      </div>
      </>
    )
  }
  
  export default NewsCard;