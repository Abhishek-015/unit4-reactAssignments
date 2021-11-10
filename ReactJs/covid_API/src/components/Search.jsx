import React from 'react'

const Search = ({ searchKeyWord,setSearchKeyWord, fetchAllRes}) => {
    return (
        <form >
          <div className="input1">
        <input className="input" value={searchKeyWord} onChange={(e) => setSearchKeyWord(e.target.value)} class="form-control mr-sm-2" type="search" placeholder="Enter your District name" aria-label="Search"  />
        <button class="btn btn-outline-success mx-2" onClick={fetchAllRes} type="button">Search</button>

          </div>

      </form>
    )
}

export default Search
