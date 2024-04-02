import './components.css'

const FavoritedCard = ({ article, removeFromFavorites }) => {

    const handleRemoveFromFavorites = () => {
      removeFromFavorites(article);
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
              <a className="linktext" href={article.url}>Visit article</a>
            </button>
            <button className="button" onClick={handleRemoveFromFavorites}> Remove from favorites </button>
          </div>
        </div>
      </>
    )
  }
  
  export default FavoritedCard;