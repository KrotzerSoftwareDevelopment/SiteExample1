import React from 'react'
import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring'
import '../FilePages/Styles.css';
import {Link} from 'react-router-dom';
import {Card, Button, ListGroup, ListGroupItem} from 'react-bootstrap';
const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const projects = [

  {_id: 1, name: "1 page with anchor point sections and contact form", url: " ", price: "$500",category: "Static 1 page", time: "5 days (excludeding weekends"},
  {_id: 2, name: "3 page with gallery", url: " ", price: "$700", category: "Static 3 page",time: "5 days"},
  {_id: 3, name: "5 page with about, gallery contact, etc", url: " ", price: "$1,000", category: "Static 5 page", time: " "},
  {_id: 4, name: "Ecommerce MERN app, with payments, signin, order tracking, etc", url: " ", price: "$5,000",category: "Dynamic full stack web app", time: "3 weeks"},
  {_id: 5, name: "Web and Android App, etc", url: " ", price: " Starts at $5,000",category: "Dynamic full stack web app", time: "3 weeks"},
  {_id: 6, name: "Web, Apple & Android", url: " ", price: " Starts at $5,000",category: "Dynamic full stack web app", time: "3 weeks"}
]

const Cards = () => {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  return (
    <div>
    {projects.map(project =>
    <div className="Cards">
    <div className="cardStyles">
      <div className="IntroMirrored">
      <div>{project.category}</div>
</div>
      <Card className="Card">
  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
  <Card.Body>
    <Card.Title>{project.name}</Card.Title>
    <Card.Text className="CardText">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>{project.price}</ListGroupItem>
    <ListGroupItem>5 page site</ListGroupItem>
    <ListGroupItem>5 weeks</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link><Link> Live Code </Link></Card.Link>
    <Card.Link><Link> Source Code </Link></Card.Link>
  </Card.Body>
</Card>
      {/* <Card style={{ width: '18rem'  }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{project.name}</Card.Title>
    <Card.Text>
    
        Starting Price: {project.price}
     {project.Disc}
    </Card.Text>
   
    <br />
  </Card.Body>
<Card.Footer>
<Button variant="primary">View Live</Button><br />
<br />
    <Button variant="primary">View Code</Button>
</Card.Footer>
       


      </Card> */}

</div>
      </div>
    )}
    <br />
    </div>
  )
}
export default Cards;

// import { render } from 'react-dom'
// import React, { useState } from 'react'
// import { useSpring, animated as a } from 'react-spring'
// import '../FilePages/Styles.css'
// import {Row, Col } from 'react-bootstrap';

// // name: project name
// // price: starting price to create project
// // time: rough timeframe to complete project


// const Card = () => {
//   const [flipped, set] = useState(false)
//   const { transform, opacity } = useSpring({
//     opacity: flipped ? 1 : 0,
//     transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
//     config: { mass: 5, tension: 500, friction: 80 }
//   })
//   return (
// <div>
//   {projects.map(project => (
//     <Col>
//     <div className="projectCard">
// <div>
// <div  > X </div>

//       <a.div class="c back" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} >
//         <div onClick={() => set(state  => !state)}>
//         Side A text goes here
//       </div>
//       </a.div>
      
 
     
//        <a.div class="c front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}>


//       <div>
//       Side B text goes here.
//     <br />
//       <button> Source Code </button>   <button> Live View </button>
//     </div>
//     </a.div>
//     </div>
//     </div>
//     </Col>
//   )
//     )}
//     </div>

//   )
// }

// export default Card;





// import React from 'react'
// import ReactDOM from 'react-dom'
// import { useSpring, animated } from 'react-spring'
// import '../FilePages/Styles.css'

// const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
// const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

// const Card = () => {
//   const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
//   return (
//     <animated.div
//       class="card"
      
//       onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
//       onMouseLeave={() => set({ xys: [0, 0, 1] })}
//       style={{ transform: props.xys.interpolate(trans) }}
//     />
//   )
// }
// export default Card;