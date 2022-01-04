import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { NavLink, useNavigate } from "react-router-dom";
import Navigation from "../Shared/Navigation/Navigation";
import Footer from "../Shared/Footer/Footer";
import useAuth from "../../hooks/useAuth/useAuth";
import { Alert } from "@mui/material";

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
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };

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
                label="Username"
                placeholder="Enter username"
                name="name"
                onBlur={handleOnBlur}
                fullWidth
                required
              />
              <TextField
                label="Email"
                placeholder="Enter email"
                name="email"
                type="email"
                onBlur={handleOnBlur}
                fullWidth
                required
              />
              <TextField
                label="Password"
                placeholder="Enter Password"
                type="password"
                name="password"
                onBlur={handleOnBlur}
                fullWidth
                required
              />
              <TextField
                label="Confirm Password"
                placeholder="Enter password"
                type="password"
                name="password2"
                onBlur={handleOnBlur}
                fullWidth
                required
              />
              <Button
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
                Are you already registered?
                <NavLink style={{ textDecoration: "none" }} to="/login">
                  Sign In
                </NavLink>
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
