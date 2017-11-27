import React from "react";
import Post from "./post";
import DataService from "../../services/dataService";

class FeedPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allPosts: [],
        };
        this.dataService = new DataService();
    }
    componentDidMount() {
        this.dataService.getAllPosts((posts) => {
            this.setState({ allPosts: posts });
            console.log(posts);
        });
    }

    render() {
        return (<div>
            {this.state.allPosts.map(post => <Post text={post.text} key={post.userId} dateCreated={post.dateCreated} type={post.type} userDisplayName={post.userDisplayName} />)}
        </div>);
    }
}

export default FeedPage;