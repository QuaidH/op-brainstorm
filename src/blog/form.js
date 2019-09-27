// import React, { Component } from 'react';
// import './App.css'


// class form extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       fname: '',
//       lname: '',
//       email: '',
//       showmodal: false,
//       ModelIsOpen: false,
//     }
//   }
//   handleFormSubmit( event ) {
//     event.preventDefault();
//     window.addEventListener("Test", this.Test, false);
//     this.handleNewBlogClick = this.handleFormSubmit.bind(this);
//     console.log(this.state);
//   }

//   handleNewBlogClick() {
//     this.setState({
//       ModalIsOpen: true
//     });
//   }
// render() {
//   return (
//     <div className="form">
//     <p>The Loop Email Form</p>

//     <div className="new-link">
//       {/* <a onClick={this.handleFormSubmit}> */}
//         {/* Pop up
//       </a> */}
//     </div>


//     <div>
//     <form >
//     <label>First Name</label>
//   <input type="text" id="fname" name="firstname" placeholder="Put your first name here pls"
//     value={this.state.fname}
//     onChange={e => this.setState({ fname: e.target.value })}/>
//   <label>Last Name</label>
//   <input type="text" id="lname" name="lastname" placeholder="Now your last name pls"
//     value={this.state.lname}
//     onChange={e => this.setState({ lname: e.target.value })}/>


//   <label>Email</label>
//   <input type="email" id="email" name="email" placeholder="Your email"
//     value={this.state.email}
//     onChange={e => this.setState({ email: e.target.value })}/>

//   <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit" />
// </form >

//     </div>
//     </div>
//   );
// }}


// export default form;
