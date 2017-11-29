import React from "react";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

// import { DefaultPlayer as Video } from "react-html5video";
// import 'react-html5video/dist/styles.css';



const LoginPage = (props) => {
    return (
        <div className="container-fluid fullBack">
            <div className="container bigTopPadding ">
                <div className="row lightBgr midiumAllPadding midiumBorderRadius" >

                    <div className="col-sm-12 col-lg-6 whiteText">
                        <h1>Welcome to BitBook</h1>
                        <p>Lorem ipsum dolor sit amet, ad vis mazim legere virtute. Per ne labore graecis menandri. Vel mutat causae ut, ferri debet omnium vim et. Ea mel delenit consetetur, ne convenire philosophia pri, equidem omittam blandit no est. Id dicta nostro qui. Reque iisque nominavi sed in, eam in nulla consequat, sea philosophia definitionem et</p>
                    </div>

                    <div className="col-sm-12 col-lg-6 whiteText">
                        <div className="table">
                            <div className="row">
                                <div className="col-sm-6 titleLink">
                                    <Link to="/login">Login</Link>
                                </div>
                                <div className="col-sm-6 titleLink">
                                    <Link to="/register">Register</Link>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <Switch>
                                    <Route exact path="/" component={LoginForm} />
                                    <Route path="/login" component={LoginForm} />
                                    <Route path="/register" component={RegisterForm} />
                                </Switch>
                            </div>

                            {/* <div className="fullscreen-bg">
                            <Video autoPlay loop muted className="fullscreen-bg__video">
                                <source src="./../img/video/backgroundVideo.mp4" type="video/mp4" />
                            </Video>
                        </div> */}

                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default LoginPage; 