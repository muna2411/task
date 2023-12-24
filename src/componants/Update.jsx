import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

import Rating from "react-rating";
import { FaStar } from "react-icons/fa";


const Update = () => {
    const item = useLoaderData();
    console.log(item)

    const { _id,name,description,ratings} = item;

    
    const handleUpdateProduct = event => {
        event.preventDefault();

        const form = event.target;
      const name = form.name.value;
      const description = form.description.value;
      const ratings = form.ratings.value;
  
      const updated = {name,description,ratings};
      console.log(updated);


       

  
        fetch(`https://task-server-tau-ten.vercel.app/menu/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updated)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Data Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                }
                form.reset();
            })
    }



    return (
        <div>
      
        <div className='flex justify-between items-center'>
          
           
   <div className="hero lg:w-[1100px] sm:w-[630px] h-[750px] " >
  <div >
    <div >
    <form onSubmit={handleUpdateProduct} className=" lg:m-[50px] sm:m-[10px]">
    <div className="form-control m-[20px] lg:w-[500px] sm:w-[500px]">
                         <label className="label">
                           <span className="label-text text-[20px] text-[#A0522D] font-semibold">Task Name</span>
                         </label>
                         <input type="text" placeholder="Type name" name="productname" defaultValue={name} className="input input-bordered "  required />
            </div>

              
            <div className="form-control ">
                <label className="label">
                  <span className="label-text text-[20px] text-[#A0522D]font-semibold">Ratings</span>
                </label>
                <Rating
                  emptySymbol={<FaStar color="gray" size={30} />}
                  fullSymbol={<FaStar color="gold" size={30} />}
                  initialRating={ratings}
                 
                />
                <input type="hidden" name="ratings"  defaultValue={ratings}/>
              </div>
            
              

              <div className="form-control m-[20px] lg:w-[500px] sm:w-[500px]">
                         <label className="label">
                           <span className="label-text text-[20px] text-[#A0522D] font-semibold">Task Description</span>
                         </label>
                         <input type="text" placeholder="Type description" name="description" defaultValue={description} className="input input-bordered"   required />
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

export default Update;