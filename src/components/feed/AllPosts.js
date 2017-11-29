import React from "react";
import PropTypes from "prop-types";

import Post from "./postTypeComponents/Post";
import Video from "./postTypeComponents/Video";
import Image from "./postTypeComponents/Image";
import FilterList from "./FilterList";

class AllPosts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filterType: "all"
        };

        this.filterSelected = this.filterSelected.bind(this);
    }


    getComponentByType(post, type) {
        if (type === "text" && (this.state.filterType == "text" || this.state.filterType == "all")) {
            return <Post post={post} key={post.id} />;
        }
        if (type === "video" && (this.state.filterType == "video" || this.state.filterType == "all")) {
            return <Video post={post} key={post.id} />;
        }
        if (type === "image" && (this.state.filterType == "image" || this.state.filterType == "all")) {
            return <Image post={post} key={post.id} />;
        }

        return "";
    }

    filterSelected(type) {
        this.setState({
            filterType: type
        });
    }

    render() {
        return (
            <div>
                <FilterList onFilterSelected={this.filterSelected} />
                {this.props.posts.map(post => this.getComponentByType(post, post.type))}
            </div>
        );
    }
}
AllPosts.propTypes = {
    posts: PropTypes.array,

};

export default AllPosts;