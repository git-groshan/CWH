// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm  from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // for react router 

function App() {

  const [mode , setMode] = useState('light');
  const [alert , setAlert] = useState(null); // alert is an object 
  const showAlert = (message , type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    } , 1000);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode Has been enabled" , "success")
      document.title = 'TextUtils - DarkMode'
      // setInterval(()=>{document.title = 'TextUtils is Amazing !!'} , 2000)
      // setInterval(()=>{document.title = 'Install TextUtils Now !!'} , 1500)
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light Mode Has been enabled" , "success")
      document.title = 'TextUtils - LightMode'
    }
  }

  return (
    <>
  {/* <Navbar title="NavBar" aboutText="AboutTextUtils"/> */}
  {/*default props */}
  <Router>
  <Navbar  mode={mode} toggleMode={toggleMode} />
  <Alert alert={alert}/>    
  <div className="container my-3" >
  {/* <Routes>
     <Route path="/about" component={About} />
     <Route path="/contact" component={Contact} />
     <Route path="/" component={Home} />
    </Routes> */}

   <Routes>
    {/* users --> component 1
    users/home --> component2
    React by default do partial matching to do exact matching we use exact path  */}
    <Route exact path='/about' element={<About />}></Route>
    <Route exact path='/' element = {<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} ></Route>
   </Routes>
  </div>
  </Router>
  
  </>
  );
}

export default App;
