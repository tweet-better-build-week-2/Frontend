import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Loader from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { analyze, resetWindow } from '../actions';
import Auth from "../Auth";
import './Tweet.css';

const auth = new Auth();

let username = auth.getProfile().name;
let profilePicture = auth.getProfile().picture;

class Tweet extends React.Component {
    constructor() {
        super();
        this.state = {
            texts: '',
        }
    }

    componentDidMount() {
        const auth = new Auth();
        auth.handleAuthentication();
        if (!localStorage.getItem("access_token")) this.props.history.push("/")
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    analyzeTweet = e => {
        e.preventDefault();
        if (this.state.texts === "") {
            return {}
        } else {
            this.props.analyze(this.state)
        }
    }

    postToTwitter = e => {
        e.preventDefault();
        let tweetUrl = encodeURIComponent(`${this.state.texts}`);
        this.setState({
            texts: "",
        })
        this.props.resetWindow();
        return window.open(`https://twitter.com/intent/tweet?text=${tweetUrl}`);
    }

    resetWindow = e => {
        e.preventDefault();
        this.setState({
            texts: "",
        })
        this.props.resetWindow();
    }

    percentageScore = () => {
        return (Math.round(((this.props.score / 2) + 0.5) * 100));
    }

    render() {
        return (
            <div>
                <div className="login-form">
                    <Link className="home-link" to="/" onClick={auth.logout}>Logout</Link>
                </div>
                <div className="outside-container">
                    <div className="tweet-container">
                        <div className="twitter-profile">
                            <img className="twitter-img" src={profilePicture} alt="{username}'s profile pic" />
                            <p>{username}</p>
                        </div>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Tweet"
                            multiline
                            rowsMax="4"
                            name='texts'
                            value={this.state.texts}
                            onChange={this.handleChanges}
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
                                    backgroundColor: "#fa3437",
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
                                label='Reset'
                                onClick={this.resetWindow}
                                style={{
                                    backgroundColor: "#349AFA",
                                    color: "white",
                                    textDecoration: "none"
                                }}>
                                Reset
                                </Button>
                            <Button variant="contained"
                                color="primary"
                                label='Post to Twitter'
                                onClick={this.postToTwitter}
                                style={{
                                    backgroundColor: "#3437fa",
                                    color: "white",
                                    textDecoration: "none"
                                }}>
                                Post
                                </Button>
                        </div>
                        <div className="score-display">
                            {this.props.score < -0.5 ? (<p>Tweet Sentiment = Very Negative<br />Score: {this.percentageScore()}%</p>)
                                :
                                this.props.score > -0.5 && this.props.score < -0.2 ? (<p>Tweet Sentiment = Negative<br />Score: {this.percentageScore()}%</p>)
                                    :
                                    this.props.score > -0.5 && this.props.score < -0.2 ? (<p>Tweet Sentiment = Neutral<br />Score: {this.percentageScore()}%</p>)
                                        :
                                        this.props.score === 0 && this.state.texts === "" ? (<p>Whoops, no Tweet Found</p>)
                                            :
                                            this.props.score > -0.2 && this.props.score < 0.2 && this.props.score !== "" ? (<p>Tweet Sentiment = Positive<br />Score: {this.percentageScore()}%</p>)
                                                :
                                                this.props.score > 0.2 ? (<p>Tweet Sentiment = Very Positive<br />Score: {this.percentageScore()}%</p>)
                                                    :
                                                    this.props.score === "" ? (<p>Ready to Analyze</p>) : null}

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    fetchingData: state.fetchingData,
    score: state.score
});

export default connect(
    mapStateToProps,
    { analyze, resetWindow }
)(Tweet);