import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { Link } from "react-router-dom";
import { FaEye ,FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  
  const [success,setSuccess]=useState(" ");
  const [loginError, setLoginError] = useState('');

    const [showPass,setShowPass] = useState(false);
    const {signIn} = useContext(AuthContext);
    //console.log({signIn})
    
        const handleSignIn = e =>{
            e.preventDefault();
            const email = e.target.email.value;
            const pass = e.target.password.value;

            signIn(email , pass)
            .then(result =>{
                console.log(result.user);
                setSuccess("successful");
            })
            .catch(error =>{
                console.error("Error signing in:", error.code, error.message);
                setLoginError('Email or password is incorrect');
            })
    
        }
        return (
            <div className="lg:flex justify-between items-center">
                <div className="lg:mt-[-150px] ml-[80px] sm:mt-[50px]">
                <img  src="j.gif"></img>
                </div>
                <div className="lg:w-[960px]  sm:w-[425px]  justify-between items-center" >
                
                    <p className="text-center mt-[100px] text-[40px] font-bold text-black font-a">Sign In</p>
                    <form onSubmit={handleSignIn} className="lg:w-[500px] lg:h-[600px] lg:mx-[250px] sm:w-[400px]">
              <div className="form-control sm:ml-[100px] lg:ml-[0px]">
                <label className="label">
                  <span className="label-text text-[18px] font-b">Email</span>
                </label>
                <input 
                type="email" 
                placeholder="email" 
                name="email" 
                className="input input-bordered" required />
              </div>
    
              <div className="form-control sm:ml-[100px] lg:ml-[0px]">
                <label className="label">
                  <span className="label-text text-[18px] font-b">Password</span>
                </label>

              <div className="flex">
              <input  type={showPass ? "text" : "password"} placeholder="password" name="password" className="input input-bordered w-[500px]" required />
                <span className=" top-[20px] ml-[-30px] mt-[15px]" onClick={() => setShowPass (!showPass)}>
                  {
                    showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                  }
                </span>
              </div>
              </div>

              <div className="form-control mt-6 lg:w-[500px] h-[80px] sm:ml-[100px] lg:ml-[0px] sm:w-[310px]">
                <button className="btn bg-[#FFD700] text-black font-b " style={{border:"2px solid black"}}>Login</button>
              </div>
              
              {
                success && <p className="text-green-700 text-[18px]">{success}</p>
              }
              {
                loginError && <p className="text-red-700 text-[18px]">{loginError}</p>
              }
              <div className="divider sm:ml-[100px] lg:ml-[0px] font-b">OR</div>
              <p className="text-[18px] sm:ml-[100px] lg:ml-[0px] font-b" >Create an Account   <Link className="text-[blue]  underline underline-offset-4 ..." to="/register">Register</Link></p>
            </form>
                </div>
                
            </div>
        );
};
export default Login;