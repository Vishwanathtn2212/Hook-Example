import React, {useState} from 'react';

const HookCounter = ()=>{
    const initialCount = 0;
    const[count, setCount] = useState(0);

    const incrementFive = () =>{
        for(let i=0;i<5;i++){
            setCount(prevCount => prevCount+1);//using previous state count as a function and updating
            //setCount(count+1)-->wont work as on Single click only num is incremented by 1
        }
    }
    return(
        <div>
            Count:{count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount+1)}>Add</button>
            <button onClick={() => setCount(prevCount => prevCount-1)}>Subtract</button>
            <button onClick={incrementFive}>IncrementFive</button>
        </div>
    )
}

export default HookCounter