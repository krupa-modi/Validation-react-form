import React from "react";
import {
  Typography,
  Grid,
  Avatar,
  TextField,
  Container,
  Button,
  FormGroup,
  Checkbox,
  Box,
  InputAdornment,
  Paper,
  Stack,
  FormControl,
  FormControlLabel,
  Link,
} from "@mui/material";
import Person3Icon from "@mui/icons-material/Person3";
import LockIcon from "@mui/icons-material/Lock";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Signin = ({ handleChange }) => {
  const initialValues = {
    username: "",
    password: "",
    rememberme: false,
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .email("Invalid Email Address")
      .required("Email is Required"),

    password: Yup.string()
      .min(8, "Password must have at least 8 characters")
      .required("Password is required"),
  });

  const handlerOnSubmit = (data, props) => {
    console.log(data);
    props.resetForm();
    alert("Login Successfully");
  };

  const paperContainer = {
    backgroundImage: `url(${"https://www.coreldraw.com/static/cdgs/images/pages/seo/tips/photo/basics/blur-background/blur-background-og.jpg"})`,
    backgroundSize: "cover",
    backgroundPosition: "left",
  };

  return (
    <Paper style={paperContainer}>
      <Box sx={{ elevation: 1, borderColor: "divider" }}>
        <Formik
          initialValues={initialValues}
          onSubmit={handlerOnSubmit}
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
                  backgroundColor: "rgba(255,255,255,0.2)",
                  opacity: 0.9,
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                <Grid align="center" sx={{ my: 2 }}>
                  <Avatar sx={{ bgcolor: "success.main" }}>
                    <LockPersonIcon />
                  </Avatar>
                  <Typography
                    variant="h3"
                    align="center"
                    sx={{ fontWeight: "bold", my: 2 }}
                  >
                    Sign In
                  </Typography>
                </Grid>
                <FormGroup>
                  <Field
                    as={TextField}
                    fullWidth
                    required
                    label="Username"
                    name="username"
                    variant="outlined"
                    placeholder="Username"
                    helperText={
                      <Typography variant="subtitle1" sx={{ color: "red" }}>
                        <ErrorMessage name="username" />
                      </Typography>
                    }
                    sx={{ mt: 3, mb: 2, color: "dark" }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Person3Icon />
                        </InputAdornment>
                      ),
                    }}
                  />

                  <FormControl>
                    <Field
                      as={TextField}
                      fullWidth
                      required
                      label="Password"
                      variant="outlined"
                      type="password"
                      name="password"
                      placeholder="Password"
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
                  <Field
                    as={FormControlLabel}
                    name="rememberme"
                    control={<Checkbox color="primary" />}
                    label="Remember Me"
                  />
                  <Typography>
                    <Link
                      href="#"
                      color="inherit"
                      sx={{ fontWeight: "bold", color: "blue" }}
                    >
                      Forgot Password
                    </Link>
                  </Typography>

                  <Typography sx={{ mt: 1 }}>
                    Do you have an account?
                    <Link
                      href="#"
                      onClick={() => handleChange("event", 1)}
                      color="inherit"
                      sx={{ color: "blue", px: 1 }}
                    >
                      Sign Up
                    </Link>
                  </Typography>

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
                        py: 1.5,
                        fontWeight: "bold",
                        fontSize: 16,
                        bgcolor: "success.main",
                      }}
                    >
                      Submit
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

export default Signin;
