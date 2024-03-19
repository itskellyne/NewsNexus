import { useState, useEffect } from "react";
import handleFetch from "../utils";
import ArticleList from "../components/ArticleList";
import './pages.css'
import API_KEY from "../config";

const TopStories = () => {
    const [news, setNews] = useState([])

    useEffect(() => {
        const doFetch = async () => {
          const data = await handleFetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`);
          if (data !== null) {
            setNews(data);
        } else {
            setError("Failed to fetch data");
        }
    };
        doFetch();
    }, []);

    return(
        <div>
            <h1 className="page-header">Top Stories</h1>
            <ArticleList />
        </div>
    )
}
export default TopStories