import { useState } from "react"
import ArticleSearch from "../components/ArticleSearch"
import SearchedList from "../components/ArticleSearchedList"
import './pages.css'

const Search = () => {
    const [searchedarticles, setSearchedArticles] = useState([])
    const [inputValue, setInputValue] = useState("")

    return(
        <div>
            <div className="opener">
                <div className="openline">
                    <h3 className="smallertext">Already have something in mind?</h3> 
                    <span className="top-header">Search</span>
                    <h3 className="smallertext">through </h3>
                    <span className="slant"> NewYorkTimes </span>
                    <h3 className="smallertext">articles:</h3>
                </div>
            </div>
            <div className="search">
            <ArticleSearch inputValue = {inputValue} setSearchedArticles = {setSearchedArticles} />
            </div>
            <br />
            <SearchedList searchedarticles = {searchedarticles}/>
        </div>
    )
}
export default Search