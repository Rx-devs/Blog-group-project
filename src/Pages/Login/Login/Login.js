import {
  Avatar, Button, Grid,
  Paper, TextField, Typography
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Alert } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import React, { useState } from "react";
import GoogleButton from "react-google-button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth/useAuth";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, logInUser, signInWithGoogle, authError, isLoading } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    logInUser(loginData.email, loginData.password, location, navigate);
    e.preventDefault();
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, navigate);
  };
  const paperStyle = {
    padding: 30,
    width: 360,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#ff3e30" };
  const btnstyle = { margin: "10px 0", padding: '12px 0', backgroundColor: "#ff3e30", color: '#ffffff' };
  return (
    <div>
      <Navigation></Navigation>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Sign In</h2>
          </Grid>
          <form onSubmit={handleLoginSubmit}>
            <TextField
              style={{ marginBottom: '10px' }}
              label="Email"
              name="email"
              onBlur={handleOnBlur}
              fullWidth
              required
            />
            <TextField
              style={{ marginBottom: '10px' }}
              label="Password"
              type="password"
              fullWidth
              required
              onBlur={handleOnBlur}
            />
            <Button
              type="submit"
              variant="contained"
              style={btnstyle}
              fullWidth
            >
              Sign in
            </Button>
            
          </form>
          <GoogleButton onClick={handleGoogleSignIn} style={{ width: '100%', marginBottom: '16px' }} />
            <Typography>
              {" "}
              Do you have an account? ..
              <Link style={{ textDecoration: "none", color: '#ff3e30', fontWeight: '600' }} to="/register">
                Sign Up Now
              </Link>
            </Typography>
            {isLoading && <CircularProgress />}
            {user?.email && (
              <Alert severity="success">Login successfully!</Alert>
            )}
            {authError && <Alert severity="error">{authError}</Alert>}
        </Paper>
      </Grid>
      <Footer></Footer>
    </div>
  );
};

export default Login;
