import { useState } from "react"
import ArticleSearch from "../components/ArticleSearch"
import SearchedList from "../components/ArticleSearchedList"
import './pages.css'

const Search = () => {
    const [searchedarticles, setSearchedArticles] = useState([])
    const [inputValue, setInputValue] = useState("")

    return(
        <div>
            <h1 className="page-header">Search</h1>
            <br />
            <div className="search">
            <ArticleSearch inputValue = {inputValue} setSearchedArticles = {setSearchedArticles} />
            </div>
            <SearchedList searchedarticles = {searchedarticles}/>
        </div>
    )
}
export default Search