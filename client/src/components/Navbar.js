import React from 'react'
import { Link } from 'react-router-dom'
import {FaPlusCircle} from 'react-icons/fa';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">Chat Me</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/dashboard">Dashbaord</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/addPost">
                                    <FaPlusCircle /> Post
                                </Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <Link className="btn btn-primary me-2" to='/login'>Login</Link>
                            <Link className="btn btn-warning" to='/create-account'>Craete Account</Link>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
