import React from 'react';

export default class CoordinatesButton extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    coordinates: this.props.onReceiveCoordinates
    }
  }
        
 
  handleClick = (event) => {
    let x = event.clientX
    let y = event.clientY
    let array = [x, y]
    this.props.onReceiveCoordinates(array)
  }
 
  render() {
    return (
      <button onClick={this.handleClick}>Click me!</button>
    );
  }
}