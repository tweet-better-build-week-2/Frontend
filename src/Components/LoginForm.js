import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
// import Loader from 'react-loader-spinner';
import { login } from '../actions';
import { connect } from 'react-redux';
import Auth from "../Auth";

const auth = new Auth();

class LoginForm extends Component {
    state = {
        credentials: {
            username: '',
            password: '',
            auth
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        this.props.login(this.state.credentials).then(() => {
            this.props.history.push('/');
        });
    };

    render() {
        return (
            <div>
                <div className="login-form">
                    <a className="home-link" href="https://tweetbetter.netlify.com/">Home</a>
                </div>
                <div className="welcome-text">
                    <h1>Tweeting Reinvented</h1>
                    <h4>How will your Tweet be Received?<br /> We check thousands of tweets and give you feedback <br />so you can make your Tweets Shine!</h4>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={auth.login}
                        style={{
                            backgroundColor: "#349AFA",
                            color: "white",
                            textDecoration: "none"
                        }}>
                        Check a Tweet
                    </Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isLoggingIn: state.isLoggingIn
});

export default connect(
    mapStateToProps,
    { login }
)(LoginForm);