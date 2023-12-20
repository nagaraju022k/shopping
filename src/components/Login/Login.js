import React from 'react';
import Login1 from '../images/login.avif'

const Login = () => {

    function Login(props) {
        return (
            <>
                <div className='login'>
                    <div className='container1'>
                <h1>Log In</h1>
                <form>
                    <div className='row2'>
                        <label className='col-25'>Email Id:</label>
                        <input className='col-75' type='text' /></div>
                    <div className='row2'>
                        <label className='col-25'>Password:</label>
                        <input className='col-75' type='password' /></div>
                        <p>Already have an account Please Register</p>
                    <button>submit</button>
               
               
                </form>
                </div>
                <div className='logo'>
                    <img src={Login1} alt='img'  />
                </div>
                
                </div>

            </>
        )
    }
    function Signup(props) {
        return (
            <>
            <div className='login'>
                    <div className='container1'>
                <h1>SignUp</h1>
                <form>
                <div className='row2'>
                    <label className='col-25'>User name:</label>
                    <input className='col-75' type='text' /></div>
                <div className='row2'>
                    <label className='col-25'>Number:</label>
                    <input className='col-75' type='number' /></div>
                <div className='row2'>
                    <label className='col-25'>Email Id:</label>
                    <input className='col-75' type='text' /></div>
                <div className='row2'>
                    <label className='col-25'>Password:</label>
                    <input className='col-75' type='password' /></div>
                <button>submit</button>
                </form>
                </div>
                <div className='logo'>
                    <img src={Login1} alt='img'  />
                </div> 
                </div>
            </>
        )
    }
    function Greeting(props) {
        const isLoggedIn = props.isLoggedIn;
        if (isLoggedIn) {
            return <Login />
        }
        return <Signup />
    }


    return (
        <Greeting isLoggedIn={false} />
    )
}

export default Login