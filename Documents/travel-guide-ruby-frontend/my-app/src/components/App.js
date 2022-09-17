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

function App() {
  const [allCitys, setCityList] = useState([])
  const [altCitys, setAltCitys] = useState([])
  
  const match = useMatch({
    path: "/*",
    end: true, 
    caseSensitive: true 
  });
  console.log(match.pathname, match.pathnameBase, match.params['*'])

  // useEffect(()=>{
  //   fetch(`${process.env.REACT_APP_API_URL}/Citys`)
  //   .then(r => r.json())
  //   .then(data => {
  //     setCityList(data)
  //     setAltCitys(data)
  //     })
  // },[])

  // function onSearch(value){
  //   const CityName = []
  //   altCitys.forEach(City =>{
  //     const splitArray = City.name.split(' ')
  //     for (let name of splitArray){
  //       if (name.toLowerCase() === value.toLowerCase()){
  //         CityName.push(City)
  //         setCityList(CityName)
  //       }
  //     }
  //     if (value === ''){
  //       //resetCity()
  //     }
  //   })
  // }

  

  // function onRank(value){
    
  // }

  return (
    <div className="App">
      <Row className="App-header">
        <Col xs={12} sm={6} md={4} lg={4} xl={4}>
          <Menu />
        </Col>
      </Row>
        {/* <Col xs={12} sm={6} md={4} lg={4} xl={4}>
          <Routes>
            <Route path={`Cities`} element={<Search onSearch={onSearch}/>}
            />
          </Routes>
        </Col>
        <Col xs={12} sm={6} md={4} lg={4} xl={4}>
          <Routes>
            <Route path={`Cities`} element={<RankBar onRank={onRank}/>}
            />
          </Routes>
        </Col>
      </Row>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path={`Cities`} element={
              <CityList Citys={allCitys}/>
          }
          />
          <Route path={`${match.pathnameBase}/Cities/:id`} element={<CitySpecs Citys={allCitys} />} />
      </Routes>       */}
    </div>
  );
}
 
export default App;
