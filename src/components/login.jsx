
import "../assets/login.css";
import React, { useState } from "react";
import {
    Box,
    Button,
    TextField,
    Typography,
    Container,
    Paper,
    Alert
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";

const Login = () => {
const navigate=useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: ""
});

const [error, setError] = useState("");
const [validationError, setValidationError] = useState({ email: "", password: "" });
const handleChange =(e)=>{
    const { name, value } = e.target;
    setValidationError((prev) => ({
        ...prev,
        [name]: "",
      }));
    setFormData({
        ...formData,
        [name]: value,
        
    });
};

const handleValidation = () => {
    let isValid = true;
    let errors = { email: "", password: "" };

    if (!formData.email) {
      errors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Enter a valid email address.";
      isValid = false;
    }

    if (!formData.password) {
      errors.password = "Password is required.";
      isValid = false;
    }

    setValidationError(errors);
    return isValid;
  };

const handleSubmit = async(e) => {
    e.preventDefault();
    if (!handleValidation()) {
        return;
      }
  
      try {
        await signInWithEmailAndPassword(auth, formData.email, formData.password);
        alert("Login Successful!");
        navigate('/main')
      } catch (err) {
        if (err.code === "auth/user-not-found") {
          setError("No user found with this email. Please check again.");
        } else if (err.code === "auth/wrong-password") {
          setError("Incorrect password. Please try again.");
        } else {
          setError("An error occurred. Please try again later.");
        }
      }
};
  return (
    <>    
       
       <Container
            component="main"
            maxWidth="xs"
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
            }}
        >
            <Paper elevation={3} sx={{ padding: 4, width: "100%" }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Login
                </Typography>
                {error && (
            <Alert severity="error" sx={{ marginBottom: 2, width: "100%" }}>
              {error}
          </Alert>
        )}
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        mt: 3,
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                    }}
                >
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={!!validationError.email}
              helperText={validationError.email}
                    />
                    <TextField
                        label="Password"
                        variant="outlined"
                        fullWidth
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        error={!!validationError.password}
              helperText={validationError.password}
                    />
                    <Button
                    to='/main'
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={handleSubmit}
                    >
                        Login
                    </Button>
                    <Link to="/signup" style={{  color: "blue" }}>
                Create a new account
            </Link>
                </Box>
            </Paper>
            
        </Container>
    </>
  );
};
export default Login;
