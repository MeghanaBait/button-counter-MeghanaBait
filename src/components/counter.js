import { Component } from "react";

class Counter extends Component{
    constructor(props) {
        super(props);
        this.state = {count:0};
    }

    incrementCount = () =>{
        const curr = this.state.Count;
        this.setState({count : 1 + curr})
    }

    render() {

        return(
            <>
            <p>Button clicked {this.state.count}</p>
            <button onClick={this.incrementCount}>Click me</button>
            </>
        )
    }
}

export default Counter;