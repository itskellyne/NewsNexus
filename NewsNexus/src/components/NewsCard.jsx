import './components.css'

const NewsCard = ({article}) => {
    // const handleFavorite = () => {
    //   // const set = new Set(JSON.parse(localStorage.getItem('favorites')))
    //   const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    //   favorites.push(article);
    //   localStorage.setItem('favorites', JSON.stringify(favorites));
    // };
  // console.log(article.multimedia[0].url);
  const handleFavorite = () => {
    // Add article to local storage
    let favorites = JSON.parse(localStorage.getItem('favorites'));
    // If favorites is null or undefined, initialize it as an empty array
    if (!Array.isArray(favorites)) {
      favorites = [];
    }
    favorites.push(article);
    localStorage.setItem('favorites', JSON.stringify(favorites));
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
            <a href={article.url}>Visit article</a>
          </button>
          <button onClick={handleFavorite}> Favorite </button>
        </div>
      </div>
      </>
    )
  }
  
  export default NewsCard;