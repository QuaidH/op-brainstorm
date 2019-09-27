import React, { Component } from 'react';
import posed, { PoseGroup } from 'react-pose';
import axios from 'axios';
import imgArray from './images/imgArray';
import Group from "./images/Group.png";
import Modal from 'react-modal';
import './styles.css';

const Box1 = posed.div({
  before: {
    opacity: 0,
    y: -25
  },
  initial: {
    scale: 1.1,
  },
  hover: {
    scale: 1.1,
    boxShadow: "0px 0px 0px rgba(0,0,0,0.2)"
  }
});

// const API_PATH = 'http://http://localhost:3000/index.php'

class Box extends Component {

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
            <div className="wrapperHeader">
             <div className="header">
              <img src={Group} alt="img1"/>
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
            <div id="Soon">
              <p1 id="comingSoon">
                Coming Soon
              </p1>
            </div>

        <PoseGroup animateOnEnter={true} preEnterPose="before">

          {imgArray.map(i => (
            <Box1
              key={i}
              className="box"
              align-items="center"
              onMouseEnter={this.onMouseEnter}
              onMouseLeave={this.onMouseLeave}
              pose={this.state.hover ? "hover" : "initial"}
            >
              <img src={i} alt="group"/>
            </Box1>
          ))}
        </PoseGroup>
      </div>
    );
  };
};

export default Box
