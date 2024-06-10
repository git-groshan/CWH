/*
Hooks are a feature introduced in React 16.8 that allow you to use state and other React features in functional components, which were previously available only in class components. Hooks provide a more elegant and functional approach to managing state, side effects, context, and other aspects of React component behavior.

### Key Hooks in React

1. **useState**
   - Allows you to add state to functional components.
   - Returns an array with the current state value and a function to update it.

*/

   import React, { useState } from 'react';

   function Counter() {
     const [count, setCount] = useState(0);

     return (
       <div>
         <p>You clicked {count} times</p>
         <button onClick={() => setCount(count + 1)}>
           Click me
         </button>
       </div>
     );
   }
   
/*
2. **useEffect**
   - Allows you to perform side effects in functional components, such as fetching data, directly manipulating the DOM, setting up subscriptions, and cleaning up after components.
   - By default, `useEffect` runs after every render. You can control when it runs by passing a dependency array as the second argument.
*/
 
   import React, { useState, useEffect } from 'react';

   function Example() {
     const [count, setCount] = useState(0);

     useEffect(() => {
       document.title = `You clicked ${count} times`;
     }, [count]); // Only re-run the effect if count changes

     return (
       <div>
         <p>You clicked {count} times</p>
         <button onClick={() => setCount(count + 1)}>
           Click me
         </button>
       </div>
     );
   }
   
/*
3. **useContext**
   - Allows you to use the React Context API in functional components, making it easy to share values like themes or authenticated users without passing props down manually at every level.

*/

   import React, { useContext } from 'react';

   const ThemeContext = React.createContext('light');

   function ThemedButton() {
     const theme = useContext(ThemeContext);
     return <button style={{ background: theme === 'dark' ? '#333' : '#FFF' }}>I am styled by theme context!</button>;
   }
  
/*
4. **useReducer**
   - An alternative to `useState` for managing more complex state logic. It is particularly useful for managing state with multiple sub-values or when the next state depends on the previous one.

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
   
/*
5. **useRef**
   - Allows you to persist values across renders without causing a re-render when updated. Often used to access a DOM element directly.
*/

   import React, { useRef } from 'react';

   function TextInputWithFocusButton() {
     const inputEl = useRef(null);
     const onButtonClick = () => {
       // `current` points to the mounted text input element
       inputEl.current.focus();
     };

     return (
       <div>
         <input ref={inputEl} type="text" />
         <button onClick={onButtonClick}>Focus the input</button>
       </div>
     );
   }

/*
6. **useMemo**
   - Memoizes a computed value, recomputing it only when its dependencies change. Useful for optimizing performance by avoiding expensive calculations on every render.
*/

   import React, { useState, useMemo } from 'react';

   function ExpensiveComponent({ num }) {
     const [count, setCount] = useState(0);

     const expensiveCalculation = (num) => {
       console.log("Calculating...");
       return num * 2;
     };

     const result = useMemo(() => expensiveCalculation(num), [num]);

     return (
       <div>
         <p>Count: {count}</p>
         <p>Expensive Calculation Result: {result}</p>
         <button onClick={() => setCount(count + 1)}>Increment</button>
       </div>
     );
   }

/*
7. **useCallback**
   - Returns a memoized callback function. It is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.
*/

 
   import React, { useState, useCallback } from 'react';

   function Parent() {
     const [count, setCount] = useState(0);
     const handleClick = useCallback(() => {
       console.log('Button clicked');
     }, []); // empty array means it does not depend on any state or props

     return (
       <div>
         <p>Count: {count}</p>
         <button onClick={() => setCount(count + 1)}>Increment</button>
         <Child onClick={handleClick} />
       </div>
     );
   }

   function Child({ onClick }) {
     console.log('Child rendered');
     return <button onClick={onClick}>Click me</button>;
   }
   
/*
### Conclusion

Hooks provide a powerful way to use state, lifecycle methods, and other features in functional components, which were traditionally only possible in class components. They promote a cleaner, more functional approach to React development and help avoid some of the pitfalls associated with class components, such as complex lifecycle methods and `this` binding issues. With Hooks, you can build more reusable, composable, and maintainable React components.
*/
