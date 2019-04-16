import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signinUser } from './actions';

class App extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.signinUser('user_name', 'password');
  }

  render() {
    const { message } = this.props
    console.log('message: ', this.props);

    // this.props.dispatch(signinUser())
    // this.props.signinUser()

    return (
      <div className="App" >
        Hello world!<br />
        <p>{ message }</p>
        <button onClick={this.handleSubmit}>
          Activate Lasers
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { signinReducers } = state;
  return {
    message: signinReducers.message
  }
}

export default connect(mapStateToProps, { signinUser })(App);
