/**
 
React class-based components are a fundamental part of React, especially before the introduction of React Hooks in version 16.8. 
They provide a way to manage state and lifecycle methods, offering a structured approach to building complex UIs.
Here's a detailed explanation of React class-based components, their features, and usage.

### 1. Basics of Class-Based Components

A class-based component is a  class that extends `React.Component`. 
This class must implement a `render` method, which returns the JSX to be rendered.

*/

import React, { Component } from 'react';

class MyComponent extends Component {
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
      </div>
    );
  }
}

export default MyComponent;

/*
### 2. State Management

Class-based components can maintain their own internal state. The state is a plain  object that represents part of the component's UI.

#### Initializing State

You can initialize the state in the constructor:

*/


class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello, World!'
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

/*
#### Updating State

State updates are done using the `setState` method, which ensures the component re-renders with the updated state.

*/

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello, World!'
    };
  }

  changeMessage = () => {
    this.setState({ message: 'Hello, React!' });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.changeMessage}>Change Message</button>
      </div>
    );
  }
}

/*

### 3. Props

Props (short for properties) are read-only attributes that are passed to the component from its parent. They can be accessed via `this.props`.
*/


class MyComponent extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.greeting}</h1>
      </div>
    );
  }
}

// Usage
<MyComponent greeting="Hello, World!" />

/*

### 4. Lifecycle Methods

Class-based components come with several lifecycle methods that allow you to hook into different stages of the component's life.

#### Mounting

- `constructor()`: Called before the component is mounted. Used for initializing state and binding event handlers.
- `componentDidMount()`: Called immediately after the component is mounted. Ideal for making API calls or setting up subscriptions.

*/

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    // Simulating an API call
    setTimeout(() => {
      this.setState({ data: 'Some fetched data' });
    }, 1000);
  }

  render() {
    return (
      <div>
        {this.state.data ? this.state.data : 'Loading...'}
      </div>
    );
  }
}

/*
#### Updating

- `shouldComponentUpdate(nextProps, nextState)`: Determines whether the component should update based on changes in props or state.
- `componentDidUpdate(prevProps, prevState)`: Called after the component has updated. Useful for performing DOM operations or making network requests based on the update.

*/

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('Count has changed:', this.state.count);
    }
  }

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

/**
 * 
#### Unmounting

- `componentWillUnmount()`: Called just before the component is unmounted and destroyed. Clean up operations such as removing event listeners or canceling network requests should be done here.

*/

class MyComponent extends Component {
  componentWillUnmount() {
    console.log('Component is being unmounted');
    // Clean up code here
  }

  render() {
    return (
      <div>
        <p>This component will be unmounted soon.</p>
      </div>
    );
  }
}

/**
 
### 5. Event Handling

Event handlers in class-based components need to be explicitly bound to the component's instance. This is typically done in the constructor or using arrow functions.


*/
class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('Button clicked');
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}


// Or using arrow functions to avoid the need for explicit binding:


class MyComponent extends Component {
  handleClick = () => {
    console.log('Button clicked');
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

/*
### 6. Ref Handling

Refs provide a way to access the DOM nodes or React elements created in the `render` method. They are useful for managing focus, text selection, or integrating with third-party libraries.

*/

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    this.myRef.current.focus();
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.myRef} />
      </div>
    );
  }
}

/**
 * 
### 7. Default Props and PropTypes

Class-based components can define default props and prop types for type-checking and ensuring component robustness.
*/


import PropTypes from 'prop-types';

class MyComponent extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.greeting}</h1>
      </div>
    );
  }
}

MyComponent.defaultProps = {
  greeting: 'Hello, World!'
};

MyComponent.propTypes = {
  greeting: PropTypes.string
};

/*
### Summary

React class-based components provide a comprehensive way to build and manage stateful components with lifecycle methods and state management. 
While functional components with hooks are now more commonly used due to their simplicity and power, class-based components are still relevant and essential for understanding the evolution and inner workings of React.
*/