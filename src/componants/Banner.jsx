import { Link } from "react-router-dom";


const Banner = () => {
  
    return (
        <div>
           <div className="flex justify-around items-center mt-[30px]">
    <div className="ml-[100px]">
     <p className="text-[60px] font-a text-black">Learn & <br/>Explore Your <br/>Own <span className="text-[#FFD700]">Creativity </span>.</p>
     <Link to="/dashboard"><button className="btn mt-[40px] w-[150px] bg-[#FFD700] font-b text-black" style={{border :'2px solid black'}}>Lets Explore</button></Link>
    </div>
    <div>
    <img src="u.gif" alt="Your GIF" />
    </div>
</div> 
        </div>
    );
};

export default Banner;