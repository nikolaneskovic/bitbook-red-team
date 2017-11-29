import React from "react";
import Post from "./postTypeComponents/Post";
import Video from "./postTypeComponents/Video";
import PropTypes from "prop-types";
import Image from "./postTypeComponents/Image";
import { posix } from "path";
import FilterList from "./FilterList";

class AllPosts extends React.Component {
    constructor(props) {
        super(props);
    }
    

    getComponentByType(post, type) {
        if (type === "text") {
            return <Post post={post} key={post.id} />;
        }
        if (type === "video") {
            return <Video post={post} key={post.id} />;
        }
        if (type === "image") {
            return <Image post={post} key={post.id} />;
        }
    }

    render() {
        return (
            <div>
                <FilterList />
                {this.props.posts.map(post => this.getComponentByType(post, post.type))}
            </div>
        );
    }
}
AllPosts.propTypes = {
    posts: PropTypes.array,

};

export default AllPosts;