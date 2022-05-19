import React from 'react';
import useDisplays from '../../hooks/useDisplays';
import './ManageServices.css'

const ManageServices = () => {
  const [displays, setDisplays] = useDisplays();

 
  const handleDelete = id =>{
    const proceed = window.confirm('Are you sure?');
    if(proceed){
     const url =`http://localhost:5000/data/${id}`;
     fetch(url, {
       method: 'DELETE'
     })
     .then(res => res.json())
     .then(data => {
       console.log(data);
       const remaining = displays.filter(display => display._id !== id)
       setDisplays(remaining);
     })
    }

  }

  return (
    <div className='w-50 mx-auto mb-5'>
      <h1 className='manage-top'>Manage Your Services</h1>
      {
        displays.map(display => <div
        key={display._id}>
          <h4>{display.name}
          <button className='mx-2'
            onClick={() => handleDelete(display._id) }
          >Delete</button>
           </h4>
        </div> )
      }
    </div>
  );

};

export default ManageServices;