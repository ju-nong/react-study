import React, { Component } from "react";

class Counter extends Component {
    state = {
        counter: 0,
    };

    handlePlus = () => {
        this.setState({
            counter: this.state.counter + 1,
        });
    };

    handleMinus = () => {
        this.setState({
            counter: this.state.counter - 1,
        });
    };

    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handlePlus}>+1</button>
                <button onClick={this.handleMinus}>-1</button>
            </div>
        );
    }
}

export { Counter };

// import React, { useState } from "react";

// export function Counter() {
//     const [number, setNumber] = useState(0);

//     function onIncrease() {
//         setNumber((prev) => prev + 1);
//     }

//     function onDecrease() {
//         setNumber((prev) => prev - 1);
//     }

//     return (
//         <div>
//             <h1>{number}</h1>
//             <button onClick={onIncrease}>+1</button>
//             <button onClick={onDecrease}>-1</button>
//         </div>
//     );
// }
