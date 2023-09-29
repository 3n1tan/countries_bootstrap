import React, { useEffect, useState } from 'react'
import { auth, registerWithEmailAndPassword } from '../auth/fireBase';
import { useAuthState} from "react-firebase-hooks/auth"
import { useNavigate, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [user, loading, error] = useAuthState(auth)
    const navigate = useNavigate();

    const register = () => {
        if(!name) alert("Please enter name")
        registerWithEmailAndPassword(name, email, password)
    }

    useEffect(()=> {
        if (loading) return;
        if (user) navigate('/countries')
    }, [user, loading])
  return (
    <div>
        <input 
            type="text"
            value={name}
            onChange={(e)=> setName(e.target.value)}
            placeholder='Full Name'
         />
        <input 
            type="email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            placeholder='email'
         />
        <input 
            type="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            placeholder='Password'
         />
         <Button onClick={register}>Register</Button>
         <div>
            Already have an account?
            <Link to="/login">Login</Link>
         </div>
    </div>
  )
}

export default Register