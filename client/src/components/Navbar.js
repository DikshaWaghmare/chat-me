import React from 'react'
import { Link } from 'react-router-dom'
import { FaCog, FaPaperPlane, FaPlusCircle, FaPlusSquare, FaPowerOff, FaTachometerAlt, FaUser } from 'react-icons/fa';

import UserToken from "./UserToken";
import Logout from './Logout';

export default function Navbar() {
    const { token } = UserToken();
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
                        </ul>
                        <div className="d-flex">
                            {
                                !token || token.err ?
                                    <>
                                        <Link className="btn btn-primary me-2" to='/login'>Login</Link>
                                        <Link className="btn btn-warning" to='/create-account'>Create Account</Link>
                                    </>
                                    :
                                    <>
                                        <button className='btn btn-primary me-2'><FaPaperPlane /></button>
                                        <div class="dropdown me-2">
                                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                              <FaUser/>
                                            </button>
                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li><Link className="dropdown-item" to="/dashboard">
                                                    <FaTachometerAlt/>  Dashbaord</Link></li>
                                                <li><Link className="dropdown-item" to="/addPost">
                                                    <FaPlusSquare/> Add Post</Link></li>
                                                <li><Link className="dropdown-item" to="/dashboard">
                                                    <FaCog /> Setting</Link></li>
                                            </ul>
                                        </div>
                                        <Logout />
                                    </>
                            }

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
