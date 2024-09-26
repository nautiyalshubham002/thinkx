import { Stack, Typography } from "@mui/material";

const Header = () => {
  return (
    <Stack>
      <Stack
        sx={{
          height: "40px",
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Stack
          sx={{
            background: "#ff6e10",
            color: "#fff",
            marginTop: "30px",
            fontSize: "28px",
            padding: "20px",
            borderRadius: "50%",
          }}
        >
          WORDX
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Header;
