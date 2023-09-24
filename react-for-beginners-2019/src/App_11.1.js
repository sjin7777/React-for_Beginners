import React from "react";

class App extends React.Component{
  state = {
    count: 0
  };

  // state를 직접 변경하면 안 됨
  add = () => {
    // 직접 변경 시: this.state.count++;
    // this.setState({count: this.state.count+1});
    this.setState(current => ({count: current.count+1}) );
    
  };
  minus = () => {
    // 직접 변경 시: this.state.count--;
    // this.setState({count: this.state.count-1});
    this.setState(current => ({count: current.count-1}) );
  };

  render() {
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}

export default App;
