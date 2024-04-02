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
            <div className="opener">
            <h1 className="welcome">Welcome to NewsNexus!</h1>
            <div className="openline">
                <h3 className="smallertext">Engage your mind, starting with</h3> 
                <span className="top-header">Top Stories</span>
                <h3 className="smallertext">from the</h3>
                <span className="slant"> NewYorkTimes </span>
                <h3 className="smallertext">:</h3>
            </div>
            </div>
            <ArticleList />
        </div>
    )
}
export default TopStories