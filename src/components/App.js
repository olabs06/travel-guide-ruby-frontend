import React, {useEffect, useState} from 'react'
import {Route, Routes, useMatch} from "react-router-dom";
import CityList from './CityList';
import Menu from './Menu';
import CitySpecs from './CitySpecs';
import Search from './Search';
import RankBar from './RankBar';
import Home from './Home';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/App.css';

function App() {
  const [cities, setCityList] = useState([])
  const [defaultCities, setDefaultCityList] = useState([])
  
  const match = useMatch({
    path: "/*",
    end: true, 
    caseSensitive: true 
  });
  console.log(match.pathname, match.pathnameBase, match.params['*'])

  useEffect(()=>{
    fetch(`https://radiant-oasis-70177.herokuapp.com/cities`)
    .then(r => r.json())
    .then(data => {
      setCityList(data)
      setDefaultCityList(data)})
  },[])

  function onSearch(value){
    if  (value === ''){
      setCityList(defaultCities)
    }else{
      const cityName = []
      cities.forEach(city =>{
        const splitCityName = city.name.split(' ')
        for (let name of splitCityName){
          if (name.toLowerCase() === value.toLowerCase()){
            cityName.push(city)
            setCityList(cityName)
          }
        }
      })
    }
    
  }

  function onRank(value){
    if (value === 'default'){
      setCityList(defaultCities)
    }else{
      fetch(`https://radiant-oasis-70177.herokuapp.com/cities/rank_by/${value}`)
      .then(r => r.json())
      .then(data => {setCityList(data)})
    }
    
  }

  return (
    <div className="App">
      <Row className="App-header">
        <Col xs={12} sm={12} md={12} lg={12} xl={4}>
          <Menu />
        </Col>
        <Col xs={12} sm={12} md={12} lg={6} xl={4}>
          <Routes>
            <Route path={`cities`} element={<Search onSearch={onSearch}/>}
            />
          </Routes>
        </Col>
        <Col xs={12} sm={12} md={12} lg={6} xl={4}>
          <Routes>
            <Route path={`cities`} element={<RankBar onRank={onRank}/>}
            />
          </Routes>
        </Col>
      </Row>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path={`cities`} element={<CityList cities={cities}/>}/>
          <Route path={`cities/:id`} element={<CitySpecs />} />
      </Routes>      
    </div>
  );
}
 
export default App;
