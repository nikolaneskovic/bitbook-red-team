import React from "react";
import AddPost from "./postModalBox";


class AddBtn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
        };
        this.bindFunction();
    }

    bindFunction(){
        this.handleOpenModal= this.handleOpenModal.bind(this);        
    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

   

    render() {
        return (

            <div className="btn-group row">
                <button type="button" className="btn btn-danger">Add</button>
                <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="sr-only"></span>
                </button>
                <div className="dropdown-menu">
                    <button className="dropdown-item" >Image</button>
                    <button className="dropdown-item" onClick={this.handleOpenModal} >Post</button>
                    <button className="dropdown-item">Video</button>
                    <AddPost showModal={this.state.showModal}/>
                </div>
            </div>);
    }
}

export default AddBtn;