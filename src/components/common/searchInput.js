import React from "react";
import PropTypes from "prop-types";


export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: ""
        };
        this.handleChange = this.handleChange.bind(this);
        // this.handleClick = this.handleClick.bind(this);
        // this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    // handleKeyDown(event) {
    //     if (event.keyCode === 13) {
    //         this.handleClick();
    //     }
    // }
    // handleClick() {
    //     let searchString = this.state.searchString;
    //     this.props.useSearchString(searchString);
    // }

    handleChange(event) {
        const value = event.target.value;
        this.setState({ searchString:  value});

        this.props.useSearchString(value);
    }

    render() {
        return (<div className="col-12">
            <input className="searchInput" value={this.state.searchString} onChange={this.handleChange} placeholder="Search" />
        </div>
        );
    }

}
Search.propTypes = {
    useSearchString: PropTypes.func,
};

