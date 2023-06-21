import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom"



const Form = () => {
    const [inputs, setinputs] = useState({
        fname: "",
        email: ""
    })
    const [total,settotal]=useState([])
    let navigate = useNavigate()
    let handlechange = (e) => {
        setinputs({ ...inputs, [e.target.name]: e.target.value })
        // console.log(inputs)
    }
    const handlesubmit = () => {
        
            const{fname,email}=inputs
            if (fname && email) {
                const newData = {
                  fname: fname,
                  email: email
                };
            total.push(newData);

            if(total)
            {
        
            (inputs.fname === "" || inputs.email === "") ? navigate("/") : navigate("/Datatable",{state:{total}})
            }
            
        
        
    }
}

    return (<>
        <div>
            <input type="text" name='fname' value={inputs.fname} onChange={handlechange} placeholder='enter your name'
             autoComplete='off' />
            <input type="email" name='email' value={inputs.email} onChange={handlechange} placeholder='enter your email'
            autoComplete='off' />
            <button onClick={() => handlesubmit()}>submit</button>
            <Link to={"/Datatable"} state={{total:total,inputs:inputs}}/>

        </div>
        
        
        
        
        
        
        </>
        
    );
}


export default Form;
