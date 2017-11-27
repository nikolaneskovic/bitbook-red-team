import React from "react";
import DataService from "../../services/dataService";
import User from "./user";
import Search from "./../common/searchInput";
import PropTypes from "prop-types";

class People extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            userId: ""
        };
        this.dataService = new DataService();
        this.searchUserByName = this.searchUserByName.bind(this);
        this.filterLoggedInUser = this.filterLoggedInUser.bind(this);
        this.getUserList = this.getUserList.bind(this);
    }

    componentDidMount() {
        this.getUserList();
        this.filterLoggedInUser();

    }

    getUserList() {
        this.dataService.getUsers((users) => {
            this.setState({
                users: users
            });
        });
    }

    filterLoggedInUser() {
        this.dataService.getProfile((profile) => {
            this.setState({ userId: profile.userId });
        });
    }

    searchUserByName(nameOfUser) {
        let filterUsers = [];
        if (nameOfUser === "") {
            return;
        } else {
            this.state.users.forEach(element => {
                if (element.name.includes(nameOfUser)) {
                    filterUsers.push(element);
                }
            });
            this.setState({ users: filterUsers });

        }
    }
    render() {
        let userList = this.state.users;
        return (
            <div className="container">
                <div className="row">
                    <Search useSearchString={this.searchUserByName} />
                    {userList.filter(element => element.id !== this.state.userId).map((element) => <User name={element.name} avatarUrl={element.avatarUrl} about={element.about} key={element.id} id={element.id} />)}
                </div>
            </div>

        );
    }
}
People.propTypes = {
    userId: PropTypes.number,
};

export default People;