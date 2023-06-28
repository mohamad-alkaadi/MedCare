import React,{useState,useRef,useEffect} from 'react'
import './signin-css/signin.css'
import { FaArrowLeft } from 'react-icons/fa';
import key from './sigin-assets/key-circle.png'

function useHeightWindowSize(){
    const [heightSize,setHeightSize]=useState(window.innerHeight);
    useEffect(()=>{
      const handleHeightResize = () => {
        setHeightSize(window.innerHeight);
      };
      window.addEventListener('resize',handleHeightResize);
    },[]);
    return heightSize;
  }

function SignIn() {
  function ShowHidden(){
    setForgotPassword(!forgotPassword)
  }  
    const SignInHeight = useHeightWindowSize();
    const LoginStyles = { signInContainer:{ height:SignInHeight, backgroundColor:"#ecfafe"} }
    const [forgotPassword,setForgotPassword] = useState(false)
    const [emailSent,setEmailSent] = useState(false)

    console.log(SignInHeight)
    const emailRef = useRef();
    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    console.log()    

  return (
    <div className='sign-in-container' style={LoginStyles.signInContainer}>
      {!forgotPassword? 
      <form>
        <div className='sign-in grid-system'>
            <div className='signin-title'>
                MedCare
            </div>
            <div className='sign-in-email'>
                    
                    <input 
                        type='email'
                        placeholder='Email'
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
                    <input
                        type='password'
                        placeholder='Password'
                        id='signin-password'
                        onChange={(e) => setPwd(e.target.value)}
                        required
                        aria-invalid={validPwd ? "false":"true"}
                        onFocus={() => setPwdFocus(true)}
                        onBlur={() => setPwdFocus(false)}/>

                </div>
                <div className='sign-in-submit'>
                  <input 
                    type='submit'
                    value='SIGN IN'/>
                </div>
                <div className="sign-in-forget">
                  Forgot <button onClick={ShowHidden}>Password?</button>
                </div>
            
        </div>
        </form>:
        // {}
        <form>
          <div className='sign-in grid-system'>
            <div className='forgot-key'>
              <img className='forgot-key-icon' src={key}/> 
            </div>
              <div className='forgotPass-sloganOne'>
                Forgot password?
              </div>
              <div className='forgotPass-sloganTwo'>
                No worries, we'll send you reset instructions.
              </div>
              <div className='sign-in-email'>
                    <input 
                        type='email'
                        placeholder='Enter your email'
                        id='signin-email'
                        ref={emailRef}
                        autoComplete='off'
                        required
                        value=""
                        aria-invalid={validEmail ? "false":"true"}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}/>
            </div>
            <div className='forgot-submit'>
                  <input 
                    type='submit'
                    value='Reset password'/>
                </div>
              <div className='forgot-back'>
                <button onClick={ShowHidden}><FaArrowLeft className='forgot-back-arrow'/> Back to Sign in</button>
              </div>
          </div>
        </form>}
         {console.log(forgotPassword)}
    </div>
   
  )
}

export default SignIn