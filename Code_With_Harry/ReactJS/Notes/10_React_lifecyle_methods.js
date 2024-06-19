
/*
React Component Lifecycle -
It is the series of events that happens from the mounting of a React Component to it's Unmounting

-Mounting - Birth of Your component 
-Update - Growth of your component 
-Unmount - Death of your component

Methods In React Component Cycle
- The render() method is used to render HTML of component in react.This method is required for a class based component 
to render the DOM.It runs during the mounting and updating of your component.
render() method should be pure i.e you can not modfify state inside it.

-The componentDidMount() method runs after the component output has been render to the DOM

-The componentDidUpdate() method is invoked as soon as the updating happens.The most common use case for the componentDidUpdate() method is upadting the DOM in response to prop/state changes.

-The componentWillUmount() lifecycle method is called just before the component is unmounted and destroyed. Usually used to perform cleanups.

https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/


*/


/*
React lifecycle methods are special methods in a React component that get called at different stages of the component's life. 
These methods can be categorized into three main phases: mounting, updating, and unmounting.
Here, we'll explore the lifecycle methods for both class-based components and functional components with hooks.

### Class-Based Components

#### Mounting Phase
1. **`constructor()`**:
   - Called when the component is initialized.
   - Good for setting initial state and binding event handlers.

2. **`static getDerivedStateFromProps(props, state)`**:
   - Called before rendering when new props or state are received.
   - Returns an object to update the state, or `null` to update nothing.

3. **`render()`**:
   - Required method.
   - Describes what the UI should look like based on the component's current state and props.

4. **`componentDidMount()`**:
   - Called after the component is inserted into the DOM.
   - Good for side effects such as data fetching, subscriptions, etc.

#### Updating Phase
1. **`static getDerivedStateFromProps(props, state)`**:
   - Called when the component is re-rendered due to changes in props or state.
   - Same as in the mounting phase.

2. **`shouldComponentUpdate(nextProps, nextState)`**:
   - Called before rendering when new props or state are received.
   - Returns `true` or `false` to determine whether the component should re-render.

3. **`render()`**:
   - Same as in the mounting phase.

4. **`getSnapshotBeforeUpdate(prevProps, prevState)`**:
   - Called right before the changes from the virtual DOM are to be reflected in the DOM.
   - Allows capturing some information from the DOM (e.g., scroll position) before it's potentially changed.

5. **`componentDidUpdate(prevProps, prevState, snapshot)`**:
   - Called after the component's updates are flushed to the DOM.
   - Good for performing side effects based on the updates.

#### Unmounting Phase
1. **`componentWillUnmount()`**:
   - Called right before the component is removed from the DOM.
   - Good for cleanup tasks such as invalidating timers, canceling network requests, or cleaning up subscriptions.

### Functional Components with Hooks

In functional components, lifecycle methods are replaced with hooks such as `useEffect`, `useLayoutEffect`, `useState`, etc.

#### `useEffect`
- Combines the functionality of `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.
- Can be used to perform side effects in functional components.

```javascript
*/
import React, { useState, useEffect } from 'react';

function MyComponent(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Runs on mount and update
    console.log('Component mounted or updated');

    return () => {
      // Runs on unmount
      console.log('Component unmounted');
    };
  }, [count]); // Only re-run the effect if count changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
// ```



/*
#### `useLayoutEffect`
- Similar to `useEffect`, but it fires synchronously after all DOM mutations.
- Useful for reading layout from the DOM and synchronously re-rendering.

```javascript
*/
import React, { useLayoutEffect, useRef } from 'react';

function MyComponent() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    // Runs after the DOM has been updated
    console.log('Layout effect:', ref.current.offsetHeight);
  });

  return <div ref={ref}>Hello World</div>;
}
// ```
/*
### Summary

#### Class-Based Lifecycle Methods:
- **Mounting**: `constructor()`, `getDerivedStateFromProps()`, `render()`, `componentDidMount()`
- **Updating**: `getDerivedStateFromProps()`, `shouldComponentUpdate()`, `render()`, `getSnapshotBeforeUpdate()`, `componentDidUpdate()`
- **Unmounting**: `componentWillUnmount()`

#### Functional Components with Hooks:
- **useEffect**: Combines `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`
- **useLayoutEffect**: For DOM reads after mutations

Understanding these lifecycle methods and hooks allows you to manage side effects, optimize performance, and handle component state changes effectively in React applications.
*/