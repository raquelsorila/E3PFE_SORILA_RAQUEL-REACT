import {SyntheticEvent, useState} from 'react'
import {useHistory} from 'react-router-dom'

const Register = () => {
   /** these states hold the current value of the input field and it is set everytime the input changes*/

  const apiUrl = "http://localhost:8000/api/register"
  /** setting up states that we will use to track input values*/
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [section, setSection] = useState("");
  const [hobby, setHobby] = useState("");

       /** used to redirect to another page*/
  let history = useHistory();

    /** this will be called everytime the submit button is clicked*/
  const submit = async (e: SyntheticEvent) => {
      e.preventDefault();
      const data = {
          name,
          email,
          password,
          hobby,
          section
      }
        //this is for the fetch request
      const options = {
          method: 'POST',
          headers: new Headers({
            'Content-Type': 'application/json'}),
          body: JSON.stringify(data)
        }
      
        fetch(apiUrl, options)
         .then(res => {
           res.json()
           history.push("/")
          })
         .catch(err => console.error(err));
    
      
  }

  return (
      <main className="form-signin">
        <form onSubmit={submit}>
          <h1 className="h3 mb-3 fw-normal text-center">Please Sign-up</h1>

          <div className="form-floating">
            <input type="email" className="form-control" id="floatingEmail" placeholder="name@example.com"
            onChange = {e => setEmail(e.target.value)}/>
            <label htmlFor="floatingEmail">Email address</label>
          </div>
          <div className="form-floating">
            <input type="name" className="form-control" id="floatingName" placeholder="name@example.com"
            onChange = {e => setName(e.target.value)}/>
            <label htmlFor="floatingName">Name</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
            onChange = {e => setPassword(e.target.value)}/>
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="form-floating">
             <input type="section" className="form-control" id="floatingSection" placeholder="Section"
             onChange = {e => setSection(e.target.value)}/>
             <label htmlFor="floatingSection">Section</label>
           </div>
           <div className="form-floating">
             <input type="hobby" className="form-control" id="floatingHobby" placeholder="Hobby"
             onChange = {e => setHobby(e.target.value)}/>
             <label htmlFor="floatingHobby">Hobby</label>
           </div>

          <button className="w-100 btn btn-lg btn-primary" type="submit">Sign Up</button>
          <p  className="mt-3">Already have an account? Sign In here!</p>
        </form>
    </main>
  )
}

export default Register