import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import DragDropFiles from './DragDropFiles';
import TaskListCard from './TaskListCard';

const TaskList = () => {
  const [tasks, setTasks] = useState(useLoaderData());

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) {
      return;
    }
  
    const updatedTasks = [...tasks];
    const [draggedTask] = updatedTasks.splice(source.index, 1);
  
    if (source.droppableId !== destination.droppableId) {

      draggedTask.status = destination.droppableId === 'ongoing-tasks' ? 'ongoing' : 'other-status';
      setTasks(updatedTasks);
    } else {
     
      updatedTasks.splice(destination.index, 0, draggedTask);
      setTasks(updatedTasks);
    }
  };
  

  const allTasks = tasks.filter((task) => task.status !== 'ongoing');
  const ongoingTasks = tasks.filter((task) => task.status === 'ongoing');

  return (
    <div>
      <DragDropFiles />
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-3">
          <div>
            <p className='text-[30px] font-b mt-[50px]'>All Task List :</p>
            <Droppable droppableId="all-tasks" direction="vertical">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps} className="grid lg:grid-cols-1 sm:grid-cols-1 mb-[200px]">
                  {allTasks.map((task, index) => (
                    <Draggable key={task._id} draggableId={task._id} index={index}>
                      {(provided) => (
                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <TaskListCard task={task} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
          <div>
            <p className='text-[25px] font-b mt-[50px]'>TO-Do Task List :</p>
            <Droppable droppableId="todo-tasks" direction="vertical">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps} className="grid lg:grid-cols-1 sm:grid-cols-1 mb-[200px]">
                  {ongoingTasks.map((task, index) => (
                    <Draggable key={task._id} draggableId={task._id} index={index}>
                      {(provided) => (
                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <TaskListCard task={task} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
          <div>
            <p className='text-[25px] font-b mt-[50px]'>Ongoing Task List :</p>
            <Droppable droppableId="ongoing-tasks" direction="vertical">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps} className="grid lg:grid-cols-1 sm:grid-cols-1 mb-[200px]">
                  {ongoingTasks.map((task, index) => (
                    <Draggable key={task._id} draggableId={task._id} index={index}>
                      {(provided) => (
                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <TaskListCard task={task} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
          <div>
            <p className='text-[25px] font-b mt-[50px]'>Completed Task List :</p>
            <Droppable droppableId="continue-tasks" direction="vertical">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps} className="grid lg:grid-cols-1 sm:grid-cols-1 mb-[200px]">
                  {ongoingTasks.map((task, index) => (
                    <Draggable key={task._id} draggableId={task._id} index={index}>
                      {(provided) => (
                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <TaskListCard task={task} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </div>
      </DragDropContext>
    </div>
  );
};

export default TaskList;







// import { useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import DragDropFiles from './DragDropFiles';
// import TaskListCard from './TaskListCard';

// const TaskList = () => {
//   const [tasks, setTasks] = useState(useLoaderData());

//   const onDragEnd = (result) => {
//     const { source, destination } = result;
//     if (!destination) {
//       return;
//     }
  
//     const updatedTasks = [...tasks];
//     const [draggedTask] = updatedTasks.splice(source.index, 1);
  
//     // Check if the task is dropped in a different droppable
//     if (source.droppableId !== destination.droppableId) {
//       // Update the status of the dragged task based on the destination droppable
//       draggedTask.status = destination.droppableId === 'ongoing-tasks' ? 'ongoing' : 'other-status';
//       setTasks(updatedTasks);
//     } else {
//       // If the task is dropped in the same droppable, move it to the new position
//       updatedTasks.splice(destination.index, 0, draggedTask);
//       setTasks(updatedTasks);
//     }
//   };
  

//   const allTasks = tasks.filter((task) => task.status !== 'ongoing');
//   const ongoingTasks = tasks.filter((task) => task.status === 'ongoing');

//   return (
//     <div>
//       <DragDropFiles />
//       <DragDropContext onDragEnd={onDragEnd}>
//         <div className="grid grid-cols-3">
//           <div>
//             <p className='text-[30px] font-b mt-[50px]'>All Task List :</p>
//             <Droppable droppableId="all-tasks" direction="vertical">
//               {(provided) => (
//                 <div ref={provided.innerRef} {...provided.droppableProps} className="grid lg:grid-cols-1 sm:grid-cols-1 mb-[200px]">
//                   {allTasks.map((task, index) => (
//                     <Draggable key={task._id} draggableId={task._id} index={index}>
//                       {(provided) => (
//                         <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
//                           <TaskListCard task={task} />
//                         </div>
//                       )}
//                     </Draggable>
//                   ))}
//                   {provided.placeholder}
//                 </div>
//               )}
//             </Droppable>
//           </div>
//           <div>
//             <p className='text-[25px] font-b mt-[50px]'>TO-Do Task List :</p>
//             <Droppable droppableId="todo-tasks" direction="vertical">
//               {(provided) => (
//                 <div ref={provided.innerRef} {...provided.droppableProps} className="grid lg:grid-cols-1 sm:grid-cols-1 mb-[200px]">
//                   {ongoingTasks.map((task, index) => (
//                     <Draggable key={task._id} draggableId={task._id} index={index}>
//                       {(provided) => (
//                         <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
//                           <TaskListCard task={task} />
//                         </div>
//                       )}
//                     </Draggable>
//                   ))}
//                   {provided.placeholder}
//                 </div>
//               )}
//             </Droppable>
//           </div>
//           <div>
//             <p className='text-[25px] font-b mt-[50px]'>Ongoing Task List :</p>
//             <Droppable droppableId="ongoing-tasks" direction="vertical">
//               {(provided) => (
//                 <div ref={provided.innerRef} {...provided.droppableProps} className="grid lg:grid-cols-1 sm:grid-cols-1 mb-[200px]">
//                   {ongoingTasks.map((task, index) => (
//                     <Draggable key={task._id} draggableId={task._id} index={index}>
//                       {(provided) => (
//                         <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
//                           <TaskListCard task={task} />
//                         </div>
//                       )}
//                     </Draggable>
//                   ))}
//                   {provided.placeholder}
//                 </div>
//               )}
//             </Droppable>
//           </div>
//           <div>
//             <p className='text-[px] font-b mt-[50px]'>Completed Task List :</p>
//             <Droppable droppableId="continue-tasks" direction="vertical">
//               {(provided) => (
//                 <div ref={provided.innerRef} {...provided.droppableProps} className="grid lg:grid-cols-1 sm:grid-cols-1 mb-[200px]">
//                   {ongoingTasks.map((task, index) => (
//                     <Draggable key={task._id} draggableId={task._id} index={index}>
//                       {(provided) => (
//                         <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
//                           <TaskListCard task={task} />
//                         </div>
//                       )}
//                     </Draggable>
//                   ))}
//                   {provided.placeholder}
//                 </div>
//               )}
//             </Droppable>
//           </div>
//         </div>
//       </DragDropContext>
//     </div>
//   );
// };

// export default TaskList;
