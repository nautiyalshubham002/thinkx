import { Stack, Typography } from "@mui/material";
import "./ShakeComponent.css";

const Box = ({ value, correctPosition, correctWord, className, tileCompleted }) => {
  return (
    <Stack
      className={className}
      height={"60px"}
      width={"60px"}
      border={"1px solid black"}
      borderRadius={"5px"}
      style={{
        background: correctPosition
          ? "green"
          : correctWord
          ? "orange"
          : tileCompleted
          ? "#938d8d"
          : "",
      }}
    >
      <Typography
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "30px",
        }}
      >
        {value}
      </Typography>
    </Stack>
  );
};

export default Box;
