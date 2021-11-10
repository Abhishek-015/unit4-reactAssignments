import react, { useState } from 'react'
// import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Search from './components/Search'
import User from './components/User'

function App() {

  const [data, setData] = useState([])
  const [searchKeyWord, setSearchKeyWord] = useState('')

  const fetchAllRes = () => {
    
  axios.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict/?district_id=510&date=31-03-2021`).then((res) => {
      setData(res.data.sessions)
    }).catch(err => console.log(err,'err'))
  }

  return (
    <>
    <h1>Covid Vaccination Availability</h1>
    <Search searchKeyWord={searchKeyWord} setSearchKeyWord={setSearchKeyWord} fetchAllRes={fetchAllRes} />
    <User data={data}/>
    </>
  );
}

export default App;
