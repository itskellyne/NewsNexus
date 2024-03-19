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
        <form>
            <label htmlFor="searchInput">Search for an article: </label>
            <input type="text" onChange = {(e) => setInputValue(e.target.value)} className="form-control" id="searchInput" />
            <button onClick = {handleClick} type ="submit" className="btn btn-success">Search</button>
        </form>
    )
}

export default ArticleSearch