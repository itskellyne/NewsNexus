import SearchedNewsCard from "./SearchedNewsCard"
import './components.css'

function SearchedList({searchedarticles}) {

    // if(searchedarticles.length === 0) return;
    console.log(searchedarticles)

    return (
        <div className="ui-centered-cards">
            {searchedarticles.map((searchedarticle) => {
                return( <SearchedNewsCard key={searchedarticle.web_url} searchedarticle={searchedarticle}/>
                )
            })}
        </div>
    )
}

export default SearchedList