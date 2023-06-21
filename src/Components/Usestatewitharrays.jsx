import React, { useState } from 'react';

const Usestatewitharrays = () => {
    const[items,setitems]=useState([]);
    console.log(items)
    function handlesubmit(){
        setitems([...items,{id:items.length,value:Math.random()}])
    }
    return (
        <div>
            <ol>
                {
                    items.map(ele=>{
                        <li key={ele.i}>{ele}</li>
                        return[ele.id,ele.value]
                    })}
            </ol>
            <button type='submit' onClick={handlesubmit}>submit</button>
        </div>
    );
}

export default Usestatewitharrays;
