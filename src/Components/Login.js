import React, {useState} from 'react'
import InputControl from './InputControl';
import styles from './Login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from "../firebase";

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email:"",
    pass:"",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const handleSubmission = () => {
    if(!values.email || !values.pass){
      setErrorMsg("All fields are mandatory");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    // console.log(values);
    signInWithEmailAndPassword(auth, values.email, values.pass).then(async (res) => {
      setSubmitButtonDisabled(false);
      
      navigate("/home");
      // console.log(res);
      // console.log(user);
    }).catch((err) => {
      setSubmitButtonDisabled(false);
      setErrorMsg(err.message);
      // console.log("Error-",err.message)
    }
      );
  }
  return (
    <div className={styles.container}>
        <div className={styles.innerBox}>
            <h1 className={styles.heading}>Login</h1>
            <InputControl 
              label="Email" 
              type="email"
              placeholder="Enter email address"
              onChange={(e) => {setValues((prev) => ({...prev, email:e.target.value}))}}/>
            <InputControl 
              label="Password" 
              type="password"
              placeholder="Enter password"
              onChange={(e) => {setValues((prev) => ({...prev, pass:e.target.value}))}}
              />

            <div className={styles.footer}>
                <b className={styles.error}>{errorMsg}</b>
                <button disabled={submitButtonDisabled} onClick={handleSubmission}>Login</button>
                <p>Not having an account? {" "} 
                <span>
                    <Link to='/signup'>Sign up</Link>
                </span>
                </p>
            </div>
            
        </div>
    </div>
  )
}

export default Login