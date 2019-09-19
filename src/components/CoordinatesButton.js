// Code CoordinatesButton Component Here
import React, {Component} from 'react';

export default class CoordinatesButton extends Component {

  constructor(props){
    super(props)
  }

  render() {
    return <button
    onClick={this.handleClick}
    >
    Button
    </button>
  }

  handleClick = (e) => {
    const arr=[e.clientX,e.clientY]
    this.props.onReceiveCoordinates(arr)
  }

}
