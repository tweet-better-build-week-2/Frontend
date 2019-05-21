import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import "./SignUpForm.css";

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});

class SignUpForm extends Component {
    state = {
        name: '',
        username: '',
        password: '',
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;
        return (
            <div className="signup-container">
                <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                        id="outlined-name"
                        label="Name"
                        className={classes.textField}
                        value={this.state.name}
                        onChange={this.handleChange('name')}
                        margin="normal"
                        variant="outlined"
                    />

                    <TextField
                        id="outlined-uncontrolled"
                        label="Usernanme"
                        defaultValue="Username"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                    />

                    <TextField
                        required
                        id="outlined-required"
                        label="Password"
                        defaultValue="Password"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                    />
                </form>

            </div>
        )
    }
}

export default withStyles(styles)(SignUpForm);