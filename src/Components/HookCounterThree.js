import React, {useState} from 'react';

const HookCounterThree = () =>{
    const [name, setName]=useState({firstName:"",lastName:""});
    //useState does not automatically run the merge object as in case of setState in class Components
    
    return (
        <div>
            <input 
                type="text"
                value={name.firstName}
                onChange={ e => setName({...name, firstName: e.target.value })}
            />
            <input 
                type="text"
                value={name.lastName}
                onChange={ e => setName({...name, lastName: e.target.value })}
            />
            <h3>Your First name --> {name.firstName}</h3>
            <h3>Your Second name --> {name.lastName}</h3>
            <h3>{JSON.stringify(name)}</h3>
        </div>
    )
}

export default HookCounterThree