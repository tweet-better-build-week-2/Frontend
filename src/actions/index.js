import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios
      .post('https://twitter-sentiment-rate-api.herokuapp.com/api/sentiment-rate', creds)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
      })
      .catch(err => console.log(err));
  };

export const ANALYZE_START = 'ANALYZE_START';
export const ANALYZE_SUCCESS = 'ANALYZE_SUCCESS';
export const ANALYZE_FAILURE = 'ANALYZE_FAILURE';

export const analyze = tweet  => dispatch => {
    dispatch({ type: ANALYZE_START });
    return axios
    .post('https://sensemodel.herokuapp.com/api', tweet)
    .then(res => {
      console.log(res)
      console.log(res.data)
        dispatch({ type: ANALYZE_SUCCESS, payload: res.data});
    })
    .catch(err => {
        dispatch({ type: ANALYZE_FAILURE, payload: err });
    });
};

export const RESET_SCORE = 'RESET_SCORE'

export const resetWindow = () => dispatch => {
  dispatch({ type: RESET_SCORE});
}