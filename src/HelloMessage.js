import React from 'react'

class HelloMessage extends React.Component {
  constructor (props) {
    super(props)
    console.log(props)
  }
  render() {
    return <div>Hello {this.props.ferstname} {this.props.lastname} !</div>;
  }
}

HelloMessage.propTypes = {
  name : React.PropTypes.string,
}

HelloMessage.defaultProps = {
  name: 'Jane',
}

export default HelloMessage
