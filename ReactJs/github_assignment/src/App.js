import react, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Search from './components/Search'
import User from './components/User'

function App() {

  const [data, setData] = useState([])
  const [searchKeyWord, setSearchKeyWord] = useState('')

  // let githubClientSecret = '711264114f6a38b46b90ce6cb9b3274b70273eb5';
  // let githubClientId = 'c6f7ce86ca3f63f85705';

  const fetchAllRes = (event) => {
    event.preventDefault();

    axios.get(`https://api.github.com/search/users?q=${searchKeyWord}`).then((res) => {
      setData(res.data.items)
    }).catch(err => console.log(err,'err'))
  }

  return (
    <div className="container">
    <Search searchKeyWord={searchKeyWord} setSearchKeyWord={setSearchKeyWord} fetchAllRes={fetchAllRes} />
    <User data={data}/>
    </div>
  );
}

export default App;
