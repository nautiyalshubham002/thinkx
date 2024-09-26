import { Button, CircularProgress, Stack, Typography } from "@mui/material";
import Logo from "./logo.jpg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Main = ({ loading }) => {
  const navigate = useNavigate();

  return (
    <Stack
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100%"}
      sx={{
        position: "absolute",
        transform: "translate(-50%, -50%)",
        top: "50%",
        left: "50%",
        gap: "10px",
      }}
    >
      <img alt="logo" src={Logo} height={"140px"} width={"140px"} />
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: 1000,
          marginTop: "-20px",
        }}
      >
        WordX
      </Typography>
      {loading ? <CircularProgress /> : <Button onClick={() => navigate("/play")}>PLAY</Button>}
    </Stack>
  );
};

export default Main;
