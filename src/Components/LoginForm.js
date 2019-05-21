import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Loader from 'react-loader-spinner';
import { login } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
        this.props.login(this.state.credentials).then(() => {
            this.props.history.push('/');
        });
    };

    render() {
        return (
            <div>
                <div className="login-form">
                    {/* <input
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                        placeholder="Username"
                    />
                    <input
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                        placeholder="Password"
                    /> */}
                    <Link className="home-link" to="/">Home</Link>
                </div>
                <div className="welcome-text">
                    <h2>Tweets Reinvented</h2>
                    <p>Make your tweets standout with our analytics tool. <br /> We check thousands of tweets and give you feedback <br />so you can make your Tweets Shine!</p>
                    <Button
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
)(LoginForm);