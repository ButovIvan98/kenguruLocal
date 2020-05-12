import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {NavLink, Redirect} from "react-router-dom";
import {updateTextEmail} from "../../../redux/registrationReducer";


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
const SignUp =(props)=> {
    const classNamees = useStyles();
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classNamees.paper}>
                <Avatar className={classNamees.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Регистрация
                </Typography>
                <form className={classNamees.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                error={props.registrationPage.validEmail ? false : true}
                                variant="outlined"
                                required
                                color="primary"
                                fullWidth
                                id="mail"
                                label="Email"
                                name="email"
                                autoComplete="email"
                                value={props.registrationPage.email}
                                onChange={(e)=>(props.Email(e.target.value))}
                                helperText={props.registrationPage.validEmail ? '' : 'Введите Email'}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                error={props.registrationPage.validPassword ? false : true}
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Пароль"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={props.registrationPage.password}
                                onChange={(e)=>(props.Password(e.target.value))}
                                helperText={props.registrationPage.validPassword ? '' : 'Введите пароль'}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox checked={props.registrationPage.notifications} value="allowExtraEmails" color="primary" />}
                                label="Я хочу получать уведомления на email."
                                onChange={()=>(props.updateChecked(props.registrationPage.notifications))}
                            />
                        </Grid>
                    </Grid>
                    {props.registrationPage.addUser
                        ? <Redirect from={'/registration'} to={'/login'}></Redirect>
                        : <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classNamees.submit}
                        onClick={()=>( props.registrationPage.validEmail ? (props.registrationPage.validPassword ? props.addUser(props.registrationPage.email, props.registrationPage.password) : null) : null)}
                        >
                        Регистрация
                        </Button>}
                    <Grid container justify="flex-end">
                        <Grid item>
                            <NavLink to={'/login'} variant="body2">
                                Уже есть аккаунт? Войдите
                            </NavLink>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}
export default SignUp;
