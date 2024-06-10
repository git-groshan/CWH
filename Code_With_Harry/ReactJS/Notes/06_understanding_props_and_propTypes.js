
// Props are the params/properties which are passed in the component
// props me kuch bhi bhej skte h 
// props are read only inside the function component 
/*
In React, props (short for "properties") and PropTypes are essential concepts for passing and validating data between components. Here's an overview of each:

### Props

**Props** are used to pass data from a parent component to a child component. They are read-only and cannot be modified by the child component. Props allow components to be reusable by allowing them to accept inputs and behave differently based on those inputs.

**Example:**

1. **Parent Component:**
   ```jsx
   import React from 'react';
   import ChildComponent from './ChildComponent';

   function ParentComponent() {
     return (
       <div>
         <ChildComponent message="Hello, World!" />
       </div>
     );
   }

   export default ParentComponent;
   ```

2. **Child Component:**
   ```jsx
   import React from 'react';

   function ChildComponent(props) {
     return <h1>{props.message}</h1>;
   }

   export default ChildComponent;
   ```

In this example, the `ParentComponent` passes a prop named `message` to the `ChildComponent`, which then renders it inside an `<h1>` tag.

### PropTypes

**PropTypes** is a type-checking feature provided by the `prop-types` library in React. It allows you to specify the types and requirements of the props that your components should receive. This helps catch bugs and ensure that components are used correctly.

**Installing PropTypes:**

You need to install the `prop-types` library if it's not already installed:

```sh
npm install prop-types
```

**Using PropTypes:**

1. **Defining PropTypes:**
   ```jsx
   import React from 'react';
   import PropTypes from 'prop-types';

   function ChildComponent(props) {
     return <h1>{props.message}</h1>;
   }

   ChildComponent.propTypes = {
     message: PropTypes.string.isRequired,
   };

   export default ChildComponent;
   ```

In this example, the `ChildComponent` expects a `message` prop that is a string and is required. If the `message` prop is not provided or is of a different type, React will log a warning in the console.

2. **Example with Different PropTypes:**
   ```jsx
   import React from 'react';
   import PropTypes from 'prop-types';

   function UserProfile(props) {
     return (
       <div>
         <h1>{props.name}</h1>
         <p>Age: {props.age}</p>
         <p>Is Admin: {props.isAdmin ? 'Yes' : 'No'}</p>
       </div>
     );
   }

   UserProfile.propTypes = {
     name: PropTypes.string.isRequired,
     age: PropTypes.number,
     isAdmin: PropTypes.bool,
   };

   export default UserProfile;
   ```

In this example, the `UserProfile` component has three props:
- `name`: a required string.
- `age`: an optional number.
- `isAdmin`: an optional boolean.

### Benefits of Using PropTypes

1. **Type Checking**: PropTypes ensure that the data types of props passed to a component are correct, helping to catch bugs early.
2. **Documentation**: PropTypes serve as a form of documentation for the expected props, making it easier for developers to understand how to use the component.
3. **Default Values**: You can also define default values for props using `defaultProps`.

**Example with `defaultProps`:**

```jsx
import React from 'react';
import PropTypes from 'prop-types';

function UserProfile(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>Age: {props.age}</p>
      <p>Is Admin: {props.isAdmin ? 'Yes' : 'No'}</p>
    </div>
  );
}

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  isAdmin: PropTypes.bool,
};

UserProfile.defaultProps = {
  age: 18,
  isAdmin: false,
};

export default UserProfile;
```

In this example, `UserProfile` has default values for `age` and `isAdmin` if they are not provided.

Overall, props and PropTypes are fundamental tools in React for passing data between components and ensuring that data is correctly formatted and used, thereby improving the reliability and maintainability of your code.
*/