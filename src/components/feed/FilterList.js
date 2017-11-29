import React, { Component } from "react";

class FilterList extends Component {

    constructor(props){
        super(props);

    }
    handleClick(){
        
    }

    render() {
        return (
            <div className="col-1 offset-10">
                <div className="btn-group">
                    <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Filter posts</button>
                    <div className="dropdown-menu">
                        <button className="dropdown-item" onClick={this.handleClick}>Images</button>
                        <button className="dropdown-item" onClick={this.handleClick}>Posts</button>
                        <button className="dropdown-item" onClick={this.handleClick}>Videos</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default FilterList;