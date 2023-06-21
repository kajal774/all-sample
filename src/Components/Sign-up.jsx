import React, { useState } from 'react';

const SignUp = () => {
    const[datas,setdata]=useState([])//tabledata
    const [input,setinput]=useState({
        fname:"",
        email:""
    })
    const[toggle,settoggle]=useState(false)
    const[editedi,seteditedi]=useState("")
   //tabledata
    function handlechange(e){
      
       setinput(
        {
            ...input,[e.taget.name]:e.target.value
        }
       )
       console.log(input)
    }
    
    let {fname,email}=input
    function handlesubmit(e){
        e.preventDefault();
        if(toggle){
            const temptabledata= datas;
            Object.assign(temptabledata[editedi],input)
            setdata([...datas,input])
            setinput({
                fname:"",
                email:""
            })
        }
        else{
            setdata([...datas,{fname,email}])
      
      console.log(datas)
     let  newdata={fname:"",email:""}
      setinput(newdata)

        }
        

    }

    function handledelete(id){
        console.log(id)
        const updatedlist= datas.filter((data,i)=>{
            return id!==i
        })
        setdata(updatedlist)

    }
    function handleedit(id){
        let newedititem=datas[id]
            // console.log(newedititem,"new edit item")
            setinput(
                {
                    fname:newedititem.fname,
                    email:newedititem.email
                }
            )
            settoggle(true)
            seteditedi(id)
           

        }


    
    return (
        <div>
            <h1>sign-up</h1>
            <form className='p-3 m-3' onSubmit={ handlesubmit }>
            <input type="text" placeholder=' enter your name' name='fname' value={input.fname}
             onChange={handlechange} />
            <input type='text' placeholder='enter your email' name='email' value={input.email}
             onChange={handlechange} />
              
            <button type='submit' className='btn btn-success'>{toggle?"update":"add"}</button>
           
            </form>
            <table className="table" border={"1px"} style={{border:"1px solid black"}}>
                <thead>
                <tr>
                    <th>name</th>
                    <th>email</th>
                    <th>operations</th>
                </tr>
                </thead>
                <tbody>
                
            
                {datas.map((data,id)=>{
                    
                    return(<tr key={id}> 
                        <td >{data.fname}</td>
                        <td>{data.email}</td>
                        <td><button className='btn btn-danger' onClick={()=>handledelete(id)}>del</button> <button className='btn btn-secondary' onClick={()=>handleedit(id)}>edit</button>
                        </td>
                    </tr> ) 
                   
                    })
                
                }

                
                </tbody>
            </table>
        </div>
    );
}

export default SignUp;
