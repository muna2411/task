import { FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

import { Draggable } from 'react-beautiful-dnd';

const Ongoing = ({ p, index }) => {
    const { _id, name, description, ratings } = p;
    return (
        <Draggable key={_id} draggableId={_id} index={index}>
        {(provided) => (
            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
      
                    <div className='my-[30px]'></div>
            <div className='my-[30px]'>
                
        <div className="card w-[350px] bg-base-100 shadow-xl">
           
        

                <div className="card-body">
                       <div className='w-[350px] h-[50px] bg-[#FFD700] ml-[-32px] rounded-t-10' >
                       <h2 className="text-[19px] text-center text-black font-b mt-[7px]">Task Name : {name}</h2>
                       </div>
                        <p className="text-black text-start"> {description}</p>
                        <Rating className=" mt-[20px]"
                  emptySymbol={<FaStar color="gray" size={20} />}
                  fullSymbol={<FaStar color="gold" size={20} />}
                  readonly
                  initialRating={ratings}
                />
                    <div className="card-actions justify-end">
                    <Link to={`/update/${_id}`}> <button className="btn">Update</button></Link>
                   
                    </div>    
                </div>
            </div>

        </div>
       
        </div>
      
       )}
   </Draggable>
    );
};

export default Ongoing;