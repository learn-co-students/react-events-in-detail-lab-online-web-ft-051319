import React from 'react';

export default class DelayedButton extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
      delayedClick: this.props.onDelayedClick,
      delay: this.props.delay
      }
    }
          
   
    handleClick = (event) => {
      event.persist()

      setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay);
    }
   
    render() {
      return (
        <button onClick={this.handleClick}>Click me!</button>
      );
    }
  }