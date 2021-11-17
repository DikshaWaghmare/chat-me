import React, { Component } from 'react'
import Logo from '../assets/img/logo.jpg'
import axios from 'axios';

export default class Dashboard extends Component {
    constructor(){
        super();
        this.state={
            userInfo:[]
        }
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/api/read')
            .then((res) => {
                this.setState({userInfo:res.data});
            })
            .catch((err) => {
                console.log('Err is ' + err)
            })
    }

    render() {
        let myPosts;
        var info = this.state.userInfo;
        if(!info){
            myPosts="<h2 className='text-danger'>Data Not Found</h2>";
        }
        else
        {
            myPosts = info.map((value,index) => {
                return(
                    <div className="card w-100 mb-3" key={index}>
                        <img src={"http://localhost:3000/postImg/"+value.postPicture} className="card-img-top postImg" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{value.postCaption}</h5>
                            <p className="card-text">{value.postLocation}</p>
                        </div>
                    </div>
                );
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
                            <img src={Logo} className="rounded-circle logo me-2" alt="..."/>
                            <div>
                                <p className='m-0'><b>Username</b></p>
                                <p className='m-0'>First Last</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
