import React, { useState } from "react";
import { Paper, Tabs, Tab, Typography, Box } from "@mui/material";
import Signup from "../components/Signup-Form";
import Signin from "../components/SignIn-Form";
import Testing from "../components/Testing-Form";

const SignInUpContainer = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  const paperContainer = {
    backgroundImage: `url(${"https://www.coreldraw.com/static/cdgs/images/pages/seo/tips/photo/basics/blur-background/blur-background-og.jpg"})`,
    backgroundSize: "cover",
    backgroundPosition: "left",
  };
  return (
    <Paper maxWidth="sm" style={paperContainer}>
      <Box
        sx={{ border: 1, elevation: 1, borderColor: "divider" }}
        color="black"
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab label="Sign In" />
          <Tab label="Sign Up" />
          <Tab label="Testing" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Signin handleChange={handleChange} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Signup />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Testing />
        </TabPanel>
      </Box>
    </Paper>
  );
};

export default SignInUpContainer;
