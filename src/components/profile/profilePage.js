import React from "react";
import DataService from "../../services/dataService";

class ProfilePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            avatarUrl: "",
            commentsCount: "",
            postsCount: ""
        };
        this.dataService = new DataService();
    }

    componentDidMount() {

        this.dataService.getProfile((profile) => {
            this.setState({
                name: profile.name,
                avatarUrl: profile.avatarUrl,
                commentsCount: profile.commentsCount,
                postsCount: profile.postsCount
            });
        });
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-4">
                                    <img src={this.state.avatarUrl} width="100px" />
                                    <h3>{this.state.name}</h3>
                                </div>
                                <div className="col-8">
                                    <p><span>Comments count:</span>{this.state.commentsCount}</p>
                                    <p><span>Posts count:</span>{this.state.postsCount}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfilePage; 