import React, { useState } from 'react'
import InputControl from './InputControl';
import styles from './Signup.module.css';
import { Link, useNavigate } from 'react-router-dom';
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import {auth} from "../firebase";

const Signup = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name:"",
    email:"",
    pass:"",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [confMsg, setConfMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const handleSubmission = () => {
    if(!values.name || !values.email || !values.pass){
      setErrorMsg("All fields are mandatory");
      return;
    }
    setConfMsg("Successfully Registered!");
    setSubmitButtonDisabled(true);
    // console.log(values);
    createUserWithEmailAndPassword(auth, values.email, values.pass).then(async (res) => {
      setSubmitButtonDisabled(false);
      const user = res.user;
      await updateProfile(user, {
        displayName: values.name,
      });
      navigate("/");
      // console.log(res);
      // console.log(user);
    }).catch(() => {
      setSubmitButtonDisabled(false);
      setErrorMsg("Already Registered!");
      // console.log("Error-",err.message)
    }
      );
  }

  return (
    <div className={styles.container}>
        <div className={styles.innerBox}>
            <h1 className={styles.heading}>Signup</h1>
            <InputControl 
            label="Name" 
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setValues((prev)=>({...prev, name:e.target.value}))}/>
            <InputControl 
            label="Email" 
            type="email"
            placeholder="Enter email address"
            onChange={(e) => setValues((prev)=>({...prev, email:e.target.value}))}/>
            <InputControl 
            label="Password" 
            type="password"
            placeholder="Enter password"
            onChange={(e) => setValues((prev)=>({...prev, pass:e.target.value}))}/>

            <div className={styles.footer}>
              {
                errorMsg ? <b className={styles.error}>{errorMsg}</b> : <b className={styles.msg}>{confMsg}</b>
              }
                
                <button onClick={handleSubmission}
                disabled={submitButtonDisabled}
                >Signup</button>
                <p>Already have an account? {" "} 
                <span>
                    <Link to='/'>Login</Link>
                </span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Signup