import React,{useState,useRef,useEffect} from 'react'
import './signup-css/signup.css'
import {emailPic} from './signup-assets/email-circle.png'
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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


const SignUp = () => {
  const width = useWidthWindowSize();
  const SignInHeight = useHeightWindowSize();

  const emailRef = useRef();
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [resetEmailSent,setResetEmailSent] = useState(false)
  const [resetEmailSave,setResetEmailSave] = useState("")


  const LoginStyles = { signInContainer:{ height:SignInHeight, backgroundColor:"#ecfafe"} }
  const SmallLoginStyles = { signInContainer:{ minHeight:SignInHeight, backgroundColor:"#ecfafe", } }

  const hightStyles = LoginStyles.signInContainer
  const SmallStyles = SmallLoginStyles.signInContainer
  
  function handleResend(){
    return
  }
  return (
    <div>
    {!resetEmailSent?

    <div className='sign-up-container' style={width>565?hightStyles:SmallStyles}>
      <form className='sign-up signup-grid-system'>
            <Link to='/MedCare' className='signup-title'>
                <p>MedCare</p>
            </Link>
            
            <div className='sign-up-email'>
                    <input 
                        type='email'
                        placeholder='Email'
                        id='signup-email'
                        ref={emailRef}
                        autoComplete='off'
                        required
                        aria-invalid={validEmail ? "false":"true"}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}/>
            </div>
                <div className='sign-up-submit'>
                    <button type="submit">SIGN UP</button>
                </div>
                <div className="sign-up-alreadySigned">
                  Already have an <Link to="../MedCare/signin"><p>account?</p></Link>
                </div>
            
        </form>
    </div>:
    <div className='sign-in-container email-sent-container' style={width>565?hightStyles:SmallStyles}>
        <div className='sign-in email-sent-a signin-grid-system'>
        <div className='email-sent'>
              <img className='email-sent-icon' src={emailPic}/> 
            </div>
          <div className='email-sent-sloganOne'>Check your email</div>
          <div className='email-sent-sloganTwo'>We sent a password reset link to</div>
          <div className='email-sent-email'>{resetEmailSave}</div>
          <div className='email-sent-notReceive'>Didn't receive the email? <button onClick={handleResend}>Click to resend</button></div>
          
        </div>
     </div>
}
    </div>

  )
}

export default SignUp