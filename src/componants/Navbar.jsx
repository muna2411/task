import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../firebase.config";
import { useContext} from "react";
import { AuthContext } from "./AuthProvider";
import { Link } from "react-router-dom";
//import ProfileModal from "./ProfileModal";


const Navbar = () => {
    const provider = new GoogleAuthProvider();
     const handleButton = () =>{
          signInWithPopup(auth,provider)
          .then(result => {
               console.log(result.user);
              
          })
          .catch(error => {
              console.log('error',error.message)
          })
      }

   const {user, logOut} =useContext(AuthContext);
   const handleSignOut = () =>{
      logOut()
      .then()
      .catch()
   }

  

   
   

    return (
        <div>

{/* navbar */}

            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
  <Link to="/"> <li className="font-b"><a>Home</a></li></Link>
   <Link to="/register"> <li className="font-b"><a>Register</a></li></Link>
   <Link to="/login"> <li className="font-b"><a>Login</a></li></Link>
   <Link to=""> <li className="font-b"><a>Contact</a></li></Link>
      </ul>
    </div>
    <img className="w-[200px]" src="https://i.ibb.co/6Hq1tky/Your-paragraph-text-1-removebg-preview.png" ></img>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
   <Link to="/"> <li className="font-b"><a>Home</a></li></Link>
   <Link to="/register"> <li className="font-b"><a>Register</a></li></Link>
   <Link to="/login"> <li className="font-b"><a>Login</a></li></Link>
   <Link to=""> <li className="font-b"><a>Contact</a></li></Link>
    </ul>
  </div>
  <div className="navbar-end">
  {/* {
      user && <div className="flex justify-center items-center mx-[10px]  ">
            <div> <img className="w-[60px] h-[60px] mx-[10px]"style={{ borderRadius: "50%"}} src={user.photoURL}></img> </div>
            <div> <p className="text-[18px] text-black">{user.displayName}</p></div>
          </div>
      }  */}

{user && (
          <div className="flex justify-center items-center mx-[10px]">
            <div  onClick={()=>document.getElementById('my_modal_1').showModal()}>
            <dialog id="my_modal_1" className="modal ">
  <div className="modal-box w-[400px] ">
  <div className="modal-action">
      <form method="dialog">
        <button className="btn bg-[#FFD700]" style={{ borderRadius: "50%" , border :'2px solid black'}}>X</button>
      </form>
  
    </div>
  <img
                className="w-[100px] h-[100px] mx-auto"
                style={{ borderRadius: "50%" }}
                src={user.photoURL} 
                alt="Profile"
              />
              <div className="divider"></div>
              <p className="text-[18px] text-black">User Name : {user.displayName}</p>
              <p className="text-[16px] text-black">Last Sign-In Time : {user.metadata.lastSignInTime}</p>
              <Link to="/dashboard"><button className="btn mt-[40px] w-[150px] bg-[#FFD700] font-b text-black ">See Projects</button></Link>

    {/* <div className="modal-action">
      <form method="dialog">
        if there is a button in form, it will close the modal
        <button className="btn bg-[#FFD700]" style={{ borderRadius: "50%" , border :'2px solid black'}}>X</button>
      </form>
  
    </div> */}
  </div>
</dialog>
              <img
                className="w-[60px] h-[60px] mx-[10px]"
                style={{ borderRadius: "50%" }}
                src={user.photoURL} 
                alt="Profile"
              />
            </div>
            <div>
              <p className="text-[18px] text-black">{user.displayName}</p> 
            </div>
          </div>
        )}

{
       user ? 
       <button onClick={handleSignOut} className="btn   bg-[#FFD700] font-b text-black " style={{ border: "3px solid black" }}>Sign Out</button> :
       <button onClick={handleButton} className="btn   bg-[#FFD700] font-b text-black ml-[350px]" style={{ border: "3px solid black" }}>Sign in with Google</button>
} 

  </div>
 
</div>

 



{/* banner */}

{/* <div className="flex justify-around items-center mt-[30px]">
    <div className="ml-[100px]">
     <p className="text-[60px] font-a text-black">Learn & <br/>Explore Your <br/>Own <span className="text-[#FFD700]">Creativity </span>.</p>
     <button className="btn mt-[40px] w-[150px] bg-[#FFD700] font-b text-black" style={{border :'2px solid black'}}>Lets Explore</button>
    </div>
    <div>
    <img src="u.gif" alt="Your GIF" />
    </div>
</div> */}




        </div>
    );
};

export default Navbar;