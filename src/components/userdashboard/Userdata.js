import React,{ useState } from 'react';



const Userdata = (props) => {
  
  
  const user = props.user;

  const[name, setName]= useState(user.name);
  const[number, setNumber]= useState(user.number);
  const[email,setEmail]= useState(user.email)
  

  const onSubmit = () => {

    props.setUser({ name, number, email })
  }
  return (
    <div>
      
      
      <h1>Userdata</h1>
      <div>Name:<input type='text' onChange={e=> setName(e.target.value)} /></div>
      <div>Number:<input type='number' onChange={e=> setNumber(e.target.value)} /></div>
      <div>Email Id:<input type='text' onChange={e=> setEmail(e.target.value)} /></div>
      <button onClick={onSubmit}>submit</button>
    </div>
  )
}
export default Userdata