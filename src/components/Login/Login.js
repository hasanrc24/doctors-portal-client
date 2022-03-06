import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { useAuth } from '../../Contexts/AuthContext';
import loginPic from '../../images/login.png';
import './Login.css'

const Login = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState();
    const [error, setError] = useState("");
    const [newUser, setNewUser] = useState(false);

    const {signUp, login} = useAuth();
    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };

    async function handleSignIn(e){
        e.preventDefault();
        try{
            setError("");
            setLoading(true);
            await login(email, password);
            history.push(from);
        } catch(err){
            setError(err.message);
            setLoading(false);
            console.log(err)
        }         
    }

    async function handleSignUp(e){
        e.preventDefault();
        try{
            setError("");
            setLoading(true);
            await signUp(email, password, username);
            history.push(from);
        } catch(err){
            setError(err.message);
            setLoading(false);
            console.log(err)
        } 
    }
    return (
        <div className="container">
            <div className="row d-flex align-items-center">
                <div className="col-md-6 text-center">
                    <h4 className="mb-4">Login</h4>
                    <form onSubmit={newUser ? handleSignUp : handleSignIn}>
                        <>{newUser && <><input type="username" value={username} onChange={(e)=> setUsername(e.target.value)} class="form-control" placeholder="Username" /><br /></>}</>
                        <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} class="form-control" placeholder="Your Email" required /><br />
                        <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} class="form-control" placeholder="Password" required />
                        {newUser ? <span type="button" className="text-primary" onClick={()=>setNewUser(false)}>Already have an account?</span> : <span type="button" className="text-primary" onClick={()=>setNewUser(true)}>Don't have an account?</span>}
                        <br /><br /><input disabled={loading} className="btn form-control" type="submit" value={newUser ? "Sign up" : "Sign in"} />
                    </form>
                    {error && <span>{error}</span>}
                </div>
                <div className="col-md-6 image-size">
                    <img className="img-fluid" src={loginPic} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;