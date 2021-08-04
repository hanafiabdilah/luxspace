import 'assets/css/app.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from 'pages/HomePage';
import Details from 'pages/Details';
import Cart from 'pages/Cart';


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={HomePage}/>
        <Route path="/categories/:idc/products/:id" component={Details}/>
        <Route path="/cart" component={Cart}></Route>
      </Router>
    </div> 
  );
}

export default App;
