// your Bomb code here!
import React from 'react';

export default class Bomb extends React.Component {
    constructor(props){
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    timer = () => {
        let newTime = this.state.secondsLeft - 1
        this.setState({
            secondsLeft: newTime
        })
    }
    
    render(){
        if (this.state.secondsLeft > 0){
            setTimeout(this.timer, 1000)
        }
        return (
            <div>{this.state.secondsLeft === 0 ? "Boom!" : `${this.state.secondsLeft} seconds left before I go boom!`}</div>
        )
    }
}


