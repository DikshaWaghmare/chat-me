import React, { Component } from 'react'
import axios from 'axios';

export default class AddPost extends Component {
    constructor() {
        super();
        this.state = {
            postCaption: '',
            postLocation: ''
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    savePost = (e) => {
        e.preventDefault();

        const packg = {
            postCaption: this.state.postCaption,
            postLocation: this.state.postLocation
        }

        axios
            .post('http://localhost:5000/api/insert', packg)
            .then((res) => {
                alert('Data added succesfull');
                
                window.location.href='/dashboard';
            })
            .catch((err) => {
                console.log('Err is ' + err)
            })
    }

    render() {
        return (
            <div className="container pt-3">
                <form onSubmit={this.savePost}>
                    <div className="mb-3">
                        <label className="form-label">Select Picture</label>
                        <input type="file" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Write a caption</label>
                        <input type="text" className="form-control" placeholder="Enter Post Caption"
                            name="postCaption" onChange={this.onChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Add Location</label>
                        <input type="text" className="form-control" placeholder="Enter Location"
                            name="postLocation" onChange={this.onChange} />
                    </div>
                    <button className="btn btn-success me-2" type="submit">
                        Add
                    </button>
                    <button className="btn btn-warning" type="reset">
                        Reset
                    </button>
                </form>
            </div>
        )
    }
}
