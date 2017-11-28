import React from "react";
import Post from "./postTypeComponents/Post";
import Video from "./postTypeComponents/Video";
import PropTypes from "prop-types";
import Image from "./postTypeComponents/Image";
import { posix } from "path";

class AllPosts extends React.Component {
    constructor(props) {
        super(props);
    }

    getComponentByType(post){
        if(post.type==="text"){
            return <Post post={post} key={post.id} />;
        }
        if(post.type ==="video"){
            return <Video post={post} key={post.id}/>;
        }
        if(post.type==="image"){
            return <Image post={post} key={post.id}/>;
        }
    }

    render() {
        return (
            <div>
                {this.props.posts.map(post => this.getComponentByType(post))}
            </div>
        );
    }
}
AllPosts.propTypes = {
    posts: PropTypes.array,

};

export default AllPosts;