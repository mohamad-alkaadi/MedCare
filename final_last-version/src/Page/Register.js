import React,{useRef,useState,useEffect} from 'react'
import { faCheck,faTimes,faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import './page css/Register.css'

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3-23}$/

const PWD_REGEX = /^(?=,*[a-z])(?=,*[A-Z])(?=,*[0-9])(?=,[!@#$%]){8,24}$/;

const Register = () => {
    // for the user input: it allows us to foucas on user input when the component loads
    const userRef = useRef()
    //for error refrence it allows it to announce error by screen reader for accesability
    const errRef = useRef()

    const [user,setUser] = useState('')
    // wither th name validate or not
    const [validName,setValidName] = useState(false)
    //wither we have foucas on input field or not
    const [userFocus,setUserFocus] = useState(false)

    //same for all fields
    const [pwd,setPwd] = useState('')
    const [validPwd,setValidPwd] = useState(false)
    const [pwdFocus,setPwdFocus] = useState(false)

    const [matchPwd,setMatchPwd] = useState('')
    const [validMatch,setValidMatch] = useState(false)
    const [matchFocus,setMatchFocus] = useState(false)

    //for the err msg
    const [errMsg,setErrMsg] = useState('')
    //for if we successufly submit the registration form or not
    const [success,setSuccess] = useState(false)

    //set the focus when the component load //you should refrence it on the input
    useEffect(() => {
        useRef.current.focus();
    })

    useEffect(()=>{
        const result = USER_REGEX.test(user)
        console.log(result)
        console.log(user);
        setValidName(result)
        // or setValidName(USER_REGEX.test(user))
    },[user])
    
    useEffect(()=>{
        const result = PWD_REGEX.test(pwd)
        console.log(result)
        console.log(pwd)
        setValidPwd(result)
        //defining conformation  
        const match = pwd === matchPwd;
        setValidMatch(match)
        //any time one of the dependences changes it run the valid functions will check
    },[pwd,matchPwd])

    useEffect(()=>{
        setErrMsg('') 
    },[user,pwd,matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const v1 = USER_REGEX.test(user)
        const v2 = PWD_REGEX.test(pwd)
        if (!v1 || !v2){
            setErrMsg("Invalid Entry")
            return
        }
        console.log(user,pwd)
        setSuccess(true)
    }

  return (
    <div className='register-sec'>
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor='username'>
                Username:
                <span className={validName ? "valid": "hide"}>
                    <FontAwesomeIcon icon={faCheck}/>
                </span>
                <span className={validName || !user ?"hide":"invalid"}>
                    <FontAwesomeIcon icon={faTimes}/>
                </span>
            </label>
            <input
                type='text'
                id='username'
                ref={userRef}
                autoComplete='off'
                onChange={(e) => setUser(e.target.value)}
                required
                aria-invalid={validName ? "false":"true"}
                aria-describedby='uidnote'
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}/>
            <p id='uidnote' className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle}/>
                4 to 24 characters.<br/>
                Must begin with a letter.<br/>
                Letters, numbers, underscores, hyphens allowed.
            </p>

            <label htmlFor='password'>
                Username:
                <span className={validPwd ? "valid": "hide"}>
                    <FontAwesomeIcon icon={faCheck}/>
                </span>
                <span className={validPwd || !pwd ?"hide":"invalid"}>
                    <FontAwesomeIcon icon={faTimes}/>
                </span>
            </label>
            <input
                type='password'
                id='password'
                onChange={(e) => setPwd(e.target.value)}
                required
                aria-invalid={validPwd ? "false":"true"}
                aria-describedby='pwdnote'
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}/>

            <p id='pwdnote' className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle}/>
                8 to 24 characters.<br/>
                Must include uppercase and lowercaseletters, a number and a special charcter.<br/>
                Allowed special characters: ! @ # $ % 
            </p>

            <label htmlFor='password'>
                Conform Password:
                <span className={validMatch && matchPwd ? "valid": "hide"}>
                    <FontAwesomeIcon icon={faCheck}/>
                </span>
                <span className={validMatch || !matchPwd ?"hide":"invalid"}>
                    <FontAwesomeIcon icon={faTimes}/>
                </span>
            </label>
            <input
                type='password'
                id='confirm_pwd'
                onChange={(e) => setMatchPwd(e.target.value)}
                required
                aria-invalid={validMatch ? "false":"true"}
                aria-describedby='confirmnote'
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}/>

            <p id='confirmnote' className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle}/>
                Must match the first password input field.    
            </p>
            <button disabled={!validName || !validPwd || !validMatch ? true : false}>
                Sign up
            </button>
        </form>
        <p>
            Already registerd?<br/>
            <span className='line'>
                <a href='#'>Sign In</a>
            </span>
        </p>
    </div>
  )
}

export default Register