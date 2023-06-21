import React, { useState } from 'react';

const UsestatewithObjects = () => {
    const [allvalue,setvalue]=useState({
        firstname:"kajal",
        lastname:"shree"
    })
    const add=()=>{
        setvalue({...allvalue,firstname:"anuma"})

    }
    return (
        <div>
            <h1>firstname {allvalue.firstname} and last name is {allvalue.lastname}</h1>
            <button onClick={add} >update</button>
        </div>
    );
}

export default UsestatewithObjects;
