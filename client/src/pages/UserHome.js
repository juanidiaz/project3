import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect, Link } from 'react-router-dom';
import Background from "../components/Background";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

class UserHome extends Component {
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div>
        <Background backgroundImage="http://amazingpetgrooming.ca/wp-content/uploads/2016/11/perro-secandose.jpg">
          <img src="/images/logo_300.png" style={{ width: "200px" }} alt="main logo" />
        </Background>

        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-10">
              <h1>User profile</h1>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <p>
                Phasellus at rutrum nisl. Praesent sed massa ut ipsum bibendum porttitor. Sed
                malesuada molestie velit ac viverra. Quisque a ullamcorper purus. Curabitur luctus mi
                ac mi hendrerit semper. Nulla tincidunt accumsan lobortis. Mauris convallis sapien non
                nibh porta accumsan. Nunc volutpat tempus porttitor. Nunc congue dictum egestas.
                Aliquam blandit mi eu urna scelerisque, vitae volutpat ligula ultricies. Maecenas vel
                porta augue. Fusce mauris ex, dignissim et lacinia ut, tempus eget nibh.
            </p>
              <p>
                Phasellus at rutrum nisl. Praesent sed massa ut ipsum bibendum porttitor. Sed
                malesuada molestie velit ac viverra. Quisque a ullamcorper purus. Curabitur luctus mi
                ac mi hendrerit semper. Nulla tincidunt accumsan lobortis. Mauris convallis sapien non
                nibh porta accumsan. Nunc volutpat tempus porttitor. Nunc congue dictum egestas.
                Aliquam blandit mi eu urna scelerisque, vitae volutpat ligula ultricies. Maecenas vel
                porta augue. Fusce mauris ex, dignissim et lacinia ut, tempus eget nibh.
                <br></br>
                <br></br>
            <button className="btn-warning bookAppBtn">
            <Link to="/booking">click here 
            to book an appointment {' '}</Link>
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