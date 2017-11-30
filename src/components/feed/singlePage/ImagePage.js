// import React from "react";
// import PostDataService from "../../../services/postDataService";
// import PropTypes from "prop-types";
// import Comments from "./../comments";
// import ListOfComments from "./../ListOfComments";

// class ImagePage extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             commentsNum: "",
//             dateCreated: "",
//             type: "",
//             userDisplayName: "",
//             userId: "",
//             imageUrl: ""
//         };

//         this.imageId = parseInt(this.props.match.params.id);

//         this.postDataService = new PostDataService();
//     }

//     componentDidMount() {
//         this.showImageData(this.imageId);
//     }

//     showImageData(idImage) {
//         this.postDataService.getSingleImagePost(idImage, image => {
//             console.log(image);
//             this.setState({
//                 commentsNum: image.commentsNum,
//                 dateCreated: image.dateCreated,
//                 userDisplayName: image.userDisplayName,
//                 userId: image.userId,
//                 imageUrl: image.imageUrl
//             });
//         }, error => {
//             console.log(error);
//         });
//     }

//     render() {
//         return (
//             <div className="container">
//                 <div className="row videoPost">
//                     <img width="900" height="400" src={this.state.imageUrl} />
//                     <p className="col-12"><strong>Author:</strong> {this.state.userDisplayName}</p>
//                 </div>
//                 <ListOfComments postId={this.imageId} />
//                 <Comments postId={this.imageId} type={this.state.post.type} />
//             </div>
//         );
//     };
// }

// ImagePage.propTypes = {
//     match: PropTypes.object

// };
// export default ImagePage;