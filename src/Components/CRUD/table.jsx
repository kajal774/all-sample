
import React, { useState } from 'react';
import { useLocation ,useNavigate} from 'react-router-dom';

const Table = (props) => {
  const location = useLocation();
  let navigate = useNavigate();

  const [display, setDisplay] = useState(location.state.total);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editValues, setEditValues] = useState({ fname: '', email: '' });

  const handleDelete = (index) => {
    const updatedItems = [...display];
    updatedItems.splice(index, 1);
    setDisplay(updatedItems);
  };

  const handleEditItem = (index) => {
    setEditingIndex(index);
    const { fname, email } = display[index];
    setEditValues({ fname, email });
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
    setEditValues({ fname: '', email: '' });
  };

  const handleSaveEdit = (index) => {
    const updatedItems = [...display];
    updatedItems[index] = editValues;
    setDisplay(updatedItems);
    setEditingIndex(null);
    setEditValues({ fname: '', email: '' });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  return (
    <div>
      <table className="table" border="1px" style={{ border: '1px solid black' }}>
        <thead>
          <tr>
            <th>Slno.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {display.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                {editingIndex === index ? (
                  <input type="text" name="fname" value={editValues.fname} onChange={handleChange} />
                ) : (
                  <span>{item.fname}</span>
                )}
              </td>
              <td>
                {editingIndex === index ? (
                  <input type="text" name="email" value={editValues.email} onChange={handleChange} />
                ) : (
                  <span>{item.email}</span>
                )}
              </td>
              <td>
                {editingIndex === index ? (
                  <>
                    <button className='btn btn-success' onClick={() => handleSaveEdit(index)}>Save</button>
                    <button className='btn btn-danger' onClick={handleCancelEdit}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button className='btn btn-primary' onClick={() => handleEditItem(index)}>Edit</button>
                    <button className='btn btn-danger' onClick={() => handleDelete(index)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
         
       
      <button className='btn btn-dark' onClick={() => navigate(-1)}>Back</button> 
    </div>
  );
};

export default Table;
