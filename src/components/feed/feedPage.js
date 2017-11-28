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
        this.addVideoOnFeedPage();
    }

    addVideoOnFeedPage(newVideo){

        let postList = this.state.allPosts;
        postList.push(newVideo);
    }

    render() {
        return (<div className='container'>
            <AddBtn addVideoOnPage={this.addVideoOnFeedPage}/>

            {this.state.allPosts.map(post => <Post post={post} key={post.id} />)}
            <div>{this.state.errorMsgServer}</div>
            
        </div>);
    }
}

export default FeedPage;