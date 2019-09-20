// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component {
    constructor(props) {
        super(props)
    }

    handleClick = (e) => {
        let coords = [e.clientX, e.clientY];

        this.props.onReceiveCoordinates(coords);
    }

    render() {
        return(
            <button onClick={this.handleClick}></button>
        )
    }

}