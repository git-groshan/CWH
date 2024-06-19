// import logo from './logo.svg';
import './App.css';


// React class based component 
import React, {useState} from 'react'
import NavBar from './components/NavBar'
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'


// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   RouterProvider,
//   Route,
//   Router,
// } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // for react router 

const App = ()=> {
  const pageSize=15;
  const apiKey=process.env.REACT_APP_NEWS_API;
  
  const [progress, setProgress] = useState(0);

    return (
          <Router>
      <div>
          <NavBar/>
          <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
            <Routes>

            
                                          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key= 'general' pageSize={pageSize} country="in" category="general"/>} > </Route>
                                          <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key= 'general' pageSize={pageSize} country="in" category="general"/>} > </Route>
                                          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key= 'business' pageSize={pageSize} country="in" category="business"/>} > </Route>
                                          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key= 'science' pageSize={pageSize} country="in" category="science"/>} > </Route>
                                          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key= 'technology' pageSize={pageSize} country="in" category="technology"/>} > </Route>
                                          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key= 'health' pageSize={pageSize} country="in" category="health"/>} ></Route>
                                          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key= 'sports' pageSize={pageSize} country="in" category="sports"/>} ></Route>
                                          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key= 'entertainment' pageSize={pageSize} country="in" category="entertainment"/>} > </Route>
                                          
            </Routes>


          {/* <News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="science"/> */}
      </div>
          </Router>
    )
  
}



/*

// fucntion based component 
function App() {
  return (
    <div className="App">
    <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
    Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
    >
    Learn React
    </a>
    </header>
    </div>
  );
}

export default App;
*/
export default App;
