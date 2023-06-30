import React,{useState,useRef,useEffect} from 'react'
import './signin-css/signin.css'
import { FaArrowLeft } from 'react-icons/fa';
import key from './sigin-assets/key-circle.png'
import emailPic from './sigin-assets/email-circle.png'

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

function useWidthWindowSize(){
    const [widthSize,setWidthSize]=useState(window.innerWidth);
    useEffect(()=>{
      const handleWidthResize = () => {
        setWidthSize(window.innerWidth);
      };
      window.addEventListener('resize',handleWidthResize);
    },[]);
    return widthSize;
  } 

function SignIn() {
  const width = useWidthWindowSize();
  function ShowHidden(){
    setForgotPassword(!forgotPassword)

  }

  function handleResetPassword(){
    setResetEmailSent(!resetEmailSent)
    setResetEmailSave(hiddenEmail)
  } 

  function ReturnToSign(){
    setForgotPassword(false)
    setResetEmailSent(false)
  }

  function handleResend(){
    return
  }
    const SignInHeight = useHeightWindowSize();
    const LoginStyles = { signInContainer:{ height:SignInHeight, backgroundColor:"#ecfafe"} }
    const SmallLoginStyles = { signInContainer:{ minHeight:SignInHeight, backgroundColor:"#ecfafe", } }

    const [forgotPassword,setForgotPassword] = useState(false)
    const [resetEmailSent,setResetEmailSent] = useState(false)
    const [resetEmailSave,setResetEmailSave] = useState("")

    console.log(SignInHeight)
    const emailRef = useRef();
    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);
    
    const hiddenEmailRef = useRef();
    const [hiddenEmail, setHiddenEmail] = useState('');
    const [hiddenValidEmail, setValidHiddenEmail] = useState(false);
    const [hiddenEmailFocus, setHiddenEmailFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const hightStyles = LoginStyles.signInContainer
    const SmallStyles = SmallLoginStyles.signInContainer

  return (
    <div>
      {!resetEmailSent?
    <div className='sign-in-container' style={width>565?hightStyles:SmallStyles}>
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
                  {/* <input 
                    type='submit'
                    value='SIGN IN'/> */}
                    <button type="submit">SIGN IN</button>
                </div>
                <div className="sign-in-forget">
                  Forgot <button onClick={ShowHidden}>Password?</button>
                </div>
            
        </div>
        </form>:
        
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
                        id='hidden-forgot-email'
                        ref={hiddenEmailRef}
                        autoComplete='off'
                        required
                        aria-invalid={hiddenValidEmail ? "false":"true"}
                        onChange={(e) => setHiddenEmail(e.target.value)}
                        onFocus={() => setHiddenEmailFocus(true)}
                        onBlur={() => setHiddenEmailFocus(false)}/>
            </div>
            <div className='forgot-submit'>
                  {/* <input 
                    type='submit'
                    value='Reset password'
                    onSubmit={handleResetPassword}/> */}
                    <button onClick={handleResetPassword}>Reset password</button>
                </div>
              <div className='forgot-back'>
                <button onClick={ShowHidden}><FaArrowLeft className='forgot-back-arrow'/> Back to Sign in</button>
              </div>
          </div>
        </form>}
         {console.log(forgotPassword)}
    </div>:
    <div className='sign-in-container' style={LoginStyles.signInContainer}>
        <div className='sign-in grid-system'>
        <div className='email-sent'>
              <img className='email-sent-icon' src={emailPic}/> 
            </div>
          <div className='email-sent-sloganOne'>Check your email</div>
          <div className='email-sent-sloganTwo'>We sent a password reset link to</div>
          <div className='email-sent-email'>{resetEmailSave}</div>
          <div className='email-sent-notReceive'>Didn't receive the email? <button onClick={handleResend}>Click to resend</button></div>
          <div className='forgot-back'>
              <button onClick={ReturnToSign}><FaArrowLeft className='forgot-back-arrow'/> Back to Sign in</button>
          </div>
        </div>
    </div>
    }
    </div>
  )
}

export default SignIn