import React,{useState,useRef} from 'react'

function SignIn() {
    const emailRef = useRef();
    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);
  return (
    <div className='sign-in-container'>
        <div className='sign-in grid-system'>
            <div className='signin-title'>
                Welcome Back!
            </div>
            <div className='sign-in-email'>
                <div className='sign-in-title'>
                    Email
                </div>
                <div className='sign-in-field'>
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
            </div>
            <div className='sign-in-password'>
                <div className='sign-in-title'>
                    Password
                </div>
                <div className='sign-in-field'>

                </div>
            </div>
        </div>
    </div>
  )
}

export default SignIn