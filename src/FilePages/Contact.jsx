import React from 'react';
import emailjs from 'emailjs-com';
import {Row, Col} from 'react-bootstrap';


export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_jn189xs', 'template_6acqdxi', e.target, 'user_NHnlHshvO8svIFZdDA6o8')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
    <div className="PageContainer">
    <div className="Page">
      <h1> Contact </h1>
      <div className="Intro">
     Email: <a href="mailto:krotzersoftware@gmail.com"> krotzersoftware@gmail.com </a>
   <br />
     Phone:  <a href="tel:5418199410"> (541) 819 9410 </a>
 <br />
     </div>

    <div className="form-group">
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <br />
      <Row>
                <Col>
   
      <input type="text" className="form-control" placeholder="First Name" name="firstname" />
      </Col>
      <br />
      <Col>
      <input type="text" className="form-control" placeholder="Last Name" name="lastname" />
      </Col>
      </Row>
      <br />
      <input type="text" className="form-control" placeholder="Phone Number" name="phone" />
<br />
      <input type="email" className="form-control" id="email" placeholder="Email" name="email" />
      <br />
      <div className="form-group">

      <label>Message</label>
      <textarea className="form-control" rows="10" id="message" name="message" />
      </div>
      <input type="submit" id="sendBtn" value="Send" />
    </form>
    {/* <div className="Mobile">
          <div class="g-recaptcha" data-sitekey="6LddIOEZAAAAANyRLXS-CEU7ohRMY0AxbrQzfU3G"></div>
          </div> */}
          </div>
    </div>
    </div>
  );
}

// import React from 'react';
// import axios from 'axios';
// import '../index.css';
// import {Row, Col, Container} from 'react-bootstrap';
// import {Form, FormGroup, Input, Label, Button } from 'reactstrap';
// class Contact extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       firstName: '',
//       lastName: '',
//       phone: '',
//       email: '',
//       message: ''
//     }
//   }

//   handleSubmit(e){
//     e.preventDefault();
//     axios({
//       method: "POST", 
//       url:"http://localhost:3002/send", 
//       data:  this.state
//     }).then((response)=>{
//       if (response.data.status === 'success') {
//         alert("Thank You for your time and interest! \n Krotzer Software Developmnet sent your message successfully."); 
//         this.resetForm()
//       } else if (response.data.status === 'fail') {
//         alert("Message failed to send.")
//       }
//     })
//   }

//   resetForm(){
//     this.setState({firstName: "", lastName: "", phone: "", email: "", message: ""})
//   }

// render(){
//   return (
//     <div className="PageContainer">
//     <div className="Page" >
//     <h1> Contact </h1>

   
   
  
//   <div className="PageBody">
//         <div id="NaviFont">
//   <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
//           <div className="form-group">
//               <label htmlFor="name">Contact KSD today!</label>
//               <Row>
//                 <Col>
//               <input type="text" className="form-control" placeholder="First Name" id="firstName" value={this.state.firstName} onChange={this.onFirstNameChange.bind(this)} />
//               </Col>
//               <br />
//               <Col>
//               <input type="text" className="form-control" placeholder="Last Name" id="lastName" value={this.state.lastName} onChange={this.onLastNameChange.bind(this)} />
//               </Col>
//               </Row>
//               <br />
              
              
//               <input type="text" className="form-control" placeholder="Phone Number" id="phone" value={this.state.phone} onChange={this.onPhoneChange.bind(this)} />
          
//               <br />
              
//               <div className="email">
//               <input type="email" className="form-control" id="email" placeholder="Email"  aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
//               </div>
              
//           </div>
         
//           <div className="form-group">
//               <label htmlFor="message">Message:</label>
//               <textarea className="form-control" rows="10" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
//           </div>
//         {/* <div className="Mobile">
//           <div class="g-recaptcha" data-sitekey="6LddIOEZAAAAANyRLXS-CEU7ohRMY0AxbrQzfU3G"></div>
//           </div> */}
//           <br />
//       <button type="submit" className="btn btn-primary" value="Submit"> Submit </button>
     
//         </form>
//         </div>
//         </div>
//         </div>
//         </div>
        
//       );
//   }
//   onFirstNameChange(event) {
//     this.setState({firstName: event.target.value})
//   }
//   onLastNameChange(event) {
//     this.setState({lastName: event.target.value})
//   }
//   onPhoneChange(event) {
//     this.setState({phone: event.target.value})
//   }

//   onEmailChange(event) {
//     this.setState({email: event.target.value})
//   }

//   onMessageChange(event) {
//     this.setState({message: event.target.value})
//   }
// }

// export default Contact;