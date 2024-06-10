import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

/*
React Router is a powerful library for routing in React applications. It enables developers to build single-page applications with navigation and dynamic rendering of components based on the URL. React Router provides a way to manage and sync the application’s URL with the UI, making the web app feel more like a traditional multi-page application without requiring full page reloads.

### Key Concepts and Components of React Router

1. **Router**: 
   The `Router` component provides the foundation for routing in a React application. There are different types of routers depending on the environment:
   - `BrowserRouter`: Uses HTML5 history API to keep the UI in sync with the URL.
   - `HashRouter`: Uses the hash portion of the URL (i.e., `window.location.hash`) to keep the UI in sync with the URL.

2. **Route**:
   The `Route` component renders UI when its path matches the current URL. It can render a component, a function, or null. Routes can be nested to create complex navigation structures.
    
   <Route path="/about" component={About} />
     

3. **Switch**:
   The `Switch` component renders the first child `Route` that matches the current URL. It ensures that only one route is rendered at a time.
    
  */
 /*
   <Switch>
     <Route path="/about" component={About} />
     <Route path="/contact" component={Contact} />
     <Route path="/" component={Home} />
   </Switch>
     
*/

     /*
4. **Link**:
   The `Link` component is used to navigate to different routes. It renders an anchor (`<a>`) tag and uses the `to` prop to specify the destination path.
   
   */
   <Link to="/about">About</Link>
     

/*
5. **NavLink**:
   The `NavLink` component is similar to `Link` but with additional styling capabilities for active links. It applies an `activeClassName` or `activeStyle` when the link is active.
   <NavLink to="/about" activeClassName="active">About</NavLink>
   
   */  

   /*

6. **Redirect**:
   The `Redirect` component is used to navigate to a different route programmatically. It is useful for redirecting users based on certain conditions (e.g., after form submission or authentication).
    
   <Redirect to="/login" />
     

7. **useHistory, useLocation, useParams, useRouteMatch**:
   These hooks provide access to the router’s history, location, parameters, and match objects in function components.
    
   import { useHistory, useLocation, useParams, useRouteMatch } from 'react-router-dom';
     

### Example Application with React Router

Here's an example of a simple React application using React Router:

#### 1. Install React Router

First, you need to install the React Router library:
  bash
npm install react-router-dom
  

#### 2. Set Up the Router

Set up the main `App` component to include the `BrowserRouter`, `Switch`, and `Route` components.

 
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Contact = () => <h2>Contact</h2>;

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
  

#### 3. Nested Routes

You can create nested routes by placing `Route` components inside other components.

 
const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/topic1`}>Topic 1</Link>
      </li>
      <li>
        <Link to={`${match.url}/topic2`}>Topic 2</Link>
      </li>
    </ul>

    <Switch>
      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route path={match.path}>
        <h3>Please select a topic.</h3>
      </Route>
    </Switch>
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
  

### Advanced Features

1. **Programmatic Navigation**:
   You can use the `useHistory` hook to navigate programmatically.
    
   import { useHistory } from 'react-router-dom';

   function Home() {
     let history = useHistory();

     function handleClick() {
       history.push('/about');
     }

     return (
       <div>
         <h2>Home</h2>
         <button onClick={handleClick}>Go to About</button>
       </div>
     );
   }
     

2. **Route Guards**:
   You can implement route guards to protect certain routes based on conditions (e.g., authentication).
    
   const PrivateRoute = ({ component: Component, ...rest }) => {
     const isAuthenticated = // logic to check if authenticated
     return (
       <Route
         {...rest}
         render={props =>
           isAuthenticated ? (
             <Component {...props} />
           ) : (
             <Redirect to="/login" />
           )
         }
       />
     );
   };
     

3. **Dynamic Routing**:
   Routes can be dynamic based on the application's state.
    
   <Route path="/user/:userId" component={UserDetail} />
     

### Conclusion

React Router is an essential library for building single-page applications in React. It provides a powerful and flexible system for managing navigation and rendering components based on the URL. By leveraging components like `Router`, `Route`, `Switch`, `Link`, and hooks like `useHistory` and `useParams`, you can create a dynamic, user-friendly web application that navigates seamlessly without full page reloads.

*/

// Switch is no longer available in React version > 6

/*
The error message `export 'Switch' (imported as 'Switch') was not found in 'react-router-dom'` typically occurs because you are using a version of `react-router-dom` where `Switch` is no longer available or has been replaced by another component.

In `react-router-dom` version 6 and later, `Switch` has been replaced by `Routes` and `Route`. Here’s how you can update your code to be compatible with `react-router-dom` version 6 or later.

### Example

If your original code looks something like this (using `Switch`):

```jsx
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}
```

You need to update it to use `Routes` and `Route`:

```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
```

### Key Changes

1. **Import `Routes` and `Route` instead of `Switch`**:
   ```jsx
   import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
   ```

2. **Replace `Switch` with `Routes`**:
   ```jsx
   <Routes>
     {/* Routes go here */}
     </Routes>
     ```
  
  3. **Replace the `component` prop with the `element` prop in `Route`**:
     ```jsx
     <Route path="/home" element={<Home />} />
     <Route path="/about" element={<About />} />
     <Route path="/contact" element={<Contact />} />
     ```
  
  ### Additional Information
  
  - `Route` now uses the `element` prop instead of `component`, and you pass a JSX element to it (`<Home />` instead of `Home`).
  - Make sure your components are imported and used as JSX elements.
  
  ### Installation
  
  Ensure you have the correct version of `react-router-dom` installed:
  
  ```sh
  npm install react-router-dom@latest
  ```
  
  or
  
  ```sh
  yarn add react-router-dom@latest
  ```
  
  By following these steps, you can resolve the issue and update your application to use the latest features of `react-router-dom`.
 */