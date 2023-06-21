import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const DataTable = (props) => {
    const location =useLocation()

const [display,setdisplay]=useState(location.state.total)
const [editid,seteditid]=useState(null)
const[editformdata,seteditformdata]=useState({ fname:"",email:""})

   const handledelete=(id)=>{
    location.state.total.splice(id, 1);
    console.log(location.state.total)
    setdisplay({display:display})
    }

   const handleeditform=(e)=>{
    e.preventDefault();
    seteditformdata({ ...editformdata, [e.target.name]: e.target.value })
    }

    const handleEditclick=(event,items,id)=>{
        event.preventDefault();
       seteditid(id)
       const formvalue={
        fname:items.fname,
        email:items.email
       }
       seteditformdata(formvalue)
    } 
    const handleeditformsubmit=(e)=>{
        e.preventDefault();
        const editedcontact={
            id:editid,
            fname:editformdata.fname,
            email:editformdata.email
        }
        // console.log(editedcontact)
        const newContact=[...display];
        console.log(newContact)
            const index= display.findIndex((total)=>
                 total.id===editid)
            // console.log(index)
        newContact[index]=editedcontact
        
        setdisplay(newContact)
        seteditid(null)
    }
    const handlecancle=()=>{
        seteditid(null)
    }
    return (
        <div>
            <form onSubmit={handleeditformsubmit}>
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
                       location.state.total.map((item,id)=>(<>
                        {
                            (editid===id)?
                            <tr key={id}>
                            <td><input type="text"  placeholder='enter the name' name='fname' value={editformdata.fname} onChange={handleeditform} /></td>
                            <td><input type="email" placeholder='enter the email' name='email'value={editformdata.email} onChange={handleeditform} /></td>
                            <td><button type='submit'  >save</button> <button onClick={()=>handlecancle}>cancle</button></td>
                        </tr>:
                        <tr key={id}>
                        <td>{item.fname}</td>
                        <td>{item.email}</td>
                        <td>
                        <button className='btn btn-danger' onClick={()=>handledelete(id)}>del</button>
                        <button className='btn btn-secondary' onClick={(e)=>handleEditclick(e,item,id)}>edit</button>
                        </td>
                     </tr>
                         }
                         </>) 
                     )
                }
                
                    
                </tbody>
                </table>
                </form>
        </div>
    );
}

export default DataTable;
