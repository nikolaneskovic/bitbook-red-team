import React from "react";
import PropTypes from "prop-types";

const User = (props) => {
    return (
        <div className="col-12 user">
            <div className="row">
                <div className="col-2 offset-1 imgDiv">
                    <img src={props.avatarUrl} width="100px" height="100px"/>
                </div>
                <div className="col-9">
                    <h4> {props.name}</h4>
                    <div><span>About</span>{props.about}</div>
                </div>
            </div>
        </div>

    );


};


User.propTypes = {
    name: PropTypes.string,
    avatarUrl: PropTypes.string,
    about: PropTypes.string
};
export default User;