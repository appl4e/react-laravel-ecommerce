
import './App.css';
import Header from './Header';
import {BrowserRouter, Route} from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import AddProduct from './AddProduct'
import UpdateProduct from './UpdateProduct'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <h1>Ecomm Project</h1>
      <Route path="/login">
        <Login></Login>
      </Route>
      <Route path="/register">
        <Register></Register>
      </Route>
      <Route path="/add">
        <AddProduct></AddProduct>
      </Route>
      <Route path="/update">
        <UpdateProduct></UpdateProduct>
      </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
