import { useEffect } from "react"
import { useHistory } from "react-router-dom"
import Header from "./Header"

function Login(){
  const history = useHistory();
  useEffect(()=>{
    if(localStorage.getItem('user-info')){
      history.push('/add');
    }
  }, [])
  return(
    <div>
      <Header />
      <h1>Login Page</h1>
    </div>
  )
}

export default Login
