import React from 'react'

const Profile = (props) => {

  
  return (
    
    <User user={props.user} />
  )
}

function User(props){
  const user=props.user;
  return (
  <>
  <div>
    <h1>profile</h1>
    <h4>Name:{user.name}</h4>
    <h4>Mobile:{user.number}</h4>
    <h4>Email:{user.email}</h4>
  </div>
  
  </>
  )
}



export default Profile