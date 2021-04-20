import React from 'react';
import '../FilePages/Styles.css';

import {Row, Col, Container} from 'react-bootstrap';
const Home = () => {
  return (
    <div className="PageContainer">
      <div className="Page" >
      <h1>
       Web & Mobile App Developer 
      </h1>
            <div className="PageBody">
              <Container>
              <img className="Frontpic" src={"https://github.com/KrotzerSoftwareDevelopment/KSD/blob/master/src/Assets/frontpic.png?raw=true"} />
            <Row>
              <Col>
              <div id="PageContentHome">
                 <li id="SubTitle"> Web Development </li>
                 <li> Exisiting Web Site Modifications </li>
               <li>Cross-platform Mobile Apps</li> 
                 <li> New Website Creation </li>
                 <li>Debuging</li>
                 <li>Search Engine Optimization </li>
                 <li>Disabiliy friendly</li>
                 <li>And Much more!</li>
                 </div>
                 </Col>
                 <Col>
              <div id="PageContentHome">
                <li id="SubTitle">Android Apps</li>
                <li>Android Phone and Tablet Apps</li>
                <li>Wearables</li>
                <li>Tv app</li>
                <li>Automotive apps</li>
                
                </div>
                </Col>
                <Col>
                
              <div id="PageContentHome">
                <li id="SubTitle">Apple Apps</li>
                <li>Iphone </li>
                <li>Mac </li>
                <li>Apple Watch </li>
                <li>Tv </li>
                </div>
                </Col>
                </Row>
                </Container>
            </div>
      </div>
      </div>

  );
}


export default Home;