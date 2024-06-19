/**
 WHAT ARE REACT HOOKS ?
 -Features of class based component in function based component
 -It allows you to use state and other React features without writing a class
 - Hooks are the functions which "hook into" React state and lifecycle feature from function components

 COMMONLY USED REACT HOOKS
 -useState
 -useEffect
 -useContext
 -useRef
 */


/*
React Hooks are functions that let you use state and other React features without writing a class. 
They were introduced in React 16.8 and provide a more direct API to the React concepts you already know. 
Here’s a detailed look at the most commonly used hooks and how they work.

### 1. `useState`
The `useState` hook lets you add state to functional components.

#### Syntax
```javascript
const [state, setState] = useState(initialState);
```

#### Example
```javascript
*/
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
// ```
/*
### 2. `useEffect`
The `useEffect` hook lets you perform side effects in functional components. It combines `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` from class components.

#### Syntax
```javascript
*/
useEffect(() => {
  // Your effect code here

  return () => {
    // Cleanup code here (optional)
  };
}, [dependencies]);
// ```
/*
#### Example
```javascript
*/

import React, { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(timer); // Cleanup
  }, []); // Empty array means this effect runs only on mount and unmount

  return <div>Count: {count}</div>;
}
// ```

/*
### 3. `useContext`
The `useContext` hook lets you subscribe to React context without introducing nesting.

#### Syntax
```javascript
*/
const value = useContext(MyContext);
// ```

/*
#### Example
```javascript
*/
import React, { useContext } from 'react';

const MyContext = React.createContext('defaultValue');

function Display() {
  const value = useContext(MyContext);
  return <div>{value}</div>;
}

function App() {
  return (
    <MyContext.Provider value="Hello World">
      <Display />
    </MyContext.Provider>
  );
}
// ```
/*
### 4. `useReducer`
The `useReducer` hook is usually preferable to `useState` when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.

#### Syntax
```javascript
*/
const [state, dispatch] = useReducer(reducer, initialState);
// ```
/*
#### Example
```javascript
*/
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}
// ```

/*
### 5. `useCallback`
The `useCallback` hook returns a memoized callback. It is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.

#### Syntax
```javascript
*/
const memoizedCallback = useCallback(() => {
  // Your callback code here
}, [dependencies]);
// ```
/*
#### Example
```javascript
*/
import React, { useState, useCallback } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
// ```
/*
### 6. `useMemo`
The `useMemo` hook returns a memoized value. It recomputes the memoized value only when one of the dependencies has changed.

#### Syntax
```javascript
*/
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
// ```
/*
#### Example
```javascript
*/
import React, { useState, useMemo } from 'react';

function ExpensiveComponent({ count }) {
  const computeExpensiveValue = (count) => {
    // some expensive calculation
    return count * 2;
  };

  const memoizedValue = useMemo(() => computeExpensiveValue(count), [count]);

  return <div>Expensive value: {memoizedValue}</div>;
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ExpensiveComponent count={count} />
    </div>
  );
}
// ```

/*
### 7. `useRef`
The `useRef` hook returns a mutable ref object whose `.current` property is initialized to the passed argument. It can hold a mutable value and does not cause a re-render when updated.

#### Syntax
```javascript
*/
const refContainer = useRef(initialValue);
// ```

/*
#### Example
```javascript
*/
import React, { useRef } from 'react';

function FocusInput() {
  const inputEl = useRef(null);

  const onButtonClick = () => {
    inputEl.current.focus();
  };

  return (
    <div>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </div>
  );
}
// ```

/*
### 8. `useImperativeHandle`
The `useImperativeHandle` hook customizes the instance value that is exposed when using `ref` in parent components. It is rarely used and usually considered an escape hatch.

#### Syntax
```javascript
*/
useImperativeHandle(ref, () => ({
  // Custom values or methods to expose
}));
// ```
/*
#### Example
```javascript
*/
import React, { useImperativeHandle, useRef, forwardRef } from 'react';

const FancyInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));

  return <input ref={inputRef} />;
});

function App() {
  const fancyInputRef = useRef();

  return (
    <div>
      <FancyInput ref={fancyInputRef} />
      <button onClick={() => fancyInputRef.current.focus()}>Focus</button>
    </div>
  );
}
// ```

/*
### 9. `useLayoutEffect`
The `useLayoutEffect` hook is similar to `useEffect`, but it fires synchronously after all DOM mutations. Use this to read layout from the DOM and synchronously re-render.

#### Syntax
```javascript
*/
useLayoutEffect(() => {
  // Your effect code here
}, [dependencies]);
// ```
/*
#### Example
```javascript
*/
import React, { useLayoutEffect, useRef } from 'react';

function LayoutEffectComponent() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    console.log('useLayoutEffect', ref.current.offsetHeight);
  });

  return <div ref={ref}>Hello World</div>;
}
//```
/*
### 10. `useDebugValue`
The `useDebugValue` hook is used to display a label for custom hooks in React DevTools.

#### Syntax
```javascript
*/
useDebugValue(value);
// ```
/*
#### Example
```javascript
*/
import React, { useState, useDebugValue } from 'react';

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  // Show a label in React DevTools
  useDebugValue(isOnline ? 'Online' : 'Offline');

  // ...other logic

  return isOnline;
}
// ```
/*
### Summary

React hooks provide a powerful and flexible way to manage state and side effects in functional components. 
They enable developers to write cleaner, more reusable code without the need for class components. 
The primary hooks include `useState`, `useEffect`, `useContext`, `useReducer`, `useCallback`, `useMemo`, `useRef`, `useImperativeHandle`, `useLayoutEffect`, and `useDebugValue`, each serving different purposes in a React application. 
Understanding and effectively using these hooks can greatly improve your ability to build robust and efficient React applications.
*/