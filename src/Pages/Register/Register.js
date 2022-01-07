import {
  Avatar, Button, CircularProgress, Grid,
  Paper, TextField, Typography
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Alert } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth/useAuth";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const navigate = useNavigate();
  const { user, registerUser, isLoading, authError } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your password did not match");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, navigate);
    e.preventDefault();
  };

  const paperStyle = {
    padding: 30,
    width: 360,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#ff3e30" };
  const btnstyle = { margin: "10px 0", padding:'12px 0', backgroundColor:"#ff3e30",color:'#ffffff' };

  return (
    <>
      <Navigation></Navigation>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Sign Up</h2>
          </Grid>
          {!isLoading && (
            <form onSubmit={handleLoginSubmit}>
              <TextField
                style={{marginBottom:'10px'}}
                label="Username"
                placeholder="Enter username"
                name="name"
                onBlur={handleOnBlur}
                fullWidth
                required
              />
              <TextField
                style={{marginBottom:'10px'}}
                label="Email"
                placeholder="Enter email"
                name="email"
                type="email"
                onBlur={handleOnBlur}
                fullWidth
                required
              />
              <TextField
                style={{marginBottom:'10px'}}
                label="Password"
                placeholder="Enter Password"
                type="password"
                name="password"
                onBlur={handleOnBlur}
                fullWidth
                required
              />
              <TextField
                style={{marginBottom:'10px'}}
                label="Confirm Password"
                placeholder="Enter password"
                type="password"
                name="password2"
                onBlur={handleOnBlur}
                fullWidth
                required
              />
              <Button
                style={{marginBottom:'10px'}}
                type="submit"
                color="primary"
                variant="contained"
                style={btnstyle}
                fullWidth
              >
                Sign Up
              </Button>
              <Typography>
                {" "}
                Are you already registered? ..
                <Link style={{ textDecoration: "none", color:'#ff3e30', fontWeight:'600' }} to="/login">
                  Sign In Now
                </Link>
              </Typography>
            </form>
          )}
          {isLoading && <CircularProgress />}
          {user?.email && (
            <Alert severity="success">User Created successfully!</Alert>
          )}
          {authError && <Alert severity="error">{authError}</Alert>}
        </Paper>
      </Grid>
      <Footer></Footer>
    </>
  );
};

export default Register;
