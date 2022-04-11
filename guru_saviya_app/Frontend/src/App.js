import Login from "./components/login/login";

function App() {
  return (<div>
    <h1 style="color:blue;">This is a Blue Heading</h1>
     </div>);
}

export default App;

/**
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
   
 */
