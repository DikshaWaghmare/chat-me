import React, { Component } from 'react'
import axios from 'axios';
import swal from 'sweetalert';
import md5 from 'md5';

export default class CreateAcc extends Component {
    constructor() {
        super();
        this.state = {
            profilePic : '',
            firstName : '',
            lastName : '',
            emailId : '',
            Password : '',
            confPass : ''
        }
    }

    onTextChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onFileChange = (e) => {
        if(e.target.files[0].size < 1000000){
            this.setState({profilePic : e.target.files[0]});
        }else{
            swal("File should be under 1 MB only");
        }
    }
    savePost = (e) => {
        e.preventDefault();
        if(this.state.Password === this.state.confPass)
        {
            const FD = new FormData();

            FD.append('profilePic',this.state.profilePic);
            FD.append('firstName',this.state.firstName);
            FD.append('lastName',this.state.lastName);
            FD.append('emailId',this.state.emailId);
            FD.append('Password',md5(this.state.Password));

            axios
            .post('http://localhost:5000/api/create-account', FD)
            .then((res) => {
                
                swal({
                    title: "Success",
                    text: "Your account created successfully",
                    icon: "success",
                    button: "Okay",
                  })
                  .then((res) => {
                    if (res) {
                        window.location.href='/dashboard';
                    }
                  });
                
            })
            .catch((err) => {

                swal({
                    title: "Error",
                    text: "Somethng went wrong",
                    icon: "error",
                    button: "Okay",
                });

                console.log('Err is ' + err)
            })
        }else{
            swal({
                title: "Alert",
                text: "Password & confirm Password are not same",
                icon: "warning",
                button: "Okay",
            });
        }
    }
    render() {
        return (
            <div className="container pt-3">
                <form method='POST' onSubmit={this.savePost}>
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <label className="form-label">Select Profile Picture</label>
                            <input type="file" className="form-control" name="profilePic" accept=".png,.jpg,.jpeg" 
                            onChange={this.onFileChange} required/>
                        </div>

                        {/* FirstName */}
                        <div className="col-md-6 mb-3">
                            <label className="form-label">First Name</label>
                            <input type="text" className="form-control" placeholder="Enter First Name"
                                name="firstName" onChange={this.onTextChange} required maxLength='15' minLength='2'/>
                        </div>
                        {/* LastName */}
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Last Name</label>
                            <input type="text" className="form-control" placeholder="Enter Last Name"
                                name="lastName" onChange={this.onTextChange} required maxLength='15' minLength='3'/>
                        </div>

                        {/* user eamil */}
                        <div className="col-md-12 mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" name="emailId" onChange={this.onTextChange} required/>
                        </div>

                        {/* Password */}
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" placeholder="xxxxxxx"
                                name="Password" onChange={this.onTextChange} required maxLength='10' minLength='4'/>
                        </div>

                        {/* Confirm */}
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Confirm Password</label>
                            <input type="text" className="form-control" placeholder="xxxxxxxx"
                                name="confPass" onChange={this.onTextChange} required maxLength='10' minLength='4'/>
                        </div>
                    </div>
                    <button className="btn btn-success me-2" type="submit">
                        Create Account
                    </button>
                    <button className="btn btn-warning" type="reset">
                        Reset
                    </button>
                </form>
            </div>
        )
    }
}
