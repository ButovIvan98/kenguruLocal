import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {NavLink, Redirect} from "react-router-dom";
import {reloadPasswordServerData, updateTextEmail} from "../../../redux/registrationReducer";

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
const ReloadPassword = (props) => {
    const classNamees = useStyles();
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classNamees.paper}>
                <Typography component="h1" variant="h5">
                    Восстановление пароля
                </Typography>
                <form className={classNamees.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                //style={props.registrationPage.validEmail ? null : {borderBottom:'2px solid #800000',borderRadius:'4px'}}
                                variant="outlined"
                                required
                                fullWidth
                                id="mail"
                                label="Email"
                                name="email"
                                autoComplete="email"
                                value={props.reloadPassword.reloadPasswordEmail}
                                onChange={(e) => (props.updateEmailReloadPassword(e.target.value))}
                            />
                        </Grid>
                    </Grid>
                    {
                        props.reloadPassword.statusSendingRecovery
                            ? <Redirect from={'/reloadPassword'} to={'/notificationReloadPassword'}/>
                            : <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classNamees.submit}
                                onClick={() => (reloadPasswordServerData(props.reloadPassword.statusSendingRecovery))}
                            >
                                Восстановление
                            </Button>
                    }
                </form>
            </div>
        </Container>
    );
};
export default ReloadPassword;
