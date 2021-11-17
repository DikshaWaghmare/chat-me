import React, { Component } from 'react'
import axios from 'axios';
import swal from 'sweetalert';

export default class AddPost extends Component {
    constructor() {
        super();
        this.state = {
            postCaption : '',
            postLocation : '',
            postPicture :''
        }
    }

    onTextChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onFileChange = (e) => {
        if(e.target.files[0].size < 1000000){
            this.setState({postPicture : e.target.files[0]});
        }else{
            swal("File should be under 1 MB only");
        }
    }

    savePost = (e) => {
        e.preventDefault();

        const FD = new FormData();

        FD.append('postCaption',this.state.postCaption);
        FD.append('postLocation',this.state.postLocation);
        FD.append('postPicture',this.state.postPicture);

        axios
            .post('http://localhost:5000/api/insert', FD)
            .then((res) => {
                
                swal({
                    title: "Success",
                    text: "Your post has been Posted",
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
    }


    render() {
        return (
            <div className="container pt-3">
                <form onSubmit={this.savePost}>
                    <div className="mb-3">
                        <label className="form-label">Select Picture <sup><b className="text-danger">*</b></sup></label>
                        <input type="file" className="form-control" name="postPicture" accept=".png,.jpg,.jpeg" 
                        onChange={this.onFileChange}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Write a caption</label>
                        <input type="text" className="form-control" placeholder="Enter Post Caption"
                            name="postCaption" onChange={this.onTextChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Add Location</label>
                        <input type="text" className="form-control" placeholder="Enter Location"
                            name="postLocation" onChange={this.onTextChange} />
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
