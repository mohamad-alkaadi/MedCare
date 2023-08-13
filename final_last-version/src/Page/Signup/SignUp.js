import React,{useState,useRef,useEffect} from 'react'
import './signup-css/signup.css'
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

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [forgotPassword,setForgotPassword] = useState(false)
  const [resetEmailSent,setResetEmailSent] = useState(false)
  const [resetEmailSave,setResetEmailSave] = useState("")
  const LoginStyles = { signInContainer:{ height:SignInHeight, backgroundColor:"#ecfafe"} }
  const SmallLoginStyles = { signInContainer:{ minHeight:SignInHeight, backgroundColor:"#ecfafe", } }

  function ShowHidden(){
    setForgotPassword(!forgotPassword)

  }
  const hightStyles = LoginStyles.signInContainer
  const SmallStyles = SmallLoginStyles.signInContainer

  return (
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
                <div className="sign-up-forget">
                  Already have an <button onClick={ShowHidden}>account?</button>
                </div>
            
        </form>
    </div>
  )
}

export default SignUp