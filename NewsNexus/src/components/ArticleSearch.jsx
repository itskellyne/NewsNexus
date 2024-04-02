import handleFetch from "../utils";
import { useState } from "react";
import API_KEY from "../config";

function ArticleSearch({searchedArticles, setSearchedArticles}) {

    const [inputValue, setInputValue] = useState("")

    const handleClick = async (e) => {
        e.preventDefault()
        const data = await handleFetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${inputValue}&api-key=${API_KEY}`);
        console.log(data)
        if (data) setSearchedArticles(data.response.docs);
        if(error) console.log(error)
    }
    return (
        <form className="form">
            <input className="item" type="text" placeholder="Search for an article" onChange={(e) => setInputValue(e.target.value)} autoComplete="off"/>
            <br />
            <button className="button" onClick={handleClick} type="submit">Search</button>
        </form>
    )
}

export default ArticleSearch