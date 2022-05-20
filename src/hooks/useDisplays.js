import { useEffect, useState } from "react";

const useDisplays = () =>{
  const [displays, setDisplays] = useState([]);

  useEffect ( ()=>{
      fetch('http:///data')
      .then(res => res.json())
      .then (data => setDisplays(data));
  }, []);
  return [displays, setDisplays]
}

export default useDisplays;