import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import { setRoot } from '../actions'
import { Redirect, withRouter } from 'react-router-dom'
import path from 'path'

class Home extends React.Component {
  constructor(props) {
    super(props)
    // console.log(props)
  }

  componentDidMount() {
    const root = path.dirname(this.props.location.pathname)
    this.props.setRootPath(root)
  }

  render() {
    return (
      <Redirect to="/login" />
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setRootPath: (path) => dispatch(setRoot(path))
  }
}
export default connect(null, mapDispatchToProps)(Home)
