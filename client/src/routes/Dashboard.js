import React, { Component } from 'react'
import Logo from '../assets/img/logo.jpg'
import axios from 'axios';

import { Link } from 'react-router-dom';

export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            postInfo: [],
            userInfo: {},
            allUsers: []
        }
    }

    componentDidMount() {
        const email = JSON.parse(localStorage.getItem('token'));

        // Read User's info
        axios
            .get('http://localhost:5000/api/readUser/' + email)
            .then((res) => {
                this.setState({ userInfo: res.data });
            })
            .catch((err) => {
                console.log('Err is ' + err)
            });

        // Read suggestion of User's info
        axios
            .get('http://localhost:5000/api/allUser')
            .then((res) => {
                this.setState({ allUsers: res.data });
            })
            .catch((err) => {
                console.log('Err is ' + err)
            });

        // Read Post Info
        axios
            .get('http://localhost:5000/api/read')
            .then((res) => {
                this.setState({ postInfo: res.data });
            })
            .catch((err) => {
                console.log('Err is ' + err)
            });

    }

    render() {
        var user = this.state.userInfo;
        let myPosts;
        var info = this.state.postInfo;
        if (!info) {
            myPosts = "<h2 className='text-danger'>Data Not Found</h2>";
        }
        else {
            myPosts = info.map((value, index) => {
                return (
                    <div className="card w-100 mb-3" key={index}>
                        <img src={"http://localhost:3000/postImg/" + value.postPicture} className="card-img-top postImg" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{value.postCaption}</h5>
                            <p className="card-text">{value.postLocation}</p>
                        </div>
                    </div>
                );
            });
        }
        let Users;
        var all = this.state.allUsers;
        var skipThis = JSON.parse(localStorage.getItem('token'));
        if (!all) {
            Users = "<h2 className='text-danger'>Users Not Found</h2>";
        }
        else {
            Users = all.map((value, index) => {
                if(value.emailId !== skipThis){
                return (
                    <div className="mb-3" key={index}>
                        <div className='row'>
                            <div className='col-md-9'>
                                <div className="d-flex align-items-center">
                                    <img src={"http://localhost:3000/userImg/" + value.profilePic} className="rounded-circle users_pic me-2" alt="..." />
                                    <div>
                                        <p className='m-0'><b>{value.emailId}</b></p>
                                        <p className='m-0'>{value.firstName + " " + value.lastName}</p>

                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <Link to='/' className="text-info m-0 ">Follow</Link>

                            </div>
                        </div>

                    </div>
                );
                }
            });
        }

       

        return (
            <div className="container pt-3">
                <div className="row">
                    {/* Post List */}
                    <div className="col-md-8">
                        {myPosts}
                    </div>
                    {/* Profile & folowers suggestions */}
                    <div className="col-md-4">
                        <div className="d-flex align-items-center">
                            <img src={"http://localhost:3000/userImg/" + user.profilePic} className="rounded-circle logo me-2" alt="..." />
                            <div>
                                <p className='m-0'><b>{user.emailId}</b></p>
                                <p className='m-0'>{user.firstName + " " + user.lastName}</p>
                            </div>
                        </div>
                        <div className="card w-100 mt-3 p-2">
                            <h6 className='mb-3'>Suggestions</h6>
                            {Users}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
