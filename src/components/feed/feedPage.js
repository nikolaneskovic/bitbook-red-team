import React from "react";
import Post from "./post";
import DataService from "../../services/dataService";
import { error } from "util";
import AddBtn from "./addBtn";
import { posix } from "path";

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
            {this.state.allPosts.map(post => <Post post={post} key={post.id} />)}
            <div>{this.state.errorMsgServer}</div>
        </div>);
    }
}

export default FeedPage;