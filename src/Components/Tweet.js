import React from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Loader from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { analyze } from '../actions';
import './Tweet.css';



class Tweet extends React.Component {
    constructor() {
        super();
        this.state = {
            texts: ''
        }
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state)
    }

    analyzeTweet = (e) => {
        e.preventDefault();
        this.props.analyze(this.state);
    }

    postToTwitter = (e) => {
        e.preventDefault();
        axios.post('https://api.twitter.com/1.1/statuses/update.json')
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <div className="login-form">
                    <Link className="home-link" to="/">Home</Link>
                </div>
                <div className="outside-container">
                    <div className="tweet-container">
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Tweet"
                            multiline
                            rowsMax="4"
                            value={this.state.multiline}
                            onChange={this.handleChange}
                            margin="normal"
                            helperText="280 characters max"
                            variant="outlined"
                        />
                        <div className="tweet-buttons">
                            <Button variant="contained"
                                color="primary"
                                label='Analyze Tweet'
                                onClick={this.analyzeTweet}
                                style={{
                                    backgroundColor: "#349AFA",
                                    color: "white",
                                    textDecoration: "none"
                                }}>{this.props.fetchingData ? (
                                    <Loader type="ThreeDots" color="#fffff" height="12" width="26" />
                                ) : (
                                        'Analyze'
                                    )}
                            </Button>
                            <Button variant="contained"
                                color="primary"
                                label='Post to Twitter'
                                style={{
                                    backgroundColor: "#349AFA",
                                    color: "white",
                                    textDecoration: "none"
                                }}>
                                Post Twitter
                                </Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    fetchingData: state.fetchingData
});

export default connect(
    mapStateToProps,
    { analyze }
)(Tweet);