import React, { useState, useRef } from "react";
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
import Select from "@mui/material/Select";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Person3Icon from "@mui/icons-material/Person3";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LockIcon from "@mui/icons-material/Lock";
import HomeIcon from "@mui/icons-material/Home";
import { Controller, useForm } from "react-hook-form";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "yup-phone";

const Signup = () => {
  // for select city
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const initialValues = {
    name: "",
    email: "",
    phoneno: "",
    address: "",
    password: "",
    confirmpassword: "",
    checkbox: "",
    gender: "",
    termsandcondition: false,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(5, "Name Should be minimum 5 character required")
      .required("Name is Required"),
    email: Yup.string()
      .email("Invalid Email Address")
      .required("Email Is Required"),
    phoneno: Yup.string()
      // .typeError("Enter Only Number")
      .max(10, "Number required 10 digit")
      .required("Phoneno is Required"),
    address: Yup.string().required("Address is Required"),
    gender: Yup.string()
      .oneOf(["female", "male", "other"], "Please select gender")
      .required("gender is required"),
    password: Yup.string()
      .min(8, "Password must have at least 8 characters")
      .required("You must specify a password"),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref("password")], "password Not Matched")
      .required("Enter Your Confirm Password"),
    termsandcondition: Yup.string().oneOf(
      ["true"],
      "Please accept Terms and Condition"
    ),
  });

  const {
    reset,
    formState: { errors },
  } = useForm();

  const handlerSubmit = (data, props) => {
    console.log(data);
    // console.log(props);
    setTimeout(() => {
      props.resetForm();
      // props.setSubmitting(false);
      alert("Your Form is Submitted Successfully");
    }, 2000);
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
        <Formik
          initialValues={initialValues}
          onSubmit={handlerSubmit}
          validationSchema={validationSchema}
        >
          {(props) => (
            <Form>
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
                <FormGroup>
                  <Field
                    as={TextField}
                    fullWidth
                    label="Name"
                    name="name"
                    variant="standard"
                    placeholder="Enter Your Name"
                    required
                    helperText={
                      <Typography variant="subtitle1" sx={{ color: "red" }}>
                        <ErrorMessage name="name" />
                      </Typography>
                    }
                    sx={{ mt: 3, mb: 1 }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Person3Icon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Field
                    as={TextField}
                    fullWidth
                    label="Email"
                    variant="standard"
                    name="email"
                    placeholder="Enter Your Email"
                    required
                    helperText={
                      <Typography variant="subtitle1" sx={{ color: "red" }}>
                        <ErrorMessage name="email" />
                      </Typography>
                    }
                    sx={{ mb: 1 }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Field
                    as={TextField}
                    fullWidth
                    label="Phone No"
                    variant="standard"
                    name="phoneno"
                    maxlength={10}
                    placeholder="Enter Your PhoneNo"
                    required
                    helperText={
                      <Typography variant="subtitle1" sx={{ color: "red" }}>
                        <ErrorMessage name="phoneno" />
                      </Typography>
                    }
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
                  <Field
                    as={TextField}
                    fullWidth
                    label="Address"
                    variant="standard"
                    multiline
                    placeholder="Enter Your Address"
                    required
                    helperText={
                      <Typography variant="subtitle1" sx={{ color: "red" }}>
                        <ErrorMessage name="address" />
                      </Typography>
                    }
                    name="address"
                    sx={{ mb: 1 }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <HomeIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <FormControl>
                    <Field
                      as={TextField}
                      fullWidth
                      label="Password"
                      variant="standard"
                      type="password"
                      name="password"
                      required
                      placeholder="Enter Your Password"
                      helperText={
                        <Typography variant="subtitle1" sx={{ color: "red" }}>
                          <ErrorMessage name="password" />
                        </Typography>
                      }
                      sx={{ mb: 1 }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LockIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </FormControl>
                  <FormControl>
                    <Field
                      as={TextField}
                      fullWidth
                      label="Confirm Password"
                      variant="standard"
                      type="password"
                      required
                      placeholder="Enter Your Confirm Password"
                      helperText={
                        <Typography variant="subtitle1" sx={{ color: "red" }}>
                          <ErrorMessage name="confirmpassword" />
                        </Typography>
                      }
                      name="confirmpassword"
                      sx={{ mb: 1 }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LockIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </FormControl>
                  <FormLabel sx={{ mt: 2, mb: 1 }}>Hobby</FormLabel>
                  <Field
                    as={FormGroup}
                    name="checkbox"
                    row
                    sx={{ color: "black" }}
                  >
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Reading"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Travelling"
                    />
                    <FormControlLabel control={<Checkbox />} label="Walking" />
                    <FormControlLabel control={<Checkbox />} label="Learning" />
                  </Field>

                  <FormControl error={Boolean(errors.gender)}>
                    <FormLabel component="legend" sx={{ mt: 2 }}>
                      Choose Your Gender
                    </FormLabel>
                    <Field as={RadioGroup} name="gender" row sx={{ mt: 1 }}>
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="other"
                        control={<Radio />}
                        label="Other"
                      />
                    </Field>
                  </FormControl>
                  <FormHelperText>
                    {
                      <Typography variant="subtitle1" sx={{ color: "red" }}>
                        <ErrorMessage name="gender" />
                      </Typography>
                    }
                  </FormHelperText>

                  {/* <TextField id="outlined-search" label="Search field" type="search" /> */}
                  {/* <FormControl sx={{ mt: 3, mb: 1 }} error={Boolean(errors.city)}>
                <InputLabel id="demo-simple-select-label">
                  ---Select Your City---
                </InputLabel>
                <Controller
                  render={() => (
                    <Select>
                      <MenuItem value={""}>Choose Your City</MenuItem>
                      <MenuItem value={"Rajkot"}>Rajkot</MenuItem>
                      <MenuItem value={"Ahmedabad"}>Ahmedabad</MenuItem>
                      <MenuItem value={"Pune"}>Pune</MenuItem>
                      <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
                    </Select>
                  )}
                  control={control}
                  name="city"
                  defaultValue=""
                  rules={{
                    required: "Please Choose Your City",
                  }}
                  value={value}
                  onChange={handleChange}
                />
                <FormHelperText>{errors.city?.message}</FormHelperText>
              </FormControl> */}

                  <FormControl erros={Boolean(errors.tc)}>
                    <FormControlLabel
                      sx={{ mt: 1 }}
                      control={<Field as={Checkbox} name="termsandcondition" />}
                      label="I accept Terms And Conditions"
                    />
                  </FormControl>
                  <FormHelperText>
                    {
                      <Typography variant="subtitle1" sx={{ color: "red" }}>
                        <ErrorMessage name="termsandcondition" />
                      </Typography>
                    }
                  </FormHelperText>

                  <Stack
                    direction="row"
                    spacing={4}
                    sx={{ mt: 2 }}
                    justifyContent="center"
                  >
                    <Button
                      variant="contained"
                      type="submit"
                      // disabled={props.isSubmitting}
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
                      {/* {props.isSubmitting ? "Loading..." : "Sign Up"} */}
                    </Button>
                  </Stack>
                </FormGroup>
              </Container>
            </Form>
          )}
        </Formik>
      </Box>
    </Paper>
  );
};

export default Signup;
