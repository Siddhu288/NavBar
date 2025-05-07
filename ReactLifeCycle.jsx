import React from "react";

class ReactLifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    console.log("Constructor: Component is initialized");
  }

  componentDidMount() {
    console.log("Mount: Component is mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log(`Update: Count is updated to ${this.state.count}`);
    }
  }

  componentWillUnmount() {
    console.log("Unmount: Component is unmounted");
  }

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <>
        <h1>ReactLifeCycle Example</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </>
    );
  }
}

export default ReactLifeCycle;
