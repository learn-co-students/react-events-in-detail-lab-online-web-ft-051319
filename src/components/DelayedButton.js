// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {

// Create a button that, when clicked, will pass the click event to the onDelayedClick prop within a setTimeout(). The setTimeout() should be set to this.props.delay.
    onClick = event => {
        event.persist()
        setTimeout(() => {
            this.props.onDelayedClick(event) }, this.props.delay)
    }

    render() {
        return <button onClick={this.onClick}>Delayed</button>
    }

}
