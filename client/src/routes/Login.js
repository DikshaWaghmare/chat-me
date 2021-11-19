import React,{useState} from "react";
import { Link } from 'react-router-dom';
import md5 from 'md5';
import swal from 'sweetalert';

export default function Login() {

    const [emailId,setEmailId] = useState();
    const [Password,setPassword] = useState();

    const credentials={
        emailId,Password
    }

    const handleLogin = async (e) =>{
        e.preventDefault();

        fetch("http://localhost:5000/api/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(credentials),
        })
        .then((data)=>{
            swal('Login Success for '+ data);
        });
    }

    return (
        <div
            className="container d-flex align-items-center justify-content-center"
            style={{ height: 100 + "vh" }}
        >
            <div className="card shadow p-3 mb-5 bg-body rounded w-50">
                <div className="card-header">
                    <h3>Login Here</h3>
                    
                </div>
                <form className="card-body" onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label className="form-label">Enter Email</label>
                        <input
                            className="form-control"
                            type="email"
                            placeholder="yourname@example.com"
                            name="emailId"
                            onChange={(e)=>{setEmailId(e.target.value)}}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Enter Password</label>
                        <input
                            className="form-control"
                            type="password"
                            placeholder="xxxxxx"
                            minLength="4"
                            maxLength="10"
                            name="Password"
                            onChange={(e)=>{setPassword(md5(e.target.value))}}
                            required
                        />
                    </div>
                    <button className="btn btn-success me-3" type="submit">
                        Login
                    </button>
                    <button className="btn btn-warning" type="reset">
                        Reset
                    </button>
                    <Link className="text-decoration-none d-block mt-3" to='/create-account'>Not a member ? Create Account Here !</Link>
                </form>
            </div>
        </div>
    );
}
