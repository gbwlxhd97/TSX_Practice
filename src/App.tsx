import React, { Component } from 'react';
import Number from "./Number";
type IState = {
  counter : number;
}
//  interface IState {
//    counter: number;
//  }
class App extends Component<{},IState> { //인터페이스든 타입 엘리어스든 둘다 가능함.
  state = {
    counter: 0
  };
  render() {
    const {counter} = this.state;
    return (
      <div>
        <Number count= {counter}/> <button onClick={this.add}>Add</button>
      </div>
    )
  }
add = () => {
  this.setState(prev => {
    return {
      counter : prev.counter +1
    }
  })
}
}

export default App;
