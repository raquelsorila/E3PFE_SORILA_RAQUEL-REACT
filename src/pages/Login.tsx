import { countReset } from 'console';
import {useState, SyntheticEvent} from 'react'
import {useHistory} from 'react-router-dom'
const Login = () => {
  /** these states hold the current value of the input field and it is set everytime the input changes*/
    const apiUrl = "http://localhost:8000/api/login";

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
       /** this will be called everytime the submit button is clicked*/

    const history = useHistory();
       /** used to redirect to another page*/

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        const data = {
            email,
            password
        }

 
//this is for the fetch request       
        await fetch(apiUrl, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          credentials: 'include',
          body: JSON.stringify(data)
        })
        history.push("/home");
        

    }
    return (
        <main className="form-signin">
          <form onSubmit={submit}>
            <h1 className="h3 mb-3 fw-normal text-center">Please sign in</h1>

            <div className="form-floating">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
              onChange={e=>setEmail(e.target.value)}/>
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
              onChange={e=>setPassword(e.target.value)}/>
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            <p  className="mt-3">Don't have an account? Register now.</p>
          </form>
      </main>
    )
}

export default Login
