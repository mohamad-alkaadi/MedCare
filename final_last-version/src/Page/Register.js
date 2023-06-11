import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './page css/Register.css'

// const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const USER_REGEX = /^[A-Za-z]{3,23}$/;
const EMAIL_REGEX =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
    // for the user input: it allows us to foucas on user input when the component loads
    // const userRef = useRef();
    const userRef = useRef();
    const fnameRef = useRef();
    const lnameRef = useRef();
    const emailRef = useRef();
    //for error refrence it allows it to announce error by screen reader for accesability
    const errRef = useRef();

    // const [user, setUser] = useState('');
    // wither th name validate or not
    // const [validName, setValidName] = useState(false);
    //wither we have foucas on input field or not
    // const [userFocus, setUserFocus] = useState(false);
    
    const [fname, setFname] = useState('');
    const [validFname, setValidFname] = useState(false);
    const [fnameFocus, setFnameFocus] = useState(false);

    const [lname, setLname] = useState('');
    const [validLname, setValidLname] = useState(false);
    const [lnameFocus, setLnameFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    
    //same for all fields
    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    //for the err msg
    const [errMsg, setErrMsg] = useState('');
    //for if we successufly submit the registration form or not
    const [success, setSuccess] = useState(false);

    //set the focus when the component load //you should refrence it on the input
    useEffect(() => {
        if (userRef.current) {
            userRef.current.focus();
        }
    }, []);

    // useEffect(()=>{
    //     const result = USER_REGEX.test(user)
    //     console.log(result)
    //     console.log(user);
    //     setValidName(result)
    //     // or setValidName(USER_REGEX.test(user))
    // },[user])
    //===========================================
    useEffect(()=>{
        const result = USER_REGEX.test(fname)
        console.log(result)
        console.log(fname);
        setValidFname(result)
        // or setValidName(USER_REGEX.test(user))
    },[fname])
    
    
    useEffect(()=>{
        const result = USER_REGEX.test(lname)
        console.log(result)
        console.log(lname);
        setValidLname(result)
        // or setValidName(USER_REGEX.test(user))
    },[lname])
    
    
    //===============================================
    useEffect(()=>{
        const result = EMAIL_REGEX.test(email)
        console.log(result)
        console.log(email);
        setValidEmail(result)
        // or setValidName(USER_REGEX.test(user))
    },[email])
    // ================================================
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
    },[fname,lname,pwd,matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const v1 = USER_REGEX.test(fname)
        const v2 = USER_REGEX.test(lname)
        const v3 = EMAIL_REGEX.test(email)
        const v4 = PWD_REGEX.test(pwd)
        if (!v1 || !v2 || !v3 || !v4){
            setErrMsg("Invalid Entry")
            return
        }
        console.log(fname,lname,pwd)
        setSuccess(true)
    }

  return (
    <div className="register-container">
    <div className='register-sec'>
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
        <h1>Register</h1>
        <form className="register-form" onSubmit={handleSubmit}>
            
            {/* <label htmlFor='username'>
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
             */}
             <div className="reg-fulln-container reg-form-layout">
                Full Name
             </div>
            <div className="reg-fname-container reg-form-layout">
                <input
                    className="reg-name-input"
                    type='text'
                    id='fname'
                    ref={fnameRef}
                    autoComplete='off'
                    placeholder="First name"
                    onChange={(e) => setFname(e.target.value)}
                    required
                    aria-invalid={validFname ? "false":"true"}
                    aria-describedby='fnnote'
                    onFocus={() => setFnameFocus(true)}
                    onBlur={() => setFnameFocus(false)}/>
                {/* <p id='fnnote' className={fnameFocus && fname && !validFname ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle}/>
                    4 to 24 characters.<br/>
                    Must begin with a letter.<br/>
                    Letters, numbers, underscores, hyphens allowed.
                </p> */}
            </div>
            <div className="reg-lname-container reg-form-layout">
                <input
                    className="reg-name-input"
                    type='text'
                    id='fname'
                    ref={lnameRef}
                    placeholder="Last name"
                    autoComplete='off'
                    onChange={(e) => setLname(e.target.value)}
                    required
                    aria-invalid={validLname ? "false":"true"}
                    aria-describedby='lnnote'
                    onFocus={() => setLnameFocus(true)}
                    onBlur={() => setLnameFocus(false)}/>
                {/* <p id='lnnote' className={lnameFocus && lname && !validLname ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle}/>
                    4 to 24 characters.<br/>
                    Must begin with a letter.<br/>
                    Letters, numbers, underscores, hyphens allowed.
                </p> */}
            </div>
            {/* ==================================================================== */}
             <div className="reg-email-container reg-form-layout">
            <label htmlFor='email' className="reg-email reg-form-label">
                Email:
                <span className={validEmail ? "valid": "hide"}>
                    <FontAwesomeIcon icon={faCheck}/>
                </span>
                <span className={validEmail || !email ?"hide":"invalid"}>
                    <FontAwesomeIcon icon={faTimes}/>
                </span>
            </label>
            
            <input
                className="reg-full-input"
                type='email'
                id='email'
                ref={emailRef}
                autoComplete='off'
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-invalid={validEmail ? "false":"true"}
                aria-describedby='emailnote'
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}/>

            <p id='emailnote' className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
                Please enter a valid email
            </p>
            </div>
{/* ==================================================================================== */}
             <div className="reg-pass-container reg-form-layout">
            <label htmlFor='password' className="reg-password reg-form-label">
                Password:
                <span className={validPwd ? "valid": "hide"}>
                    <FontAwesomeIcon icon={faCheck}/>
                </span>
                <span className={validPwd || !pwd ?"hide":"invalid"}>
                    <FontAwesomeIcon icon={faTimes}/>
                </span>
            </label>
            <input
                className="reg-full-input"
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
            </div>
             <div className="reg-match-container reg-form-layout">
            <label className="reg-form-label" htmlFor='confirm_pwd'>
                Conform Password:
                <span className={validMatch && matchPwd ? "valid": "hide"}>
                    <FontAwesomeIcon icon={faCheck}/>
                </span>
                <span className={validMatch || !matchPwd ?"hide":"invalid"}>
                    <FontAwesomeIcon icon={faTimes}/>
                </span>
            </label>
            <input
                className="reg-full-input"
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
            </div>
            
            <button className="reg-form-layout" disabled={!validFname || !validLname || !validPwd || !validMatch ? true : false}>
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
    </div>
  )
}

export default Register