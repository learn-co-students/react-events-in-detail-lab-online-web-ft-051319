// Code DelayedButton Component Here
import React, {Component} from 'react';

export default class DelayedButton extends Component {

  handleClick=(e)=>{
    // window.setTimeout(this.props.onDelayedClick(e),this.props.delay)
    e.persist() //this is pooling
    const timer=setTimeout(()=>this.props.onDelayedClick(e),this.props.delay)
  }

  render(){
    return <button
    onClick={this.handleClick}
    // onClick={this.setTimeout(this.handleClick,this.props.delay)}
    >
    Delayed Button
    </button>
  }

}
