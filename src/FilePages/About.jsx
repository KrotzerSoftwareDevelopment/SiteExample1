import React from 'react';
import Card from '../FilePages/Card';
import {Row, Col, Container} from 'react-bootstrap';
import PortPic from '../Assets/PortfolioPic.png';
import Modal from 'react-modal';
const About = () => {
  return (
    <div className="PageContainer">
    <div className="Page">     
    <h1> About </h1>
    <div className="Intro">
      <Modal />
    </div>
    <div id="PageContent">
      {/* <div id="NaviBar">
    <div id="Title"> Pricing Examples - More Examples are being uploaded </div>
    <div className="PageBodyAbout">
   <Card />
    </div>
    </div> */}
    <div id="PageContent">

      <div id="Title"> About Me </div>
    <Row>
        <Col>
        <img className="Portpic" src={"https://github.com/KrotzerSoftwareDevelopment/KSD/blob/master/src/Assets/PortfolioPic.png?raw=true"} />
        </Col>
        <Col className="aboutText">
        My Myers Briggs personality test indicates I am an INTJ-A, The Architect. 
        Besides being a motivated self-starter that enjoys all things tech. 
    I work well with others, quick to learn new things, multitasker, reliable and most of all I am great at solving problems. 
    Let me help you solve your tech related problems today.
    </Col>
    </Row>
    </div>
    </div>
    </div>
    </div>
  );
}

export default About;