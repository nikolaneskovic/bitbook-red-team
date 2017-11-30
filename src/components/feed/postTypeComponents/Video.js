import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import DeleteButton from "../../common/DeleteBtn";

class Video extends React.Component {
    constructor(props) {
        super(props);
        this.postObj = this.props.post;        
    }
    render() {
        return (
            <div className="row videoPost">
                <div className="col-9">
                    <iframe width="800" height="400" src={this.props.post.videoUrl} frameBorder="0" allowFullScreen></iframe>
                </div>
                <div className="col-1 offset-2">
                    <DeleteButton  postObject={this.postObj}/>
                </div>
                <div className="col-12">
                    <div className="borderTop row">
                        <p className="col-4 typeOfPost ">{this.props.post.userDisplayName}</p>
                        <p className="col-4 typeOfPost">Comments: {this.props.post.commentsNum}</p>
                        <p className="col-4 linkBtn"><Link to={`/feed/${this.postObj.type}/${this.props.post.id}`}><img className="linkImg" src="../../../img/linkBtn.png" width="50px" height="50px" /></Link></p>
                    </div>
                </div>
            </div>

        );
    }
}

Video.propTypes = {
    post: PropTypes.object,


};
export default Video;