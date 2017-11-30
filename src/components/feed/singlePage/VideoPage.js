import React from "react";
import PostDataService from "../../../services/postDataService";
import PropTypes from "prop-types";
import Comments from "./../comments";
import ListOfComments from "./../ListOfComments";

class VideoPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            commentsNum: "",
            dateCreated: "",
            type: "",
            userDisplayName: "",
            userId: "",
            videoUrl: ""
        };

        this.videoId = parseInt(this.props.match.params.id);

        this.postDataService = new PostDataService();
    }

    componentDidMount() {
        this.showVideoData(this.videoId);
    }

    showVideoData(idVideo) {
        this.postDataService.getSingleVideoPost(idVideo, video => {
            this.setState({
                commentsNum: video.commentsNum,
                dateCreated: video.dateCreated,
                userDisplayName: video.userDisplayName,
                userId: video.userId,
                videoUrl: video.videoUrl
            });
        }, error => {
            console.log(error);
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row videoPost">
                    <iframe width="900" height="400" src={this.state.videoUrl} frameBorder="0" allowFullScreen></iframe>
                    <p className="col-12"><strong>Author:</strong> {this.state.userDisplayName}</p>
                    <ListOfComments postId={this.videoId} />
                </div>
                <Comments postId={this.videoId} type={this.state.post.type}/>
            </div>
        );
    };
}

VideoPage.propTypes = {
    match: PropTypes.object

};
export default VideoPage;