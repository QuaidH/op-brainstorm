import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import posed, { PoseGroup } from 'react-pose';
import axios from 'axios';
import imgArray from './images/imgArray';
import Group from "./images/Group.png";
import Modal from 'react-modal';
import './styles.css';

const Box = posed.div({
  before: {
    opacity: 0,
    y: -25
  },
  // enter: {
  //   opacity: 1,
  //   y: 0

  // },
  // exit: {
  //   opacity: 0,
  //   y: 25
  // },
  initial: {
    scale: 1.2,
  },
  hover: {
    scale: 1.2,
    boxShadow: "0px 0px 0px rgba(0,0,0,0.2)"
  }
});

const API_PATH = 'http://http://localhost:3000/?firstname=&lastname=&email='

class Modals extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      isOpen: false,
      fname: '',
      lname: '',
      email: '',
      mailSent: false,
      error: null
    }
  }
  componentDidMount() {
    setTimeout(this.handleModal, 5000)
  }

  // handleModalOpen = e => {
  //   this.setState({ isOpen: true })
  // }
 

  handleFormSubmit = e => {
    e.preventDefault();
    axios({
      method: 'post',
      url: '{API_PATH}',
      headers: { 'content-type': 'application/json' },
      data: this.state
    })
    .then(result => {
      this.setState({
        mailSent: result.data.sent
      })
    })
    .catch(error => this.setState({ error: error.message}));
    window.addEventListener("Test", this.Test, false);
    console.log(this.state);
    this.setState({ isOpen: false })
  }

  onMouseEnter = () => {
    this.setState({
      hover: true
    });
  };

  onMouseLeave = () => {
    this.setState({
      hover: false
    });
  };

  render() {
    return (
      <div>
            <div id="wrapperHeader">
             <div id="header">
              <img src={Group} align="750px" width="750px" height="flex" alt="logo"/>
              </div>
            </div>
          <div id="ButtonSign">
        <button id="SignUp" onClick={() => this.setState({isOpen: true})}>Signup</button>
        </div>
        <Modal
          isOpen={this.state.isOpen}
          style={Modal}
          contentLabel="Signup Sheet"
          >

            <h2 ref={subtitle => this.subtitle = subtitle}>Keep Up Sign Up</h2>
      <div>
        <form >
            <label>First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Put your first name here pls"
            value={this.state.fname}
            onChange={e => this.setState({ fname: e.target.value })}/>
          <label>Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Now your last name pls"
            value={this.state.lname}
            onChange={e => this.setState({ lname: e.target.value })}/>


          <label>Email</label>
          <input type="email" id="email" name="email" placeholder="Your email"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}/>

          <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit" />
          <div>
            {this.state.mailSent &&
              <div>We will be in contact with funky news soon.</div>
              }
          </div>
        </form >
      </div>

          </Modal>
            <div>
              <h1 className="UpcomingEvents" align="center">
                Coming Soon
              </h1>
            </div>

        <PoseGroup animateOnEnter={true} preEnterPose="before">
          {imgArray.map(i => (
            <Box
              key={i}
              className="box"
              onMouseEnter={this.onMouseEnter}
              onMouseLeave={this.onMouseLeave}
              pose={this.state.hover ? "hover" : "initial"}
            >
              <img src={i} alt="group"/>
            </Box>
          ))}
        </PoseGroup>
      </div>
    );
  };
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Modals />, rootElement);

export default Box
