import { useContext } from "react";
import NewsContext from "../context/NewsContext";
import NewsCard from "./NewsCard";
import './components.css'

const ArticleList = () => {
    const {articles} = useContext(NewsContext)
    console.log(articles)
    return(
        <div className="ui-centered-cards">
            {
                articles?.map(article => { return <NewsCard key={article.created_date} article={article} /> })
            }
        </div>
    )
}

export default ArticleList