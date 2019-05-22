import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
// import Loader from 'react-loader-spinner';
import { login } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import auth0 from 'auth0-js';
import Auth from '../Auth/Auth'; // AUTH0
const auth = new Auth(); // AUTH0

class LoginForm extends Component {
    state = {
        credentials: {
            username: '',
            password: ''
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
        auth.login(); /// AUTH 0
        this.props.login(this.state.credentials).then(() => {
            this.props.history.push('/');
        });
    };

    render() {
        return (
            <div>
                <div className="login-form">
                    <Link className="home-link" to="/">Home</Link>
                </div>
                <div className="welcome-text">
                    <h1>Tweeting Reinvented</h1>
                    <h4>How will your Tweet be Received?<br /> We check thousands of tweets and give you feedback <br />so you can make your Tweets Shine!</h4>
                    <Button
                    onClick={this.login} // AUTH0
                        variant="contained"
                        color="primary"
                        style={{
                            backgroundColor: "#349AFA",
                            color: "white",
                            textDecoration: "none"
                        }}>
                        Log Into Twitter
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
)(LoginForm)
