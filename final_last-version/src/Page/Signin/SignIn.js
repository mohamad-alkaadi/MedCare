import React,{useState,useRef,useEffect} from 'react'
import './signin-css/signin.css'

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
    const SignInHeight = useHeightWindowSize();
    const LoginStyles = { signInContainer:{ height:SignInHeight, backgroundColor:"#ecfafe"} }
    // const LoginStyles = {
    //     signInContainer:{
    //         height:{SignInHeight},
    //         backgroundColor:"red",
    //     }
    // }

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
      <form>
        <div className='sign-in grid-system'>
            <div className='signin-title'>
                MedCare
            </div>
            <div className='sign-in-email'>
                    {/* <label htmlFor='signin-email' className="signin-email-label">
                        Email
                    </label> */}
                    {/* <br/> */}
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
                    {/* <label htmlFor='signin-password' className="signin-password-label">
                        Password
                    </label> */}
                    {/* <br/> */}
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
                  Forgot <a href='#'>Email / Password?</a>
                </div>
            
        </div>
        </form>
    </div>
  )
}

export default SignIn