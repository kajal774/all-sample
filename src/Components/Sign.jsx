import React, { useState } from 'react';

const Sign = () => {
    const[inputs,setinputs]=useState({
        name:"",
        email:""
    })
    const [tabledata,settabledata]=useState([])
    const[edit,setEdit]=useState(false)
    const[editindex,seteditindex]=useState("")
    const handlechange=(e)=>{
        // console.log(e.target.value)
        setinputs(
            {
                ...inputs,[e.target.name]:e.target.value
            });
        }
        const handlesubmit=(e)=>{
            e.preventDefault();
           
            if(edit)
            {
                const tempdata =tabledata;
                Object.assign(tempdata[editindex],inputs)
                settabledata([...tempdata])
                setEdit(false)
                setinputs({name:"",email:""})
            }
            else{
                settabledata([...tabledata,inputs])
            console.log(tabledata)
            setinputs({
                name:"",email:""
            })
            }
        }
       const  handledelete=(index)=>{
        const filterdata= tabledata.filter((item,i)=>i!==index)
        settabledata(filterdata)
       }

       const handleedit=(index)=>{
        const tempdata=tabledata[index]
        setinputs({
            name:tempdata.name,
            email:tempdata.email
        })
        setEdit(true)
        seteditindex(index)

       }
    
    return (
        <div>
            <form className='p-3 m-3' onSubmit={ handlesubmit }>
            <input
             type="text"
            placeholder=' enter your name'
            name='name'
            value={inputs.name}
            onChange={handlechange} />
            <input
             type='text'
            placeholder='enter your email' 
            name='email' 
            value={inputs.email}
            onChange={handlechange} />
              
            <button type='submit' className='btn btn-success'>{edit?"update":"add"}</button>
           
            </form>
            <div>
            <table className="table" border={"1px"} style={{border:"1px solid black"}}>
                <thead>
                <tr>
                    <th>name</th>
                    <th>email</th>
                    <th>operations</th>
                </tr>
                </thead>
                <tbody>
                    {
                        tabledata.map((item,id)=>{
                            return(<tr key={id}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>
                                <button className='btn btn-danger' onClick={()=>handledelete(id)}>del</button>
                                <button className='btn btn-secondary' onClick={()=>handleedit(id)}>edit</button>
                                </td>
                            </tr>)
                        })
                    }
                    
                </tbody>
                </table>
                </div>
        </div>
    );
}

export default Sign;
