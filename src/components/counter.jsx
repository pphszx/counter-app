import React, { Component } from "react";

class Counter extends Component {
  //   state = {
  //     // state仅在component内部可见
  //     value: this.props.counter.value, // props通过HTML属性传递，但无法修改，只能赋值给内部state然后修改state
  //     imageUrl: "https://picsum.photos/30"
  //   };

  //   handleIncrement = () => {
  //     this.setState({ value: this.state.value + 1 });
  //   };

  getBadgeClasses() {
    let classes = "badge m-2 badge-"; //bootstrap
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax call and get new data from the server
      console.log("Should fetch data");
    }
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  render() {
    console.log("Counter - Rendered");

    return (
      <div>
        {this.props.children}
        <img src={this.props.imageUrl} alt="" />
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
