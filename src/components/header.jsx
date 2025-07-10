import { useState } from 'react'


function EditorAndDisplay() {
  const [headerData, setHeaderData] = useState({name: '', email: '', phone: ''});
  const [submitData, setSubmitData] = useState({name: '', email: '', phone: ''});
  const [editMode, setEditMode] = useState(true);
  
  const updateHeaderData = (e) => {
    // take the name and value from the event target, which will be the input that triggered the change
    const { name, value } = e.target;
    // update the headerData state with the new value
    setHeaderData(prev => ({ ...prev, [name]: value }));
  };

  const updateSubmittedData = () =>{
    setSubmitData(headerData);
    setEditMode(false);
  };

  const enableEditMode = () => {
    setEditMode(true);
  }


  return ( 
    <>
      {editMode ? <HeaderForm data={headerData} changeData={updateHeaderData} /> : null}
      <DisplayResume data={submitData} changeData={updateSubmittedData} editState={editMode} changeEditState={enableEditMode}/>
    </>
  )
}


function HeaderForm({data, changeData}) {
  return (
    <form>
      <label for="name">Name</label>
      <input 
        type="text" 
        name="name" 
        value={data.name} 
        onChange={changeData} />
    
      <label for="email">Email</label>
      <input 
        type="email" 
        name="email" 
        value={data.email} 
        onChange={changeData} />

      <label for="phone">Phone</label>
      <input 
        type="number" 
        name="phone" 
        value={data.phone} 
        onChange={changeData} />
    </form>
  )
}

function DisplayResume({data, changeData, editState, changeEditState}) {
  return (
    <div>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
      <p>Phone: {data.phone}</p>
      <button onClick={changeData}>Submit</button>
      {editState ? null : <button onClick={changeEditState}>Edit</button>}
    </div>
  )
}


export { HeaderForm, DisplayResume, EditorAndDisplay }
