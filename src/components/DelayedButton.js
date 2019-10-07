// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {

clickHandler = (e) =>{
  //console.log(this.props.onDelayedClick(e))

  setTimeout(() => (this.props.onDelayedClick(e)), this.props.delay)
  e.persist()
}


render() {
  return (<div>
    <button onClick = {this.clickHandler} />
    </div>)

}





}
