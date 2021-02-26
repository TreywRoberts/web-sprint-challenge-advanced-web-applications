import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {axiosWithAuth} from "./../helpers/axiosWithAuth";


const initialState = {
  username:'Lambda School',
  password:'i<3Lambd4',
  error:''
}

const Login = (props) => {
  const [state, setState] = useState(initialState)
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const handleChange = (e)=>{
    setState({
      ...state,
      [e.target.name]:e.target.value,
      error:''
    })
  }
  const submitHandler = (e)=>{
    e.preventDefault();
    axiosWithAuth()
      .post('/login', state)
      .then(res=>{
        console.log(res)
        localStorage.setItem('token', JSON.stringify(res.data.payload))
        props.history.push('/protected')
      })
      .catch((err)=>{
        // console.log({err})
        // console.log(err.response.data.error)
        setState({error: err.response.data.error })
      })


  }

  // useEffect(()=>{
    // make a post request to retrieve a token from the api
    // when you have handled the token, navigate to the BubblePage route
  // });

  return (
    <>
      <div>
        <h1>Welcome to Bubbles!</h1>
        <form onSubmit={submitHandler}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={state.username}
            onChange={handleChange}
          />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
          />
          <p style={{ color: `red`, fontSize: "12px" }}>{state.error}</p>
          <button>Log in</button>
        </form>
      </div>
    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.