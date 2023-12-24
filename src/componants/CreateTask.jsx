import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";
import Rating from "react-rating";
import { FaStar } from "react-icons/fa";

const CreateTask = () => {
    const {user} = useContext(AuthContext);
    const [ratings, setRatings] = useState(0);

    const handleAddBook = event =>{
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const description = form.description.value;
      const ratings = form.ratings.value;
  
      const users = {name,description,ratings};
      console.log(user);
    
      fetch('http://localhost:5000/menu',{
        method: 'POST',
        headers:{
          'content-type' : 'application/json'
        },
        body:JSON.stringify(users)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.insertedId){
          Swal.fire({
            title: 'Done!',
            text: 'Information added successfully',
            icon: 'success',
            confirmButtonText: 'OK'
          })
        }
        form.reset();
      });
  }
  


    return (
      <div>
      
        <div className='flex justify-between items-center'>
          
           
   <div className="hero lg:w-[1100px] sm:w-[630px] h-[750px] " >
  <div >
    <div >
    <form onSubmit={handleAddBook} className=" lg:m-[50px] sm:m-[10px]">
              <div className="form-control m-[20px] lg:w-[800px] sm:w-[500px] ">
                <label className="label">
                  <span className="label-text text-[20px] text-black font-semibold">Task Name</span>
                </label>
                <input type="text" placeholder="Type Task name " name="name" className="input input-bordered " style={{ border: "1px solid black" }} required />
              </div>

              
              <div className="form-control m-[20px] lg:w-[800px] sm:w-[500px]">
                <label className="label">
                  <span className="label-text text-[20px] text-black font-semibold">Ratings Of Task Type</span>
                </label> 
                <Rating
                  emptySymbol={<FaStar color="gray" size={30} />}
                  fullSymbol={<FaStar color="gold" size={30} />}
                  initialRating={ratings}
                  onChange={(value) => setRatings(value)} 
                />
               <input type="hidden" name="ratings" value={ratings} />
              </div> 
            
              

              <div className="form-control m-[20px] lg:w-[800px] sm:w-[500px]">
                <label className="label">
                  <span className="label-text text-[20px] text-black font-semibold">Task Description</span>
                </label>
                {/* <input type="text" placeholder="Type description" name="description" className="input input-bordered" style={{ border: "1px solid black" }} required /> */}
                <textarea className="textarea textarea-bordered" type="text" placeholder="Type description" name="description" style={{ border: "1px solid black" }} required/>
              </div>


             <div> <input type="submit" value="Create Task" className="btn bg-[#FFD700] text-black font-b form-control lg:mt-[50px] sm:mt-[30px] w-[150px] h-[60px]  ml-[20px]"  style={{ border: "2px solid black" }}/>
             </div>
        </form> 
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default CreateTask;