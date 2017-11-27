import React from "react";
import Post from "./post";
import DataService from "../../services/dataService";
import { error } from "util";
import AddBtn from "./addBtn";

class FeedPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allPosts: [],
            errorMsgServer: ""
        };
        this.dataService = new DataService();
    }
    componentDidMount() {
        this.dataService.getAllPosts((posts) => {
            this.setState({ allPosts: posts });
        }, error => this.setState({ errorMsgServer: error }));
    }

    render() {
        return (<div className='container'>
            <AddBtn />
            {this.state.allPosts.map(post => <Post text={post.text} key={post.userId} dateCreated={post.dateCreated} type={post.type} userDisplayName={post.userDisplayName} />)}
            <div>{this.state.errorMsgServer}</div>
        </div>);
    }
}

export default FeedPage;