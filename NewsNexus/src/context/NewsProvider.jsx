import { useState, useEffect } from "react";
import NewsContext from "./NewsContext.jsx";
import handleFetch from "../utils.jsx";
import API_KEY from "../config";

const NewsProvider = ({children}) => {
    const [articles, setArticles] = useState([]);
  
    useEffect(() => {
        const doFetch = async () => {
        const data = await handleFetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`)
        setArticles(data.results);
        }
        doFetch();
    }, []);

    const contextValues = { articles } // this object is returned by useContext(NewsContext)
    return (
        <NewsContext.Provider value={contextValues}>
        {children}
        </NewsContext.Provider>
    )
}

export default NewsProvider