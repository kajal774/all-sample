
import React from 'react';

const Tabledata = () => {
    const  handledelete=(index)=>{
        const filterdata= tabledatas.filter((item,i)=>i!==index)
        settabledata(filterdata)
       }

       const handleedit=(index)=>{
        const tempdata=tabledatas[index]
        setinputs({
            name:tempdata.name,
            email:tempdata.email
        })
        setEdit(true)
        seteditindex(index)

       }
       console.log(tabledatas)
       
    return (
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
                    tabledatas.map((item,id)=>{
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
    );
}

export default Tabledata;
