import React,{ useState} from 'react'
import Userdata from './Userdata';
import Profile from './Profile';

const Dashboard = () => {
    const [user, setUser]=useState({name:" Nagaraju", number: 8074649639, email:' nagaraju@gmail.com'});
  return (
    <>
    <Profile user={user} />
   <Userdata user={user} setUser={setUser} /> 
   </>
  )
}

export default Dashboard