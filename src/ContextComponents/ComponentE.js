import React, {useContext} from 'react';
import ComponentF from './ComponentsF';
import { UserContext, channelContext } from '../App';

const ComponentE = () =>{
    const user = useContext(UserContext)
    const channel = useContext(channelContext)

    return(
        <div>
            {/* <ComponentF /> */}
            {user}-{channel}
        </div>
    )
}

export default ComponentE