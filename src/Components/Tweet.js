import React from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Loader from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { analyze } from '../actions';
import './Tweet.css';

import Auth from '../Auth/Auth'; // AUTH 0
const auth = new Auth(); // AUTH 0

class Tweet extends React.Component {
  constructor() {
    super();
    this.state = {
      texts: '',
      profile: null // AUTH0
    };
  }

  // AUTH 0
  componentWillMount() {
    const { userProfile, getProfile } = auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }
  // AUTH 0 END

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  analyzeTweet = e => {
    e.preventDefault();
    this.props.analyze(this.state);
  };

  postToTwitter = e => {
    e.preventDefault();
    axios
      .post('https://api.twitter.com/1.1/statuses/update.json')
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  // AUTH0 - TODD SUPER FUNCTION
  /*
  convert = (token) => {
    let arr = token.split('&')[0].split('');
    const split = arr => {
      let flag = false;
      let token = '';
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '=') {
          flag = true;
        }
        if (flag && arr[i] !== '=') {
          token += arr[i];
        }
      }
      return token;
    };
    return split(arr)
  };
*/
  render() {
    // AUTH0 - ALTERNATIVE TO GRAB ACCESSTOKEN FROM URL
  //  console.log('props.location.hash', this.convert(this.props.location.hash));
    // AUTH 0 END
    return (
      <div>
        <div className='login-form'>
          <Link className='home-link' to='/'>
            Home
          </Link>
        </div>
        <div className='outside-container'>
          {/* AUTH0 */}
          <h2>Auth0 test:</h2>
          {this.state.profile && (
            <div>
              <div>{this.state.profile.name}</div>
              <img src={this.state.profile.picture} alt={this.state.profile.name} />
            </div>
          )}
          {/* AUTH0 END */}
          <div className='tweet-container'>
            <TextField
              id='outlined-multiline-flexible'
              label='Tweet'
              multiline
              rowsMax='4'
              name='texts'
              value={this.state.texts}
              onChange={this.handleChanges}
              margin='normal'
              helperText='280 characters max'
              variant='outlined'
            />
            <div className='tweet-buttons'>
              <Button
                variant='contained'
                color='primary'
                label='Analyze Tweet'
                onClick={this.analyzeTweet}
                style={{
                  backgroundColor: '#349AFA',
                  color: 'white',
                  textDecoration: 'none'
                }}
              >
                {this.props.fetchingData ? (
                  <Loader type='ThreeDots' color='#1f2a38' height='12' width='26' />
                ) : (
                  'Analyze'
                )}
              </Button>
              <Button
                variant='contained'
                color='primary'
                label='Post to Twitter'
                style={{
                  backgroundColor: '#349AFA',
                  color: 'white',
                  textDecoration: 'none'
                }}
              >
                Post Twitter
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  fetchingData: state.fetchingData
});

export default connect(
  mapStateToProps,
  { analyze }
)(Tweet);
