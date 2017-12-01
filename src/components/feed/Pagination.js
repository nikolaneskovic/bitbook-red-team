import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class Pagination extends Component {

    render() {
        return (
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item"><button className="page-link" onClick={()=>{this.props.showPosts();}}>Previous</button></li>
                    <li className="page-item"><button className="page-link" >1</button></li>
                    <li className="page-item"><button className="page-link" >2</button></li>
                    <li className="page-item"><button className="page-link" >3</button></li>
                    <li className="page-item"><button className="page-link" >Next</button></li>
                </ul>
            </nav>
        );
    }
}
Pagination.propTypes = {
    showPosts: PropTypes.func,

};
export default Pagination;


