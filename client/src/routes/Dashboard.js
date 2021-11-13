import React, { Component } from 'react'
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
            myPosts="Data Not Found";
        }
        else
        {
            myPosts = info.map((value,index) => {
                return(
                    <div className="card" style={{width: 18+"rem"}}>
                        {/* <img src="..." class="card-img-top" alt="..."> */}
                        <div className="card-body">
                            <h5 className="card-title">{value.postTitle}</h5>
                            <p className="card-text">{value.postLocation}</p>
                        </div>
                    </div>
                );
            });
        }

        return (
            <div>
                {myPosts}
            </div>
        )
    }
}
