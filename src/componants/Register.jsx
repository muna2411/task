import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { FaEye ,FaEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [registerError , setRegisterError] = useState(" ");
  const [success,setSuccess]=useState(" ");
    const [showPass,setShowPass] = useState(false);
    const {createUser} = useContext(AuthContext);
    //console.log({createUser})
    const handleRegisterbtn = () =>{
        toast('Welcome in our community');
       }
       
    
        const handleRegister = e =>{
            e.preventDefault();
            const email = e.target.email.value;
            const pass = e.target.password.value;
            const name = e.target.name.value;
            const image = e.target.image.value;

if(pass.length < 6){
    setRegisterError('password should be more than 6 character');
    return;
}
else if(! /[A-Z]/.test(pass)){
  setRegisterError('password should be at least one Uppercase letter');
  return;
}
else if(!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(pass)){
  setRegisterError('password should be at least one special character');
  return;
}

        setRegisterError(" ");
        setSuccess(" ");
           
           createUser(email , pass ,name,image)
           .then(result =>{
            console.log(result.user);
            setSuccess("successful")
        //     const createdAt = result.product?.metadata?.creationTime;
        //     const product = {email,createdAt:createdAt};
        //     fetch('https://brandshop-server-fr82m9ihx-munas-projects.vercel.app/product' ,{
        //       method: 'POST',
        //       headers:{
        //         'content-type' : 'application/json'
        //       },
        //       body:JSON.stringify(product)
        //     })
        //     .then(res => res.json())
        //     .then(data =>{
        //       console.log(data)
        //     })
            })
           .catch(error =>{
            console.log(error);
            setRegisterError(error.message);
           })
           
        }
        return (
            <div className="lg:flex justify-between items-center">
                
                <div className="lg:w-[960px] mt-[100px] sm:w-[425px]  justify-between items-center" >
                {/* <div className="divider lg:w-[600px] sm:w-[450px] lg:mx-[180px] sm:mx-[100px] ">  <h2 className="text-black text-[60px] font-bold ">Wish</h2> </div> */}
                    <p className="text-center  text-[40px] font-a text-black">Register</p>
                    <form onSubmit={handleRegister} className="lg:w-[500px] lg:h-[600px] lg:mx-[250px] sm:w-[400px]">
                    <div className="form-control sm:ml-[100px] lg:ml-[0px]">
                <label className="label ">
                  <span className="label-text text-[18px] font-b">Name</span>
                </label>
                <input 
                type="text" 
                placeholder="name" 
                name="name" 
                className="input input-bordered " required />
              </div>
              <div className="form-control sm:ml-[100px] lg:ml-[0px]">
                <label className="label ">
                  <span className="label-text text-[18px] font-b">Photo</span>
                </label>
                <input 
                type="text" 
                placeholder="photo" 
                name="image" 
                className="input input-bordered " required />
              </div>
              <div className="form-control sm:ml-[100px] lg:ml-[0px]">
                <label className="label ">
                  <span className="label-text text-[18px] font-b">Email</span>
                </label>
                <input 
                type="email" 
                placeholder="email" 
                name="email" 
                className="input input-bordered " required />
              </div>
              

              <div className="form-control  sm:ml-[100px] lg:ml-[0px]">
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
                <button onClick={handleRegisterbtn} className="btn bg-[#FFD700] text-black font-b " style={{border:"2px solid black"}}>Submit</button>
              </div>
              {
                registerError && <p className="text-red-700 text-[18px]">{registerError}</p>
              }
              {
                success && <p className="text-green-700 text-[18px]">{success}</p>
              }
              <div className="divider sm:ml-[100px] lg:ml-[0px] font-b">OR</div>
              <p className="text-[18px] sm:ml-[100px] lg:ml-[0px] font-b" >Already have an account ?  <Link className="text-[blue]  underline underline-offset-4 ..." to="/login">Login</Link></p>
            
            </form>
            
                </div>

                <div className="lg:mt-[-150px] sm:mt-[50px]">
                <img src="r.gif" alt="Your GIF" />
                </div>
                <ToastContainer />
            </div>
        );
};

export default Register;