import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
    
    handleClick = (event) => {
        let coordinatesArr = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(coordinatesArr)
    }
    
    render() {
        return (
            <button onClick={this.handleClick} ></button>
        )
    }
}