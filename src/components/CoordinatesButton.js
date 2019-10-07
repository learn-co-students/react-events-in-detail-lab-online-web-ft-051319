// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
  constructor() {
    super()


  }

clickHandler = (e) =>{
  var coords = []
  coords[0] = e.clientX
  coords[1] = e.clientY
  this.props.onReceiveCoordinates(coords)
}


render() {
  return (<div>
    <button onClick={this.clickHandler} />
  </div>)
}





}
