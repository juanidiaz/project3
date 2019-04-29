import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect, Link } from 'react-router-dom';
import Background from "../components/Background";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import API from "../utils/API";

class UserHome extends Component {

  state = {
    users: [],
    authUser: []
  };

  componentDidMount() {
    this.getAuthUser();
  };

  getAuthUser = () => {
    // console.log(`@UserHome.js: loading users`);
    API.getUsers()
      .then(res => {
        this.setState({ users: res.data });
        const user = { ...this.state.users.find(user => user.uid === localStorage.getItem('uid')) }
        this.setState({ authUser: user });
        // console.log(`@UserHome.js: Authenticated user`);
        // console.log(user);
      })
      .catch(err => console.log(err));
  };

  render() {

    const { auth } = this.props;

    if (!auth.uid) { return <Redirect to='/signin' /> };

    // console.log(this.props)

    return (
      <div>
        <Background backgroundImage="https://llppetminding.com.au/wp-content/uploads/2012/10/malibuzeus-and-I-print-2.jpg">
        </Background>

        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-12">
              <h1>Welcome <strong>{this.state.authUser.firstName} {this.state.authUser.lastName}</strong> to our online booking site</h1>
              <small>UID: {localStorage.getItem('uid')}</small><br />
              <small>email: {this.state.authUser.email}</small><br />
              <small>phone: {this.state.authUser.phone}</small>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              {this.state.authUser.userType === 'user' ? (
                <div className="alert alert-warning" role="alert">
                  Our system indicates you are a <strong>client</strong>
                </div>
              ) : (
                  <div className="alert alert-danger" role="alert">
                    Our system indicates you are an <strong>administrator</strong>
                  </div>
                )}
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <p>
                As a pet owner, you do need to groom your pet on a regular schedule. </p>
              <p>
                Our academy-trained Pet Stylists have over 800 hours of hands-on grooming instruction that includes bathing, trimming & styling at least 200 dogs of all breeds & sizes plus annual safety certification.
                We offer complete bath, haircut & walk-in grooming services.
            </p>
              <p>We have flexible appointment times — our services are open 6 days a week.</p>
              <p>Book your pet's salon appointment today!
                <br></br>
                <br></br>
                <button className="btn-warning bookAppBtn">
                  <Link to="/booking">
                    click here to book an appointment
                  </Link>
                </button>
              </p>
            </Col>
          </Row>

        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps)
)(UserHome);