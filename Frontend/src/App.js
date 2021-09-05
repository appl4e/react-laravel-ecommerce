
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import AddProduct from './AddProduct'
import UpdateProduct from './UpdateProduct'
import { Protected } from './Protected';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        {/* <h1>Ecomm Project</h1> */}
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/register">
          <Register></Register>
        </Route>
        <Route path="/add">
          {/* <AddProduct></AddProduct> */}
          <Protected Comp={AddProduct} />
        </Route>
        <Route path="/update">
          {/* <UpdateProduct></UpdateProduct> */}
          <Protected Comp={UpdateProduct} />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
