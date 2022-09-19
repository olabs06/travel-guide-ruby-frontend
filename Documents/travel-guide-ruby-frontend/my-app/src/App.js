import React, {useEffect, useState} from "react";
//import './App.css';
import {Route, Routes, useMatch} from "react-router-dom";
import Home from './Home';
import Menu from './Menu';
import Review from './Components/Review';
import Cards from './Cards';
import CitiesList from "./CitiesList";
import Search from './Search';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function App() {
  const [allCities, setCitiesList] = useState([])
  const [altCities, setAltCities] = useState([])
  
  
  const match = useMatch({
    path: "/*",
    end: true, 
    caseSensitive: true 
  });
 

  useEffect(()=>{
    fetch(`${process.env.REACT_APP_API_URL}/cities`)
    .then(r => r.json())
    .then(data => {
      setCitiesList(data)
      setAltCities(data)
      })
  },[])

  function onSearch(value){
    const cityName = []
    altCities.forEach(city =>{
      const splitArray = city.name.split(' ')
      for (let name of splitArray){
        if (name.toLowerCase() === value.toLowerCase()){
          cityName.push(city)
          setCitiesList(cityName)
        }
      }
      if (value === ''){
        resetCity()
      }
    })
  }

  function resetCity(){
    setCitiesList(altCities)
  }

   
  return (
    <div className="App">
      <Row className="App-header">
        <Col xs={12} sm={6} md={4} lg={4} xl={4}>
          <Menu/>
        </Col>
        <Col xs={12} sm={6} md={4} lg={4} xl={4}>
          <Routes>
            <Route path={`cities`} element={<Search onSearch={onSearch}/>}
            />
          </Routes>
        </Col>
      </Row>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path= '/' element={<Review />}/>
          <Route path={`cities`} element={
              <CitiesList cities={allCities}/>
          }
          />
      </Routes>      
    </div>
  );
}

export default App;
