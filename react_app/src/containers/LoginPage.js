import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import { login } from '../actions'
import LoginForm from '../components/LoginForm'

class LoginPage extends React.Component {
  constructor(props) {
    super(props)
    // console.log(props)
  }

  render() {
    return (
      <div style={{paddingTop: '44px'}}>
        <LoginForm onSignIn={this.props.onSignIn} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    authed: state.login
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSignIn: () => dispatch(login())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage)

