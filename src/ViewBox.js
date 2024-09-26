import { Stack, Typography } from "@mui/material";

const ViewBox = ({ letter = "", validWord = false, invalidWord = false }) => {
  return (
    <Stack
      height={"50px"}
      width={"50px"}
      border={"1px solid black"}
      borderRadius={"5px"}
      style={{
        background: validWord ? "green" : invalidWord ? "#938d8d" : "",
        cursor: "pointer",
      }}
      onClick={() => {
        const event = new KeyboardEvent("keydown", {
          key: letter,
          code: `Key${letter.toUpperCase()}`,
          charCode: letter.charCodeAt(0),
          keyCode: letter.charCodeAt(0),
          bubbles: true,
          cancelable: true,
        });

        document.dispatchEvent(event);
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
        {letter}
      </Typography>
    </Stack>
  );
};

export default ViewBox;
