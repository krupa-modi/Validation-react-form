import React, { useEffect, useState } from "react";
import {
  Typography,
  Grid,
  Avatar,
  TextField,
  Container,
  Button,
  FormGroup,
  Checkbox,
  MenuItem,
  InputLabel,
  Box,
  InputAdornment,
  Paper,
  Stack,
  FormControl,
  FormHelperText,
  Alert,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Person3Icon from "@mui/icons-material/Person3";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LockIcon from "@mui/icons-material/Lock";

const Testing = () => {
  // for character
  const [nameerror, setNameError] = useState({});
  const [name, setName] = useState("");
  var alphaExp = /^[a-zA-Z]+$/;

  // for email
  const [email, setEmail] = useState("");
  const [emailerror, setEmailError] = useState({});
  var emailExp =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // for password
  const [password, setPassword] = useState("");
  const [passworderror, setPasswordError] = useState({});
  var passwordExp =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/g;

  // for mobile number
  const [phoneno, setPhoneNo] = useState("");
  const [phonenoerror, setPhoneNoError] = useState({});
  var phonenoExp = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;

  // for numeric
  const [numeric, setNumeric] = useState("");
  const [numericerror, setNumericError] = useState({});
  var numericExp = /^[0-9\b]+$/;

  // for alphanumeric
  const [alphanumeric, setAlphaNumeric] = useState("");
  const [alphanumericerror, setAlphaNumericError] = useState("");
  var alphaExp = /^[a-zA-Z]+$/;
  var numericExp = /^[0-9]+$/;
  var alphanumericExp = /^[0-9a-zA-Z]+$/;

  // for adharcard
  const [adharcard, setAdharcard] = useState("");
  const [adharnumbererror, setAdharNumberError] = useState({});
  var adharcardExp = /^\d{12}$/;

  // for panncard
  const [pancard, setPanCard] = useState("");
  const [panerror, setPanError] = useState({});
  var pancardExp = /^([A-Z]){5}([0-9]){4}([A-Z]){1}?$/;

  // for submit button
  const handlerSubmit = (e) => {
    e.preventDefault();
    setNameError({});
    setEmailError({});
    setPasswordError({});
    setPhoneNoError({});
    setAdharNumberError({});
    setPanError({});
    setNumericError({});
    setAlphaNumericError({});
    const isValid = formValidation();
  };

  // for validation
  const formValidation = () => {
    const nameerror = {};
    const emailerror = {};
    const passworderror = {};
    const phonenoerror = {};
    const adharnumbererror = {};
    const panerror = {};
    const numericerror = {};
    const alphanumericerror = {};
    let isValid = true; //using flag

    if (name == "") {
      nameerror.name = "required field";
      isValid = false;
    } else if (name.length < 6) {
      nameerror.name = "Name must be more than 6 character required";
      isValid = false;
    } else if (!name.match(alphaExp)) {
      nameerror.name = "please enter only character";
      isValid = false;
    }

    if (email == "") {
      emailerror.email = "required field";
      isValid = false;
    } else if (!email.match(emailExp)) {
      emailerror.email = "Invalid email address";
      isValid = false;
    }

    if (password == "") {
      passworderror.password = "required field";
      isValid = false;
    } else if (!password.length >= 8) {
      passworderror.password = "Password must have at least 8 characters";
      isValid = false;
    } else if (!password.match(passwordExp)) {
      passworderror.password =
        "password must be only characters, numeric digits, underscore and first character must be a letter";
      isValid = false;
    }

    if (phoneno == "") {
      phonenoerror.phoneno = "required field";
      isValid = false;
    } else if (phoneno.length < 10) {
      phonenoerror.phoneno = "Please enter 10 digit mobile number";
      isValid = false;
    } else if (phoneno.length > 10) {
      phonenoerror.phoneno = "Mobile number not greater than 10 digit ";
      isValid = false;
    }

    if (adharcard == "") {
      adharnumbererror.adharcard = "required field";
      isValid = false;
    } else if (!adharcard.match(adharcardExp)) {
      adharnumbererror.adharcard = "please enter numeric 12 digit adhar number";
      isValid = false;
    }

    if (pancard == "") {
      panerror.pancard = "required field";
      isValid = false;
    } else if (!pancard.match(pancardExp)) {
      panerror.pancard = "please enter valid pancard number like AAAAA6789A";
      isValid = false;
    }

    if (numeric == "") {
      numericerror.numeric = "required field";
      isValid = false;
    } else if (!numeric.match(numericExp)) {
      numericerror.numeric = "Please enter only Numeric value like 12345";
      isValid = false;
    }

    if (alphanumeric == "") {
      alphanumericerror.alphanumeric = "required field";
      isValid = false;
    } else if (alphanumeric.match(alphaExp)) {
      alphanumericerror.alphaExp = "Please enter also numeric value";
      isValid = false;
    } else if (alphanumeric.match(numericExp)) {
      alphanumericerror.numericExp = "Please enter also alpha value";
      isValid = false;
    } else if (!alphanumeric.match(alphanumericExp)) {
      alphanumericerror.alphanumericExp = "only enter alphanumeric value";
      isValid = false;
    }

    setNameError(nameerror);
    setEmailError(emailerror);
    setPasswordError(passworderror);
    setPhoneNoError(phonenoerror);
    setNumericError(numericerror);
    setAlphaNumericError(alphanumericerror);
    setAdharNumberError(adharnumbererror);
    setPanError(panerror);
    console.log(isValid);
    return isValid;
  };
  const paperContainer = {
    backgroundImage: `url(${"https://www.coreldraw.com/static/cdgs/images/pages/seo/tips/photo/basics/blur-background/blur-background-og.jpg"})`,
    backgroundSize: "cover",
    backgroundPosition: "left",
  };

  return (
    <Paper style={paperContainer}>
      <Box
        sx={{
          border: 1,
          elevation: 1,
          borderColor: "divider",
        }}
      >
        <Container
          maxWidth="sm"
          sx={{
            mx: "auto",
            width: "50%",
            my: 5,
            py: 4,
            boxShadow: 4,
            color: "black",
            fontWeight: "bold",
            backgroundColor: "rgba(255,255,255,0.2)",
            opacity: 0.9,
          }}
        >
          <Grid align="center" sx={{ my: 2 }}>
            <Avatar sx={{ bgcolor: "success.main" }}>
              <AddCircleOutlineIcon />
            </Avatar>
            <Typography
              variant="h3"
              align="center"
              sx={{ fontWeight: "bold", my: 2 }}
            >
              SignUp
            </Typography>
            <Typography variant="subtitle1" align="center">
              Please Fill Up the Form to create New Account
            </Typography>
          </Grid>
          <form onSubmit={handlerSubmit}>
            <FormGroup>
              <TextField
                fullWidth
                label="Name"
                name="name"
                variant="standard"
                type="text"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
                sx={{ mt: 3, mb: 1 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person3Icon />
                    </InputAdornment>
                  ),
                }}
              />
              {Object.keys(nameerror).map((key) => {
                return (
                  <Typography variant="subtitle1" sx={{ color: "red" }}>
                    {nameerror[key]}
                  </Typography>
                );
              })}
              <TextField
                fullWidth
                label="Email"
                variant="standard"
                name="email"
                placeholder="Enter Your Email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                sx={{ mb: 1 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
              />
              {Object.keys(emailerror).map((key) => {
                return (
                  <Typography variant="subtitle1" sx={{ color: "red" }}>
                    {emailerror[key]}
                  </Typography>
                );
              })}
            </FormGroup>
            <FormControl>
              <TextField
                fullWidth
                label="Password"
                variant="standard"
                type="password"
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
                placeholder="Enter Your Password"
                sx={{ mb: 1 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                }}
              />
              {Object.keys(passworderror).map((key) => {
                return (
                  <Typography variant="subtitle1" sx={{ color: "red" }}>
                    {passworderror[key]}
                  </Typography>
                );
              })}
            </FormControl>
            <TextField
              fullWidth
              label="Phone No"
              variant="standard"
              name="phoneno"
              maxlength={10}
              placeholder="Enter Your PhoneNo"
              required
              value={phoneno}
              onChange={(e) => {
                setPhoneNo(e.target.value);
              }}
              type="number"
              sx={{ mb: 1 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneIcon />
                  </InputAdornment>
                ),
              }}
            />
            {Object.keys(phonenoerror).map((key) => {
              return (
                <Typography variant="subtitle1" sx={{ color: "red" }}>
                  {phonenoerror[key]}
                </Typography>
              );
            })}
            <FormGroup>
              <TextField
                fullWidth
                label="Numeric "
                name="numeric"
                variant="standard"
                type="text"
                placeholder="Enter Numeric value"
                value={numeric}
                onChange={(e) => {
                  setNumeric(e.target.value);
                }}
                required
                sx={{ mt: 3, mb: 1 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person3Icon />
                    </InputAdornment>
                  ),
                }}
              />
              {Object.keys(numericerror).map((key) => {
                return (
                  <Typography variant="subtitle1" sx={{ color: "red" }}>
                    {numericerror[key]}
                  </Typography>
                );
              })}
            </FormGroup>
            <FormGroup>
              <TextField
                fullWidth
                label="Alpha-Numeric "
                name="alpha-numeric"
                variant="standard"
                type="text"
                placeholder="Enter Alpha-Numeric value"
                value={alphanumeric}
                onChange={(e) => {
                  setAlphaNumeric(e.target.value);
                }}
                required
                sx={{ mt: 3, mb: 1 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person3Icon />
                    </InputAdornment>
                  ),
                }}
              />
              {Object.keys(alphanumericerror).map((key) => {
                return (
                  <Typography variant="subtitle1" sx={{ color: "red" }}>
                    {alphanumericerror[key]}
                  </Typography>
                );
              })}
            </FormGroup>

            <FormGroup>
              <TextField
                fullWidth
                label="Adhar Number"
                name="adhar number"
                variant="standard"
                type="text"
                placeholder="Enter Your Adhar Number"
                value={adharcard}
                onChange={(e) => {
                  setAdharcard(e.target.value);
                }}
                required
                sx={{ mt: 3, mb: 1 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person3Icon />
                    </InputAdornment>
                  ),
                }}
              />
              {Object.keys(adharnumbererror).map((key) => {
                return (
                  <Typography variant="subtitle1" sx={{ color: "red" }}>
                    {adharnumbererror[key]}
                  </Typography>
                );
              })}
            </FormGroup>
            <FormGroup>
              <TextField
                fullWidth
                label="PanCard Number"
                name="pancard number"
                variant="standard"
                type="text"
                placeholder="Enter Your PanCard Number"
                value={pancard}
                onChange={(e) => {
                  setPanCard(e.target.value);
                }}
                required
                sx={{ mt: 3, mb: 1 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person3Icon />
                    </InputAdornment>
                  ),
                }}
              />
              {Object.keys(panerror).map((key) => {
                return (
                  <Typography variant="subtitle1" sx={{ color: "red" }}>
                    {panerror[key]}
                  </Typography>
                );
              })}
            </FormGroup>
            <Stack
              direction="row"
              spacing={4}
              sx={{ mt: 2 }}
              justifyContent="center"
            >
              <Button
                variant="contained"
                type="submit"
                sx={{
                  width: "30%",
                  height: "52px",
                  fontWeight: "bold",
                  fontSize: 20,
                  bgcolor: "success.main",
                  py: 0,
                }}
              >
                Submit
              </Button>
            </Stack>
          </form>
        </Container>
      </Box>
    </Paper>
  );
};

export default Testing;
