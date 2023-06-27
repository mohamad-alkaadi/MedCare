import React,{useState,useRef,useEffect} from 'react'

function SignIn() {
    const emailRef = useRef();
    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

  return (
    <div className='sign-in-container'>
        <div className='sign-in grid-system'>
            <div className='signin-title'>
                Welcome Back!
            </div>
            <div className='sign-in-email'>
                    <label htmlFor='signin-email' className="signin-email-label">
                        Email:
                    </label>
                    <input 
                        type='email'
                        id='signin-email'
                        ref={emailRef}
                        autoComplete='off'
                        required
                        aria-invalid={validEmail ? "false":"true"}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}/>
            </div>

            <div className='sign-in-password'>
                <div className='sign-in-password'>
                    <label htmlFor='signin-password' className="signin-password-label">
                        Password:
                    </label>
                    <input
                        type='password'
                        id='signin-password'
                        onChange={(e) => setPwd(e.target.value)}
                        required
                        aria-invalid={validPwd ? "false":"true"}
                        onFocus={() => setPwdFocus(true)}
                        onBlur={() => setPwdFocus(false)}/>

                </div>
            </div>
        </div>
    </div>
  )
}

export default SignIn