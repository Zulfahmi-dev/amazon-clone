import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from "./firebase";
import './Login.css';

function Login() {
  const history = useHistory();
  const [data, setData] = useState({
    email:'',
    password:''
  });

  const onChange = e => {
    setData({...data, [e.target.name]:e.target.value})
  }

  const signIn = async e => {
    e.preventDefault();

    try {
      let {email, password} = data;
      let login = await auth.signInWithEmailAndPassword(email, password);

      if (login) {
        history.push('/')
      }

    } catch (error) {
      alert(error.message);
    }
  }

  const register = async e => {
    e.preventDefault();
    
    try {
      let {email, password} = data;
      let register = await auth.createUserWithEmailAndPassword(email, password);

      if (register.user) {
        history.push('/')
      }

    } catch (error) {
      alert(error.message);
    }

  }

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
          className="login__logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" name='email' value={data?.email} onChange={onChange}/>

          <h5>Password</h5>
          <input type="password" name='password' value={data?.password} onChange={onChange}/>

          <button className="login__signInButton" onClick={signIn}>Sign In</button>
        </form>

        <p>
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          nostrum modi tempora, rem provident quia sequi quibusdam molestiae sit
          consequuntur, dolorem quam aperiam aliquam! Corporis quos dolorum
          maxime similique repudiandae?{' '}
        </p>

        <button className="login__registerButton" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
