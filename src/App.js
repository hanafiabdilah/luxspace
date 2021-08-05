import 'assets/css/app.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from 'pages/HomePage'
import Details from 'pages/Details'
import Cart from 'pages/Cart'
import Congratulation from 'pages/Congratulation'
import NotFound from 'pages/NotFound'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/categories/:idc/products/:id" component={Details}/>
          <Route path="/cart" component={Cart}></Route>
          <Route path="/congratulation" component={Congratulation}></Route>
          <Route path="*" component={NotFound}></Route>
        </Switch>
      </Router>
    </div> 
  )
}

export default App
