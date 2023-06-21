import React, { Component } from 'react';
import "./index.css"

class ComponentSignup extends Component {
    constructor(props){
        super(props)
        this.state={
            formData: [],
            fname:"",
            email:"",
            editIndex: null,
            
            
        }
    }
    handleinputs=(e)=>{
        this.setState({[e.target.name]:e.target.value})
        

    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const { fname, email,formData,editIndex} = this.state;

        //   const newData = {
        //     fname: fname,
        //     email: email,
        //   };
          
        //   this.setState(prevState => ({
        //     formData: [...prevState.formData, newData],
        //     fname:"",
        //     email:"",
        //     editIndex: null
        // }))
        if (fname && email) {
            const newData = {
              fname: fname,
              email: email
            };
      
            if (editIndex !== null) {
              // Update existing data
              formData[editIndex] = newData;
            } else {
              // Add new data
              formData.push(newData);
            }
      
            this.setState({
              formData: formData,
              fname: "",
              email: "",
              editIndex: null
            });
          }
        }
       
    
    handledelete(index){
        
        
            const { formData } = this.state;
        
            formData.splice(index, 1);
        
            this.setState({ formData: formData }); 
    }
    handleEdit(id){
        const tempdata=this.state.formData[id]
        this.setState({
            fname:tempdata.fname,
            email:tempdata.email,
            editIndex: id,
            
        })
       

    }
    
    render() {
        return (<>
                <h1 ><i>Display Data</i></h1>
                <form className='form' onSubmit={this.handleSubmit}>
                <div className=" m-3 form-group">
                <input type="text" className="form-control" placeholder='enter your name' name='fname'
                 value={this.state.fname} onChange={this.handleinputs}/>
                 </div>
                 <div className=" m-3 form-group">
                <input type="email" className="form-control" placeholder='enter your email' name='email'
                 value={this.state.email}onChange={this.handleinputs}/>
                 </div>
                <button type='submit' className="btn btn-success" id='submit' >{this.state.editIndex !== null?"update":"add"}</button>
                </form>
                
                <table className="table table-striped table-dark" id='table'>
                    <thead>
                        <tr>
                            <th scope="col"> #</th>
                            <th scope="col"> name </th>
                            <th scope="col">email</th>
                            <th scope="col">operations</th>
                            
                        </tr>
                    </thead>
                    <tbody >
                        {this.state.formData.map((data,id)=>{
                            return(<tr key={id}>
                                <th scope="row">{id+1}</th>
                                <td>{data.fname}</td>
                                <td>{data.email}</td>
                                <td><button className="btn btn-outline-warning" onClick={()=>this.handleEdit(id)}>edit</button>
                                <button className="btn btn-outline-danger" onClick={()=>this.handledelete(id)}>delete</button></td>
                            </tr>)
                        }
                        
                            
                            )}
                    </tbody>
                </table>
                
            </>
        );
    }
}

export default ComponentSignup;
