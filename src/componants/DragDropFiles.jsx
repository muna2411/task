import { useState, useRef } from "react";

const DragDropFiles = () => {
  const [files, setFiles] = useState(null);
  const inputRef = useRef();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFiles(event.dataTransfer.files)
  };
  
  // const handleUpload = () => {
  //   const formData = new FormData();
  //   formData.append("Files", files);
  //   console.log(formData.getAll())
   
  // };

  const handleUpload = () => {
    const formData = new FormData();
  
    // Assuming "Files" is the key you want to use on the server side
    // If your server expects a different key, replace "Files" accordingly
    Array.from(files).forEach((file, index) => {
      formData.append("Files", file);
    });};

  if (files) return (

<div className="card w-96 bg-base-100 shadow-xl" style={{border : "2px solid black"}}>
  <div className="card-body">
  <div className="uploads">
        <ul>
            {Array.from(files).map((file, idx) => <li key={idx}>{file.name}</li> )}
        </ul>
        <div className="actions">
            <button className="btn" onClick={() => setFiles(null)}>Cancel</button>
            
            <button className="btn" onClick={handleUpload}>Upload</button>
        </div>
    </div>
  </div>
</div>


  
  )

  return (
    <>
    <div className="card w-96 bg-base-100 shadow-xl" style={{border : "2px solid black"}}>
  <div className="card-body">
  <div 
            className="dropzone text-center"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
          <h1>Drag and Drop Files to Upload</h1>
          <h1>Or</h1>
          <input 
            type="file"
            multiple
            onChange={(event) => setFiles(event.target.files)}
            hidden
            accept="image/png, image/jpeg , image/jpg"
            ref={inputRef}
          />
          <button className="btn" onClick={() => inputRef.current.click()}>Select Files</button>
        </div>
  </div>
</div>
        {/* <div 
            className="dropzone"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
          <h1>Drag and Drop Files to Upload</h1>
          <h1>Or</h1>
          <input 
            type="file"
            multiple
            onChange={(event) => setFiles(event.target.files)}
            hidden
            accept="image/png, image/jpeg"
            ref={inputRef}
          />
          <button onClick={() => inputRef.current.click()}>Select Files</button>
        </div> */}
    </>
  );
};

export default DragDropFiles;