import {
  Avatar, Button, Grid,
  Paper, TextField, Typography
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Alert } from "@mui/material";
import React, { useState } from "react";
// import GoogleButton from "react-google-button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, signInWithGoogle, authError } = useAuth();

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
    loginUser(loginData.email, loginData.password, location, navigate);
    e.preventDefault();
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, navigate);
  };
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };
  return (
    <div>
      {/* <Navigation></Navigation> */}
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
              label="Email"
              placeholder="Enter Email"
              name="email"
              onBlur={handleOnBlur}
              fullWidth
              required
            />
            <TextField
              label="Password"
              placeholder="Enter password"
              type="password"
              fullWidth
              required
              onBlur={handleOnBlur}
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              style={btnstyle}
              fullWidth
            >
              Sign in
            </Button>
            <Typography variant="h6">Or</Typography>
            <Button variant="contained" onClick={handleGoogleSignIn}>Google</Button>
            {/* <GoogleButton  /> */}
            <Typography>
              {" "}
              Do you have an account?
              <Link style={{ textDecoration: "none" }} to="/register">
                Sign Up
              </Link>
            </Typography>
            {/* {isLoading && <CircularProgress />} */}
            {user?.email && (
              <Alert severity="success">Login successfully!</Alert>
            )}
            {authError && <Alert severity="error">{authError}</Alert>}
          </form>
        </Paper>
      </Grid>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Login;
