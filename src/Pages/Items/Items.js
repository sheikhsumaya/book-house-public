import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Items.css'

const Items = () => {
  const [items, setItems] = useState([]);

  useEffect(()=>{
    fetch('https://serene-coast-92793.herokuapp.com/data')
    .then(res => res.json())
    .then(data => setItems(data));
  },[])
  return (
    <div className="mt-3 pt-5 mb-5"> 
    <h1 className="text-dark text-center py-4 mb-3">Our All Items</h1>
    <hr className="border border-4 border-dark rounded-pill w-25 m-auto" />
     <div className="container item-container mt-5">
     {
        items.map(item => <Item
        key={item._id}
        item={item}
        ></Item>)
      }
     </div>
    </div>
  );
};

export default Items;