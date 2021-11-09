import React from 'react'

const Search = ({ searchKeyWord,setSearchKeyWord, fetchAllRes}) => {
    return (
        <form class="form-inline d-flex w-50 py-4">
        <input value={searchKeyWord} onChange={(e) => setSearchKeyWord(e.target.value)} class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success mx-2" onClick={fetchAllRes} type="button">Search</button>
      </form>
    )
}

export default Search
