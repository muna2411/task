import { useContext } from "react";
import { FaEnvelope, FaHome,FaSearch } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "./AuthProvider";




const Dashboard = () => {
    const {user} =useContext(AuthContext);

    return (
        <div className="flex">

            <div className="w-[280px] min-h-screen  text-black font-b " style={{border:'1px solid black' , backgroundImage: 'url(https://i.ibb.co/WDdGT0j/Light-Goldenrod-Yellow-Playful-Have-A-Nice-Day-Phone-Wallpaper.png)'}} >
                <ul className=" menu p-4">
                   


        <>

{/* <img className="h-[100px]" src="https://i.ibb.co/52x7MwJ/r13.png"></img> */}
<img
                className="w-[60px] h-[60px] mx-auto"
                style={{ borderRadius: "50%" }}
                src={user.photoURL} 
                alt="Profile"
              />
              <p className="text-center mt-[10px]">{user.displayName}</p>
              <p className="text-center mt-[50px] text-[25px] divider"> Dashboard</p>
                                <div className="mt-[40px]">
                                <li  className="text-[18px] my-[15px] font-b hover:bg-gray-300">
                                    <NavLink to="/dashboard/createTask">
                                        <FaHome></FaHome>
                                        Create Task</NavLink>
                                </li>
                                <li  className="text-[18px] my-[15px] font-b">
                                    <NavLink to="/dashboard/taskList">
                                        <FaHome></FaHome>
                                        Task List</NavLink>
                                </li>
                                
                                </div>
                               

                            </>
 
                            <div className="divider bg-[#FFD700] h-[2px]"></div>

<li  className="text-[18px] my-[10px] font-b">
    <NavLink to="/">
        <FaHome></FaHome>
        Home</NavLink>
</li>

<li  className="text-[18px] my-[10px] font-b ">
    <NavLink to="/contact">
        <FaEnvelope></FaEnvelope>
        Contact</NavLink>
</li>
                   
                  

                
                </ul>
            </div>
           
            <div className="flex-1 p-8">
                <Outlet></Outlet>
                
            </div>
            
        </div>
    
    );
 };

export default Dashboard;