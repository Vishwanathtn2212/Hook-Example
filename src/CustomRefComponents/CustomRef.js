import React,{ useState, useRef, useEffect} from 'react';

function CustomRef() {
    const [count, setCount] = useState(0);
  
    const prevCountRef = useRef();
    useEffect(() => {
      prevCountRef.current = count;
    });
    const prevCount = prevCountRef.current;
  
    return(
        <div>
            <h1>Now: {count}, before: {prevCount}</h1>
            <button onClick={() => setCount(count+1)}>Press Me!</button>
            <h1>{count}</h1>
        </div>
    )
  }

export default CustomRef