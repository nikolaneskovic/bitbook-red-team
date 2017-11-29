import React from "react";
import PostDataService from "../../services/postDataService";
import PropTypes from "prop-types";
import SingleComment from "./postTypeComponents/SingleComment";

class ListOfComments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allComments: []
        };
        this.postDataService = new PostDataService();
    }

    componentDidMount() {
        let postId = this.props.postId;

        this.postDataService.getAllComments(postId, listOfComments => {
            this.setState({allComments: listOfComments});
            
        }, error => {
            console.log(error);
        });
    }

    

    render() {
        return (<div>
            {this.state.allComments.map(comment => <SingleComment comment={comment} key={comment.id}/>)}
        </div>);
    }
}
ListOfComments.propTypes = {
    postId: PropTypes.number,


};
export default ListOfComments; 