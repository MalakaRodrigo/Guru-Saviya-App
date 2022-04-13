import Authentication from "./components/authentication/Authentication";
import Homepage from "./components/homepage/Homepage";
import Protected from "./components/protected";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {

  const [user,setLoginUser] = useState({})

  return(
    <div className="App">
  <Router>
  <Routes>
 
  <Route path="/" element={<Authentication setLoginUser={setLoginUser}/>}></Route>
  <Route path="/Home" element={localStorage.getItem('currentUser')?<Homepage/>:<Authentication setLoginUser={setLoginUser}/>}></Route>
 
   </Routes>
  </Router>
  </div>
  )
 
  
 
}

export default App;

/**
  <Route exact path="/Home" element={<Protected isLoggedIn={localStorage.getItem('rememberMe')?true:false}>
 <Homepage />
 </Protected>}></Route>
 * 
  if(isLoggedIn){
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Login setisLoggedIn={setisLoggedIn}/>}></Route>
            <Route path="/Home" element={<Homepage/>}></Route>
          </Routes>
        </Router>
      </div>
    );
 * 
 * 
 * 
 *  {localStorage.getItem('user') ? console.log('pass'):console.log('fail')}
    {localStorage.getItem('user') ? <Homepage/>:<Login/>}
 <Router>
        <Routes>
          <Route exact path="/">
          {
              user && user._id ? <Homepage /> : <Login />
            }<Homepage /></Route>
          <Route path="/Login"><Login setLoginUser={setLoginUser} /></Route>
          <Route path="/Register"><Register />
          </Route>
        </Routes>

      </Router>
     <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Home" element={<Homepage />}></Route>
        </Routes>
      </Router>
 */
