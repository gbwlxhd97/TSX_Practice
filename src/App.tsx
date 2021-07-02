import React, { Component } from 'react';
import { Form,Input} from './input';
import Number from "./Number";
type IState = {
  counter : number;
  name: string;
}
//  interface IState {
//    counter: number;
//  }
class App extends Component<{},IState> { //인터페이스든 타입 엘리어스든 둘다 가능함. 첫인자는 Props임 두번째 State
  state = {
    counter: 0,
    name: "",

  };
  render() {
    const {counter,name} = this.state;
    return (
      <div>
        <Form onFormSubmit = {this.onFormSubmit}>
          <Input value={name}onChange={this.onChange} />
        </Form>
        <Number count= {counter}/> <button onClick={this.add}>Add</button>
      </div>
    )
  }

  onChange = (event:React.SyntheticEvent<HTMLInputElement>) => {
    console.log(event.target)
  }

  onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
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
